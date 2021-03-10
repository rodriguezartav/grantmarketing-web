import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Router from "next/router";

export default function Header() {
  const [isLogin, setIsLogin] = React.useState(false);

  useEffect(() => {
    if (window.localStorage.getItem("token")) {
      setIsLogin(true);
    }
  }, []);

  return (
    <header className="relative">
      <div className="bg-gray-900 pt-2 pb-2">
        <nav
          className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
          aria-label="Global"
        >
          <div className="flex items-center flex-1">
            <div className="flex items-center justify-between w-full md:w-auto">
              <a href="#">
                <Logo />
              </a>
              <div className="-mr-2 flex items-center md:hidden">
                <button
                  type="button"
                  className="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {/* Heroicon name: outline/menu */}
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="hidden space-x-8 md:flex md:ml-10"></div>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-6">
            {isLogin && (
              <a
                onClick={() => {
                  Router.replace("/dashboard");
                }}
                className=" cursor-pointer inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
              >
                Dashboard
              </a>
            )}
            {!isLogin && (
              <a
                onClick={() => {
                  Router.replace("/login");
                }}
                className=" cursor-pointer inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
              >
                Login / Signup
              </a>
            )}
          </div>
        </nav>
      </div>
      {/*
Mobile menu, show/hide based on menu open state.

Entering: "duration-150 ease-out"
From: "opacity-0 scale-95"
To: "opacity-100 scale-100"
Leaving: "duration-100 ease-in"
From: "opacity-100 scale-100"
To: "opacity-0 scale-95"
*/}
    </header>
  );
}
