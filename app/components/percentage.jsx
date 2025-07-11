import React from "react";

const percentage = ({
  sexSelect,
  ageSelect,
  raceSelect,
  setSelect,
  racePercent,
  agePercent,
  sexPercent,
}) => {
  const totalLength = 1255;

  const getDasharray = (percent) => {
    const dashLength = (percent / 100) * totalLength;
    const gapLength = totalLength;
    return `${dashLength} ${gapLength}`;
  };

  if (setSelect === "race") {
    return (
      <div className="flex-col justify-center h-full w-full">
        <div className="absolute">
          <p className="uppercase m-10 text-[24px]">race: {raceSelect}</p>
        </div>
        <div className="flex h-full w-full ml-1/2 justify-center">
          <svg
            viewBox="0 15 800 800"
            xmlns="http://www.w3.org/2000/svg"
            className="rotate-[-90deg]"
          >
            <circle
              cx="400"
              cy="400"
              fill="none"
              r="200"
              strokeWidth="33"
              stroke="#000000"
              strokeDasharray={getDasharray(racePercent)}
              className="ease-in-out duration-500"
            />
          </svg>
          <p className="fixed top-[55%] right-[52%] text-4xl max-[1105]:absolute max-[1105]:top-[90%] max-[1105]:right-[50%] max-[800]:right-[50%]">
            {racePercent}%
          </p>
        </div>
      </div>
    );
  } else if (setSelect === "age") {
    return (
      <div className="flex-col justify-center h-full w-full">
        <div className="absolute">
          <p className="uppercase m-10 text-[24px]">age: {ageSelect}</p>
        </div>
        <div className="flex h-full w-full justify-center">
          <svg
            viewBox="0 15 800 800"
            xmlns="http://www.w3.org/2000/svg"
            className="rotate-[-90deg]"
          >
            <circle
              cx="400"
              cy="400"
              fill="none"
              r="200"
              strokeWidth="33"
              stroke="#000000"
              strokeDasharray={getDasharray(agePercent)}
              className="ease-in-out duration-500"
            />
          </svg>
          <p className="fixed top-[55%] right-[52%] text-4xl max-[1105]:absolute max-[1105]:top-[90%] max-[1105]:right-[50%] max-[800]:right-[50%]">
            {agePercent}%
          </p>
        </div>
      </div>
    );
  } else if (setSelect === "gender") {
    return (
      <div className="flex-col justify-center h-full w-full">
        <div className="absolute">
          <p className="uppercase m-10 text-[24px]">sex: {sexSelect}</p>
        </div>
        <div className="flex h-full w-full ml-1/2 justify-center">
          <svg
            viewBox="0 15 800 800"
            xmlns="http://www.w3.org/2000/svg"
            className="rotate-[-90deg]"
          >
            <circle
              cx="400"
              cy="400"
              fill="none"
              r="200"
              strokeWidth="33"
              stroke="#000000"
              strokeDasharray={getDasharray(sexPercent)}
              className="ease-in-out duration-500"
            />
          </svg>
          <p className="fixed top-[55%] right-[52%] text-4xl max-[1105]:absolute max-[1105]:top-[90%] max-[1105]:right-[50%] max-[800]:right-[50%]">
            {sexPercent}%
          </p>
        </div>
      </div>
    );
  }
};

export default percentage;
