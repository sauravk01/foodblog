export const settingLocalStorage = (name, value) => {
  //note name must be string
  // To store data
  // console.log("name", name);
  // console.log("value", value);
  localStorage.setItem(name, JSON.stringify(value));
};

export const gettingLocalStorage = (name, { dispatch, action }) => {
  //note name must be string
  if (!name) return;
  const value = JSON.parse(localStorage.getItem(name));
  //note dispatch must contain the dispatch method containing type and payload
  // console.log("name", name);
  // console.log("dispatch", value);
  if (value)
    dispatch({
      type: action,
      payload: value,
    });
};

export const clearingLocalStorage = (name) => {
  // note single object must be send
  // To clear a specific item
  localStorage.removeItem(name);
};
