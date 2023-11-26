import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <section className="footer bg-[var(--primary-color)]">
      <div className="container mx-auto lg:px-20 pt-36 ">
        <div className="footer-content">
          <div className="logo flex pl-8 lg:pl-0">
            <img src={logo} alt="" />
            <div className="sub pl-2">
              <h3 className="text-[22px] font-bold leading-5">WeDu</h3>
              <p className="text-sm">Communication. Collaborate. Create</p>
            </div>
          </div>
          <div className="footer-bottom lg:flex justify-between lg:py-20 lg:px-10 px-8 py-10 gap-8">
            <div className="contact">
              <p className="font-bold text-[20px]">Contact</p>
              <div className="contact-info lg:flex lg:justify-between lg:pt-8 lg:gap-8 pt-2">
                <div className="left-side">
                  <p className="text-[16px]">
                    500 Terry Francine Street
                    <br /> San Francisco, CA 94158
                  </p>
                  <p className="text-[16px] lg:pt-8 pt-4">
                    General Inquiries:
                    <br /> 123-456-7890
                  </p>
                </div>
                <div className="right-side">
                  <p className="text-[16px] pt-4 lg:pt-0">
                    Sales:
                    <br /> info@mysite.com
                  </p>
                  <p className="text-[16px] lg:pt-8 pt-4">
                    Customer Care:
                    <br /> info@mysite.com
                  </p>
                </div>
              </div>
            </div>
            <div className="quick">
              <p className="font-bold text-[20px] pt-8 lg:pt-0">Quick Links</p>
              <ul className="lg:pt-8 pt-4">
                <li className="text-[16px] underline pb-4">
                  Terms & Conditions
                </li>
                <li className="text-[16px] underline">Privacy Policy</li>
              </ul>
            </div>
            <div className="folllow">
              <p className="font-bold text-[20px] pt-8 lg:pt-0">Follow</p>
              <p className="text-[16px] lg:pt-8 pb-4 pt-4">
                Sign up to get the latest news on our product.
              </p>
              <form>
                <label htmlFor="" className="text-[16px]">
                  Email *
                </label>
                <br />
                <input
                  type="text"
                  className="bg-transparent border-2 border-black rounded-md h-10 mt-2 hover:bg-white focus:bg-white focus:outline-0"
                />
                <button className="bg-black text-white font-SpaceGrotesk text-[16px] p-2 px-3 font-bold -ml-3 rounded-md hover:bg-[var(--primary-color)] border-[1px] border-black hover:text-black transition-all ease-in-out delay-75">
                  Subscribe
                </button>
              </form>
            </div>
            <div className="media pt-10 flex justify-between lg:flex lg:flex-col">
              <h4 className="font-bold text-[20px] pt-4">LinkedIn</h4>
              <h4 className="font-bold text-[20px] pt-4">Youtube</h4>
              <h4 className="font-bold text-[20px] pt-4">Facebook</h4>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center bg-black text-white py-2 text-sm font-light">
        © 2035 by WeDu. Powered and secured by Wix
      </p>
    </section>
  );
};

export default Footer;
