import React, { useState, useEffect } from "react";
import { useMutate } from "../helpers/useFetch";
import { options } from "superagent";

export default function Integration_Configuration(props) {
  const [schedule, setSchedule] = useState({ script_options: {} });
  const scriptOptions = useMutate(`/api/script_options`);

  useEffect(() => {
    if (props.schedule)
      setSchedule({
        ...props.schedule,
        script_options: props.schedule.scriptOptions || {},
      });
    scriptOptions.mutate({ location: props.script.location });
  }, []);

  function onFormChange(key, type) {
    return (e) => {
      let value = e.currentTarget.value;
      if (type == "integer") value = parseInt(value);
      setSchedule({ ...schedule, [key]: value });
    };
  }

  function onFormOptionsChange(key, type) {
    return (e) => {
      let value = e.currentTarget.value;
      if (type == "integer") value = parseInt(value);
      setSchedule({
        ...schedule,
        script_options: { ...(schedule.scriptOptions || {}), [key]: value },
      });
    };
  }

  async function onSave() {
    props.onSave(schedule);
  }

  function renderOptions() {
    if (!scriptOptions.response) {
      return null;
    }

    const keys = Object.keys(scriptOptions.response.options.properties);
    return keys.map((key) => {
      const option = scriptOptions.response.options.properties[key];
      return (
        <div key={key} className="pt-2 pb-8">
          <div>
            <p className="mt-1 text-sm text-gray-500">{option.descriptoon}</p>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-6">
              <label
                htmlFor={key}
                className="block text-sm font-medium text-gray-700"
              >
                {option.label}
              </label>
              <div className="mt-1">
                <input
                  value={schedule.script_options[key]}
                  onChange={onFormOptionsChange(key, options.type)}
                  type={option.type == "string" ? "text" : options.type}
                  name={key}
                  id={key}
                  className="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        {/*
Background overlay, show/hide based on modal state.

Entering: "ease-out duration-300"
  From: "opacity-0"
  To: "opacity-100"
Leaving: "ease-in duration-200"
  From: "opacity-100"
  To: "opacity-0"
    */}
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75" />
        </div>
        {/* This element is to trick the browser into centering the modal contents. */}
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          ​
        </span>
        {/*
Modal panel, show/hide based on modal state.

Entering: "ease-out duration-300"
  From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
  To: "opacity-100 translate-y-0 sm:scale-100"
Leaving: "ease-in duration-200"
  From: "opacity-100 translate-y-0 sm:scale-100"
  To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    */}
        <div
          className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <Period schedule={schedule} onChange={onFormChange} />

          {renderOptions()}

          <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
            <button
              onClick={onSave}
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:col-start-2 sm:text-sm"
            >
              Save
            </button>
            <button
              onClick={() => props.onClose(false)}
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:mt-0 sm:col-start-1 sm:text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Period(props) {
  return (
    <form className="space-y-8 divide-y divide-gray-200">
      <div className="space-y-8 divide-y divide-gray-200">
        <div className="pt-8">
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Script Schedule Configuration
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              This script will run once each period measured in minutes.
            </p>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-6">
              <label
                htmlFor="street_address"
                className="block text-sm font-medium text-gray-700"
              >
                Type the period in minutes
              </label>
              <div className="mt-1">
                <input
                  value={props.schedule.period_in_minutes}
                  onChange={props.onChange("period_in_minutes", "integer")}
                  type="number"
                  name="period_in_minutes"
                  id="period_in_minutes"
                  className="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
