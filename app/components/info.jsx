"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

const Info = () => {
  const [name, setName] = useState(null);
  const [location, setLocation] = useState(null);
  const [success, setSuccess] = useState(false);

  useGSAP(() => {});

  const handleNameSubmit = (e) => {
    e.preventDefault();
    const input = e.target.elements["user-name"];
    localStorage.setItem("name", input.value);
    setName(true);
    if (input) {
      input.value = "";
    }
  };

  const handleLocationSubmit = (e) => {
    e.preventDefault();
    const input = e.target.elements["user-location"];
    localStorage.setItem("location", input.value);
    setLocation(true);
  };

  if (name && location) {
    const authorize = async () => {
      try {
        let auth = await fetch(
            "https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseOne",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                name: localStorage.getItem("name"),
                location: localStorage.getItem("location"),
              }),
            }
          ),
          response = await auth.json();
        if (response.success === true) {
          setTimeout(() => {
            setSuccess(true);
          }, 2000);
        }
      } catch (err) {
        console.error("could not fetch info")
      } finally {
        console.log(success);
      }
    };
    authorize();
    if (success) {
      return (
        <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
          <div className="flex-col items-center gap-4 h-[72px]">
            <div>

            <h2 className="text-2xl font-normal text-[#1A1B1C]">Thank you!</h2>
            </div>
            <div>

            <p>Proceed for the next step</p>
            </div>
          </div>
          <div className="absolute">
            <Link rel="stylesheet" href="/analysis">
              <button>
                <p className="uppercase">proceed</p>
                <Image width={56} height={56} src="/button.svg" alt="Button" />
              </button>
            </Link>
          </div>
        </div>
      );
    } else {
      return (
        <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
          <p>Processing submission</p>
        </div>
      );
    }
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
