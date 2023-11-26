import banner from "../assets/images/banner.png";
import b1 from "../assets/images/b1.png";
import b2 from "../assets/images/b2.png";
import b3 from "../assets/images/b3.png";

const Banner = () => {
  return (
    <section className="banner px-6 lg:py-24 lg:px-0">
      <div className="container mx-auto lg:container xl:container lg:px-40 relative lg:pb-32">
        <div
          className="flex lg:flex-row flex-col"
          // className="bg-no-repeat lg:h-screen hidden lg:block"
          // style={{
          //   backgroundImage: `url(${banner})`,
          //   backgroundPosition: "top right",
          // }}
        >
          <div className="banner-content lg:w-1/2 order-2 flex flex-col">
            <h1 className="order-1 text-[29px] lg:text-[50px] pt-4 lg:pt-0 font-normal leading-[31.9px] lg:leading-[55px]">
              Communicate. Collaborate. Create.
            </h1>
            <p className=" order-2 text-[16px] lg:text-[20px] pt-4 lg:pt-8">
              WeDu provides an effective and powerful way to manage your
              projects
            </p>
            <button className="bg-black order-4 w-auto lg:w-36 text-white p-[.4rem] px-3 mt-10 mb-28 lg:mb-0 font-SpaceGrotesk font-bold rounded-md text-[16px] border-black hover:border-black hover:bg-[var(--primary-color)] border-[1px] hover:text-black transition-all ease-in-out delay-75">
              Get Started
            </button>
            <div className="sub order-3 lg:order-4 flex gap-4 lg:flex-row flex-col lg:pt-24 pt-12">
              <div className="items flex">
                <img src={b1} alt="" />
                <p className="text-sm leading-[16.8px] pl-3">
                  Speed & Security
                </p>
              </div>
              <div className="items flex">
                <img src={b2} alt="" />
                <p className="text-sm leading-[16.8px] pl-3">
                  Flexibility & Scalability
                </p>
              </div>
              <div className="items flex">
                <img src={b3} alt="" />
                <p className="text-sm leading-[16.8px] pl-3">
                  Better Collaboration
                </p>
              </div>
            </div>
          </div>
          <div className="banner-image absoulute order-1 lg:order-2">
            <img src={banner} alt="" className="" />
          </div>
        </div>
      </div>
      <div className="absolute -mt-5 lg:-mt-7 left-0 w-full h-1/2 bg-[var(--primary-color)] transform skew-y-[6deg] lg:skew-y-[3deg]  z-0"></div>
    </section>
  );
};

export default Banner;
