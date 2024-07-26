/**
 *This function sorts two dates in descending order using the time difference.
 * @returns: The time diifference between the dates.
 */
export const sortDateInDescendingOrder = (a?: string, b?: string) => {
  const dateA = a ? new Date(a).getTime() : 0;
  const dateB = b ? new Date(b).getTime() : 0;
  return dateB - dateA;
};
