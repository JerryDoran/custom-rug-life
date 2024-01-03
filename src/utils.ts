// Format a date
export function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  };

  return new Date(date).toLocaleDateString(undefined, options);
}

// Capitalize the first letter of a string
export function capitalizeFirstLetter(str: string): string {
  if (typeof str !== 'string' || str.length === 0) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}
