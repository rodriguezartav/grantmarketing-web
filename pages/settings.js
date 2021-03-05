import React, { useState } from "react";

import Head from "next/head";
import Settings from "../components/Settings";
import Sidebar from "../components/Sidebar";
import Title from "../components/Title";
import SearchHeader from "../components/SearchHeader";
import { useEffect } from "react";
import Router from "next/router";

export default function SettingsPage() {
  const [onComplete, setOnComplete] = React.useState(null);

  useEffect(() => {
    if (process.env.PADDLE.indexOf("S") > -1)
      window.Paddle.Environment.set("sandbox");

    window.Paddle.Setup({
      vendor: parseInt(process.env.PADDLE.replace("S", "")),
      eventCallback: function (data) {
        // The data.event will specify the event type
        if (data.event === "Checkout.Complete") {
          setOnComplete(data.eventData);
          console.log(data.eventData); // Data specifics on the event
        } else if (data.event === "Checkout.Close") {
          console.log(data.eventData); // Data specifics on the event
        }
      },
    });

    if (!window.localStorage.getItem("token")) {
      Router.replace("/login");
    }
  }, []);

  return (
    <div>
      <Head>
        <title>Jungledynamics Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://cdn.paddle.com/paddle/paddle.js"></script>
      </Head>

      {/*
            This example requires Tailwind CSS v2.0+ 
            
            This example requires some changes to your config:
            
            ```
            // tailwind.config.js
            module.exports = {
                // ...
                plugins: [
            // ...
            require('@tailwindcss/forms'),
                ]
            }
            ```
            */}
      <div className="h-screen flex overflow-hidden bg-white">
        {/* Off-canvas menu for mobile, show/hide based on off-canvas menu state. */}

        <Sidebar current="settings" />

        {/* Main column */}
        <div className="flex flex-col w-0 flex-1 ">
          {/* Search header */}
          <SearchHeader />
          <main className="max-w-7xl mx-auto pb-10 lg:py-12 lg:px-8">
            {/* Pinned projects */}
            <Settings onComplete={onComplete} />
          </main>
        </div>
      </div>
    </div>
  );
}
