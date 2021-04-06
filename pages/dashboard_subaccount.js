import Head from "next/head";
import Test from "../components/Test";
import Integrations from "../components/Integrations";
import Scripts from "../components/Scripts";
import Sidebar from "../components/Sidebar";
import Title from "../components/Title";
import SearchHeader from "../components/SearchHeader";
import { useEffect } from "react";
import Router from "next/router";

export default function Dashboard() {
  useEffect(() => {
    if (!window.localStorage.getItem("token")) {
      Router.replace("/brand");
    }
  }, []);

  return (
    <div>
      <Head>
        <title>Integration Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="h-screen flex overflow-hidden bg-white">
        {/* Off-canvas menu for mobile, show/hide based on off-canvas menu state. */}

        <Sidebar private={true} current="dashboard" />

        {/* Main column */}
        <div className="flex flex-col w-0 flex-1 overflow-hidden">
          {/* Search header */}
          <SearchHeader />
          <main
            className="flex-1 relative z-0 overflow-y-auto focus:outline-none"
            tabIndex={0}
          >
            {/* Pinned projects */}
            <Integrations />
          </main>
        </div>
      </div>
    </div>
  );
}
