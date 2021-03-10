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
            <Price />

            <Faq />

            {/* CTA Section */}
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
                    succesfull Salesforce App in Silicon Valley, and speaking in
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
