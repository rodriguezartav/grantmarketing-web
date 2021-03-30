import Head from "next/head";
import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Router from "next/router";
import Image from "next/image";

import Price from "../components/Price";
import Faq from "../components/Faq";

export default function Home() {
  const [phone, setPhone] = React.useState("");
  const [error, setError] = React.useState("");

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", "G-MNTM6MGLXC");

    if (window.location.host.indexOf("rodco") > -1) Router.replace("/brand");
    else if (window.location.host.indexOf("signalon") > -1)
      Router.replace("/brand");
  }, []);

  async function onCreateAccount() {
    if (phone.length < 8) return setError("10 digit phone number is required");
    Router.replace("/signin?phone=" + phone);
  }

  return (
    <div>
      <Head>
        <title>JungleDynamics</title>
        <link rel="icon" href="/favicon.ico" />

        {/* Global site tag (gtag.js) - Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-MNTM6MGLXC"
        ></script>
      </Head>

      <Header />

      <div className="bg-white">
        {/* Split brand panel */}
        <div className="relative bg-white">
          <div className="absolute inset-0" aria-hidden="true">
            <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-r from-cyan-600 to-green-800" />
          </div>
          <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-2 lg:px-8">
            <div className="bg-white py-16 px-4 sm:py-24 sm:px-6 lg:px-0 lg:pr-8">
              <div className="max-w-lg mx-auto lg:mx-0">
                <h2 className="text-base font-semibold tracking-wide text-cyan-600 uppercase">
                  Full-featured
                </h2>
                <p className="mt-2 text-2xl font-extrabold text-gray-900 sm:text-3xl">
                  CDP with dedicated services
                </p>

                <p className="mt-5 text-lg font-light text-gray-900 sm:text-xl">
                  The platform and services have no limits, each account gets
                  one active request at a time. If the request is changed
                  in-flight a one week holding pattern applies.
                </p>

                <dl className="mt-12 space-y-10">
                  <div className="relative">
                    <dt>
                      <div className="absolute h-12 w-12 bg-gradient-to-r from-cyan-600 to-green-400 rounded-md flex items-center justify-center">
                        {/* Heroicon name: outline/view-list */}
                        <svg
                          className="h-6 w-6 text-white"
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
                            d="M4 6h16M4 10h16M4 14h16M4 18h16"
                          />
                        </svg>
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                        Customer Data Platform
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      Connect unlimited platforms by pushing and pulling data in
                      realtime according to your specific business procces.
                    </dd>
                  </div>
                  <div className="relative">
                    <dt>
                      <div className="absolute h-12 w-12 bg-gradient-to-r from-cyan-600 to-green-400 rounded-md flex items-center justify-center">
                        {/* Heroicon name: outline/view-boards */}
                        <svg
                          className="h-6 w-6 text-white"
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
                            d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
                          />
                        </svg>
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                        Counsulting
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      Company wide digital conferences, zoom meetings, system
                      wide software architecure design and roadmap.
                    </dd>
                  </div>
                  <div className="relative">
                    <dt>
                      <div className="absolute h-12 w-12 bg-gradient-to-r from-cyan-600 to-green-400 rounded-md flex items-center justify-center">
                        {/* Heroicon name: outline/calendar */}
                        <svg
                          className="h-6 w-6 text-white"
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
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                        Development
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      Platform specific development ( salesforce ) and
                      development of CDP functions for smart supervised platform
                      integrations.
                    </dd>
                  </div>
                  <div className="relative">
                    <dt>
                      <div className="absolute h-12 w-12 bg-gradient-to-r from-cyan-600 to-green-400 rounded-md flex items-center justify-center">
                        {/* Heroicon name: outline/users */}
                        <svg
                          className="h-6 w-6 text-white"
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
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                          />
                        </svg>
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                        Support
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      24/7 AI based system-wide monitoring with anomaly machine
                      learnings models + business hours ( CST ) direct technical
                      support.
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            <div className="bg-gradient-to-r from-cyan-600 to-green-400 py-16 px-4 sm:py-24 sm:px-6 lg:bg-none lg:flex lg:items-center lg:justify-end lg:px-0 lg:pl-8">
              <div className="max-w-lg mx-auto w-full space-y-8 lg:mx-0">
                <div>
                  <h2 className="sr-only">Price</h2>
                  <p className="relative grid grid-cols-2">
                    <span className="flex flex-col text-center">
                      <span className="text-5xl font-extrabold text-white tracking-tight">
                        $499
                      </span>
                      <span className="mt-2 text-base font-medium text-cyan-100">
                        per Month
                      </span>
                      <span className="sr-only">plus</span>
                    </span>
                    <span
                      className="pointer-events-none absolute h-12 w-full flex items-center justify-center"
                      aria-hidden="true"
                    >
                      {/* Heroicon name: outline/plus */}
                      <svg
                        className="h-6 w-6 text-cyan-200"
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
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </span>
                    <span>
                      <span className="flex flex-col text-center">
                        <span className="text-5xl font-extrabold text-white tracking-tight">
                          $200
                        </span>
                        <span className="mt-2 text-base font-medium text-cyan-100">
                          per hour
                          <br /> ( 10 / month minimum )
                        </span>
                      </span>
                    </span>
                  </p>
                </div>
                <ul className="rounded overflow-hidden grid gap-px sm:grid-cols-2">
                  <li className="bg-cyan-700 bg-opacity-50 py-4 px-4 flex items-center text-base text-white">
                    {/* Heroicon name: outline/check */}
                    <svg
                      className="h-6 w-6 text-cyan-200"
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
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="ml-3">Unlimited platforms</span>
                  </li>
                  <li className="bg-cyan-700 bg-opacity-50 py-4 px-4 flex items-center text-base text-white">
                    {/* Heroicon name: outline/check */}
                    <svg
                      className="h-6 w-6 text-cyan-200"
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
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="ml-3">Enterprise Database</span>
                  </li>
                  <li className="bg-cyan-700 bg-opacity-50 py-4 px-4 flex items-center text-base text-white">
                    {/* Heroicon name: outline/check */}
                    <svg
                      className="h-6 w-6 text-cyan-200"
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
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="ml-3">Unlimited Users</span>
                  </li>
                  <li className="bg-cyan-700 bg-opacity-50 py-4 px-4 flex items-center text-base text-white">
                    {/* Heroicon name: outline/check */}
                    <svg
                      className="h-6 w-6 text-cyan-200"
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
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="ml-3">Api & Admin UI</span>
                  </li>
                  <li className="bg-cyan-700 bg-opacity-50 py-4 px-4 flex items-center text-base text-white">
                    {/* Heroicon name: outline/check */}
                    <svg
                      className="h-6 w-6 text-cyan-200"
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
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="ml-3">Unlimited Records</span>
                  </li>
                  <li className="bg-cyan-700 bg-opacity-50 py-4 px-4 flex items-center text-base text-white">
                    {/* Heroicon name: outline/check */}
                    <svg
                      className="h-6 w-6 text-cyan-200"
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
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="ml-3">Cancel Anytime</span>
                  </li>
                </ul>

                <a
                  href="#"
                  className="block text-center text-base font-medium text-cyan-100 hover:text-white"
                >
                  All data and code is property of the customer and can be
                  exported
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Logo cloud 
        <div className="bg-cyan-100 bg-opacity-25">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <h2 className="max-w-md mx-auto text-3xl font-extrabold text-cyan-900 text-center lg:max-w-xl lg:text-left">
                The world's most innovative companies use Workflow
              </h2>
              <div className="mt-8 flow-root lg:mt-0 self-center">
                <div className="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">
                  <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4">
                    <img
                      className="h-12"
                      src="https://tailwindui.com/img/logos/workcation-logo-cyan-900.svg"
                      alt="Workcation"
                    />
                  </div>
                  <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4">
                    <img
                      className="h-12"
                      src="https://tailwindui.com/img/logos/tuple-logo-cyan-900.svg"
                      alt="Tuple"
                    />
                  </div>
                  <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4">
                    <img
                      className="h-12"
                      src="https://tailwindui.com/img/logos/level-logo-cyan-900.svg"
                      alt="Level"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        */}
        {/* FAQs 
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center">
            Frequently asked questions
          </h2>
          <div className="mt-12">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-12 lg:grid-cols-3">
              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  What's all this about?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  It's my software development practice. Tell me what you need
                  and I'll turn it into code. Code becomes a program that's
                  hosted in my cloud platform where I can scale custom software
                  development and provide guarantee the operation of my work.
                </dd>
              </div>
              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  To how many customers will it grow?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  After 20 years of working in the industry and seeing how
                  profesional engineering turned into wall-street gambling about
                  unicorns - and taking my profit for a lifetime - I decided to
                  aim instead for a healthy work-life balance. JD won't grow
                  passed the amount of customers I can personally support while
                  surfing and spending time with my family every day.
                </dd>
              </div>
              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Why not native platform development - like salesforce,
                  dynamics, xero, slack, shopify?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Creating these programs inside of Salesforce, Microsoft or
                  using visual tools like Autopilot or CustomerIO is very
                  limiting, complicated and expensive. They try their best, but
                  in the end propietary programming languages are part of their
                  financial operation, not our technical solution.
                  <br />
                  Instead I use JD to pull data from each platform and create a
                  program that uses that data to get things done in a fraction
                  of the time at a fraction of the cost.
                </dd>
              </div>
              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  What's a program?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  A program is made up of lines of code that tell a computer
                  what to do. You tell me what you need, and I'll tell the
                  computer how to do it. A program is just a wrapper around
                  those instructions.
                </dd>
              </div>
              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Is it like an App? What's the difference?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  <p className="text-base text-gray-500">
                    No. Your business should be running on platforms like
                    Salesforce, Google, Microsoft and Xero. Those are "Internal
                    Apps" in the sense that they have buttons and screens that
                    your teams interact with. Then you can build Mobile or Web
                    Apps for your customers to interact with your business.
                  </p>
                  <p className="text-base mt-4 text-gray-500">
                    A program is headless. It fill's the gap between your
                    platforms, apps and your ideas. When you are unable to do
                    what you need, a program is able to connect with all your
                    platform or data sources and get it done.
                  </p>
                </dd>
              </div>
              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  What's not included?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Web and Graphic Design, Forms, App Development, Customer
                  Facing Apps, Employee facing apps, ( anything with a button on
                  it ), Platform Consulting, Platform Support.
                </dd>
              </div>
            </dl>
          </div>
        </div>
        */}
        {/* CTA section 
        <div className="bg-gradient-to-r from-cyan-600 to-green-400">
          <div className="max-w-2xl mx-auto py-16 px-4 text-center sm:py-20 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              <span className="block">Boost your productivity.</span>
              <span className="block text-cyan-900">
                Start using Workflow today.
              </span>
            </h2>
            <p className="mt-4 text-lg leading-6 text-cyan-100">
              Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
              Malesuada adipiscing sagittis vel nulla nec.
            </p>
            <a
              href="#"
              className="mt-8 w-full bg-cyan-50 border border-transparent rounded-md py-3 px-5 inline-flex items-center justify-center text-base font-medium text-cyan-700 hover:bg-cyan-100 sm:w-auto"
            >
              Sign up for free
            </a>
          </div>
        </div>
        */}
        {/* Footer 4-column with newsletter and localization dark */}

        <Footer />
      </div>
    </div>
  );
}
