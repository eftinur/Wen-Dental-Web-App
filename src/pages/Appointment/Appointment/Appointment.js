import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Shecdule from '../Schedule/Shecdule';

const Appointment = () => {
    const [selected, setSelected] = useState(new Date())

    return (
        <div>
            <AppointmentBanner
            selected={selected}
            setSelected={setSelected}
            ></AppointmentBanner>
            <Shecdule
            selected={selected}
            ></Shecdule>
        </div>
    );
};

export default Appointment;