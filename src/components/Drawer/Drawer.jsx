import React from "react";
import Section from "./Section";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaLightbulb } from "react-icons/fa";
import { BsArrowRightShort } from "react-icons/bs";
import { useSelector } from "react-redux";

export default function Modal() {
  const [boolean, setBoolean] = React.useState(true);
  let links = useSelector((state) => state.links);
  let sections = useSelector((state) => state.sections);

  const drawerHandler = (e) => {
    let ele = e.target;
    if (ele.classList.contains("drawer")) {
      e.currentTarget.classList.add("drawerClose");
    }
  };

  return (
    <aside className="drawerClose h-screen w-screen" onClick={drawerHandler}>
      <main className="bg-[#EBEDF2] min-h-screen w-full relative p-4 pb-24">
        <h1 className="flex items-center font-bold">
          <AiOutlineArrowRight className="drawer" />
          <span className="ml-4 capitalize">Customise medical history</span>
        </h1>
        <div className="p-3 px-4 pb-2 my-3">
          <span
            className={`mr-5 cursor-pointer ${boolean && "link"}`}
            onClick={() => setBoolean(true)}
          >
            Quick Links
          </span>
          <span
            className={`mr-5 cursor-pointer ${!boolean && "link"}`}
            onClick={() => setBoolean(false)}
          >
            Select Sections
          </span>
        </div>
        <p className="border border-red-900 p-2 flex items-center bg-[#FFFAEF] rounded-md">
          <FaLightbulb className="text-[#75632C]" />
          <span className="ml-3">
            The {boolean ? "quick links" : "sections"} you select here will be
            visible on pad for quick addition.
          </span>
        </p>
        {boolean && <Section type={"quick links"} tempData={links} />}
        {boolean || <Section type={"sections"} tempData={sections} />}
        <footer className="drawer absolute flex justify-between bottom-8 left-4 right-4 p-3 px-8 border-2 rounded-md bg-footer text-white">
          <button className="drawer">Cancel</button>
          <button className="drawer flex items-center p-2 px-3 rounded-md bg-white text-footer font-medium">
            <BsArrowRightShort className="drawer text-2xl mr-[3px]" />
            Save Changes
          </button>
        </footer>
      </main>
    </aside>
  );
}
