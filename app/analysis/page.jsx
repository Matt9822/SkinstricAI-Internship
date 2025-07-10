"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useState, useRef } from "react";
import Demographics from "../components/demographics";
import HandleSelection from "../components/handleSelection";

export default function Analysis() {
  const [age, setAge] = useState(null);
  const [gender, setGender] = useState(null);
  const [race, setRace] = useState(null);
  const [demo, setDemo] = useState(false);
  const [selected, setSelected] = useState("race");
  const [raceSelect, setRaceSelect] = useState("");
  const [ageSelect, setAgeSelect] = useState("");
  const [sexSelect, setSexSelect] = useState("");
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
      hasSetInitialRace.current = true;
    }
  }, [sortedRaceGroup, sortedAgeGroup, sortedGenderGroup]);

  if (!demo) {
    return (
      <div className="flex-col h-[93vh] w-full">
        <div className="flex-col mb-20 ml-10">
          <p>A. I. Analysis</p>
          <h1 className="uppercase text-[70px]">demographics</h1>
          <p>Predicted Race & Age</p>
        </div>
        <div className="flex justify-between w-full ">
          <ul className="flex-col ml-10 w-[400]">
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
          <div className="flex bg-gray-100 mx-10 w-full border-t-1">
            <div>
              <p>center</p>
            </div>
            <div></div>
          </div>
          <div className="flex-col mr-10 pb-5 pt-3 border-t-1 bg-gray-100 w-[600]">
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
            />
          </div>
        </div>
      </div>
    );
  } else {
    return <Demographics ready={setDemo} />;
  }
}
