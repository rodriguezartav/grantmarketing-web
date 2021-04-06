import Head from "next/head";
import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Router from "next/router";
import Login from "../components/Login";

export default function Home() {
  const [domain, setDomain] = React.useState(null);

  React.useEffect(() => {
    if (window.location.host.indexOf("localhost") > -1) setDomain("mogi");
    else if (window.location.host.indexOf("jungledynamics") > -1)
      setDomain("jd");
    else if (window.location.host.indexOf("rodco") > -1) setDomain("rodco");
    else if (window.location.host.indexOf("signalon") > -1)
      setDomain("signalon");
  }, []);

  return (
    <div>
      <Head>
        <title>Integration Platform</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-white">
        <div className="relative overflow-hidden">
          <main>
            <div className="pt-10 bg-green-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
              <div className="mx-auto max-w-7xl lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                  <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                    <div className="lg:py-24">
                      <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                        <span className="block capitalize">
                          {domain} Connect
                        </span>
                      </h1>
                      <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                        Use this tool to connect your accounts and enable the
                        integrations.
                      </p>

                      <div className="mt-10 sm:mt-12">
                        <form className="sm:max-w-xl sm:mx-auto lg:mx-0">
                          <div className="sm:flex">
                            <div className="min-w-0 flex-1">
                              <label htmlFor="email" className="sr-only">
                                Mobile Number
                              </label>
                            </div>
                            <div className="mt-3 sm:mt-0 sm:ml-3"></div>
                          </div>
                        </form>
                      </div>
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

            <div className=" flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
              <div className="max-w-md w-full ">
                <Login redirect="/dashboard_subaccount" creatable={false} />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
