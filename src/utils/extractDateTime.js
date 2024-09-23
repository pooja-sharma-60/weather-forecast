

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

export function extractMonthName(monthNumber){
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
 
  if (monthNumber < 1 || monthNumber > 12) {
    throw new Error("Invalid month number");
  }

  return monthNames[monthNumber - 1];

}

