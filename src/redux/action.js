export const REMOVE_LINK = "REMOVE_LINK";
export const REMOVE_SECTION = "REMOVE_SECTION";
export const ADD_LINK = "ADD_LINK";
export const ADD_SECTION = "ADD_SECTION";

export const removeLink = (payload) => {
  return {
    type: REMOVE_LINK,
    payload,
  };
};

export const removeSection = (payload) => {
  return {
    type: REMOVE_SECTION,
    payload,
  };
};

export const addLink = (payload) => {
  return {
    type: ADD_LINK,
    payload,
  };
};

export const addSection = (payload) => {
  return {
    type: ADD_SECTION,
    payload,
  };
};
