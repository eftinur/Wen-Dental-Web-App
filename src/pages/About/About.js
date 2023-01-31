import React from "react";
import { Link } from "react-router-dom";
import aboutImg from "../../assets/images/Open Peeps - Standing.png";
import PrimaryButton from "../../component/PrimaryButton/PrimaryButton";

const About = () => {
  return (
    <div className="h-full">
      <div className="w-3/4 mx-auto my-16">
        <>
          <h2 className="text-2xl">Out Story</h2>
          <p className="pt-4">
            Established in 1840, we were Australia's first member-owned
            wellbeing company, offering our members and customers health, wealth
            and care services.
          </p>
          <p className="py-3">
            We trace our origins back to a pub in Melbourne, where a group of
            eight people formed a friendly society to look after the health and
            wellbeing of its members. From our early days, we’ve been here to
            help people thrive and have been strong advocates in the community
            for positive change and the wellbeing of Canadians. After more than
            180 years, we remain true to our roots.
          </p>
          <p className="py-3">
            We’re for real wellbeing. For us, real wellbeing means so much more
            than physical health. It’s about your standard of living, your
            personal relationships and being connected to your community. It’s
            about what you want to achieve in life, while having the security to
            get out and do what makes you happy.
          </p>
          <p>
            We’ve been measuring the real wellbeing of Canadians with Deakin
            University since 2000, through the Canadian Unity Wellbeing Index.
            The Index is a tool that tracks how satisfied people across
            Australia are with their lives as a whole, using seven key areas of
            wellbeing. It has grown to become one of the most credible and
            enduring studies of wellbeing in Australia.
          </p>
        </>
      </div>
      <div className="bg-[#D0CCBF] py-8">
        <div className="w-3/4 mx-auto flex items-center flex-col md:flex-row">
          <div className="flex-1 pb-6 text-center">
            <h2 className="text-2xl">What is Real Wellbeing?</h2>
            <p className="py-4">
              There’s a lot more to Real Wellbeing than just physical health,
              and we’ve got all kinds of information to help you improve yours.
              Find podcasts, articles and videos on our Real Wellbeing content
              hub.
            </p>
            <PrimaryButton>
              <Link to="/login">Sign in</Link>
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
