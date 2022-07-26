import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

const accountInfo =
  "https://192.168.201.27/api/v1/enquiry/accountInfo/0070005099";
export async function getServerSideProps() {
  process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
  const response = await fetch(accountInfo, {
    headers: {
      Authorization:
        "Bearer 14072022E3C40F40C5B90911E0530FC9A8C0434AE3C40F40C5BA0911E0530FC9A8C0434AE3C40F40C5BB0911E0530FC9A8C0434AE3C40F40C5BC0911E0530FC9A8C0434AE3C40F40C5BD0911E0530FC9A8C0434A",
      "Content-Type": "application/json",
    },
  });
  const detail = await response.json();
  return {
    props: {
      detail,
    },
  };
}

const Details = ({ detail }) => {
  const { data = [] } = detail;
  // const { accountType, customerName, address, customerNo, gender, branchName } =
  //   data;
  console.log("details", detail);
  const router = useRouter();
  console.log(router.query);
  const accountNumber = router.query?.accountNumber;
  // const accountInfo = `https://192.168.201.27/api/v1/enquiry/accountInfo/${accountNumber}`;
  // const details = () => {
  //   try {
  //     process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
  //     fetch(accountInfo, {
  //       headers: {
  //         Authorization:
  //           "Bearer 14072022E3C40F40C5B90911E0530FC9A8C0434AE3C40F40C5BA0911E0530FC9A8C0434AE3C40F40C5BB0911E0530FC9A8C0434AE3C40F40C5BC0911E0530FC9A8C0434AE3C40F40C5BD0911E0530FC9A8C0434A",
  //         "Content-Type": "application/json",
  //       },
  //     })
  //       .then((res) => res.json())
  //       .then((json) => console.log(json));
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  // };
  return (
    <div className="mt-6">
      <Head>
        <title>Card Request App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <h1 className="text-3xl font-bold text-center text-red-700">
          PTB CARD REQUEST PLATFORM
        </h1>
        {/* <h5>{}</h5> */}
        {/* <h5>{user ? user.customerName : "Loading..."}</h5> */}
        <div className="w-full p-6 m-auto bg-white border-t border-red-600 rounded shadow-lg shadow-red-800/50 lg:max-w-md">
          <h1 className=" font-semibold text-center text-red-800">
            Customer Details
          </h1>
          <form className="mt-6">
            <div className="mt-4">
              <label htmlFor="account" className="block text-sm text-gray-800">
                Account Number
              </label>
              <input
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
                value={accountNumber ? accountNumber : ""}
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="accountType"
                className="block text-sm text-gray-800"
              >
                Account Type
              </label>
              <input
                type="text"
                value={data.accountType}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div className="mt-4">
              <label htmlFor="account" className="block text-sm text-gray-800">
                Name
              </label>
              <input
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
                value={data.customerName}
              />
            </div>
            <div className="mt-4">
              <label htmlFor="address" className="block text-sm text-gray-800">
                Address
              </label>
              <input
                type="text"
                value={data.address}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="account" className="block text-sm text-gray-800">
                Customer ID
              </label>
              <input
                type="text"
                value={data.customerNo}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="account" className="block text-sm text-gray-800">
                Sex
              </label>
              <input
                type="text"
                value={data.gender}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="account" className="block text-sm text-gray-800">
                Branch
              </label>
              <input
                type="text"
                value={data.branchName}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="account" className="block text-sm text-gray-800">
                Name On Card
              </label>
              <input
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mt-6">
              <button
                onClick={() => alert("Request Sent")}
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-700 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Details;
