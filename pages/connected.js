import Head from "next/head";
import { useState, useEffect } from "react";
import { useMutate } from "../helpers/useFetch";
import Router from "next/router";
import { useRouter } from "next/router";
import Logo from "../components/Logo";
import Connect from "../components/Connect";

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
              <a
                onClick={() => {
                  Router.replace("/dashboard");
                }}
                className="mt-2 text-center text-sm text-gray-600"
              >
                The platform integration was succesfull, click here to continue
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
