import React from "react";
import PrimaryButton from "../../../component/PrimaryButton/PrimaryButton";

const HomeAppointment = () => {
  return (
    <section className="bg-[#2A2A2A] text-center py-14 text-[#fff]">
     <>
     <h3 className="text-3xl pb-6">Book your check-up today</h3>
     <PrimaryButton><p className='text-lg'>Learn more</p></PrimaryButton>
     <p className="pt-6 pb-3">When booking online select the 'SMILE' offer</p>
     <p>Box Hill | Hughesdale | Moonee Ponds | Rowville | Spring Street</p>
     </>
    </section>
  );
};

export default HomeAppointment;
