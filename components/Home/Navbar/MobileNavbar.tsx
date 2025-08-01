import { NavLinks } from "@/constant/constant";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";

interface IProps {
  showNav : boolean;
  closeNav : () => void;
}

const MobileNavbar = ({showNav, closeNav} : IProps) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[100%]";
  return (
    <div>
      <div className={`fixed ${navOpen} inset-0 transform transition-all right-0 duration-500 z-[100002] bg-black opacity-70 w-full h-screen`}></div>
      <div className={`text-white ${navOpen} fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-cyan-800 
      space-y-6 z-[1000050] right-0`}>
        {
          NavLinks.map((link) => {
            return (
              <Link key={link.id} href={link.url}><p className="text-white w-fit text-xl ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]">{link.label}</p></Link>
            )
          })
        }
      <CgClose onClick={closeNav} className="absolute top-[1.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6" />
      </div>
    </div>
  );
};

export default MobileNavbar;
