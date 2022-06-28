import React from "react";
import { MdKeyboardArrowUp, MdFilterCenterFocus } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { FaHandshake } from "react-icons/fa";
import {
  BsFillArrowUpSquareFill,
  BsFillArrowDownSquareFill,
  BsFillArrowUpRightSquareFill,
} from "react-icons/bs";
import Div from "./Div";
import { arr } from "../data";
let id;

export default function Section({ type, temp }) {
  const [suggestions, setSuggestions] = React.useState(arr);
  const [inp, setInp] = React.useState("");
  const [data, setData] = React.useState(temp);
  const [show, setShow] = React.useState(false);
  const [showDropdown, setShowDropDown] = React.useState(false);

  const submitHandler = () => {
    inp.trim() && setData((data) => [...data, inp]);
    setInp("");
  };
  // console.log(temp);
  React.useEffect(() => {
    clearTimeout(id);
    id = setTimeout(() => {
      let newSuggestions = [];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].toLowerCase().includes(inp.trim().toLowerCase()))
          newSuggestions.push(arr[i]);
      }
      setSuggestions(newSuggestions);
    }, 500);
  }, [inp]);

  return (
    <section className="p-2 px-3 pb-0">
      <div>
        <h2 className="mb-5 flex items-center text-slate-700 font-medium uppercase tracking-wide">
          <MdKeyboardArrowUp
            className={`bg-blue-300 cursor-pointer rotate-${
              show ? 0 : 180
            } transition ease-in-out text-blue-700 mr-3 rounded-full h-8 w-8 p-1`}
            onClick={() => setShow(!show)}
          />
          <span className="text-slate-600">{type}</span>
        </h2>
      </div>

      {show && data.map((i, index) => <Div key={index} text={i} />)}

      {show && (
        <article>
          <div
            className="relative border my-4 flex items-center p-3 px-4 rounded-lg mt-5"
            onMouseLeave={() => setShowDropDown(false)}
          >
            <AiOutlineSearch />
            <input
              type="text"
              className="flex-1 mx-2 focus:outline-none"
              placeholder="Search here"
              onClick={() => setShowDropDown(true)}
              value={inp}
              onChange={(e) => setInp(e.target.value)}
            />
            <MdFilterCenterFocus
              className="scale-125"
              onClick={submitHandler}
            />
            {showDropdown && (
              <div
                className="text-black border border-slate-200
              max-h-96 overflow-y-scroll
              bg-white shadow-lg absolute left-0 right-0 z-10 top-12"
                onMouseEnter={() => setShowDropDown(true)}
                onMouseLeave={() => setShowDropDown(false)}
              >
                {showDropdown &&
                  suggestions.map((i, index) => (
                    <p
                      key={index}
                      onClick={() => setInp(i)}
                      className="flex items-center p-3 px-4 hover:bg-slate-200"
                    >
                      <FaHandshake className="text-blue-700 border border-blue-400 rounded-full p-[4px] text-3xl" />
                      <span className="ml-3 flex-1">{i}</span>
                      <span
                        className="flex items-center"
                        style={{ fontSize: "15px" }}
                      >
                        <BsFillArrowUpSquareFill className="text-gray-500 ml-4 mr-1 translate-y-[1px]" />{" "}
                        Up
                        <BsFillArrowDownSquareFill className="text-gray-500 ml-4 mr-1 translate-y-[1px]" />
                        Down
                        <BsFillArrowUpRightSquareFill className="text-gray-500 ml-4 mr-1 translate-y-[1px]" />
                        Select
                      </span>
                    </p>
                  ))}
              </div>
            )}
          </div>
        </article>
      )}
    </section>
  );
}
