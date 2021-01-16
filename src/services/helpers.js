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
  if (appointment.doctor !== undefined && appointment.doctor.length > 1) {
    if (appointment.patient !== undefined && appointment.patient.length > 1) {
      if (appointment.date !== undefined && validateDate(appointment.date)) {
        if (appointment.time !== undefined) {
          return true;
        }
        return "Time is required: please pick hour, minutes and AM-PM";
      }
      return "Date is required: please pick valid appointment date";
    }
    return "Patient is required: make sure patient's name is 2 characters minimum";
  }
  return "Doctor is required: make sure doctor's name is 2 characters minimum";
};

const validateDate = (date) => {
  let fiveYearsYear = new Date().getFullYear() - 5;
  return +date.split("-")[0] >= fiveYearsYear ? true : false;
};
const convertTime = (time) => {
  let hour = time.split(":")[0];
  let ampm = hour >= 12 ? "PM" : "AM";
  if (hour > 12) hour = hour - 12;
  if (hour === "00") hour = 12;
  let minuets = time.split(":")[1];

  return hour + ":" + minuets + " " + ampm;
};

let helpers = {
  sortBy: sortBy,
  validate: validate,
  convertTime: convertTime,
};

export default helpers;
