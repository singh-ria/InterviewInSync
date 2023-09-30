// function to format date from YYYY-MM-DD to Month DD, YYYY
export function formatDate(dateStr) {
  const dateComponents = dateStr.split("-");

  if (dateComponents.length !== 3) {
    return "Invalid date";
  }

  const day = parseInt(dateComponents[0], 10);
  const month = parseInt(dateComponents[1], 10);
  const year = parseInt(dateComponents[2], 10);

  if (Number.isNaN(day) || Number.isNaN(month) || Number.isNaN(year)) {
    return "Invalid date";
  }

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
    "December"
  ];

  if (month < 1 || month > 12) {
    return "Invalid month";
  }

  const interviewDate = new Date(year, month - 1, day);

  if (Number.isNaN(interviewDate.getTime())) {
    return "Invalid date";
  }

  const formattedDate = `${monthNames[month - 1]} ${String(day).padStart(2, "0")}, ${year}`;

  return formattedDate;
}

// function to extract start time from time range
export function extractStartTime(timeRange) {
  const startTimeMatch = timeRange.match(/^\d{1,2}:\d{2}[APap][Mm]/);

  if (startTimeMatch) {
    return startTimeMatch[0];
  }

  return null;
}
