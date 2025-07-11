"use client";
import React, { useEffect, useState, useRef } from "react";
import Demographics from "../components/demographics";
import HandleSelection from "../components/handleSelection";
import Percentage from "../components/percentage";
import Link from "next/link";
import Image from "next/image";

export default function Analysis() {
  const [age, setAge] = useState(null);
  const [gender, setGender] = useState(null);
  const [race, setRace] = useState(null);
  const [demo, setDemo] = useState(false);
  const [selected, setSelected] = useState("race");
  const [raceSelect, setRaceSelect] = useState("");
  const [ageSelect, setAgeSelect] = useState("");
  const [sexSelect, setSexSelect] = useState("");
  const [racePercent, setRacePercent] = useState("");
  const [agePercent, setAgePercent] = useState("");
  const [sexPercent, setSexPercent] = useState("");
  const hasSetInitialRace = useRef(false);

  useEffect(() => {
    const getData = JSON.parse(localStorage.getItem("image"));
    if (getData && getData.data) {
      setAge(getData.data.age);
      setGender(getData.data.gender);
      setRace(getData.data.race);
    }
  }, []);

  const getSortedAgeGroup = () => {
    if (!age || typeof age !== "object") return null;
    const sorted = Object.entries(age).sort((a, b) => b[1] - a[1]);
    return sorted;
  };
  const getSortedRaceGroup = () => {
    if (!race || typeof race !== "object") return null;
    const sorted = Object.entries(race).sort((a, b) => b[1] - a[1]);
    return sorted;
  };
  const getSortedGenderGroup = () => {
    if (!gender || typeof gender !== "object") return null;
    const sorted = Object.entries(gender).sort((a, b) => b[1] - a[1]);
    return sorted;
  };

  const sortedAgeGroup = getSortedAgeGroup();
  const sortedRaceGroup = getSortedRaceGroup();
  const sortedGenderGroup = getSortedGenderGroup();

  useEffect(() => {
    if (!hasSetInitialRace.current && sortedRaceGroup && sortedRaceGroup[0]) {
      setRaceSelect(sortedRaceGroup[0][0]);
      setAgeSelect(sortedAgeGroup[0][0]);
      setSexSelect(sortedGenderGroup[0][0]);

      setRacePercent(Math.round(sortedRaceGroup[0][1] * 100));
      setAgePercent(Math.round(sortedAgeGroup[0][1] * 100));
      setSexPercent(Math.round(sortedGenderGroup[0][1] * 100));
      hasSetInitialRace.current = true;
    }
  }, [sortedRaceGroup, sortedAgeGroup, sortedGenderGroup]);

  if (demo) {
    return (
      <div>
        <div className="flex justify-between items-center w-full h-[64px]">
          <div className="flex mx-4">
            <p className="text-[14px]/[16px] font-[600] tracking-[-2%] py-2 px-4 mr-2">
              SKINSTRIC
            </p>
            <div className="flex justify-center items-center">
              <Image src="/rectangleL.svg" height={17} width={4} alt="rectangle"/>
              <p className="font-semibold text-[#1A1B1C] text-[14px]/[16px] tracking-[-2%] opacity-60 px-2">
                INTRO
              </p>
              <Image src="/rectangleR.svg" height={17} width={4} alt="rectangle"/>
            </div>
          </div>
          <div className="mx-4">
            <button className="bg-[#1A1B1C] text-white py-2 px-4 text-[14px]/[16px]">
              Enter Code
            </button>
          </div>
        </div>
        <div className="flex-col h-[93vh] w-full">
          <div className="flex-col mb-20 ml-10 max-[1105]:text-center max-[1105]:mt-5">
            <p className="uppercase">A. I. Analysis</p>
            <h1 className="uppercase text-[70px] max-[630]:text-[50px] max-[470]:text-[30px]">
              demographics
            </h1>
            <p className="uppercase">Predicted Race, Age & Sex</p>
          </div>
          <div className="flex justify-between w-full max-[1105]:flex-col">
            <ul className="flex-col ml-10 w-[400] max-[1105]:w-[91%] max-[600]:ml-5">
              <li
                onClick={() => setSelected("race")}
                className={`${
                  selected === "race" ? "bg-black text-white" : "bg-gray-100"
                } flex items-center py-8 px-2 border-t-1 cursor-pointer ease-in-out duration-400`}
              >
                <p className="mr-1 font-[600] text-[15px] uppercase">race:</p>
                {raceSelect ? <p>{raceSelect}</p> : <p>N/A</p>}
              </li>
              <li
                onClick={() => setSelected("age")}
                className={`${
                  selected === "age" ? "bg-black text-white" : "bg-gray-100"
                } flex items-center my-5 py-8 px-2 border-t-1 cursor-pointer ease-in-out duration-400`}
              >
                <p className="mr-1 font-[600] text-[15px] uppercase">age:</p>
                {ageSelect ? <p>{ageSelect}</p> : <p>N/A</p>}
              </li>
              <li
                onClick={() => setSelected("gender")}
                className={`${
                  selected === "gender" ? "bg-black text-white" : "bg-gray-100"
                } flex items-center py-8 px-2 border-t-1 cursor-pointer ease-in-out duration-400`}
              >
                <p className="mr-1 font-[600] text-[15px] uppercase">sex:</p>
                {sexSelect ? <p>{sexSelect}</p> : <p>N/A</p>}
              </li>
            </ul>
            <div className="flex bg-gray-100 mx-10 w-full border-t-1 max-[1105]:mt-5 max-[1105]:w-[91%] max-[600]:ml-5 h-[500] justify-between">
              <Percentage
                sexSelect={sexSelect}
                ageSelect={ageSelect}
                raceSelect={raceSelect}
                setSelect={selected}
                racePercent={racePercent}
                agePercent={agePercent}
                sexPercent={sexPercent}
              />
            </div>
            <div className="flex-col mr-10 pb-5 pt-3 border-t-1 bg-gray-100 w-[600] max-[1105]:ml-10 max-[600]:ml-5 max-[1105]:mt-5 max-[1105]:w-[91%] max-[1105]:h-[500]">
              <HandleSelection
                setSexSelect={setSexSelect}
                setAgeSelect={setAgeSelect}
                setRaceSelect={setRaceSelect}
                sexSelect={sexSelect}
                ageSelect={ageSelect}
                raceSelect={raceSelect}
                sortedAge={sortedAgeGroup}
                sortedRace={sortedRaceGroup}
                sortedGender={sortedGenderGroup}
                setSelect={selected}
                setRacePercent={setRacePercent}
                setAgePercent={setAgePercent}
                setSexPercent={setSexPercent}
              />
            </div>
          </div>
          <div className="flex justify-between">
            <Link
              rel="stylesheet"
              href="/image"
              className="flex items-center cursor-pointer group ml-20 mt-10 mb-10"
            >
              <Image
                src="/button.svg"
                width={70}
                height={70}
                alt="button"
                className="rotate-180 group-hover:w-[75] ease-in-out duration-400"
              />
              <p className="pl-3 font-[500] text-[22px] group-hover:text-[25px] ease-in-out duration-500 underline">
                Back
              </p>
            </Link>
            <Link
              rel="stylesheet"
              href="/"
              className="flex items-center mr-20 mt-10 mb-10 group"
            >
              <p className="pr-3 font-[500] text-[22px] group-hover:text-[25px] ease-in-out duration-500 underline">
                Home
              </p>
              <Image
                width={70}
                height={70}
                src="/button.svg"
                alt="Button"
                className="group-hover:w-[75] ease-in-out duration-400"
              />
            </Link>
          </div>
        </div>
      </div>
    );
  } else {
    return <Demographics ready={setDemo} />;
  }
}
