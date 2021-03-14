import React from "react";
import useSWR from "swr";
import fetcher from "../helpers/fetcher";
import { useMutate, useFetch } from "../helpers/useFetch";
import moment from "moment";

export default function ApiKeys() {
  const { data, error, mutate } = useSWR("/api/api_keys", fetcher);

  const saveCustomerMutate = useMutate(`/api/api_keys`);

  async function createApiKey() {
    await saveCustomerMutate.mutate({});
    await mutate([], true);
  }
  function copyToClipboard(text) {
    return () => {
      navigator.clipboard.writeText(text).then(
        function () {
          alert("Api Key copied to clipboard");
        },
        function (err) {
          console.error("Async: Could not copy text: ", err);
        }
      );
    };
  }

  return (
    <div>
      {/* This example requires Tailwind CSS v2.0+ */}
      <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
        <div className="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap">
          <div className="ml-4 mt-2">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Api Keys
            </h3>
          </div>
          <div className="ml-4 mt-2 flex-shrink-0">
            <button
              onClick={createApiKey}
              type="button"
              className="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Create Api Key
            </button>
          </div>
        </div>

        {/* This example requires Tailwind CSS v2.0+ */}
        <div className="bg-white mt-5 shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {data &&
              data.map((item) => {
                return (
                  <li key={item.id}>
                    <a href="#" className="block hover:bg-gray-50">
                      <div className="px-4 py-4 sm:px-6">
                        <div className="flex items-center justify-between">
                          <p
                            onClick={copyToClipboard(item.token)}
                            className="text-xs max-w-md truncate font-medium pr-10 text-green-600 "
                          >
                            {item.token}
                          </p>

                          <div className="ml-2 flex-shrink-0 flex">
                            <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              User
                            </p>
                          </div>
                        </div>
                        <div className="mt-2 sm:flex sm:justify-between">
                          <div className="sm:flex">
                            <p className="flex items-center text-sm text-gray-500">
                              {/* Heroicon name: solid/users */}
                              <svg
                                className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                              </svg>
                              {item.user_id}
                            </p>
                            <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                              {/* Heroicon name: solid/location-marker */}
                              <svg
                                className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              Full Access
                            </p>
                          </div>
                          <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                            {/* Heroicon name: solid/calendar */}
                            <svg
                              className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <p>
                              Created on{" "}
                              <time
                                dateTime={moment(item.created_at).format(
                                  "YYYY-MM-DD"
                                )}
                              >
                                {moment(item.created_at).format("MMM DD YYYY")}
                              </time>
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
}
