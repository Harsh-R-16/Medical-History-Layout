import React from "react";
import { MdSettings } from "react-icons/md";

export default function Navbar() {
  const drawerHandler = () => {
    let aside = document.querySelector("aside");
    aside.classList.toggle("drawerClose");
  };

  return (
    <nav className="sticky top-0 z-10 bg-white py-[12px] px-5 flex border-b flex-wrap items-center justify-between">
      <section className="flex items-center ">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-9 h-9 text-white p-2 bg-red-500 rounded-b-lg"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
        </span>
        <h1 className="text-heading font-bold ml-2 tracking-[.5px]">
          Patient Medical History
        </h1>
      </section>

      <section className="flex items-center">
        <div>
          <input
            type="checkbox"
            id="checkbox"
            className="relative top-[1px] scale-[110%] checked:bg-button"
          />
          <label htmlFor="checkbox" className="font-bold ml-[7px] mr-4">
            No known medical history
          </label>
        </div>
        <button
          className="flex items-center text-button border-2 border-button font-medium py-1 px-2 focus:outline-none hover:bg-[#fafafa] transition rounded-md text-base"
          onClick={drawerHandler}
        >
          Configure
          <MdSettings className="relative top-[1px] ml-2" />
        </button>
      </section>
    </nav>
  );
}
