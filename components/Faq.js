import React from "react";

export default function Faq() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 divide-y-2 divide-gray-200 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Frequently asked questions
        </h2>

        <div className="bg-white pt-16 lg:py-24">
          <div className="pb-16 bg-green-600 lg:pb-0 lg:z-10 lg:relative">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
              <div className="relative lg:-my-8">
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"
                />
                <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
                  <div className="aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                    <img
                      className="object-cover object-left lg:h-full lg:w-full"
                      src="rodriguezartav.jpeg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
                  <blockquote>
                    <div>
                      <svg
                        className="h-12 w-12 text-white opacity-25"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                      >
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                      <p className="mt-6 text-2xl font-medium text-white">
                        Living in the jungle I get first hand experience of the
                        perfection of mother nature's integrations every day.
                        The way all living things connect with each other at
                        scale is an unlimited source of wonder.
                      </p>
                      <p className="mt-6 text-2xl font-medium text-white">
                        The way our minds are wired feed us an ilusion of
                        individualty that keeps us from enjoying the magic of
                        connection.
                      </p>
                      <p className="mt-6 text-2xl font-medium text-white">
                        Our state of mind is proyected into our creations, the
                        way we model operations and the software that runs them.
                        Don't let individualty and disconection keep you from
                        enjoying the posibilities of running your business with
                        the best solutions.
                      </p>
                    </div>
                    <footer className="mt-6">
                      <p className="text-base font-medium text-white">
                        Roberto Rodriguez
                      </p>
                      <p className="text-base font-medium text-green-100">
                        Founder & CTO @ JungleDynamic
                      </p>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <dl className="space-y-8 divide-y divide-gray-200">
            <div className="pt-6 md:grid md:grid-cols-12 md:gap-8">
              <dt className="text-base font-medium text-gray-900 md:col-span-5">
                What's all this about?
              </dt>
              <dd className="mt-2 md:mt-0 md:col-span-7">
                <p className="text-base text-gray-500">
                  It's my software development practice. Tell me what you need
                  and I'll turn it into code. Code becomes a program that's
                  hosted in my cloud platform where I can scale custom software
                  development and provide guarantee the operation of my work.
                </p>
              </dd>
            </div>
            <div className="pt-6 md:grid md:grid-cols-12 md:gap-8">
              <dt className="text-base font-medium text-gray-900 md:col-span-5">
                To how many customers will it grow?
              </dt>
              <dd className="mt-2 md:mt-0 md:col-span-7">
                <p className="text-base text-gray-500">
                  After 20 years of working in the industry and seeing how
                  profesional engineering turned into wall-street gambling about
                  unicorns - and taking my profit for a lifetime - I decided to
                  aim instead for a healthy work-life balance. JD won't grow
                  passed the amount of customers I can personally support while
                  surfing and spending time with my family every day.
                </p>
              </dd>
            </div>
            <div className="pt-6 md:grid md:grid-cols-12 md:gap-8">
              <dt className="text-base font-medium text-gray-900 md:col-span-5">
                Why not native platform development - like salesforce, dynamics,
                xero, slack, shopify?
              </dt>
              <dd className="mt-2 md:mt-0 md:col-span-7">
                <p className="text-base text-gray-500">
                  Creating these programs inside of Salesforce, Microsoft or
                  using visual tools like Autopilot or CustomerIO is very
                  limiting, complicated and expensive. They try their best, but
                  in the end propietary programming languages are part of their
                  financial operation, not our technical solution.
                </p>
                <p className="text-base mt-4 text-gray-500">
                  Instead I use JD to pull data from each platform and create a
                  program that uses that data to get things done in a fraction
                  of the time at a fraction of the cost.
                </p>
              </dd>
            </div>
            <div className="pt-6 md:grid md:grid-cols-12 md:gap-8">
              <dt className="text-base font-medium text-gray-900 md:col-span-5">
                What's a program?
              </dt>
              <dd className="mt-2 md:mt-0 md:col-span-7">
                <p className="text-base text-gray-500">
                  A program is made up of lines of code that tell a computer
                  what to do. You tell me what you need, and I'll tell the
                  computer how to do it. A program is just a wrapper around
                  those instructions.
                </p>
              </dd>
            </div>
            <div className="pt-6 md:grid md:grid-cols-12 md:gap-8">
              <dt className="text-base font-medium text-gray-900 md:col-span-5">
                Is it like an App? What's the difference?
              </dt>
              <dd className="mt-2 md:mt-0 md:col-span-7">
                <p className="text-base text-gray-500">
                  No. Your business should be running on platforms like
                  Salesforce, Google, Microsoft and Xero. Those are "Internal
                  Apps" in the sense that they have buttons and screens that
                  your teams interact with. Then you can build Mobile or Web
                  Apps for your customers to interact with your business.
                </p>
                <p className="text-base mt-4 text-gray-500">
                  A program is headless. It fill's the gap between your
                  platforms, apps and your ideas. When you are unable to do what
                  you need, a program is able to connect with all your platform
                  or data sources and get it done.
                </p>

                <p className="text-base mt-4 text-gray-500">
                  Once a connection is made, the program really has no limits.
                </p>
              </dd>
            </div>
            <div className="pt-6 md:grid md:grid-cols-12 md:gap-8">
              <dt className="text-base font-medium text-gray-900 md:col-span-5">
                What kind of platforms or data sources are available.
              </dt>
              <dd className="mt-2 md:mt-0 md:col-span-7">
                <p className="text-base text-gray-500">
                  Every platform, database or data source that's connected to
                  the internet.
                </p>
                <p className="text-base text-gray-500">
                  I build connectors and integrations on a first-come-then-build
                  basis. It typically takes me 1 day to connect to a new
                  platform and there is no cost for asking to connect to a new
                  platform.
                </p>
                <p className="text-sm mt-5 text-gray-500">
                  Some old-school platforms like IBM, Oracle and Sap have a
                  complex product naming convention. Some of their products are
                  compatible, some are not. We'll probably have to ask your
                  account executive for a license or something they make
                  confusing to charge you more.
                </p>
              </dd>
            </div>
            <div className="pt-6 md:grid md:grid-cols-12 md:gap-8">
              <dt className="text-base font-medium text-gray-900 md:col-span-5">
                What's not included?
              </dt>
              <dd className="mt-2 md:mt-0 md:col-span-7">
                <p className="text-base text-gray-500">
                  Web and Graphic Design, Forms, App Development, Customer
                  Facing Apps, Employee facing apps, ( anything with a button on
                  it ), Platform Consulting, Platform Support.
                </p>
              </dd>
            </div>
            <div className="pt-6 md:grid md:grid-cols-12 md:gap-8">
              <dt className="text-base font-medium text-gray-900 md:col-span-5">
                What's included?
              </dt>
              <dd className="mt-2 md:mt-0 md:col-span-7">
                <p className="text-base text-gray-500">
                  We'll have enought time for a Zoom call where we'll review
                  what you need. I'll then model the process into something that
                  can be turned into a program with code. Test it extensively,
                  deploy it to my cloud platform and have it run every x
                  minutes. I'll then monitor each execution, make sure it's
                  working properly and fix it if it's not.
                </p>
              </dd>
            </div>

            <div className="pt-6 md:grid md:grid-cols-12 md:gap-8">
              <dt className="text-base font-medium text-gray-900 md:col-span-5">
                Program Examples
              </dt>
              <dd className="mt-2 md:mt-0 md:col-span-7">
                <p className="text-base text-gray-500">
                  Data integration between platforms, marketing automations
                  (email,sms, voice, ads), customer experience marketing ,
                  marketing intelligence and analisis, alerts and notifications,
                  data loading with transformation and enrichment, data export,
                  audits, backups, forecasting, data cleanup, data quality
                  assurance, data grouping and business inteligence, reporting
                </p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
