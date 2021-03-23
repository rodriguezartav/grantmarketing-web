import React from "react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Connect() {
  const [customerId, setCustomerId] = useState("");
  const [providerName, setProviderName] = useState("");
  const router = useRouter();
  useEffect(() => {
    const { provider } = router.query;
    setProviderName(provider);
    setCustomerId(window.localStorage.getItem("customer_id"));
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 mb-6 text-center text-3xl font-extrabold  text-green-700">
            Connect with <span className="capitalize">{providerName}</span>
          </h2>
          <p className="mt-2 mb-6 text-center text-sm text-gray-600">
            We'll send you to {providerName} website, where you can accept the
            connection.
          </p>
          <div>
            <a
              href={`${process.env.API_URL}/integrations/${providerName}/${customerId}`}
              className="mb-5 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg
                  className="h-5 w-5 text-green-500 group-hover:text-green-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillrule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    cliprule="evenodd"
                  />
                </svg>
              </span>
              Connect Now
            </a>
          </div>
          <p className=" text-center text-xs text-gray-600">
            Note that the actual data is not stored in out servers or databases.
            Our job is to get it from A to B. Once that is done, we're out.
          </p>
        </div>
      </div>
    </div>
  );
}
