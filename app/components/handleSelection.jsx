import React from "react";

const handleSelection = ({
  sortedAge,
  sortedRace,
  sortedGender,
  setSelect,
}) => {
  if (setSelect === "race") {
    return (
      <ul>
        {sortedRace
          ? sortedRace.map((item, index) => (
              <li key={index} className="flex">
                <p>{item[0]}</p>
                <p>{item[1]}</p>
              </li>
            ))
          : ""}
      </ul>
    );
  } else if (setSelect === "age") {
    return <div>age</div>;
  } else if (setSelect === "gender") {
    return <div>sex</div>;
  }
};

export default handleSelection;
