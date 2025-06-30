"use client";
import React, { useEffect, useState } from "react";

const Info = () => {
  const [name, setName] = useState(null);
  const [location, setLocation] = useState(null);

  const handleNameSubmit = (e) => {
    e.preventDefault();
    const input = e.target.elements["user-name"];
    localStorage.setItem("Name", input.value)
    setName(true);
    if (input) {
      input.value = "";
    }
  };

  const handleLocationSubmit = (e) => {
    e.preventDefault();
    const input = e.target.elements["user-location"];
    setLocation(input.value);
  };

  if (name && location) {
    // useEffect(() => {
      
    // }, [])
    console.log(localStorage)
    // return (
    //   <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">

    //   </div>
    // );
  } else if (name && !location) {
    return (
      <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
        <p className="absolute uppercase text-gray-400 -translate-x-1/2 -translate-y-1/2 left-1/2 top-[-10%] max-[610px]:top-[-10%] max-[610px]:text-sm">
          Click to type
        </p>
        <form onSubmit={handleLocationSubmit}>
          <input
            id="user-location"
            type="text"
            placeholder="Where are you from?"
            autoComplete="off"
            pattern="[A-Za-z].{1,}"
            title="please enter A-Z and at least 2 characters"
            required
            className="z-10 text-center text-[45px] w-[420px] h-[64px] border-b-2 focus:outline-none max-[610px]:text-[25px] max-[610px]:w-[240px] max-[610px]:h-[42px]"
          />
        </form>
      </div>
    );
  } else {
    return (
      <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
        <p className="absolute uppercase text-gray-400 -translate-x-1/2 -translate-y-1/2 left-1/2 top-[-10%] max-[610px]:top-[-10%] max-[610px]:text-sm">
          Click to type
        </p>
        <form onSubmit={handleNameSubmit}>
          <input
            id="user-name"
            type="text"
            placeholder="Tell Us Your Name"
            autoComplete="off"
            pattern="[A-Za-z].{1,}"
            title="please enter A-Z and at least 2 characters"
            required
            className="z-10 text-center text-[50px] w-[420px] h-[64px] border-b-2 focus:outline-none appearance-none max-[610px]:text-[28px] max-[610px]:w-[240px] max-[610px]:h-[42px]"
          />
        </form>
      </div>
    );
  }
};

export default Info;
