import React from "react";
import Div from "./Div";
import { useSelector } from "react-redux";

export default function Section1() {
  let links = useSelector((state) => state.links);
  console.log(links);
  return (
    <section>
      <div className="flex flex-wrap">
        {links.map((i, index) => (
          <Div key={index} text={i} />
        ))}
      </div>
    </section>
  );
}
