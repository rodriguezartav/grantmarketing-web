import { Transition } from "@headlessui/react";
import React, { useState } from "react";

import useSWR from "swr";
import { useMutate } from "../helpers/useFetch";
import Schedule_Configuration from "./Schedule_Configuration";
import fetcher from "../helpers/fetcher";

export default function Scripts() {
  const { data, error, mutate } = useSWR("/api/scripts", fetcher);
  const scheduleMutation = useMutate(`/api/schedule_enable`);
  const scheduleDestroy = useMutate(`/api/schedule_disable`);
  const [isConfigurationOpen, setIsConfigurationOpen] = useState(false);
  const [selectedScript, setSelectedScript] = useState();

  function onEdit(item) {
    return async () => {
      setSelectedScript(item);
      setIsConfigurationOpen(true);
    };
  }

  async function onSave(item) {
    await scheduleMutation.mutate(item);
    setIsConfigurationOpen(false);
    mutate([], true);
  }

  async function run() {}

  function onDisable(item) {
    return async () => {
      await scheduleDestroy.mutate(item);
    };
  }

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div>
      {isConfigurationOpen ? (
        <Schedule_Configuration
          onSave={onSave}
          setIsConfigurationOpen={setIsConfigurationOpen}
          schedule={selectedScript.schedule}
        />
      ) : null}

      <div className="mt-10 sm:hidden">
        <div className="px-4 sm:px-6">
          <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">
            Scripts
          </h2>
        </div>
        <ul className="mt-3 border-t border-gray-200 divide-y divide-gray-100">
          {data.map((item) => (
            <Li key={item.id} item={item} />
          ))}
        </ul>
      </div>

      <div className="hidden mt-8 sm:block">
        <div className="align-middle inline-block min-w-full border-b border-gray-200">
          <table className="min-w-full">
            <thead>
              <tr className="border-t border-gray-200">
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <span className="lg:pl-2">Scripts</span>
                </th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Period ( Minutes)
                </th>
                <th className="hidden md:table-cell px-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Executed
                </th>
                <th className="pr-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider" />
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {data.map((item) => (
                <Tr
                  onDisable={onDisable(item)}
                  onEdit={onEdit(item)}
                  key={item.id}
                  item={item}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function Tr(props) {
  const [isOpen, setIsOpen] = useState(false);
  const container = React.useRef(null);

  React.useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!container.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, [isOpen, container]);

  return (
    <tr ref={container}>
      <td className="px-6 py-3 max-w-0 w-full whitespace-nowrap text-sm font-medium text-gray-900">
        <div className="flex items-center space-x-3 lg:pl-2">
          <div
            className={`flex-shrink-0 w-2.5 h-2.5 rounded-full bg-${
              props.item.public ? "purple" : "yellow"
            }-600`}
            aria-hidden="true"
          />
          <a href="#" className="truncate hover:text-gray-600">
            <span>
              {props.item.name}
              <span className="text-gray-500 ml-1 font-normal">
                in {props.item.location}
              </span>
            </span>
          </a>
        </div>
      </td>

      <td className="px-6 py-3 text-sm text-gray-500 font-medium">
        <div className="flex items-start space-x-2">
          <span className="flex-shrink-0 text-xs leading-5 font-medium truncate">
            {props.item.description}
          </span>
        </div>
      </td>
      <td className="px-6 py-3 text-sm text-gray-500 font-medium">
        <div className="flex items-center space-x-2">
          <span className="flex-shrink-0 text-xs leading-5 font-medium">
            {props.item.schedule ? props.item.schedule.period_in_minutes : "-"}
          </span>
        </div>
      </td>
      <td className="hidden md:table-cell px-6 py-3 whitespace-nowrap text-sm text-gray-500 text-right">
        {props.item.schedule ? props.item.schedule.last_run : "Never"}
      </td>
      <td className="pr-6">
        <div className="relative flex justify-end items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-haspopup="true"
            type="button"
            className="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
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
              className="mx-3 origin-top-right absolute right-7 top-0 w-48 mt-1 rounded-md shadow-lg z-10 bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="project-options-menu-0"
            >
              <div className="py-1" role="none">
                <a
                  onClick={() => {
                    props.onEdit();
                    setIsOpen(false);
                  }}
                  className="group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  {/* Heroicon name: solid/pencil-alt="" */}
                  <svg
                    className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                    <path
                      fillRule="evenodd"
                      d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Schedule
                </a>
                <a
                  href="#"
                  className="group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  {/* Heroicon name: solid/duplicate */}
                  <svg
                    className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z" />
                    <path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z" />
                  </svg>
                  Run Now
                </a>
              </div>
              <div className="py-1" role="none">
                <a
                  onClick={() => {
                    props.onDisable();
                    setIsOpen(false);
                  }}
                  className="group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  {/* Heroicon name: solid/trash */}
                  <svg
                    className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Disable
                </a>
              </div>
            </div>
          </Transition>
        </div>
      </td>
    </tr>
  );
}

function Li(props) {
  return (
    <li>
      <a
        href="#"
        className="group flex items-center justify-between px-4 py-4 hover:bg-gray-50 sm:px-6"
      >
        <span className="flex items-center truncate space-x-3">
          <span
            className="w-2.5 h-2.5 flex-shrink-0 rounded-full bg-pink-600"
            aria-hidden="true"
          />
          <span className="font-medium truncate text-sm leading-6">
            GraphQL API -
            <span className="truncate pl-3 font-normal text-gray-500">
              - in Engineering
            </span>
          </span>
        </span>
        {/* Heroicon name: solid/chevron-right */}
        <svg
          className="ml-4 h-5 w-5 text-gray-400 group-hover:text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </a>
    </li>
  );
}
