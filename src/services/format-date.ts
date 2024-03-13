export default function formatDateToTime(date: string) {
  // Your ISO date string
  const isoDateString = date;

  // Convert ISO string to Date object
  const newdate = new Date(isoDateString);

  // Format the date
  // You can adjust the format as needed
  const formattedTime = newdate.toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h24",
  });

  return formattedTime;
}
