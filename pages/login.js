import Head from "next/head";
import { useState, useEffect } from "react";
import { useMutate } from "../helpers/useFetch";
import Router from "next/router";
import { useRouter } from "next/router";
import Logo from "../components/Logo";
import Login from "../components/Login";

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
            <Login creatable={true} />
          </div>
        </div>
      </div>
    </div>
  );
}
