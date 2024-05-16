import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import logBack from '../assets/logBack.jpg'

const LoginPage = () => {
    const navigate = useNavigate()
    const handleSubmit = ()=>{
        navigate('/home')
    }
  return (
    <div
      className=" h-screen bg-gray-100 py-6 sm:py-8 lg:py-12 bg-cover"
      style={{
        backgroundImage: `url(${logBack})`,
      }}
    >
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8 ">
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-700 md:mb-10  font-poppins mt-10">
          Sign in to your account
        </h2>

        <form
          className="mx-auto max-w-md rounded-3xl border shadow-sm bg-white overflow-hidden"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-8 p-10">
            <div>
              <label
                for="email"
                className="mb-2 inline-block text-sm text-gray-700 sm:text-base font-semibold font-poppins"
              >
                Email
              </label>
              <input
                name="email"
                type='email'
                placeholder="admin@example.com"
                className="w-full rounded-xl border bg-gray-5 px-3 py-2 text-gray-800 outline-none ring-indigo-300 focus:ring"
              />
            </div>

            <div>
              <label
                for="password"
                className="mb-2 inline-block text-sm text-gray-700 sm:text-base font-semibold font-poppins"
              >
                Password
              </label>
              <input      
                name="password"
                type='password'
                placeholder="**********"
                className="w-full rounded-xl border  px-3 py-2 text-gray-800 outline-none ring-indigo-300 focus:ring"
              />
            </div>

            <button className=" rounded-3xl bg-blue-600 px-4 py-2 text-center text-sm font-semibold text-white outline-none   hover:bg-blue-700 focus-visible:ring  md:text-base font-poppins mt-3 w-44  self-center">
              Log in
            </button>
          </div>

          <div className="flex items-center justify-center bg-white p-4">
            <p className="text-center text-sm text-gray-600 font-poppins ">
              Don't have an account?{" "}
              <Link
                to="/"
                className="text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
              >
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage