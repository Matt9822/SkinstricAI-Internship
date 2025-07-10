import Image from "next/image";
import React from "react";

const handleSelection = ({
  sortedAge,
  sortedRace,
  sortedGender,
  setSelect,
  raceSelect,
  setRaceSelect,
  ageSelect,
  setAgeSelect,
  sexSelect,
  setSexSelect,
}) => {
  if (setSelect === "race") {
    return (
      <div>
        <div className="flex justify-between px-2 pb-2">
          <p className="uppercase text-[16px]">race</p>
          <p className="uppercase text-[16px]">a.i. confidence</p>
        </div>
        <ul>
          {sortedRace
            ? sortedRace.map((item, index) => (
                <li
                  key={index}
                  onClick={() => setRaceSelect(`${item[0]}`)}
                  className={`flex justify-between ${
                    raceSelect === item[0]
                      ? "bg-black text-white"
                      : "bg-gray-100 cursor-pointer"
                  } ease-in-out duration-400 p-3 w-full`}
                >
                  <p className="cursor-pointer flex">
                    <Image
                      src="diamonds.svg"
                      alt=">"
                      width={15}
                      height={15}
                      className={`flex justify-between ${
                        raceSelect === item[0] ? "invert" : ""
                      } ease-in-out duration-400 mr-3`}
                    />
                    {item[0]}
                  </p>
                  <p className="cursor-pointer">{Math.round(item[1] * 100)}%</p>
                </li>
              ))
            : "Error try again"}
        </ul>
      </div>
    );
  } else if (setSelect === "age") {
    return (
      <div>
        <div className="flex justify-between px-2 pb-2">
          <p className="uppercase text-[16px]">AGE</p>
          <p className="uppercase text-[16px]">a.i. confidence</p>
        </div>
        <ul>
          {sortedAge
            ? sortedAge.map((item, index) => (
                <li
                  key={index}
                  onClick={() => setAgeSelect(`${item[0]}`)}
                  className={`flex justify-between items-center ${
                    ageSelect === item[0]
                      ? "bg-black text-white"
                      : "bg-gray-100 cursor-pointer"
                  } ease-in-out duration-400 p-3`}
                >
                  <p className="cursor-pointer flex">
                    <Image
                      src="diamonds.svg"
                      alt=">"
                      width={15}
                      height={15}
                      className={`${
                        ageSelect === item[0] ? "invert" : ""
                      } ease-in-out duration-400 mr-3`}
                    />
                    {item[0]}
                  </p>
                  <p className="cursor-pointer">{Math.round(item[1] * 100)}%</p>
                </li>
              ))
            : "Error try again"}
        </ul>
      </div>
    );
  } else if (setSelect === "gender") {
    return (
      <div>
        <div className="flex justify-between px-2 pb-2">
          <p className="uppercase text-[16px]">Sex</p>
          <p className="uppercase text-[16px]">a.i. confidence</p>
        </div>
        <ul>
          {sortedGender
            ? sortedGender.map((item, index) => (
                <li
                  key={index}
                  onClick={() => setSexSelect(`${item[0]}`)}
                  className={`flex justify-between ${
                    sexSelect === item[0]
                      ? "bg-black text-white"
                      : "bg-gray-100 cursor-pointer"
                  } ease-in-out duration-400 p-3`}
                >
                  <p className="cursor-pointer flex">
                    <Image
                      src="diamonds.svg"
                      alt=">"
                      width={15}
                      height={15}
                      className={`flex justify-between ${
                        sexSelect === item[0] ? "invert" : ""
                      } ease-in-out duration-400 mr-3`}
                    />
                    {item[0]}
                  </p>
                  <p className="cursor-pointer">{Math.round(item[1] * 100)}%</p>
                </li>
              ))
            : "Error try again"}
        </ul>
      </div>
    );
  }
};

export default handleSelection;
