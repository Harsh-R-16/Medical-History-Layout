import React from "react";
import {
  BsFillArrowUpSquareFill,
  BsFillArrowDownSquareFill,
  BsFillArrowUpRightSquareFill,
} from "react-icons/bs";
import { FaHandshake } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdDelete, MdFilterCenterFocus } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  removeLink,
  removeSection,
  addLink,
  addSection,
} from "../../redux/action";
import { arr } from "../data";
let id;

export default function Section({ type, tempData }) {
  const dispatch = useDispatch();
  const [inp, setInp] = React.useState("");
  const [data, setData] = React.useState(tempData);
  const [suggestions, setSuggestions] = React.useState(arr);
  const [showDropdown, setShowDropDown] = React.useState(false);

  const submitHandler = (text) => {
    if (text) {
      if (type === "sections") dispatch(addSection(text));
      else dispatch(addLink(text));
      setData([...data, text.slice(0, 20)]);
      setShowDropDown(false);
    } else if (inp.trim()) {
      if (type === "sections") dispatch(addSection(inp));
      else dispatch(addLink(inp));
      setData([...data, inp.slice(0, 20)]);
    }
    setInp("");
  };

  const deleteHandler = (item, index) => {
    if (type === "sections") {
      dispatch(removeSection(item));
      let newData = [...data];
      newData.splice(index, 1);
      setData(newData);
    } else {
      dispatch(removeLink(item));
      let newData = [...data];
      newData.splice(index, 1);
      setData(newData);
    }
  };

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
    <section className="bg-white flex flex-wrap my-5 rounded-lg">
      <div className="my-4 p-4 py-2 w-full md:w-1/2">
        <h2 className="uppercase mb-4 font-medium">customise {type}</h2>
        <section className="flex flex-wrap gap-5">
          <div>
            <input
              type="radio"
              id="c"
              name="fav"
              value="c"
              className="relative top-[1px] mr-2"
            />
            <label htmlFor="c">Conditions</label>
          </div>

          <div>
            <input
              type="radio"
              id="o"
              name="fav"
              value="o"
              className="relative top-[1px] mr-2"
            />
            <label htmlFor="o">Other Allergy</label>
          </div>

          <div>
            <input
              type="radio"
              id="d"
              name="fav"
              value="d"
              className="relative top-[1px] mr-2"
            />
            <label htmlFor="d">Drug Allergy</label>
          </div>

          <div>
            <input
              type="radio"
              id="l"
              name="fav"
              value="l"
              className="relative top-[1px] mr-2"
            />
            <label htmlFor="l">Lifestyle Habits</label>
          </div>
        </section>

        <div className="relative my-4 flex items-center p-2 px-4 rounded border">
          <AiOutlineSearch />
          <input
            type="text"
            className="flex-1 mx-2 focus:outline-none bg-inherit"
            placeholder="Start typing a parameter..."
            value={inp}
            onChange={(e) => setInp(e.target.value)}
            onClick={() => setShowDropDown(true)}
          />
          <MdFilterCenterFocus className="scale-125" />
          {showDropdown && (
            <div
              className="text-black border border-slate-200
          max-h-96 overflow-y-scroll
              bg-white shadow-lg absolute left-0 right-0 z-10 top-10"
              onMouseEnter={() => setShowDropDown(true)}
              onMouseLeave={() => setShowDropDown(false)}
            >
              {showDropdown &&
                suggestions.map((i, index) => (
                  <p
                    key={index}
                    className="flex items-center p-3 px-4 hover:bg-slate-200"
                  >
                    <FaHandshake className="text-blue-700 border border-blue-400 rounded-full p-[4px] text-3xl" />
                    <span
                      className="ml-3 flex-1 cursor-pointer"
                      onClick={(e) => {
                        submitHandler(e.target.innerHTML);
                      }}
                    >
                      {i}
                    </span>
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
      </div>
      <div className="border-t md:border-t-0 md:border-l p-4 w-full md:w-1/2">
        <h2 className="border p-2 text-center uppercase rounded-lg font-medium">
          selected {type}
        </h2>
        <div className="flex items-center flex-wrap py-2">
          {data.map((i, index) => (
            <p
              key={index}
              className="text-sm flex items-center capitalize p-2 px-4 border border-red-400 text-red-800 rounded-full m-1 mt-[8px]"
            >
              <span className="mr-2">{i}</span>
              <span className="cursor-pointer">
                <MdDelete onClick={() => deleteHandler(i, index)} />
              </span>
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
