export const getFormatDate = (date: Date) => {
  const newDate = new Date(date);
  const monthNames = [
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
  return `${
    monthNames[newDate.getMonth()]
  } ${newDate.getDay()}, ${newDate.getFullYear()}`;
};
