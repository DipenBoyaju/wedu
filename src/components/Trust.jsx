import lead1 from "../assets/images/lead1.webp";
import lead2 from "../assets/images/lead2.webp";
import lead3 from "../assets/images/lead3.webp";
import lead4 from "../assets/images/lead4.webp";
import lead5 from "../assets/images/lead5.webp";
import lead6 from "../assets/images/lead6.webp";
import lead7 from "../assets/images/lead7.webp";
import lead8 from "../assets/images/lead8.webp";

const Trust = () => {
  return (
    <section className="trust bg-[#FFD7EF] lg:py-36 px-6 py-10">
      <div className="container mx-auto lg:container xl:container lg:px-40 relative">
        <div className="trust-content">
          <div className="trust-title">
            <div className="title">
              <h3 className="text-2xl lg:text-[38px] pr-8 lg:pr-0">
                Trusted Among Industry Leaders
              </h3>
            </div>
            <div className="details">
              <p className="text-[16px] lg:pt-8 pt-4 lg:w-2/4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                reiciendis aliquid sapiente eaque officia voluptas quidem
                quisquam, quia enim architecto aliquam, veniam quos error, id
                maxime commodi blanditiis sed accusantium.
              </p>
            </div>
          </div>
          <div className="mx-auto flex justify-center">
            <div className="lead-list grid lg:grid-cols-4 grid-cols-2 mx-auto gap-10 lg:gap-16 lg:gap-x-32 items-center pt-10 lg:pt-20">
              <img src={lead1} alt="" className="lg:col-span-1" />
              <img src={lead2} alt="" className="lg:col-span-1" />
              <img src={lead3} alt="" className="lg:col-span-1" />
              <img src={lead4} alt="" className="lg:col-span-1" />
              <img src={lead5} alt="" className="lg:col-span-1" />
              <img src={lead6} alt="" className="lg:col-span-1" />
              <img src={lead7} alt="" className="lg:col-span-1" />
              <img src={lead8} alt="" className="lg:col-span-1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
