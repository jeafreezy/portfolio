export const formatDate = (isoDate: any) => {
  const date = new Date(isoDate);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "2-digit",
  };
  const formattedDate = date.toLocaleDateString("en-US", options);
  return formattedDate;
};
