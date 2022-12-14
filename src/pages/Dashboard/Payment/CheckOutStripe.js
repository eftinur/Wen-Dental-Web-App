import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckOutStripe = ({ booking }) => {
  const { _id, name, email, price } = booking;
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [paymentProcessing, setPaymentProcessing] = useState("");
  const [transactionId, setTransactionId] = useState("");

  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // condition to run stripe
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log(error);
      setCardError(error.message);
      console.log(cardError);
    } else {
      setCardError("");
      console.log(paymentMethod);
    }

    setSuccess("");
    setPaymentProcessing(true);
    const { paymentIntent, paymentIntentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email: email,
          },
        },
      });
    if (paymentIntentError) {
      setCardError(paymentIntentError.message);
      return;
    }
    if (paymentIntent.status === "succeeded") {
      // store payment info in mongoDB

      const payment = {
        price,
        transactionId: paymentIntent.id,
        email,
        bookingId: _id,
      };

      fetch("http://localhost:5000/payments", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            setSuccess("Congratulations your payment is successfully done!");
            setTransactionId(paymentIntent.id);
          }
        });
    }
    console.log(paymentIntent);
    setPaymentProcessing(false);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-primary btn-sm mt-6"
          type="submit"
          disabled={!stripe || !clientSecret || paymentProcessing}
        >
          Pay
        </button>
      </form>
      <span className="text-red-500">{cardError}</span>
      {success && (
        <div className="w-full">
          <p className="text-green-400">{success}</p>
          <p>
            'Your transaction Id'{" "}
            <span className="text-bold">{transactionId}</span>
          </p>
        </div>
      )}
    </>
  );
};

export default CheckOutStripe;
