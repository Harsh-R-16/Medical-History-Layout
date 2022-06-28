import { createStore } from "redux";
import { reducer } from "./reducer";
import { links, sections } from "./data";

let initialStore = {
  links,
  sections,
  sectionsData: [
    ["Sailor's Skin", "Diabetes mellitus", "Cancers"],
    ["Sailor's Skin", "Saecodosis", "Heart Disease"],
    ["Hypertension", "Substance Abuse", "Adolenscence"],
  ],
};

export const store = createStore(reducer, initialStore);
