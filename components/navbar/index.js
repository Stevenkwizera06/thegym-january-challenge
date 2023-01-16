/* eslint-disable @next/next/no-img-element */
import Wrapper from "../layout/wrapper";
import logo from "../../public/images/logo-black.svg";
import search from "../../public/images/search.svg";
import menu from "../../public/images/menu-1.svg";
import language from "../../public/images/language.svg";
import crosss from "../../public/images/cross.svg";
import chevronRight from "../../public/images/chevronn-right.svg";
import chevron from "../../public/images/chevron.svg";
import logoWhite from "../../public/images/logoWhite.svg";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    const changescrolled = () => {
      // window.scrollY >= 10
      //     ? setScrolled(window.scrollY)
      //     : setScrolled(window.scrollY);
      setScrolled(window.scrollY);
    };
    window.addEventListener("scroll", changescrolled);
    return () => {
      window.removeEventListener("scroll", changescrolled);
    };
  }, [scrolled]);

  // Remove scrolling
  useEffect(() => {
    document.body.style.overflow = show ? "hidden" : "auto";
    return () => (document.body.style.overflow = "scroll");
  }, [show]);

  // Remove background
  const dynamic = useRouter().asPath;
  useEffect(() => setShow(false), [dynamic]);

  return (
    <Wrapper>
      <nav className="relative  md:px-5 max-w-[80rem] mx-auto">
        <div className="sm:flex hidden bg-[#004191] text-white justify-between px-4 py-2 ">
          <button className="text-xs flex gap-3 items-center">
            University of Stuttgart
            <span className="rounded-full border w-5 h-5">
              <Image src={chevronRight} width={20} height={20} />
            </span>
          </button>
          <button className="flex gap-2 cursor-pointer">
            <span>
              <Image src={logo} width={30} height={30} />
            </span>
            <span>|</span>
            <span>
              <Image src={logo} width={30} height={30} />
            </span>
          </button>
        </div>
        <div className="sm:hidden bg-[#004191] text-white flex justify-between px-[5.625rem] py-2">
          <button />
          <button className="text-xs flex gap-3 items-center">
            University of Stuttgart
            <span className="rounded-full border w-5 h-5">
              <Image src={chevronRight} width={20} height={20} />
            </span>
          </button>
        </div>
        <div
          className={`bg-white  max-w-[74rem] z-40 flex items-center justify-between sm:gap-x-8 sm:px-4 px-[5.625rem]  ${
            scrolled > 12
              ? "fixed w-full duration-300 ease-in-out top-0 py-4"
              : "py-10 relative top-[0.2%]"
          }`}
        >
          <Link href={"/"}>
            <div>
              <Image src={logo} />
            </div>
          </Link>
          <div className="flex items-center gap-3 cursor-pointer">
            <span className="sm:hidden block">
              <Image src={language} width={30} height={30} />
            </span>
            <span className="sm:hidden block">
              <Image src={search} width={30} height={30} />
            </span>
            <span onClick={() => setShow(!show)}>
              <Image src={menu} width={30} height={30} />
            </span>
          </div>
        </div>
      </nav>
      {show && (
        <div className="h-screen bg-[#333333] bg-opacity-90 text-white top-0 duration-300 z-[9999] fixed inset-x-0 max-w-6xl mx-auto">
          <div className="flex items-center bg-[#333333] gap-x-8 justify-between sm:px-4 px-[5.625rem] py-10">
            <Link href={"/"}>
              <div>
                <Image src={logoWhite} />
              </div>
            </Link>
            <div className="flex items-center gap-2 cursor-pointer">
              <span>
                <Image src={search} width={30} height={30} />
              </span>
              <span onClick={() => setShow(!show)}>
                <Image src={crosss} width={40} height={30} />
              </span>
            </div>
          </div>
          <div className="pt-10">
            <div className="flex flex-col gap-5 text-lg text-white sm:px-4 px-[5.625rem]">
              {[
                "Contact",
                "Councelling",
                "Getting Involved",
                "Examination Organisation",
                "Digital Services",
                "Starting Out",
              ].map((item, i) => {
                return (
                  <Link
                    href={item}
                    key={i}
                    className="flex w-full justify-between border-b-2 border-dashed p-2 hover:bg-[#00bcff]"
                  >
                    <span>{item}</span>
                    <span>
                      <Image src={chevron} width={20} height={20} />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </Wrapper>
  );
};

export default Navbar;
