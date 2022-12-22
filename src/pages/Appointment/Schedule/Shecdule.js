import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useState } from "react";
import BookingModal from "../BookingModal/BookingModal";
import ScheduleCard from "./ScheduleCard";
import "./Shecdule.css";

const Shecdule = ({ selected }) => {
  const [treatment, setTreatment] = useState(null);

  const date = format(selected, "PPpp");

  const {
    data: scheduleOptions = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["scheduleOptions", date],
    queryFn: () =>
      fetch(`http://localhost:5000/appointmentOptions?date=${date}`).then(
        (res) => res.json()
      ),
  });

  if (isLoading) {
    return <div className="flex justify-center">
      <span class="loader"></span>
    </div>;
  }
  return (
    <section className="bg-[#D0CCBF] pb-16">
      <div className="w-3/4 mx-auto">
        <p className="selected-date text-3xl text-center pt-16">
          You have choosen: {format(selected, "PPpp")}
        </p>

        <div className="my-12 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
          {scheduleOptions.map((option) => (
            <ScheduleCard
              key={option._id}
              option={option}
              setTreatment={setTreatment}
            ></ScheduleCard>
          ))}
        </div>
        {treatment && (
          <BookingModal
            treatment={treatment}
            selected={selected}
            setTreatment={setTreatment}
            refetch={refetch}
          ></BookingModal>
        )}
      </div>
    </section>
  );
};

export default Shecdule;
