export const timeValues = {
  day: 86400000,
  week: 604800000,
};

export const monthValues = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const suffixValues = {
  1: "st",
  2: "nd",
  3: "rd",
  4: "th",
  5: "th",
  6: "th",
  7: "th",
  8: "th",
  9: "th",
  10: "th",
  11: "th",
  12: "th",
  13: "th",
  14: "th",
  15: "th",
  16: "th",
  17: "th",
  18: "th",
  19: "th",
  20: "th",
  21: "st",
  22: "nd",
  23: "rd",
  24: "th",
  25: "th",
  26: "th",
  27: "th",
  28: "th",
  29: "th",
  30: "th",
  31: "st",
};

export const roundDateDown = (dateMS) => {
  const thisDate = new Date(dateMS);
  return new Date(
    thisDate.getFullYear(),
    thisDate.getMonth(),
    thisDate.getDate()
  ).getTime();
};

export const getLastNDates = (length) => {
  let now = roundDateDown(Date.now());
  let offset = 0;
  let result = [];
  for (let i = 0; i < length; i++) {
    result.push(now - timeValues.day * i);
  }
  return result;
};
