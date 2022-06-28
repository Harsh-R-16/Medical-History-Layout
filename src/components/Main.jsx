import React from "react";
import Navbar from "./Navbar/Navbar";
import Section1 from "./Section1/Section";
import Section2 from "./Section2/Section";
import { useSelector } from "react-redux";

export default function Main() {
  let sectionsData = useSelector((state) => state.sectionsData);
  let sections = useSelector((state) => state.sections);
  return (
    <main className="bg-primary min-h-screen pb-48">
      <div className="fixed top-2 left-5 bg-red-500 h-1 w-9 z-20"></div>
      <Navbar />
      <section className="mx-5 my-[9px] pb-1 bg-white rounded-[10px] shadow-sm p-3">
        <Section1 />
        {sectionsData.map((section, index) => (
          <>
            <div className="border-t mx-2 my-3"></div>
            <Section2 type={sections[index]} temp={sectionsData[index]} />
          </>
        ))}
      </section>
    </main>
  );
}
