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

      <div className="bg-white">
        <div className="relative overflow-hidden">
          <Header />
          <main>
            <div className="pt-10 bg-gradient-to-r from-cyan-600 to-green-800 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
              <div className="mx-auto max-w-7xl lg:px-8">
                <div className="lg:flex lg:gap-8">
                  <div className="mx-auto flex-1 max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                    <div className="lg:py-24 ">
                      <a
                        href="#"
                        className="hidden  md:visible sm:inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
                      >
                        <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-gradient-to-r from-teal-500 to-green-600 rounded-full">
                          Made in the rainforest
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
                        <span className="">The Customer Data Platform</span>
                        <span className="bg-clip-text text-2xl text-transparent bg-gradient-to-r from-teal-200 to-cyan-400 block">
                          by Roberto Rodriguez
                        </span>
                      </h1>

                      <p className="mt-4 text-xl  tracking-tight  text-white sm:mt-8  lg:mt-6 ">
                        Custom built for each customer or white-labeled for
                        trusted partners
                      </p>
                    </div>
                  </div>
                  <div className="mt-12 flex-1 sm:max-w-xs -mb-16 sm:-mb-48 lg:m-0 lg:relative">
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
                  <p className="mt-5 max-w-3xl mx-auto text-3xl text-gray-500">
                    Long gone are the days where{" "}
                    <span className="text-green-500 text-4xl">one</span>{" "}
                    software package runs the whole business. Modern operations
                    are made up of software "blocks" that connect with each
                    other, like Lego.
                  </p>

                  <p className="mt-10 max-w-3xl mx-auto text-2xl font-light text-gray-500">
                    Each company picks the specific blocks they need, and the
                    Customer Data Platform (CDP) is the brain that pushes and
                    pulls data between each block.
                  </p>

                  <div className="mt-10 sm:mt-20">
                    <ul className="mt-3 opacity-90 sm:opacity-90 grid grid-cols-4 gap-3 sm:gap-6 sm:grid-cols-4 lg:grid-cols-10">
                      <li className="col-span-1 flex shadow-sm rounded-md">
                        <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                          <div className="flex-1 px-4 py-2 text-sm truncate">
                            <Image
                              src="/jd/intercom.png"
                              alt="intercom"
                              width={205}
                              height={50}
                            />
                          </div>
                        </div>
                      </li>
                      <li className="col-span-1 flex shadow-sm rounded-md">
                        <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                          <div className="flex-1 px-4 py-2 text-sm truncate">
                            <Image
                              src="/jd/hubspot.png"
                              alt="hubspot"
                              width={135}
                              height={50}
                            />
                          </div>
                        </div>
                      </li>
                      <li className="col-span-1 flex shadow-sm rounded-md">
                        <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                          <div className="flex-1 px-4 py-2 text-sm truncate">
                            <Image
                              src="/jd/google.png"
                              alt="google"
                              width={205}
                              height={50}
                            />
                          </div>
                        </div>
                      </li>
                      <li className="col-span-1 flex shadow-sm rounded-md">
                        <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                          <div className="flex-1 px-4 py-2 text-sm truncate">
                            <Image
                              src="/jd/s3.png"
                              alt="s3"
                              width={205}
                              height={50}
                            />
                          </div>
                        </div>
                      </li>
                      <li className="col-span-1 flex shadow-sm rounded-md">
                        <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                          <div className="flex-1 px-4 py-2 text-sm truncate">
                            <Image
                              src="/jd/salesforce.png"
                              alt="salesforce"
                              width={80}
                              height={50}
                            />
                          </div>
                        </div>
                      </li>
                      <li className="col-span-1 flex shadow-sm rounded-md">
                        <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                          <div className="flex-1 px-4 py-2 text-sm truncate">
                            <Image
                              src="/jd/mailchimp.png"
                              alt="mailchimp"
                              width={135}
                              height={50}
                            />
                          </div>
                        </div>
                      </li>
                      <li className="col-span-1 flex shadow-sm rounded-md">
                        <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                          <div className="flex-1 px-4 py-2 text-sm truncate">
                            <Image
                              src="/jd/mixpanel.png"
                              alt="mixpanel"
                              width={135}
                              height={50}
                            />
                          </div>
                        </div>
                      </li>
                      <li className="col-span-1 flex shadow-sm rounded-md">
                        <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                          <div className="flex-1 px-4 py-2 text-sm truncate">
                            <Image
                              src="/jd/tablue.png"
                              alt="tablue"
                              width={200}
                              height={50}
                            />
                          </div>
                        </div>
                      </li>
                      <li className="col-span-1 flex shadow-sm rounded-md">
                        <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                          <div className="flex-1 px-4 py-2 text-sm truncate">
                            <Image
                              src="/jd/twilio.png"
                              alt="twilio"
                              width={135}
                              height={50}
                            />
                          </div>
                        </div>
                      </li>
                    </ul>
                    <p className=" text-green-700 mt-3 text-sm align-middle">
                      and 500+ more
                    </p>
                  </div>

                  <p className="mt-10 max-w-4xl mx-auto text-2xl font-light text-gray-500">
                    The best and largest self-service CDP is{" "}
                    <a href="segment.io">Segment</a>. It's got an impressive
                    catalog of connections to business innovation apps{" "}
                    <span className="text-green-600">
                      but their customers need a high level of tech expertise,
                      and lot's of time to research, learn to use, and configure
                      such a complex architecture.
                    </span>
                  </p>

                  <p className="mt-10 mb-20 max-w-4xl mx-auto text-2xl font-light text-gray-500">
                    JungleDynamics, instead, is a boutique CDP that is
                    personally serviced by me, so that my customers can take
                    advantage of modern software without dedicated tech
                    resources
                  </p>
                </div>
              </div>

              <div className="relative pt-16 pb-32 overflow-hidden">
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100"
                />
                <div className="relative">
                  <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                    <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
                      <div>
                        <div>
                          <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-green-600 to-green-600">
                            {/* Heroicon name: outline/inbox */}
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
                                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                              />
                            </svg>
                          </span>
                        </div>
                        <div className="mt-6">
                          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                            The current state of the market
                          </h2>
                          <p className="mt-10 max-w-3xl mx-auto text-xl text-gray-500">
                            Modern software is a self-service business model,
                            where the infrastructure and human resources are
                            shared between millions of customers.
                            <span className="text-green-600">
                              This model dramatically reduced prices and gave
                              birth to Uber, AirBnb, Facebook, Amazon, Tesla,
                              Twilio, Google, Salesforce...{" "}
                            </span>
                          </p>

                          <p className="mt-10 max-w-3xl mx-auto text-xl text-gray-500">
                            The scale this platforms reach and the idea of
                            selling the same software to millions naturally
                            forces their customers to adapt their operations to
                            the platform: A tradeoff with ramifications that
                            does not cost "only" $49.99 per user.
                          </p>

                          <p className="mt-10 mb-15 max-w-2xl mx-auto text-xl text-gray-500">
                            CDP's came to exits as a buffer, giving customers a
                            workspace to balance this tradeoff, a place to
                            customize their unique operation. But again, setting
                            it requires a unique set of skills that reach beyond
                            software because now you have to adapt to the CDP
                            without loosing the advantange.
                          </p>
                        </div>
                      </div>
                      <div className="mt-8 border-t border-gray-200 pt-6">
                        <blockquote>
                          <div></div>
                          <footer className="mt-3">
                            <div className="flex items-center space-x-3">
                              <div className="flex-shrink-0">
                                <img
                                  className="h-6 w-6 rounded-full"
                                  src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                                  alt=""
                                />
                              </div>
                              <div className="text-base font-medium text-gray-700">
                                extract from xcccccccc by Roberto Rodriguez
                              </div>
                            </div>
                          </footer>
                        </blockquote>
                      </div>
                    </div>
                    <div className="mt-12 sm:mt-16 lg:mt-0">
                      <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                        <img
                          className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                          src="https://tailwindui.com/img/component-images/inbox-app-screenshot-1.jpg"
                          alt="Inbox user interface"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-24">
                  <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                    <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                      <div>
                        <div>
                          <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-green-600 to-green-600">
                            {/* Heroicon name: outline/sparkles */}
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
                                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                              />
                            </svg>
                          </span>
                        </div>
                        <div className="mt-6">
                          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                            My solution to the problem
                          </h2>

                          <p className="mt-4 text-lg text-gray-500">
                            As an indie entreprenuer I did not set out to create
                            a software empire, but instead a well balanced
                            solution for my customers.
                          </p>

                          <p className="mt-4 text-lg text-gray-500">
                            A boutique CDP that reliably pulls and pushes data
                            between apps for a few customers, and most
                            importantly to be able to tailor their operations in
                            code, continuously.
                          </p>

                          <p className="mt-4 text-lg text-gray-500">
                            Jungledynamics is in fact is capped by the law of
                            demand, for each new customer the price increases
                            10%.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
                      <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                        <img
                          className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                          src="https://tailwindui.com/img/component-images/inbox-app-screenshot-2.jpg"
                          alt="Customer profile user interface"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* This example requires Tailwind CSS v2.0+ */}

            {/* Testimonial section
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
                          inventories and we can make price lists for platforms
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

            
            <div className="relative bg-white py-16 sm:py-24 lg:py-32">
              <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                <h2 className="text-base font-semibold tracking-wider text-cyan-600 uppercase">
                  Hire me, via my sustainable service at a fixed rate
                </h2>
                <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                  Developer as a service
                </p>

                <p className="mt-3 max-w-3xl mx-auto text-xl text-gray-500">
                  The Cloud business is about reducing costs by sharing
                  resources. The way all these software platforms become so
                  valuable is by building <b>one</b> common solutions that's
                  shared between all their customers.{" "}
                  <span className="mt-3  max-w-3xl mx-auto text-xl text-red-800">
                    Is normal for those customers to discover problems when they
                    try to address their specific needs.
                  </span>
                </p>

                <p className="mt-10 max-w-3xl mx-auto text-2xl text-gray-600">
                  Jungledynamic solves this
                  <br /> by having Roberto Rodriguez
                  <br /> write custom programs
                  <br /> specific for each customer
                  <br /> at a fixed monthly rate
                </p>

                <h2 className="text-base mt-10 font-semibold tracking-wider text-cyan-600 uppercase">
                  Some examples...
                </h2>

                <div className="mt-12">
                  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
                    <div className="pt-6">
                      <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                        <div className="-mt-6">
                          <div>
                            <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-md shadow-lg">
                              
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
                          <h3 className="mt-8 text-lg font-medium text-gray-900  tracking-tight">
                            Platform Integrations
                          </h3>
                          <p className="mt-5 text-base text-left text-gray-500">
                            The most typical use case. A company has some
                            information on platform A (Salesforce Leads) and
                            other information on Platform B (Shopify Sales) and
                            they want to have both platforms synchronized with
                            specific business rules so that Shopify prices are
                            set in Salesforce for example.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="pt-6">
                      <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                        <div className="-mt-6">
                          <div>
                            <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-md shadow-lg">
                              
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
                            Customer Success
                          </h3>
                          <p className="mt-5 text-base text-gray-500">
                            Use platforms like Segment, CustomerIO and Google to
                            collect customer data from several points ( website,
                            in-store, ads, emails, phone calls ) then make
                            realtime destinations and execute actions or alerts
                            downstream. Send discounts, emails, schedule visits,
                            phone calls, surveys - anything you can think of.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="pt-6">
                      <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                        <div className="-mt-6">
                          <div>
                            <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-md shadow-lg">
                              
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
                            Multi-Channel Call Centers
                          </h3>
                          <p className="mt-5 text-base text-gray-500">
                            Go beyond emails & ads, and connect with customers
                            via voice, sms, whatsapp & messenger. Jungledynamics
                            + Twilio open the door to simple communications all
                            the way to fully integrated corporate grade call
                            centers.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="pt-6">
                      <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                        <div className="-mt-6">
                          <div>
                            <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-md shadow-lg">
                              
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
                            Business Intelligence and Alerting
                          </h3>
                          <p className="mt-5 text-base text-gray-500">
                            One of the most recurring request is to bring data
                            from different sources and transform it in a way
                            that can be analized using a visual business
                            intelligence platform, or even just export it to
                            Excel. Add realtime notifications and alerts ( like
                            a feed of all online purchases, or VIP account
                            support requests ) into your teams chat such as
                            Slack.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="pt-6">
                      <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                        <div className="-mt-6">
                          <div>
                            <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-md shadow-lg">
                              
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
                            True Marketing Automation
                          </h3>
                          <p className="mt-5 text-base text-gray-500">
                            Marketing Automation is trendy - but most of the
                            times the cherry on top of the pie to truly lock the
                            profit escapes throught the cracks of no-code
                            platforms. JD is the perfect complement for those
                            high-yield ideas.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="pt-6">
                      <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                        <div className="-mt-6">
                          <div>
                            <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-md shadow-lg">
                              
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
                            Reduce Salesforce and Microsoft Complexities
                          </h3>
                          <p className="mt-5 text-base text-gray-500">
                            Large platforms are extremely complex, good quality
                            developers are 5x more expensive and hard to
                            recruit. After years building highly successful
                            salesforce apps, Roberto realized is much more cost
                            effective to use the approach he built into JD.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            

            <Price />

            <Faq />

             */}

            <div className="relative bg-gray-900">
              <div className=" hidden md:block overflow-hidden relative h-56 bg-green-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
                <video
                  style={{
                    top: "50%",
                    left: "50%",
                    minWidth: "100%",
                    minHeight: "100%",
                    width: "auto",
                    height: "auto",
                    zIndex: "-100",
                  }}
                  autoPlay
                  loop
                  muted
                  id="background"
                >
                  <source
                    src="https://s3-us-west-2.amazonaws.com/converterpoint-22/encodings/f243965512eb733294bc6ef0356c2dd9.mp4"
                    type="video/mp4"
                  />
                </video>

                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600"
                  style={{ mixBlendMode: "multiply" }}
                />
              </div>
              <div className="relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-20">
                <div className="md:ml-auto md:w-1/2 md:pl-10">
                  <h2 className="text-base font-semibold uppercase tracking-wider text-gray-300">
                    Indie Architect Developer & Inventor
                  </h2>
                  <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
                    About me (Roberto Rodriguez)
                  </p>
                  <p className="mt-3 text-lg text-gray-300">
                    After 2 decades in software, building and producing the most
                    successful Salesforce App in Silicon Valley, and speaking in
                    conferences worldwide; I took a step back from the "race"
                    and retired to my jungle retreat in Costa Rica.
                  </p>
                  <p className="mt-3 text-lg text-gray-300">
                    I created JungleDynamics after several business friends
                    approached me with the same problem, which is something I've
                    been wanting to do for a long time. Then I built the
                    platform and business model for 5 customers and currently
                    there are 3 spots left.
                  </p>

                  <div className="mt-8">
                    <div className="inline-flex rounded-md shadow">
                      <a
                        href="mailto:roberto@jungledynamics.com"
                        className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
                      >
                        Let's video chat online!
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
