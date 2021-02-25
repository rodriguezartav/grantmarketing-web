import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import useSWR from "swr";
import { useMutate } from "../helpers/useFetch";

export default function Integration_Configuration(props) {
  const integrationMutation = useMutate(`/api/update_integration`);

  const [integration, setIntegration] = useState({});
  useEffect(() => {
    if (props.provider && props.provider.integration)
      setIntegration(props.provider.integration || {});
  }, []);

  function onFormChange(type) {
    return (e) => {
      setIntegration({ ...integration, [type]: e.currentTarget.value });
    };
  }

  async function connect() {
    const url = `${process.env.API_URL}/connect/${window.localStorage.getItem(
      "customer_id"
    )}/${props.provider.name}`;

    await integrationMutation.mutate(integration);

    props.onSave();

    if (props.provider.type.toLowerCase().indexOf("oauth") > -1)
      window.open(url);
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
          {props.provider.type == "user_password" && (
            <Password integration={integration} onChange={onFormChange} />
          )}

          {props.provider.type == "api_key" && (
            <API
              integration={integration}
              onChange={onFormChange}
              provider={props.provider}
            />
          )}

          {props.provider.type == "oauth" && (
            <Oauth
              integration={integration}
              onChange={onFormChange}
              provider={props.provider}
            />
          )}

          {props.provider.type == "private_oauth" && (
            <Private
              integration={integration}
              onChange={onFormChange}
              provider={props.provider}
            />
          )}

          <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
            <button
              onClick={connect}
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:col-start-2 sm:text-sm"
            >
              Connect
            </button>
            <button
              onClick={() => props.setIsConfigurationOpen(false)}
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

function Password(props) {
  return (
    <form className="space-y-8 divide-y divide-gray-200">
      <div className="space-y-8 divide-y divide-gray-200">
        <div className="pt-8">
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Key and Password Configuration
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              This integration requires that you configure a key or username and
              password.
            </p>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-6">
              <label
                htmlFor="street_address"
                className="block text-sm font-medium text-gray-700"
              >
                Username or Key
              </label>
              <div className="mt-1">
                <input
                  value={props.integration.client_id}
                  onChange={props.onChange("client_id")}
                  type="text"
                  name="street_address"
                  id="street_address"
                  autoComplete="street-address"
                  className="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-6">
              <label
                htmlFor="street_address"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  value={props.integration.client_secret}
                  onChange={props.onChange("client_secret")}
                  type="text"
                  name="street_address"
                  id="street_address"
                  autoComplete="street-address"
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

function Oauth(props) {
  return (
    <form className="space-y-8 divide-y divide-gray-200">
      <div className="space-y-8 divide-y divide-gray-200">
        <div className="pt-8">
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Oauth Connection
            </h3>

            <div className="sm:col-span-6">
              <label
                htmlFor="application_id"
                className="block text-sm font-medium text-gray-700"
              >
                Account or Instance URI ( Optional )
              </label>
              <div className="mt-1">
                <input
                  value={props.integration.application_id}
                  onChange={props.onChange("application_id")}
                  type="text"
                  name="application_id"
                  id="applicatoon_id"
                  className="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <p className="mt-1 text-sm text-gray-500">
              Click on the connect button to take you to the approval screen.
            </p>
          </div>
        </div>
      </div>
    </form>
  );
}

function Private(props) {
  return (
    <form className="space-y-8 divide-y divide-gray-200">
      <div className="space-y-8 divide-y divide-gray-200">
        <div className="pt-8">
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Oauth Configuration
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              This integration requires that you create and OAUTH service on the
              platform and configure the client id and secret on this screen.
            </p>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-6">
              <label
                htmlFor="street_address"
                className="block text-sm font-medium text-gray-700"
              >
                Client Id
              </label>
              <div className="mt-1">
                <input
                  value={props.integration.client_id}
                  onChange={props.onChange("client_id")}
                  type="text"
                  name="client_id"
                  id="client_id"
                  className="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-6">
              <label
                htmlFor="client_secret"
                className="block text-sm font-medium text-gray-700"
              >
                Client Secret
              </label>
              <div className="mt-1">
                <input
                  value={props.integration.client_secret}
                  onChange={props.onChange("client_secret")}
                  type="text"
                  name="client_secret"
                  id="client_sectret"
                  className="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-6">
              <label
                htmlFor="application_id"
                className="block text-sm font-medium text-gray-700"
              >
                Account or Instance URI ( Optional )
              </label>
              <div className="mt-1">
                <input
                  value={props.integration.application_id}
                  onChange={props.onChange("application_id")}
                  type="text"
                  name="application_id"
                  id="application_id"
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

function API(props) {
  return (
    <form className="space-y-8 divide-y divide-gray-200">
      <div className="space-y-8 divide-y divide-gray-200">
        <div className="pt-8">
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              API KEY Configuration
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              This integration requires that you configure your platforms API
              KEY
            </p>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-6">
              <label
                htmlFor="street_address"
                className="block text-sm font-medium text-gray-700"
              >
                API KEY
              </label>
              <div className="mt-1">
                <input
                  value={props.integration.api_key}
                  onChange={props.onChange("api_key")}
                  type="text"
                  name="street_address"
                  id="street_address"
                  autoComplete="street-address"
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
