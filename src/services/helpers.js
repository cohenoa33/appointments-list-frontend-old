export const sortBy = (array, name) => {
  switch (name) {
    case "date": {
      return array.sort((a, b) =>
        a.date > b.date
          ? 1
          : a.date === b.date
          ? a.time > b.time
            ? 1
            : -1
          : -1
      );
    }
    case "doctor": {
      return array.sort((a, b) => {
        let nameA = a.doctor.toUpperCase();
        let nameB = b.doctor.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
    }
  }
  return array;
};
