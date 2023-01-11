/* eslint-disable @next/next/no-img-element */
import React from "react";
import Wrapper from "../layout/wrapper";
import Image from "next/image";
import logo from "../../public/images/logo-black.svg";
import search from "../../public/images/search.svg";
import menu from "../../public/images/menu-1.svg";

function Navbar() {
  return (
    <Wrapper>
      <nav className="">
        <div className="bg-[#004191] fixed right-0 left-0 top-0  px-32 py-[0.6rem] text-white max-w-[74rem] mx-auto flex">
          <div className="ml-auto flex items-center  gap-3">
            <h4 className="text-sm items-center">University of Stuttgart</h4>
            <div className="border border-white p-[0.18rem] rounded-full ">
              <svg
                className=""
                width="11px"
                height="11px"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
                stroke-width="5.072"
                stroke="#ffffff"
                fill="none"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <polyline points="18.86 57.47 44.12 30.84 18.86 6.58"></polyline>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </nav>
      <div className="flex bg-white text-black px-14 p-10 justify-between">
        <div>
          <Image src={logo} alt="logo" />
        </div>

        <div className="flex gap-6">
          <Image src={search} alt="logo" />
          <Image src={menu} alt="menu" />
        </div>
      </div>
    </Wrapper>
  );
}

export default Navbar;
