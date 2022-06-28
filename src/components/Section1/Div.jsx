import React from "react";
import { since, frequency } from "../data";
const temp = ["Diabetes mellitus", "Hypertension", "Sarcoidois", "Sarcoidois"];

export default function Div({ text }) {
  let data = frequency;
  let placeholder = "frequency";
  const [state, setState] = React.useState({
    letter: "-",
    boolean: false,
    clc: "grey",
  });
  const [showDropdown, setShowDropDown] = React.useState(false);
  const [inp, setInp] = React.useState("");

  if (temp.includes(text)) {
    data = since;
    placeholder = "since";
  }

  const spanHandler = () => {
    if (state.letter === "-") {
      setState({
        letter: "Y",
        boolean: true,
        clc: "green",
      });
    } else if (state.letter === "Y") {
      setState({
        letter: "N",
        boolean: false,
        clc: "red",
      });
    } else {
      setState({
        letter: "-",
        boolean: false,
        clc: "grey",
      });
    }
  };

  const clickHandler = (e) => {
    let ele = e.target;
    if (ele.tagName === "P") {
      setInp(e.target.innerHTML);
    }
    setShowDropDown(false);
  };

  return (
    <div className="inputDiv flex items-center p-2 mb-1 lg:w-1/3 md:w-1/2 w-full">
      <span
        className={`${state.clc} cursor-pointer font-bold flex items-center justify-center mr-3 rounded-full h-11 w-11`}
        onClick={spanHandler}
      >
        {state.letter}
        <img
          src="https://www.svgrepo.com/show/379260/sort.svg"
          alt=""
          className="sort-icon"
        />
      </span>
      <p className={`${state.boolean ? "bold" : "normal"}`}>{text}</p>
      {state.boolean && (
        <div className="flex-1 ml-3 mr-4 relative">
          <input
            type="text"
            list="time"
            className=" cursor-pointer text-black border border-slate-300 p-1 px-2 w-full"
            value={inp}
            placeholder={placeholder}
            onChange={(e) => setInp(e.target.value)}
            onMouseOver={() => {
              setShowDropDown(true);
            }}
            onMouseOut={() => {
              setShowDropDown(false);
            }}
          />
          {showDropdown && (
            <div
              className="dropDown cursor-pointer text-black border border-slate-200 bg-white shadow-lg absolute left-0 right-0 z-10"
              onMouseOver={() => {
                setShowDropDown(true);
              }}
              onMouseOut={() => {
                setShowDropDown(false);
              }}
              onClick={clickHandler}
            >
              {data.map((i, index) => (
                <p className="p-2 pl-4 hover:bg-slate-200" key={index}>
                  {i}
                </p>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
