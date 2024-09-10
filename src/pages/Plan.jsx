import PlanCard from "../components/PlanCard";
import Title from "../components/Title";
import c1 from "../assets/images/c1.png";
import c4 from "../assets/images/c4.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Plan = () => {
  return (
    <>
      <Navbar />
      <div className="plan-list">
        <div className="">
          <Title
            main="Explore Our Pricing Plans"
            sub="Use this area to describe one of your memberships."
          />
          <div className="relative z-10 flex flex-col lg:flex-row lg:px-40 lg:-mt-16 gap-8 lg:gap-0 pb-8">
            <PlanCard
              plan="Free"
              price="0"
              month="3"
              display="none"
              bg="#ffbf23"
              color="black"
            />
            <PlanCard
              plan="Standard"
              price="30"
              month="6"
              bg="#ffbf23"
              display="none"
              color="#000"
            />
            <PlanCard plan="Premium" price="50" month="12" />
          </div>
          <div className="plan-image flex justify-between lg:px-36 -mt-16 lg:-mt-28 z-20 relative">
            <img
              src={c1}
              alt=""
              className="w-20 h-auto lg:w-auto -mb-4 lg:mb-0"
            />
            <img
              src={c4}
              alt=""
              className="w-20 h-auto lg:w-auto -mb-4 lg:mb-0"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Plan;
