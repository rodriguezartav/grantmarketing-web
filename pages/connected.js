import Head from "next/head";
import { useState, useEffect } from "react";
import { useMutate } from "../helpers/useFetch";
import Router from "next/router";

export default function LoginPage() {
  return (
    <div>
      <Head>
        <title>Jungledynamics Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img src="white_textlogo_dark_background.png" />
            <div>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Connected
              </h2>
              <p
                onClick={() => {
                  Router.replace("/dashboard");
                }}
                className="mt-2 text-center text-sm text-gray-600"
              >
                The platform integration was succesfull, you may continue
              </p>

              <a
                onClick={() => {
                  Router.replace("/dashboard");
                }}
                className="group cursor-pointer  relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  {/* Heroicon name: solid/lock-closed */}
                  <svg
                    className="h-5 w-5 text-green-500 group-hover:text-green-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                Continue
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
