/**
 *This function takes in an isoDate and transforms it into a human readable format. It is used when transforming the dates from the RSS feed on the articles page.
 *
 * isoDate: The isoDate to transform.
 *
 * @returns: The transform date in the  'YYYY-MM-DD' format.
 */
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
