import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Router from "next/router";
import { Transition } from "@headlessui/react";

export default function Header() {
  const [openMenu, setOpenMenu] = React.useState(false);

  const [openSolutions, setOpenSolutions] = React.useState(false);

  return (
    <div className="relative bg-green-800 bottom-1 border-white">
      <div className="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <Logo />
        </div>
        <div className="-mr-2 -my-2 md:hidden">
          <LoginButton></LoginButton>
          <button
            onClick={() => setOpenMenu(!openMenu)}
            type="button"
            className="bg-green-800 rounded-md p-2 inline-flex items-center justify-center text-white hover:text-green-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
            aria-expanded="false"
          >
            <span className="sr-only">Open menu</span>
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
        <nav className="hidden md:flex space-x-10">
          <div className="relative">
            {/* Item active: "text-gray-900", Item inactive: "text-gray-500" */}
            <button
              onClick={() => setOpenSolutions(!openSolutions)}
              type="button"
              className="text-green-50 group bg-green-800 rounded-md inline-flex items-center text-base font-medium hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              aria-expanded="false"
            >
              <span>Solutions</span>
              {/*
        Heroicon name: solid/chevron-down
  
        Item active: "text-gray-600", Item inactive: "text-gray-400"
      */}
              <svg
                className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {/*
      'Solutions' flyout menu, show/hide based on flyout menu state.
  
      Entering: "transition ease-out duration-200"
        From: "opacity-0 translate-y-1"
        To: "opacity-100 translate-y-0"
      Leaving: "transition ease-in duration-150"
        From: "opacity-100 translate-y-0"
        To: "opacity-0 translate-y-1"
    */}

            <Transition
              show={openSolutions}
              enter="opacity-0 translate-y-1"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <div className="absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-2xl lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                    <a
                      href="#"
                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                    >
                      <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-green-500 text-white sm:h-12 sm:w-12">
                        {/* Heroicon name: outline/chart-bar */}
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
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                          />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900">
                          Business Software 360
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          Take control of your business, data and operations
                          with custom software development, while still taking
                          advantage of the best cloud platforms.
                        </p>
                      </div>
                    </a>
                    <a
                      href="#"
                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                    >
                      <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-green-500 text-white sm:h-12 sm:w-12">
                        {/* Heroicon name: outline/cursor-click */}
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
                            d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                          />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900">
                          Custom Platform Features
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          Create the features you need, even when they are not
                          supported.
                        </p>
                      </div>
                    </a>
                    <a
                      href="#"
                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                    >
                      <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-green-500 text-white sm:h-12 sm:w-12">
                        {/* Heroicon name: outline/shield-check */}
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
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900">
                          Alerts & Notifications
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          Get alerted via email, sms, slack, whatsapp when key
                          events takes place in one or many platforms.
                        </p>
                      </div>
                    </a>
                    <a
                      href="#"
                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                    >
                      <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-green-500 text-white sm:h-12 sm:w-12">
                        {/* Heroicon name: outline/view-grid */}
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
                            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                          />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900">
                          Data Apps
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          Load, Clean, Transform, Export and join data from
                          multiple platforms or sources into other platforms,
                          gDocs, cloud storage, email, sms's, web pages, etc.
                        </p>
                      </div>
                    </a>
                    <a
                      href="#"
                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                    >
                      <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-green-500 text-white sm:h-12 sm:w-12">
                        {/* Heroicon name: outline/refresh */}
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
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                          />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900">
                          Integrations
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          Control parts of your business in the platform that
                          makes more sense and keep the others in sync.
                        </p>
                      </div>
                    </a>
                    <a
                      href="#"
                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                    >
                      <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-green-500 text-white sm:h-12 sm:w-12">
                        {/* Heroicon name: outline/document-report */}
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
                            d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900">
                          Complete Reports
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          Get reports from all your data sources that will help
                          you make more informed decisions
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </Transition>
          </div>
          <a
            href="/pricing"
            className="text-base font-medium text-gray-50 hover:text-gray-100"
          >
            Pricing
          </a>
        </nav>

        <div className="hidden md:flex items-center mr-5 justify-end md:flex-1 lg:w-0">
          <LoginButton></LoginButton>
        </div>
      </div>
      {openMenu && <Mobile setOpenMenu={setOpenMenu} openMenu={openMenu} />}
    </div>
  );
}

function Mobile(props) {
  return (
    <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
        <div className="pt-5 pb-6 px-5">
          <div className="flex items-center justify-between">
            <div></div>
            <div className="flex justify-between  px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
              <a
                href="/pricing"
                className="text-base font-medium bg-green-800 p-2 shadow-sm px-5 rounded-md text-gray-50 hover:text-gray-200"
              >
                Pricing
              </a>
            </div>
            <div className="-mr-2">
              <button
                onClick={() => props.setOpenMenu(false)}
                type="button"
                className="bg-green-800 rounded-md p-2 inline-flex items-center justify-center text-gray-50 hover:text-gray-50 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
              >
                <span className="sr-only">Close menu</span>
                {/* Heroicon name: outline/x */}
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className=" ">
            <nav className=" md:flex space-x-10">
              <div className="relative">
                <div className="z-10 -ml-4 mt-3   w-screen max-w-md lg:max-w-2xl lg:ml-0 ">
                  <div className="rounded-lg   overflow-hidden">
                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                      <a
                        href="#"
                        className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                      >
                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-green-500 text-white sm:h-12 sm:w-12">
                          {/* Heroicon name: outline/chart-bar */}
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
                              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                            />
                          </svg>
                        </div>
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">
                            Business Software 360
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Take control of your business, data and operations
                            with custom software development, while still taking
                            advantage of the best cloud platforms.
                          </p>
                        </div>
                      </a>
                      <a
                        href="#"
                        className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                      >
                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-green-500 text-white sm:h-12 sm:w-12">
                          {/* Heroicon name: outline/cursor-click */}
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
                              d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                            />
                          </svg>
                        </div>
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">
                            Custom Platform Features
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Create the features you need, even when they are not
                            supported.
                          </p>
                        </div>
                      </a>
                      <a
                        href="#"
                        className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                      >
                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-green-500 text-white sm:h-12 sm:w-12">
                          {/* Heroicon name: outline/shield-check */}
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
                              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                            />
                          </svg>
                        </div>
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">
                            Alerts & Notifications
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Get alerted via email, sms, slack, whatsapp when key
                            events takes place in one or many platforms.
                          </p>
                        </div>
                      </a>
                      <a
                        href="#"
                        className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                      >
                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-green-500 text-white sm:h-12 sm:w-12">
                          {/* Heroicon name: outline/view-grid */}
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
                              d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                            />
                          </svg>
                        </div>
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">
                            Data Apps
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Load, Clean, Transform, Export and join data from
                            multiple platforms or sources into other platforms,
                            gDocs, cloud storage, email, sms's, web pages, etc.
                          </p>
                        </div>
                      </a>
                      <a
                        href="#"
                        className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                      >
                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-green-500 text-white sm:h-12 sm:w-12">
                          {/* Heroicon name: outline/refresh */}
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
                              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                            />
                          </svg>
                        </div>
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">
                            Integrations
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Control parts of your business in the platform that
                            makes more sense and keep the others in sync.
                          </p>
                        </div>
                      </a>
                      <a
                        href="#"
                        className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                      >
                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-green-500 text-white sm:h-12 sm:w-12">
                          {/* Heroicon name: outline/document-report */}
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
                              d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                        </div>
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">
                            Complete Reports
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Get reports from all your data sources that will
                            help you make more informed decisions
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <a
                href="/pricing"
                className="text-base font-medium text-gray-50 hover:text-gray-100"
              >
                Pricing
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

function LoginButton(props) {
  const [isLogin, setIsLogin] = React.useState(false);

  useEffect(() => {
    if (window.localStorage.getItem("token")) {
      setIsLogin(true);
    }
  }, []);

  return (
    <>
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
        <>
          <a
            href="/login"
            className="whitespace-nowrap text-base font-medium text-white hover:text-gray-50"
          >
            Login
          </a>
          <a
            href="/signin"
            className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700"
          >
            Free Trial
          </a>
        </>
      )}
    </>
  );
}
