import React, { useState } from "react";

import useSWR from "swr";
import { Transition } from "@headlessui/react";
import Integration_Configuration from "./Integration_Configuration";
import fetcher from "../helpers/fetcher";
import { useMutate, useFetch } from "../helpers/useFetch";

export default function Integrations() {
  const { data, error, mutate } = useSWR("/api/providers", fetcher);
  const integrationDestroy = useFetch(`/api/destroy_integration`);
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  async function removeIntegration(integration) {
    await integrationDestroy(integration);
    mutate([], true);
  }

  function onSave() {
    mutate([], true);
  }

  return (
    <React.Fragment>
      <div className="px-4 mt-6 sm:px-6 lg:px-8">
        <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">
          Integrations
        </h2>
        <ul className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 xl:grid-cols-4 mt-3">
          {data.map((item, index) => {
            return (
              <IntegrationItem
                onSave={onSave}
                removeIntegration={removeIntegration}
                key={item.id}
                item={item}
              />
            );
          })}
        </ul>
      </div>
    </React.Fragment>
  );
}

function IntegrationItem(props) {
  const container = React.useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState();
  const [isConfigurationOpen, setIsConfigurationOpen] = useState(false);

  React.useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!container.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, [isOpen, container]);

  function onEdit(item) {
    return () => {
      setIsOpen(false);
      setSelectedProvider(item);
      setIsConfigurationOpen(true);
    };
  }

  function onRemove(item) {
    return () => {
      setIsOpen(false);
      props.removeIntegration(item.integration);
    };
  }

  return (
    <React.Fragment>
      {isConfigurationOpen ? (
        <Integration_Configuration
          onSave={props.onSave}
          provider={selectedProvider}
          isConfigurationOpen={isConfigurationOpen}
          setIsConfigurationOpen={setIsConfigurationOpen}
        />
      ) : null}
      <li
        ref={container}
        className="relative col-span-1 flex shadow-sm rounded-md"
      >
        <div
          className={`flex-shrink-0 flex items-center justify-center w-16 bg-${
            props.item.integration ? "green" : "gray"
          }-600 text-white text-sm font-medium rounded-l-md`}
        >
          {props.item.id}
        </div>
        <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
          <div className="flex-1 px-4 py-2 text-sm truncate">
            <a
              href="#"
              className="text-gray-900 font-medium hover:text-gray-600 capitalize"
            >
              {props.item.name}
            </a>
            <p className="text-gray-500 capitalize">
              {props.item.type.replace("_", " ")}
            </p>
          </div>
          <div className="flex-shrink-0 pr-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-haspopup="true"
              className="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              <span className="sr-only">Open options</span>
              {/* Heroicon name: solid/dots-vertical */}
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
            </button>

            {/*
Dropdown panel, show/hide based on dropdown state.

Entering: "transition ease-out duration-100"
From: "transform opacity-0 scale-95"
To: "transform opacity-100 scale-100"
Leaving: "transition ease-in duration-75"
From: "transform opacity-100 scale-100"
To: "transform opacity-0 scale-95"
*/}

            <Transition
              show={isOpen}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <div
                className="z-10 mx-3 origin-top-right absolute right-10 top-3 w-48 mt-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="pinned-project-options-menu-0"
              >
                <div className="py-1" role="none">
                  {props.item.integration ? null : (
                    <a
                      onClick={onEdit(props.item)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      Connect
                    </a>
                  )}
                  {!props.item.integration ? null : (
                    <a
                      onClick={onEdit(props.item)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      Reconnect
                    </a>
                  )}
                </div>

                {props.item.integration ? (
                  <div className="py-1" role="none">
                    <a
                      onClick={onRemove(props.item)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      Disconnect
                    </a>
                  </div>
                ) : null}
              </div>
            </Transition>
          </div>
        </div>
      </li>
    </React.Fragment>
  );
}
