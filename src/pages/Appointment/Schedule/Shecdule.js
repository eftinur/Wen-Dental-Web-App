import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useState } from "react";
import BookingModal from "../BookingModal/BookingModal";
import ScheduleCard from "./ScheduleCard";
import './Shecdule.css';

const Shecdule = ({ selected }) => {
  const [treatment, setTreatment] = useState(null);


  const date = format(selected, 'PPpp');

  const {data: scheduleOptions = [], isLoading, refetch} = useQuery({
    queryKey: ['scheduleOptions', date],
    queryFn: () => 
      fetch(`http://localhost:5001/appointmentOptions?date=${date}`)
      .then((res) => res.json())
    
  })

  if(isLoading) {
    return <div className="text-center">Loading ...</div>
  }
  return (
    <section className="bg-primary max-w-[1440px] mx-auto">
      <p className="selected-date text-center my-16">You have choosen: {format(selected, "PPpp")}</p>

      <div className='bg-primary rounded-2xl my-12 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
        {scheduleOptions.map((option) => (
          <ScheduleCard
            key={option._id}
            option={option}
            setTreatment={setTreatment}
          ></ScheduleCard>
        ))}
      </div>
      {treatment && (
        <BookingModal treatment={treatment} selected={selected} setTreatment={setTreatment} refetch={refetch}></BookingModal>
      )}
    </section>
  );
};

export default Shecdule;
