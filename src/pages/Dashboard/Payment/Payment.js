import { loadStripe } from "@stripe/stripe-js";
import { useLoaderData, useNavigation } from "react-router-dom";
import { Elements, CheckoutForm } from "@stripe/react-stripe-js";
import CheckOutStripe from "./CheckOutStripe";

const Payment = () => {
  const booking = useLoaderData();
  const navigation = useNavigation();
  console.log(booking);
 

  // stripe
  const stripePromise = loadStripe(
    "pk_test_51M6i8LCplwm85aEZX2ha0mrqM2b6AZSuQPiMjANmN4iLc1eBXBCw6HBmYJXhmHKI6jaG4vU0EHcXPTU6hCjpR7Z300r4UzuJlA"
  );
  console.log(stripePromise);

  // if(navigation.state === 'loading') {
  //   return <div>Loading...</div>
  // }
  return (
    <div>
      Payment page
      <h5 className="text-3xl">{booking.name}</h5>
      <p>
        You have to pay ${booking.price} before {booking.appointmentDate}{" "}
        {booking.slotTime}
      </p>
      <div className="w-96 my-12">
        <Elements stripe={stripePromise}>
          <CheckOutStripe booking={booking}></CheckOutStripe>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
