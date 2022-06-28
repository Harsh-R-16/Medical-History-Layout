import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineFieldTime, AiOutlineDelete } from "react-icons/ai";

export default function Div2({ text }) {
  const [input, setInput] = React.useState({
    text: text,
    time: "",
    active: "",
    notes: "",
  });

  //   console.log(text);

  const [showTime, setShowTime] = React.useState(false);
  const [showActive, setShowActive] = React.useState(false);
  const [bol, setBol] = React.useState(true);

  const timeHandler = (e) => {
    let ele = e.target;
    if (ele.tagName === "P") {
      setInput({ ...input, time: ele.innerHTML });
    }
    setShowTime(false);
  };

  const activeHandler = (e) => {
    let ele = e.target;
    console.log(ele);
    if (ele.tagName === "P") {
      setInput({ ...input, active: ele.innerHTML });
    }
    setShowActive(false);
  };

  const changeHandler = (e) => {
    let { id, value } = e.target;
    setInput({ ...input, [id]: value });
  };

  return (
    bol && (
      <div className="flex flex-wrap inputSection cursor-pointer">
        <p className="w-full sm:w-1/2 md:w-1/4 border flex items-center p-4 capitalize">
          <GiHamburgerMenu className="iconDiv" />
          <input
            type="text"
            list="times"
            className="ml-2 p-1 font-medium px-2 flex-1 focus:outline-none"
            placeholder="Enter patient medical history"
            value={input.text}
            onChange={changeHandler}
            id="text"
          />
        </p>

        <p
          className="relative w-full sm:w-1/2 md:w-1/4  border  flex items-center p-4 font-medium capitalize"
          onMouseOver={() => {
            setShowTime(true);
          }}
          onMouseOut={() => {
            setShowTime(false);
          }}
        >
          <AiOutlineFieldTime className="iconDiv" />

          <input
            type="text"
            list="times"
            className="ml-2 p-1  px-2 flex-1 focus:outline-none"
            placeholder="Since"
            value={input.time}
            onChange={changeHandler}
            id="time"
          />
          {showTime && (
            <div
              className="border cursor-pointer border-slate-200 bg-white shadow-lg absolute left-0 right-0 z-10 top-[65px]"
              onMouseOver={() => {
                setShowTime(true);
              }}
              onMouseOut={() => {
                setShowTime(false);
              }}
              onClick={timeHandler}
            >
              <p className="p-2 pl-4 hover:bg-slate-200 font-normal">2 Hours</p>
              <p className="p-2 pl-4 hover:bg-slate-200 font-normal">2 Days</p>
              <p className="p-2 pl-4 hover:bg-slate-200 font-normal">2 Weeks</p>
              <p className="p-2 pl-4 hover:bg-slate-200 font-normal">
                2 Months
              </p>
              <p className="p-2 pl-4 hover:bg-slate-200 font-normal">2 Years</p>
            </div>
          )}
        </p>

        <p
          className="relative w-full sm:w-1/2 md:w-1/4 border  flex items-center p-4 font-medium capitalize"
          onMouseOver={() => {
            setShowActive(true);
          }}
          onMouseOut={() => {
            setShowActive(false);
          }}
        >
          <GiHamburgerMenu className="iconDiv" />
          <input
            type="text"
            className="ml-2 p-1 px-2 flex-1 focus:outline-none"
            placeholder="None"
            value={input.active}
            onChange={changeHandler}
            id="active"
          />
          {showActive && (
            <div
              className="border cursor-pointer border-slate-200 bg-white shadow-lg absolute left-0 right-0 z-10 top-[65px]"
              onMouseOver={() => {
                setShowActive(true);
              }}
              onMouseOut={() => {
                setShowActive(false);
              }}
              onClick={activeHandler}
            >
              <p className="p-2 pl-4 hover:bg-slate-200 font-normal">None</p>
              <p className="p-2 pl-4 hover:bg-slate-200 font-normal">Active</p>
              <p className="p-2 pl-4 hover:bg-slate-200 font-normal">
                Inactive
              </p>
            </div>
          )}
        </p>

        <p className="w-full sm:w-1/2 md:w-1/4  border flex items-center p-4 font-medium capitalize">
          <textarea
            type="text"
            className="mr-3 p-1 px-2 flex-1"
            placeholder="Add notes here!!!"
            rows="1"
            value={input.notes}
            onChange={changeHandler}
            id="notes"
          />
          {/* <textArea></textArea> */}
          <span>
            <AiOutlineDelete
              className="iconDiv"
              onClick={() => setBol(false)}
            />
          </span>
        </p>
      </div>
    )
  );
}
