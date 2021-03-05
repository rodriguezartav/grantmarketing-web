import { useState, useEffect } from "react";
import { useMutate } from "../helpers/useFetch";
import Router from "next/router";
import { useRouter } from "next/router";

export default function Login(props) {
  const [view, setView] = useState("PHONE");
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [countryCode, setCountryCode] = useState("+1");
  const [localError, setLocalError] = useState(null);

  const router = useRouter();

  const { response, mutate, loading, error } = useMutate("/api/login");

  const codeMutate = useMutate("/api/code", { method: "PUT" });

  useEffect(() => {
    const { phone } = router.query;
    if (phone && phone.length > 0) {
      setPhone(phone);
      setView("CODE");
    }
  }, []);

  useEffect(() => {
    if (!response) return;

    setView("CODE");
  }, [response]);

  useEffect(() => {
    if (!codeMutate.response) return;
    window.localStorage.setItem("user_id", codeMutate.response.id);
    window.localStorage.setItem("user_name", codeMutate.response.name);
    window.localStorage.setItem("customer_id", codeMutate.response.customer_id);
    window.localStorage.setItem(
      "customer_name",
      codeMutate.response.customer_name
    );
    window.localStorage.setItem("token", codeMutate.response.token);
    Router.replace("/dashboard");
  }, [codeMutate.response]);

  function onLoginClick() {
    setLocalError(null);

    mutate({ countryCode: countryCode, phone: phone });
  }

  function onCodeClick() {
    codeMutate.mutate({ code: code, countryCode: countryCode, phone: phone });
  }

  function onCodeBackClick() {
    setView("PHONE");
  }

  function renderPhone() {
    return (
      <form className="mt-8 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" defaultValue="true" />

        <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
          <div className="sm:col-span-2">
            <label
              htmlFor="first_name"
              className="block text-sm font-medium text-gray-700"
            >
              Country Code
            </label>
            <div className="mt-1">
              <select
                value={countryCode}
                onChange={(e) => setCountryCode(e.currentTarget.value)}
                id="country"
                name="country"
                autoComplete="country"
                className="focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              >
                <option>+1</option>
                <option>+506</option>
              </select>
            </div>
          </div>
          <div className="sm:col-span-4">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Mobile phone
            </label>
            <div className="mt-1">
              <input
                value={phone}
                onChange={(e) => {
                  const newValue = e.currentTarget.value;
                  console.log(newValue);
                  setPhone(newValue);
                }}
                id="phone"
                name="phone"
                type="number"
                autoComplete="phone"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm">
            {error &&
              "Your phone was not found, please try again or create an account"}
          </div>
          <div className="text-sm">{localError && localError}</div>
        </div>
        <div>
          {loading ? null : (
            <a
              onClick={onLoginClick}
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
        <p className="mt-2 text-center text-sm text-gray-600">
          Code was sent via SMS to {phone}
        </p>
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
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
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
            Send Code
          </a>
          <a
            onClick={onCodeBackClick}
            className="group cursor-pointer relative w-full flex justify-center mt-5 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-green-600 bg-gray-300 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Cancel
          </a>
        </div>
      </form>
    );
  }

  return (
    <div>
      <div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          {view == "CODE"
            ? "Security Code Challenge"
            : "Log in to your account"}
        </h2>
        {props.creatable && view == "PHONE" && (
          <p className="mt-2 text-center text-sm text-gray-600">
            or
            <a
              href="/signin"
              className="font-medium ml-1 text-green-600 hover:text-green-500"
            >
              Create an account
            </a>
          </p>
        )}
      </div>

      {view == "CODE" ? renderCode() : renderPhone()}
    </div>
  );
}
