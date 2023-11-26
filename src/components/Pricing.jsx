import { FaCircleCheck } from "react-icons/fa6";

const Pricing = () => {
  return (
    <section className="pricing bg-[#F6F5F5] lg:py-20 py-20">
      <div className="container mx-auto lg:container xl:container lg:px-40 relative lg:pt-28 z-10">
        <div className="pricing-content lg:flex gap-20 items-center px-6 lg:px-0">
          <div className="pricing-details flex-1">
            <h2 className="text-2xl leading-[31.2px] lg:text-[36px] lg:leading-[49.4px] font-normal">
              Explore Our
              <br /> Pricing Options
            </h2>
            <p className="text-[16px] lg:py-10 py-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              ipsa cupiditate repudiandae vitae, numquam sapiente totam, quia
              veritatis quod labore quisquam asperiores minima beatae magnam
              quae excepturi, nam natus hic.
            </p>
            <button className="text-[16px] font-SpaceGrotesk p-2 px-8 font-bold mb-20 bg-black rounded-md text-white border-black border-[1px] hover:bg-[var(--primary-color)] hover:text-black ease-in-out delay-75 transition-all">
              See More
            </button>
          </div>
          <div className="plan flex-1 bg-black rounded-lg border-2 border-black">
            <p className="mx-auto font-SpaceGrotesk border-black border-[1px] bg-[var(--primary-color)] text-sm font-bold p-1 w-24 text-center rounded-sm -mt-4 ">
              Best Value
            </p>
            <div className="price-top p-6 text-white">
              <h3 className="text-[28px]">Premium</h3>
              <p className="font-SpaceGrotesk font-normal flex items-start">
                <span className="text-[18px] font-normal">US$</span>
                <span className="text-[60px] font-bold">50</span>
              </p>
              <p className="font-SpaceGrotesk text-[12px] font-normal">
                Every month
              </p>

              <p className="text-sm font-normal py-2">
                Use this area to describe one of your memberships.
              </p>
              <p className="text-[12px] font-normal py-5">
                Valid for 12 months
              </p>
              <button className="bg-white text-[18px] text-black font-bold p-3 lg:px-24 w-full lg:w-auto rounded-md font-SpaceGrotesk ">
                Get Started
              </button>
            </div>
            <div className="plan-bottom p-6 bg-[#FFD7EF] rounded-b-lg">
              <ul>
                <li className="flex items-center gap-2 p-2">
                  <FaCircleCheck className="text-[12px]" />{" "}
                  <p className="text-sm">I'm a benefit</p>
                </li>
                <li className="flex items-center gap-2 p-2">
                  <FaCircleCheck className="text-[12px]" />
                  <p className="text-sm">I'm a benefit</p>
                </li>
                <li className="flex items-center gap-2 p-2">
                  <FaCircleCheck className="text-sm" />
                  <p className="text-sm">I'm a benefit</p>
                </li>
                <li className="flex items-center gap-2 p-2">
                  <FaCircleCheck className="text-sm" />
                  <p className="text-sm">I'm a benefit</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute lg:-mt-36 -mt-16 left-0 w-full h-1/2 bg-[#F6F5F5] transform skew-y-[6deg] lg:skew-y-[3deg] z-0"></div>
    </section>
  );
};

export default Pricing;
