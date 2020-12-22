export const sortByDateAndTime = (array) =>
  array.sort((a, b) =>
    a.date > b.date ? 1 : a.date === b.date ? (a.time > b.time ? 1 : -1) : -1
  );
