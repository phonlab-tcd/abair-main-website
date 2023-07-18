/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";

import { DropdownMenu } from "@/components";
import languageDropdownArgs from "./languageDropdownArgs";
import userDropdownArgs from "./userDropdownArgs";

import Link from "next/link";
import { Button, Sidebar } from "abair-web-components";
import { useState, useEffect } from "react";
import { routes } from "@/routes";

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const [abairLogoHover, setAbairLogoHover] = useState(false);
  const [burgerMenuHover, setBurgerMenuHover] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    console.log("userDropdownArgs:", userDropdownArgs);
  }, [userDropdownArgs]);

  return (
    <div className="fixed w-screen shadow-md bg-white flex justify-center z-[1001]">
      <div className="h-12 lg:h-16 flex flex-row justify-between max-w-6xl w-full">
        <div className="flex flex-row h-full w-auto">
          <div className="h-full items-center hover:bg-grey-100 transition-colors ease-in-out duration-200">
            <button
              className="h-full"
              onMouseEnter={() => {
                setBurgerMenuHover(true);
              }}
              onMouseLeave={() => {
                setBurgerMenuHover(false);
              }}
              onClick={() => {
                setShowSidebar(true);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke={burgerMenuHover ? "green" : "green"}
                className="w-8 h-8 mx-2 md:hidden"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="h-full items-center hover:bg-grey-100 transition-colors ease-in-out duration-200">
            <Link href={"/"}>
              <button
                className="mx-2 md:px-1 lg:px-2 h-full"
                onClick={() => {
                  console.log("go home");
                }}
                onMouseEnter={() => {
                  setAbairLogoHover(true);
                }}
                onMouseLeave={() => {
                  setAbairLogoHover(false);
                }}
              >
                <div className="relative w-10 lg:w-14 h-8 lg:h-10">
                  <img
                    src={
                      abairLogoHover
                        ? "/abair-logo-outline-green.png"
                        : "/abair-logo-outline-green.png"
                    }
                    alt="ABAIR logo"
                  />
                </div>
              </button>
            </Link>
          </div>
        </div>

        <div id="siteLinks" className="h-full flex">
          <div className="pr-2 lg:pr-4 hidden md:block">
            {routes.map(
              (route, i) =>
                route && (
                  <Link key={i} href={route.path}>
                    <Button
                      sizes="text-sm lg:text-lg p-1 lg:p-2 h-full"
                      colors="hover:bg-grey-100 text-primary-700"
                    >
                      {route.name}
                    </Button>
                  </Link>
                )
            )}
          </div>
          <div className="h-full flex items-center">
            <div className="h-8 lg:h-10 border-l border-grey-200 hidden md:block"></div>
          </div>
          <DropdownMenu
            label="GA"
            dropdownMenuItems={languageDropdownArgs}
            image={{
              URL: "/ie.svg",
              width: "w-4 lg:w-6",
            }}
          />
          <div className="h-full flex items-center">
            <div className="h-8 lg:h-10 border-l border-white-900"></div>
          </div>
          {loggedIn ? (
            <DropdownMenu
              dropdownMenuItems={userDropdownArgs}
              image={{
                URL: "/defaultProfileAvatar.png",
                width: "w-8 lg:w-10",
              }}
              showArrow={true}
            />
          ) : (
            <div className="h-full flex items-center p-2 lg:p-4">
              <Button
                sizes="px-2 lg:px-4 py-1 lg:py-1 text-sm lg:text-lg"
                colors="border border-white hover:border-black-600 hover:text-black-600 hover:bg-black-100"
              >
                login/sign up
              </Button>
            </div>
          )}
        </div>
      </div>

      <div
        className={[
          showSidebar ? "block" : "hidden",
          "absolute w-screen h-screen bg-black opacity-50",
        ].join(" ")}
        onClick={() => {
          setShowSidebar(false);
        }}
      ></div>

      <div
        className={[
          showSidebar ? "left-0" : "-left-48",
          "transition-all duration-500 ease-in-out absolute",
        ].join(" ")}
      >
        <Sidebar>
          {routes.map((route, i) => (
            <Link key={i} href={route.path}>
              <Button
                sizes="text-left text-sm lg:text-base py-2 pl-4 w-full"
                colors="text-primary-700 hover:bg-grey-100"
              >
                {route.name}
              </Button>
            </Link>
          ))}
        </Sidebar>
      </div>
    </div>
  );
};

export default Navbar;
