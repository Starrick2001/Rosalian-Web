import { LockClosedIcon } from "@heroicons/react/20/solid";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { useAuth0 } from "@auth0/auth0-react";

export default function Login() {
  const { loginWithRedirect } = useAuth0();

  return (
    <React.Fragment>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-50">
        <body class="h-full">
        ```
      */}
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full lg:max-w-lg md:max-w-md space-y-8">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-12 w-auto mx-auto stroke-rose-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
              />
            </svg>

            <h2 className="my-4  text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
            <button
              className="relative py-2 px-4 mb-2 w-full text-center rounded-md bg-slate-200"
              onClick={() =>
                loginWithRedirect({
                  connection: "facebook",
                })
              }
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="h-5 w-5 text-rose-400 group-hover:text-rose-300"
                  aria-hidden="true"
                />
              </span>
              Sign in via Facebook Account
            </button>
            <button
              className="relative py-2 px-4 mb-2 w-full text-center rounded-md bg-slate-200"
              onClick={() =>
                loginWithRedirect({
                  connection: "google-oauth2",
                })
              }
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FontAwesomeIcon
                  icon={faGoogle}
                  className="h-5 w-5 text-rose-400 group-hover:text-rose-300"
                  aria-hidden="true"
                />
              </span>
              Sign in via Google Account
            </button>
          </div>
          <form className="mt-4 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm w-full">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block h-14 w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-rose-500 focus:outline-none focus:ring-rose-500 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block h-14 w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-rose-500 focus:outline-none focus:ring-rose-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <button
                  className="font-medium text-rose-600 hover:text-rose-500"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  Forgot your password?
                </button>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-rose-600 py-2 px-4 text-sm font-medium text-white hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-rose-400 group-hover:text-rose-300"
                    aria-hidden="true"
                  />
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}
