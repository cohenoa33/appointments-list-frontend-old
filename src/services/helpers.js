const sortBy = (array, name, order) => {
  switch (name) {
    case "date": {
      return array.sort((a, b) =>
        order ? returnDate(a, b) : returnDate(b, a)
      );
    }
    case "doctor": {
      return array.sort((a, b) => {
        let nameA = a.doctor.toUpperCase();
        let nameB = b.doctor.toUpperCase();
        return returnValue(nameA, nameB, order);
      });
    }
    case "patient": {
      return array.sort((a, b) => {
        let nameA = a.patient.toUpperCase();
        let nameB = b.patient.toUpperCase();
        return returnValue(nameA, nameB, order);
      });
    }
    case "insurance_approval": {
      let needInsurance = array.filter((app) => app.need_insurance === true);
      let noInsurance = array.filter((app) => app.need_insurance !== true);
      return order
        ? [...needInsurance, ...noInsurance]
        : [...noInsurance, ...needInsurance];
    }
    default:
      return array;
  }
};

const returnValue = (nameA, nameB, order) => {
  return order === true ? (nameA < nameB ? -1 : 1) : nameA > nameB ? -1 : 1;
};
const returnDate = (a, b) => {
  return a.date > b.date
    ? 1
    : a.date === b.date
    ? a.time > b.time
      ? 1
      : -1
    : -1;
};
const validate = (appointment) => {
  debugger;
};

let helpers = {
  sortBy: sortBy,
  validate: validate,
};

export default helpers;
