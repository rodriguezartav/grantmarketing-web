import Head from "next/head";
import { useState, useEffect } from "react";
import Router from "next/router";
import { useMutate } from "../helpers/useFetch";
import { useRouter } from "next/router";

export default function CreateAccount() {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [countryCode, setCountryCode] = useState("+1");

  const [error, setError] = useState("");
  const router = useRouter();
  const createAccount = useMutate(`/api/create_account`);

  useEffect(() => {
    const { phone } = router.query;
    if (phone && phone.length > 0) {
      setPhone(phone);
    }
  }, []);

  async function onCreateAccount() {
    if (phone.length < 8) return setError("10 digit phone number is required");
    else if (name.length < 3 || name.indexOf(" ") == -1)
      return setError("First and Last names are required");
    else if (company.length < 3) return setError("Company name is required");
    else setError("");

    await createAccount.mutate({ phone, name, company, countryCode });
    Router.replace("/login?phone=" + phone);
  }

  return (
    <div>
      <Head>
        <title>Jungledynamics Create Account</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img src="white_textlogo_dark_background.png" />

          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create a new account
          </h2>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700"
                >
                  Company
                </label>
                <div className="mt-1">
                  <input
                    value={company}
                    onChange={(e) => setCompany(e.currentTarget.value)}
                    id="company"
                    name="company"
                    type="string"
                    autoComplete="company"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name (First & Last Name )
                </label>
                <div className="mt-1">
                  <input
                    value={name}
                    onChange={(e) => setName(e.currentTarget.value)}
                    id="name"
                    name="name"
                    type="string"
                    autoComplete="name"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="first_name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Country Code
                  </label>
                  <div className="mt-1">
                    <select
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.currentTarget.value)}
                      id="country"
                      name="country"
                      autoComplete="country"
                      className="focus:ring-green-500 focus:border-green-500 w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    >
                      <option>+1</option>
                      <option>+506</option>
                    </select>
                  </div>
                </div>
                <div className="sm:col-span-4">
                  <label
                    htmlFor="last_name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Mobile phone
                  </label>
                  <div className="mt-1">
                    <input
                      value={phone}
                      onChange={(e) => setPhone(e.currentTarget.value)}
                      id="phone"
                      name="phone"
                      type="number"
                      autoComplete="current-password"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>

              <div>
                <a
                  onClick={onCreateAccount}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Create Account
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
