import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import './AppointmentBanner.css';

const AppointmentBanner = ({selected, setSelected}) => {
  return (

    <section className="hero my-6 py-8">
      <div className="hero-content flex-col lg:flex-row-reverse px-4 max-w-[1440px] mx-auto">
        <div className="banner-photo w-2/4">
        <img
          src="https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="bannerImg"
          className="rounded-lg shadow-2xl"
        />
        </div>

        <div className="mx-6 w-2/4">
            <DayPicker
            mode="single"
            selected={selected}
            onSelect={setSelected}
            />
          </div>
      </div>
    </section>
  );
};

export default AppointmentBanner;
