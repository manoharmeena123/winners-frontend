export const formatDate = (isoDateString) => {
    const date = new Date(isoDateString);

    const day = date.getDate(); // Get the day of the month (1-31)
    const year = date.getFullYear(); // Get the year (e.g., 2025)

    // Array of month names
    const monthNames = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    const month = monthNames[date.getMonth()]; // Get the month name (e.g., "Feb")

    return `${day} ${month} ${year}`;
};


export const formater = (dateString) => {
    const [day, month, year] = dateString.split('/');
    const date = new Date(`${year}-${month}-${day}`);
  
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return new Intl.DateTimeFormat('en-GB', options).format(date);
  };