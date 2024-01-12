export const makeUpperCase = (text) => {
  return text.toUpperCase();
};

export const calcAge = (birthYear) => {
  const today = new Date().getFullYear();
  return today - birthYear;
};

export const sayHi = (name) => {
  return alert(name);
};
