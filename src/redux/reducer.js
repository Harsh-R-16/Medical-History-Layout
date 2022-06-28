import { REMOVE_LINK, REMOVE_SECTION, ADD_LINK, ADD_SECTION } from "./action";

export const reducer = (store, action) => {
  let index;

  switch (action.type) {
    case REMOVE_LINK:
      return {
        ...store,
        links: store.links.filter((link) => link !== action.payload),
      };

    case REMOVE_SECTION:
      for (let i = 0; i < store.sections.length; i++) {
        if (store.sections[i] === action.payload) {
          index = i;
          break;
        }
      }
      let newSection = [...store.sections];
      let newSectionsData = [...store.sectionsData];
      newSection.splice(index, 1);
      newSectionsData.splice(index, 1);
      return {
        ...store,
        sections: newSection,
        sectionsData: newSectionsData,
      };

    case ADD_LINK:
      return {
        ...store,
        links: [...store.links, action.payload.slice(0, 20)],
      };

    case ADD_SECTION:
      return {
        ...store,
        sections: [...store.sections, action.payload],
        sectionsData: [
          ...store.sectionsData,
          ["Sailor's Skin", "Diabetes mellitus", "Cancer"],
        ],
      };

    default:
      return store;
  }
};
