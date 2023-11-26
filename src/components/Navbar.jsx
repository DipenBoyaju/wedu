import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import login from "../assets/images/user.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="header ">
      <div className="container mx-auto lg:px-20 ">
        <div className="navbar flex justify-between lg:py-10 py-4 items-center">
          <div className="logo flex pl-4 lg:pl-0">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
            <Link to="/">
              <div className="sub pl-2">
                <h3 className="text-[22px] font-bold leading-5">WeDu</h3>
                <p className="text-sm">Communication. Collaborate. Create</p>
              </div>
            </Link>
          </div>
          <div className="ham-menu lg:hidden pr-4">
            <RxHamburgerMenu
              className="text-3xl hover:cursor-pointer"
              onClick={handleOpen}
            />
          </div>
          <div
            className={`navmenu lg:flex  items-center ${
              !isOpen ? "flex" : "hidden"
            } gap-6 fixed bg-white w-full lg:w-auto h-[1000px] lg:h-auto z-20 lg:flex-row lg:relative`}
          >
            <ul className="lg:text-[16px] lg:font-normal pl-4 lg:pl-0 absolute lg:flex lg:flex-row gap-6 pt-80 lg:pt-0 order-2 font-SpaceGrotesk lg:-order-none text-[22px] font-bold lg:relative">
              <Link to="/" onClick={handleOpen}>
                <li className="hover:cursor-pointer hover:text-[#6E6E6E] py-2 lg:p-0">
                  Home
                </li>
              </Link>
              <li className="hover:cursor-pointer hover:text-[#6E6E6E] py-2 lg:p-0">
                Product
              </li>
              <Link to="/plan" onClick={handleOpen}>
                <li className="hover:cursor-pointer hover:text-[#6E6E6E] py-2 lg:p-0">
                  Pricing Plans
                </li>
              </Link>
              <li className="hover:cursor-pointer hover:text-[#6E6E6E] py-2 lg:p-0">
                Contact
              </li>
            </ul>
            <div className="close absolute right-0 lg:hidden">
              <IoMdClose
                className="text-3xl mr-4 hover:cursor-pointer"
                onClick={handleOpen}
              />
            </div>
            <div className="login flex lg:flex hover:cursor-pointer pl-4 lg:pl-0">
              <img src={login} alt="" className="w-6 h-6" />
              <p className="pl-3 hover:text-[#6E6E6E]">Login</p>
            </div>
            <Link to="/plan" className="hidden lg:block">
              <button className="bg-[var(--primary-color)] p-[.4rem] px-3 font-SpaceGrotesk font-bold rounded-md text-[16px] border-black border-[1px] hover:bg-black hover:text-[var(--primary-color)] transition-all ease-in-out delay-75">
                Get Started
              </button>
            </Link>
          </div>
        </div>
        <Link to="/plan" className="lg:hidden">
          <button className="bg-[var(--primary-color)] p-[.4rem] px-4 font-SpaceGrotesk font-bold rounded-md w-full my-4 text-[16px] border-black border-[1px] hover:bg-black hover:text-[var(--primary-color)] transition-all ease-in-out delay-75">
            Get Started
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Navbar;
