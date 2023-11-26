import built from "../assets/images/built.png";
import built1 from "../assets/images/built1.png";
import built2 from "../assets/images/built2.png";
import built3 from "../assets/images/built3.png";
import built4 from "../assets/images/built4.png";

const Built = () => {
  return (
    <section className="built pt-8 px-6 lg:px-0">
      <div className="container mx-auto lg:container xl:container lg:px-20 relative pt-24 pb-24 lg:pb-56">
        <div className="built-content lg:flex gap-56 items-center">
          <div className="built-img">
            <div className="absolute bg-[#D3E6F8] h-36 w-36 lg:h-56 lg:w-56 -mt-16 lg:-mt-24 rounded-full z-0"></div>
            <img src={built} alt="" className="z-10 relative" />
            <img
              src={built1}
              alt=""
              className="absolute right-24 w-24 lg:w-auto lg:right-[65%] -mt-6 lg:-mt-10 z-10"
            />
            <div className="absolute bg-[#FFE5A7] h-24 w-36 lg:h-32 lg:w-48 rounded-xl right-0 lg:right-[57%] -mt-16 lg:-mt-24 z-0"></div>
          </div>
          <div className="built-content lg:flex-1 pt-24 lg:pt-0">
            <h2 className="text-2xl lg:text-[38px] lg:leading-[49.4px] lg:pr-8">
              Built for Creatives, by Creatives
            </h2>
            <p className="text-[16px] py-4 lg:py-8 lg:pr-6">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusantium totam, eos perferendis ipsam voluptatibus iure, ut
              atque optio illum porro similique praesentium eum id ducimus nam
              ab minus tempore nesciunt!
            </p>
            <div className="built-sub flex lg:flex-row flex-col gap-4 pt-4">
              <div className="items flex">
                <img src={built2} alt="" />
                <p className="text-sm leading-[16.8px] pl-3">
                  Speed & Security
                </p>
              </div>
              <div className="items flex">
                <img src={built3} alt="" />
                <p className="text-sm leading-[16.8px] pl-3">
                  Flexibility & Scalability
                </p>
              </div>
              <div className="items flex">
                <img src={built4} alt="" />
                <p className="text-sm leading-[16.8px] pl-3">
                  Better Collaboration
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -mt-12  left-0 w-full h-1/2  transform skew-y-[-6deg] bg-[#FFD7EF] z-0"></div>
    </section>
  );
};

export default Built;
