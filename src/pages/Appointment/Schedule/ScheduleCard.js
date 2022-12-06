import React from "react";

const ScheduleCard = ({ option, setTreatment }) => {
  const { name, slots, price } = option;
  return (
    <div className="demo card card-compact w-96 bg-base-100 shadow-xl mx-auto my-12 p-6">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Time: {slots.length > 0 ? slots[0] : "Not Available"}</p>
        <p className="py-2">
          Left: {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <small className="text-red-400 text-2xl">$ {price}</small>
        <div className="card-actions">
          <label
            htmlFor="booking-modal"
            className="btn btn-primary w-full"
            onClick={() => setTreatment(option)}
            disabled={slots.length === 0}
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default ScheduleCard;
