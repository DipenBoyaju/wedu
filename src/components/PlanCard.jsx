import { FaCircleCheck } from "react-icons/fa6";

const PlanCard = ({ plan, price, month, bg, display, color }) => {
  return (
    <div className="plancards">
      <div className="container mx-auto lg:container xl:container text-left px-4">
        <div
          className="plan flex-1 bg-black rounded-lg"
          style={{ backgroundColor: `${bg}` }}
        >
          <p
            className="mx-auto font-SpaceGrotesk border-black border-[1px] bg-[var(--primary-color)] text-sm font-bold p-1 w-24 text-center rounded-sm -mt-4 absolute ml-[35%] lg:ml-[8%]"
            style={{ display: `${display}` }}
          >
            Best Value
          </p>
          <div
            className="price-top p-6 text-white"
            style={{ color: `${color}` }}
          >
            <h3 className="text-[28px]">{plan}</h3>
            <p className="font-SpaceGrotesk font-normal flex items-start">
              <span className="text-[18px] font-normal">US$</span>
              <span className="text-[60px] font-bold">{price}</span>
            </p>
            <p className="font-SpaceGrotesk text-[12px] font-normal">
              Every month
            </p>

            <p className="text-sm font-normal py-2">
              Use this area to describe one of your memberships.
            </p>
            <p className="text-[12px] font-normal py-5">
              Valid for {month} months
            </p>
            <button className="bg-white text-[18px] text-black font-bold p-3 lg:px-16 w-full lg:w-auto rounded-md font-SpaceGrotesk ">
              Get Started
            </button>
          </div>
          <div className="plan-bottom p-6 bg-[#FFD7EF] rounded-b-lg">
            <ul>
              <li className="flex items-center gap-2 p-2">
                <FaCircleCheck className="text-[12px]" />{" "}
                <p className="text-sm">I&apos;m a benefit</p>
              </li>
              <li className="flex items-center gap-2 p-2">
                <FaCircleCheck className="text-[12px]" />
                <p className="text-sm">I&apos;m a benefit</p>
              </li>
              <li className="flex items-center gap-2 p-2">
                <FaCircleCheck className="text-sm" />
                <p className="text-sm">I&apos;m a benefit</p>
              </li>
              <li className="flex items-center gap-2 p-2">
                <FaCircleCheck className="text-sm" />
                <p className="text-sm">I&apos;m a benefit</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
