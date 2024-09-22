

export default function extractDateTime(dateTimeStr) {
    
  const [datePart, timePart] = dateTimeStr.split(" ");


  const date = datePart;

  const dateObject = new Date(datePart);
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = daysOfWeek[dateObject.getUTCDay()];

  const time = timePart;

  return { date, day, time };
}


