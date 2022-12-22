import React from "react";
import SecondaryButton from "../../../component/SecondaryButton/SecondaryButton";

const ScheduleCard = ({ option, setTreatment }) => {
  const { name, slots, price } = option;
  return (
    <div className="bg-[#fff] text-[#2a2a2a]">
      <div className="px-6 py-12">
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="py-3">Time: {slots.length > 0 ? slots[0] : "Not Available"}</p>
        <p>
          Left: {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <p className="text-2xl py-4">$ {price}</p>
        <SecondaryButton>
          <label
            htmlFor="booking-modal"
            onClick={() => setTreatment(option)}
            disabled={slots.length === 0}
          >
            Book Appointment
          </label>
        </SecondaryButton>
      </div>
    </div>
  );
};

export default ScheduleCard;
