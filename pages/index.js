import Head from "next/head";
import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Router from "next/router";

export default function Home() {
  const [phone, setPhone] = React.useState("");
  const [error, setError] = React.useState("");

  useEffect(() => {
    window.Paddle.Setup({ vendor: 40637 });

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
        <script src="https://cdn.paddle.com/paddle/paddle.js"></script>
      </Head>

      <div className="bg-white">
        <div className="relative overflow-hidden">
          <Header />
          <main>
            <div className="pt-10 bg-green-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
              <div className="mx-auto max-w-7xl lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                  <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                    <div className="lg:py-24">
                      <a
                        href="#"
                        className="inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
                      >
                        <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-gradient-to-r from-teal-500 to-green-600 rounded-full">
                          Made in the Rainforest
                        </span>
                        <span className="ml-4 text-sm">
                          with 100% Clean Energy
                        </span>
                        {/* Heroicon name: solid/chevron-right */}
                        <svg
                          className="ml-2 w-5 h-5 text-gray-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                      <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-8 sm:text-4xl lg:mt-6 xl:text-5xl">
                        <span className="block">
                          When your team comes up with a great idea
                        </span>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-cyan-400 block">
                          but software stops them
                        </span>
                      </h1>
                      <p className="mt-3 text-2xl text-gray-300 sm:mt-7 sm:text-2xl lg:text-3xl xl:text-3xl">
                        Order a JD program to make it possible!
                      </p>
                    </div>
                  </div>
                  <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
                    <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                      {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                      <img
                        className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                        src="https://tailwindui.com/img/component-images/cloud-illustration-teal-cyan.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature section with screenshot */}
            <div className="relative bg-gray-50 pt-8 sm:pt-15 lg:pt-20">
              <div className="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
                <div>
                  <p className="mt-5 max-w-xl mx-auto text-3xl text-gray-500">
                    Companies run on platforms like Salesforce, Google and
                    Microsoft along with services like Twilio, Stripe and
                    Shopify.
                  </p>
                  <h2 className="text-xl max-w-sm mx-auto mt-10 font-semibold tracking-wider text-cyan-600 uppercase">
                    But sometimes platforms won't run their teams best idea
                  </h2>

                  <p className="mt-5 max-w-xl mx-auto text-2xl text-gray-500">
                    JD engineers turn the idea into platform independent code, a
                    program with no limitations that is constantly connecting
                    between services.
                  </p>
                </div>

                <div className="mt-12 -mb-10 sm:-mb-24 lg:-mb-80">
                  <img
                    className="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
                    src="screenshoot1.png"
                    alt=""
                  />
                </div>
              </div>
            </div>

            {/* Testimonial section */}
            <div className="pb-16 bg-gradient-to-r from-teal-500 to-cyan-600 lg:pb-0 lg:z-10 lg:relative">
              <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
                <div className="relative lg:-my-8">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"
                  />
                  <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
                    <div className="aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                      <img
                        className="object-cover lg:h-full lg:w-full"
                        src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixqx=1JO2mPl47d&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
                  <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
                    <blockquote>
                      <div>
                        <svg
                          className="h-12 w-12 text-white opacity-25"
                          fill="currentColor"
                          viewBox="0 0 32 32"
                          aria-hidden="true"
                        >
                          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                        </svg>
                        <p className="mt-6 text-2xl font-medium text-white">
                          We use Shopify, Salesforce, Xero, CustomerIO, Facebook
                          and Google for operations, sales and marketing. With
                          JD we choose which platform controls prices and
                          inventories and we can make pricelists for platforms
                          that don't support them.
                        </p>
                        <p className="mt-6 text-2xl font-medium text-white">
                          We choose how leads, contacts and accounts work among
                          several marketing channels and where all touch points
                          are centralized for reporting.
                        </p>
                      </div>
                      <footer className="mt-6">
                        <p className="text-base font-medium text-white">
                          Veronica Solis
                        </p>
                        <p className="text-base font-medium text-cyan-100">
                          CMO , Rodco
                        </p>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature section with grid */}
            <div className="relative bg-white py-16 sm:py-24 lg:py-32">
              <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                <h2 className="text-base font-semibold tracking-wider text-cyan-600 uppercase">
                  The best of both worlds
                </h2>
                <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                  JD is a hybrid between agency and platform
                </p>

                <div className="mt-12">
                  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="pt-6">
                      <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                        <div className="-mt-6">
                          <div>
                            <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-md shadow-lg">
                              {/* Heroicon name: outline/cloud-upload */}
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
                                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                />
                              </svg>
                            </span>
                          </div>
                          <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                            Platform Connections
                          </h3>
                          <p className="mt-5 text-base text-gray-500">
                            JD is able to connect with any platform, database,
                            service or appliance with internet connection using
                            secure encrypted channels. JD does not store, audit
                            or share our customers data.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="pt-6">
                      <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                        <div className="-mt-6">
                          <div>
                            <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-md shadow-lg">
                              {/* Heroicon name: outline/lock-closed */}
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
                                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                />
                              </svg>
                            </span>
                          </div>
                          <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                            Program Development
                          </h3>
                          <p className="mt-5 text-base text-gray-500">
                            JD engineers create code that turn our customer
                            ideas into programs without platform limitations.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="pt-6">
                      <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                        <div className="-mt-6">
                          <div>
                            <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-md shadow-lg">
                              {/* Heroicon name: outline/refresh */}
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
                                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                />
                              </svg>
                            </span>
                          </div>
                          <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                            Self Service Platform
                          </h3>
                          <p className="mt-5 text-base text-gray-500">
                            JD is a platform where all customer programs run.
                            Customers use it to establish connections with
                            platforms without sharing passwords, monitor program
                            executions, even audit the code of their programs.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="pt-6">
                      <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                        <div className="-mt-6">
                          <div>
                            <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-md shadow-lg">
                              {/* Heroicon name: outline/shield-check */}
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
                                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                />
                              </svg>
                            </span>
                          </div>
                          <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                            Monitoring and Maintenance
                          </h3>
                          <p className="mt-5 text-base text-gray-500">
                            The same team of engineers the develops and monitors
                            the JD Platform, monitors and maintains every
                            customer program using advanced dev-ops tools and
                            AI. In case of any service outage or error, we'll
                            attemp to fix it and notify of any action requests.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="pt-6">
                      <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                        <div className="-mt-6">
                          <div>
                            <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-md shadow-lg">
                              {/* Heroicon name: outline/cog */}
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
                                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                              </svg>
                            </span>
                          </div>
                          <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                            Security Reviews
                          </h3>
                          <p className="mt-5 text-base text-gray-500">
                            In most cases ( Salesforce, Google, Xero, Shopify,
                            Slack, etc ) platforms perform extensive security
                            reviews before allowing JD to connect in behalf of a
                            customer. This is an important security benefit.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="pt-6">
                      <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                        <div className="-mt-6">
                          <div>
                            <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-md shadow-lg">
                              {/* Heroicon name: outline/server */}
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
                                  d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                                />
                              </svg>
                            </span>
                          </div>
                          <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                            Program Marketplace
                          </h3>
                          <p className="mt-5 text-base text-gray-500">
                            Our engineers and partners create and publish open
                            source programs that can be used by everyone for
                            free.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Blog section */}

            {/* This example requires Tailwind CSS v2.0+ */}
            <div className="bg-white">
              <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <div className="pb-16 xl:flex xl:items-center xl:justify-between">
                  <div>
                    <h1 className="text-4xl font-extrabold sm:text-5xl sm:tracking-tight">
                      <span className="text-gray-900">
                        Everything you need for
                      </span>
                      <span className="text-green-600 ml-1">$2500 a month</span>
                    </h1>
                    <p className="mt-5 text-xl text-gray-500">
                      Unlimited everything - 15 days trial - 1 month paid trial
                      - annual contracts there after
                    </p>
                  </div>

                  <a
                    data-product={647597}
                    href="#"
                    className="paddle_button mt-8 w-full bg-green-600 border border-transparent px-5 py-3 inline-flex items-center justify-center text-base font-medium rounded-md text-white hover:bg-green-700 sm:mt-10 sm:w-auto xl:mt-0"
                  >
                    Buy now
                  </a>
                </div>
                <div className="border-t border-gray-200 pt-16 xl:grid xl:grid-cols-3 xl:gap-x-8">
                  <div>
                    <h2 className="text-base font-semibold text-green-600 tracking-wide uppercase">
                      Everything you need
                    </h2>
                    <p className="mt-2 text-3xl font-extrabold text-gray-900">
                      All-in-one platform
                    </p>
                    <p className="mt-4 text-lg text-gray-500">
                      JD is a boutique platform that offers integration services
                      to a handfull of proactive customers.
                    </p>
                  </div>
                  <div className="mt-4 sm:mt-8 md:mt-10 md:grid md:grid-cols-2 md:gap-x-8 xl:mt-0 xl:col-span-2">
                    <ul className="divide-y divide-gray-200">
                      <li className="py-4 flex md:py-0 md:pb-4">
                        {/* Heroicon name: outline/check */}
                        <svg
                          className="flex-shrink-0 h-6 w-6 text-green-500"
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
                        <span className="ml-3 text-base text-gray-500">
                          Unlimited Platforms and Databases
                        </span>
                      </li>
                      <li className="py-4 flex">
                        {/* Heroicon name: outline/check */}
                        <svg
                          className="flex-shrink-0 h-6 w-6 text-green-500"
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
                        <span className="ml-3 text-base text-gray-500">
                          Unlimited Program executions
                        </span>
                      </li>
                      <li className="py-4 flex">
                        {/* Heroicon name: outline/check */}
                        <svg
                          className="flex-shrink-0 h-6 w-6 text-green-500"
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
                        <span className="ml-3 text-base text-gray-500">
                          1 program development per month
                        </span>
                      </li>
                      <li className="py-4 flex">
                        {/* Heroicon name: outline/check */}
                        <svg
                          className="flex-shrink-0 h-6 w-6 text-green-500"
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
                        <span className="ml-3 text-base text-gray-500">
                          Unlimited notifications and alerts
                        </span>
                      </li>
                      <li className="py-4 flex">
                        {/* Heroicon name: outline/check */}
                        <svg
                          className="flex-shrink-0 h-6 w-6 text-green-500"
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
                        <span className="ml-3 text-base text-gray-500">
                          Free monitoring and maintenance
                        </span>
                      </li>
                    </ul>
                    <ul className="border-t border-gray-200 divide-y divide-gray-200 md:border-t-0">
                      <li className="py-4 flex md:border-t-0 md:py-0 md:pb-4">
                        {/* Heroicon name: outline/check */}
                        <svg
                          className="flex-shrink-0 h-6 w-6 text-green-500"
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
                        <span className="ml-3 text-base text-gray-500">
                          1 hour/month zoom with Founder/CEO
                        </span>
                      </li>
                      <li className="py-4 flex">
                        {/* Heroicon name: outline/check */}
                        <svg
                          className="flex-shrink-0 h-6 w-6 text-green-500"
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
                        <span className="ml-3 text-base text-gray-500">
                          Access to Free Program Marketplace
                        </span>
                      </li>
                      <li className="py-4 flex">
                        {/* Heroicon name: outline/check */}
                        <svg
                          className="flex-shrink-0 h-6 w-6 text-green-500"
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
                        <span className="ml-3 text-base text-gray-500">
                          Unlimited Users
                        </span>
                      </li>
                      <li className="py-4 flex">
                        {/* Heroicon name: outline/check */}
                        <svg
                          className="flex-shrink-0 h-6 w-6 text-green-500"
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
                        <span className="ml-3 text-base text-gray-500">
                          1 email, web, sms, video template / month
                        </span>
                      </li>
                      <li className="py-4 flex">
                        {/* Heroicon name: outline/check */}
                        <svg
                          className="flex-shrink-0 h-6 w-6 text-green-500"
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
                        <span className="ml-3 text-base text-gray-500">
                          Excelent service aimed at long term contracts
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="relative bg-gray-900">
              <div className="relative h-56 bg-green-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
                <img
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixqx=1JO2mPl47d&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&sat=-100"
                  alt=""
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600"
                  style={{ mixBlendMode: "multiply" }}
                />
              </div>
              <div className="relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
                <div className="md:ml-auto md:w-1/2 md:pl-10">
                  <h2 className="text-base font-semibold uppercase tracking-wider text-gray-300">
                    JD for Agencies
                  </h2>
                  <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
                    Build for Counsultants
                  </p>
                  <p className="mt-3 text-lg text-gray-300">
                    JD was build for consultants and agencies in mind, our
                    program allows your agency to brand JD and offer it to your
                    customers as if it was your own integration tool without
                    having to deal with code, monitoring and platform security
                    reviews.
                  </p>
                  <div className="mt-8">
                    <div className="inline-flex rounded-md shadow">
                      <a
                        href="mailto:sales@jungledynamics.com"
                        className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
                      >
                        Email our sales department
                        {/* Heroicon name: solid/external-link */}
                        <svg
                          className="-mr-1 ml-3 h-5 w-5 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <Footer />{" "}
        </div>
      </div>
    </div>
  );
}
