import React, { useContext } from "react";
import { format } from "date-fns";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const BookingModal = ({ treatment, setTreatment, selected, refetch }) => {
  const { name, slots, price } = treatment;
  const { user } = useContext(AuthContext);

  const date = format(selected, "PP");

  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const date = form.date.value;
    const slotTime = form.slot.value;
    const patientName = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;

    const booking = {
      appointmentDate: date,
      treatment: name,
      name: patientName,
      slotTime,
      email,
      phone,
      price,
    };
    console.log(booking);

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Booked Successfully");
          refetch();
        } else {
          toast.error(data.message);
        }
      });
  };
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold pb-5">{name}</h3>
          <form onSubmit={handleBooking}>
            <input
              name="date"
              type="text"
              value={date}
              className="input input-bordered w-full"
              readOnly
            />

            <select name="slot" className="select select-bordered w-full mt-3">
              {slots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>

            <input
              name="name"
              type="text"
              defaultValue={user?.displayName}
              placeholder="Enter your name"
              className="input input-bordered w-full my-3"
            />
            <input
              name="email"
              type="text"
              defaultValue={user?.email}
              placeholder="Enter your email address"
              className="input input-bordered w-full"
            />
            <input
              name="phone"
              type="text"
              placeholder="Enter your phone number"
              className="input input-bordered w-full my-3"
            />
            <input
              type="submit"
              className="input input-bordered w-full bg-[#FC5400] text-[#fff]"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
