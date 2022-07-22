import React, { useState } from "react";
import Initiate from "./initiate";
import Details from "./details";

const Main = () => {
  const [accountIsVerified, setAccountIsVerified] = useState(false);
  const [details, setDetails] = useState("");
  const handleChange = (res) => {
    setDetails(res.data);
    // setAccountIsVerified(!accountIsVerified);
  };
  return (
    <>
      {/* <p>{details.customerName}</p> */}

      {accountIsVerified ? (
        <Details />
      ) : (
        <Initiate handleChange={(res) => handleChange(res)} />
      )}
    </>
  );
};
export default Main;
