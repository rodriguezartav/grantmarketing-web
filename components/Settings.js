import React, { useState } from "react";
import useSWR from "swr";
import fetcher from "../helpers/fetcher";
import { useMutate, useFetch } from "../helpers/useFetch";

export default function Settings(props) {
  const { data, error, mutate } = useSWR("/api/customers", fetcher);
  const saveCustomerMutate = useMutate(`/api/customers`);

  const [showLoading, setShowLoading] = useState(false);

  const [customer, setCustomer] = useState({ tags: "" });

  React.useEffect(() => {
    if (data && data.id) {
      if (!data.tags) data.tags = "";
      setCustomer(data);
    }
  }, [data]);

  React.useEffect(() => {
    const newTags = customer.tags.split(",");
    newTags.push("paid");

    if (props.onComplete) {
      setCustomer({ ...customer, tags: newTags.join(",") });
      saveCustomerMutate.mutate({ ...customer, tags: newTags.join(",") });
    }
  }, [props.onComplete]);

  function onChange(key) {
    return (e) => {
      setCustomer({ ...customer, [key]: e.currentTarget.value });
    };
  }

  async function onChangePlan(e) {
    if (
      !customer.billing_email ||
      customer.billing_email.length == 0 ||
      !customer.zipcode ||
      customer.zipcode.length == 0 ||
      !customer.country ||
      customer.country.length == 0
    )
      return alert("Please fill your email, country and zip code");
    if (e.currentTarget.value == "paid") {
      setShowLoading(true);
      window.Paddle.Checkout.open({
        method: "inline",
        marketingConsent: false,
        postcode: customer.zipcode,
        country: customer.country,
        email: customer.billing_email,
        product: process.env.PADDLE_PLAN, // Replace with your Product or Plan ID
        allowQuantity: false,
        disableLogout: true,
        frameTarget: "checkout-container", // The className of your checkout <div>
        frameInitialHeight: 416,
        frameStyle:
          "width:100%; min-width:312px; background-color: transparent; border: none;", // Please ensure the minimum width is kept at or above 286px with checkout padding disabled, or 312px with checkout padding enabled. See "General" section under "Branded Inline Checkout" below for more information on checkout padding.
      });
    } else if (customer.tags.indexOf("paid") > -1)
      return alert(
        "To downgrade please send an email with Subject downgrade to roberto@jungledynamics.com from your registered billing email"
      );
    else setShowLoading(false);
  }

  async function saveCustomer() {
    saveCustomerMutate.mutate(customer);
  }

  return (
    <div className="h-screen overflow-scroll">
      <div className="space-y-6  sm:px-6 lg:px-0 lg:col-span-9">
        <section aria-labelledby="payment_details_heading">
          <div className="shadow sm:rounded-md sm:overflow-hidden">
            <div className="bg-white py-6 px-4 sm:p-6">
              <div>
                <h2
                  id="payment_details_heading"
                  className="text-lg leading-6 font-medium text-gray-900"
                >
                  Company details
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  Update your billing information. Please note that updating
                  your location could affect your tax rates.
                </p>
              </div>
              <div className="mt-6 grid grid-cols-4 gap-6">
                <div className="col-span-4 sm:col-span-2">
                  <label
                    htmlFor="first_name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    onChange={onChange("name")}
                    value={customer.name}
                    type="text"
                    name="first_name"
                    id="first_name"
                    autoComplete="cc-given-name"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                  />
                </div>
                <div className="col-span-4 sm:col-span-2">
                  <label
                    htmlFor="email_address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Billing Email address
                  </label>
                  <input
                    onChange={onChange("billing_email")}
                    value={customer.billing_email}
                    type="email"
                    name="email_address"
                    id="email_address"
                    autoComplete="email"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                  />
                </div>

                <div className="col-span-4 sm:col-span-2">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Country / Region
                  </label>
                  <select
                    onChange={onChange("country")}
                    id="country"
                    value={customer.country}
                    name="country"
                    autoComplete="country"
                    className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                  >
                    <option value=""></option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="CR">Costa Rica</option>
                  </select>
                </div>
                <div className="col-span-4 sm:col-span-2">
                  <label
                    htmlFor="postal_code"
                    className="block text-sm font-medium text-gray-700"
                  >
                    ZIP / Postal
                  </label>
                  <input
                    onChange={onChange("zipcode")}
                    value={customer.zipcode}
                    type="number"
                    name="postal_code"
                    id="postal_code"
                    autoComplete="postal-code"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                  />
                </div>
              </div>
            </div>
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              {!saveCustomerMutate.isLoading && (
                <a
                  onClick={saveCustomer}
                  className="bg-gray-800 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                >
                  Save
                </a>
              )}
            </div>
          </div>
        </section>
        {/* Plan */}
        <section aria-labelledby="plan_heading">
          <div className="shadow sm:rounded-md sm:overflow-hidden">
            <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
              <div>
                <h2
                  id="plan_heading"
                  className="text-lg leading-6 font-medium text-gray-900"
                >
                  Plan
                </h2>
              </div>
              <fieldset>
                <legend className="sr-only">Pricing plans</legend>
                <ul className="relative bg-white rounded-md -space-y-px">
                  <li>
                    {/* On: "bg-orange-50 border-orange-200 z-10", Off: "border-gray-200" */}
                    <div className="relative border rounded-tl-md rounded-tr-md p-4 flex flex-col md:pl-4 md:pr-6 md:grid md:grid-cols-3">
                      <label className="flex items-center text-sm cursor-pointer">
                        <input
                          onClick={onChangePlan}
                          name="pricing_plan"
                          type="radio"
                          defaultChecked={customer.tags.indexOf("paid") == -1}
                          className="h-4 w-4 text-orange-500 cursor-pointer focus:ring-gray-900 border-gray-300"
                          aria-describedby="plan-option-pricing-0 plan-option-limit-0"
                        />
                        <span className="ml-3 font-medium text-gray-900">
                          Free
                        </span>
                      </label>
                      <p
                        id="plan-option-pricing-0"
                        className="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-center"
                      >
                        {/* On: "text-orange-900", Off: "text-gray-900" */}
                        <span className="font-medium">$0 / mo</span>
                        {/* On: "text-orange-700", Off: "text-gray-500" */}
                      </p>
                      {/* On: "text-orange-700", Off: "text-gray-500" */}
                      <p
                        id="plan-option-limit-0"
                        className="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-right"
                      >
                        Up to 1 active program
                      </p>
                    </div>
                  </li>
                  <li>
                    {/* On: "bg-orange-50 border-orange-200 z-10", Off: "border-gray-200" */}
                    <div className="relative border border-gray-200 p-4 flex flex-col md:pl-4 md:pr-6 md:grid md:grid-cols-3">
                      <label className="flex items-center text-sm cursor-pointer">
                        <input
                          onClick={onChangePlan}
                          name="pricing_plan"
                          value="paid"
                          type="radio"
                          className="h-4 w-4 text-orange-500 cursor-pointer focus:ring-gray-900 border-gray-300"
                          aria-describedby="plan-option-pricing-1 plan-option-limit-1"
                          defaultChecked={customer.tags.indexOf("paid") > -1}
                        />
                        <span className="ml-3 font-medium text-gray-900">
                          Unlimited
                        </span>
                      </label>
                      <p
                        id="plan-option-pricing-1"
                        className="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-center"
                      >
                        {/* On: "text-orange-900", Off: "text-gray-900" */}
                        <span className="font-medium">$2500 / mo</span>
                        {/* On: "text-orange-700", Off: "text-gray-500" */}
                      </p>
                      {/* On: "text-orange-700", Off: "text-gray-500" */}
                      <p
                        id="plan-option-limit-1"
                        className="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-right"
                      >
                        Unlimited
                      </p>
                    </div>
                  </li>
                </ul>
              </fieldset>
            </div>
            <div
              className={`checkout-container px-4 py-3 bg-gray-50 text-right sm:px-6 ${
                !showLoading ? "hidden" : "block"
              }`}
            ></div>
          </div>
        </section>
        {/* Billing history */}
      </div>
    </div>
  );
}
