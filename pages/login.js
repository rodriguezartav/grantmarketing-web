import Head from "next/head";
import { useState, useEffect } from "react";
import { useMutate } from "../helpers/useFetch";
import Router from "next/router";

export default function Login() {
  const [view, setView] = useState("PHONE");
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");

  const { response, mutate, loading, error } = useMutate("/api/login");

  const codeMutate = useMutate("/api/code", { method: "PUT" });

  useEffect(() => {
    if (!response) return;

    setView("CODE");
  }, [response]);

  useEffect(() => {
    if (!codeMutate.response) return;
    window.localStorage.setItem("user_id", codeMutate.response.id);
    window.localStorage.setItem("user_name", codeMutate.response.name);
    window.localStorage.setItem("customer_id", codeMutate.response.customer_id);
    window.localStorage.setItem("token", codeMutate.response.token);
    Router.replace("/dashboard");
  }, [codeMutate.response]);

  function onLoginClick() {
    mutate({ phone: phone });
  }

  function onCodeClick() {
    codeMutate.mutate({ code: code, phone: phone });
  }

  function onCodeBackClick() {
    setView("PHONE");
  }

  function renderPhone() {
    return (
      <form className="mt-8 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <label htmlFor="email-address" className="sr-only">
              Mobile Phone Number
            </label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.currentTarget.value)}
              id="mobile-phone"
              name="phone"
              type="phone"
              autoComplete="phone"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Mobile Phone"
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-sm">
            {error
              ? error.message
              : "We'll send an SMS to your mobile phone with your login code"}
          </div>
        </div>
        <div>
          {loading ? null : (
            <a
              onClick={onLoginClick}
              className="group cursor-pointer  relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                {/* Heroicon name: solid/lock-closed */}
                <svg
                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
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
              Log in
            </a>
          )}
        </div>
      </form>
    );
  }

  function renderCode() {
    return (
      <form className="mt-8 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <label htmlFor="email-address" className="sr-only">
              Code
            </label>
            <input
              value={code}
              onChange={(e) => setCode(e.currentTarget.value)}
              id="mobile-code"
              name="code_122"
              type="text"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Secret Code"
            />
          </div>
        </div>

        <p className="text-red-900 m-4">
          {codeMutate.error ? codeMutate.error.message : null}
        </p>

        <div className="flex items-center justify-between"></div>
        <div>
          <a
            onClick={onCodeClick}
            className="group cursor-pointer  relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              {/* Heroicon name: solid/lock-closed */}
              <svg
                className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
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
            Send Code
          </a>
          <a
            onClick={onCodeBackClick}
            className="group cursor-pointer relative w-full flex justify-center mt-5 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-indigo-600 bg-gray-300 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Cancel
          </a>
        </div>
      </form>
    );
  }

  return (
    <div>
      <Head>
        <title>Jungledynamics Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Log in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              or
              <a
                href="/signin"
                className="font-medium ml-1 text-indigo-600 hover:text-indigo-500"
              >
                Create an account
              </a>
            </p>
          </div>

          {view == "CODE" ? renderCode() : renderPhone()}
        </div>
      </div>
    </div>
  );
}