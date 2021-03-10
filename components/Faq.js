import React from "react";

export default function Faq() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 divide-y-2 divide-gray-200 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Frequently asked questions
        </h2>
        <p>by Roberto Rodriguez</p>
        <div className="mt-6">
          <dl className="space-y-8 divide-y divide-gray-200">
            <div className="pt-6 md:grid md:grid-cols-12 md:gap-8">
              <dt className="text-base font-medium text-gray-900 md:col-span-5">
                What's all this about?
              </dt>
              <dd className="mt-2 md:mt-0 md:col-span-7">
                <p className="text-base text-gray-500">
                  It's just software development or writting code. Tell me what
                  you need and I'll turn it into code. I'll just do it in form
                  of a program that's hosted in my own cloud platform. This way,
                  I'll guarantee my work.
                </p>
              </dd>
            </div>
            <div className="pt-6 md:grid md:grid-cols-12 md:gap-8">
              <dt className="text-base font-medium text-gray-900 md:col-span-5">
                Where does it run?
              </dt>
              <dd className="mt-2 md:mt-0 md:col-span-7">
                <p className="text-base text-gray-500">
                  Creating these programs inside of Salesforce, Microsoft or
                  using visual tools like Autopilot or CustomerIO is very
                  limiting, complicated and expensive.
                </p>
                <p className="text-base text-gray-500">
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
                  computer how to do it. A program is just a wrapper for those
                  instructions. It comes from Unix highly succesfull phylosophy
                  of dividing tasks into programs that do only one thing and do
                  it well.
                </p>
              </dd>
            </div>
            <div className="pt-6 md:grid md:grid-cols-12 md:gap-8">
              <dt className="text-base font-medium text-gray-900 md:col-span-5">
                Is it like an App? What' the difference?
              </dt>
              <dd className="mt-2 md:mt-0 md:col-span-7">
                <p className="text-base text-gray-500">
                  No. Your business should be running on platforms like
                  Salesforce, Google, Microsoft and Xero. Those are "Internal
                  Apps" in the sense that they have buttons and screens that
                  your teams interact with. Then you can build Mobile or Web
                  Apps for your customer to fill out forms, etc - in Unbounce
                  for example.
                </p>
                <p className="text-base mt-4 text-gray-500">
                  A program is headless, it fill's the gap between your platform
                  and your ideas. When you are unable to do what you need, a
                  program is able to connect with all your platform or data
                  sources and get it done.
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
