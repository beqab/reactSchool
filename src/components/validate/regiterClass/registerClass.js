import validator from "validator";
import isEmpty from "../idEmty";

export const stepOneValidation = data => {
  let errors = {};
  if (!validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "სახელი უნდა შედგებოდეს მინიმუმ 2 სიმბოლოსგონ";
  }
  if (validator.isEmpty(data.subject_id)) {
    errors.subject_id = "საგნის არჩევა აუცილებელია";
  }
  if (validator.isEmpty(data.school_class_id)) {
    errors.school_class_id = "კლასის მითითება აუცილებელია";
  }
  if (validator.isEmpty(data.school_id)) {
    errors.school_id = "სკოლის არჩევა აუცილებელია";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

export const studentCreatorValidation = data => {
  let errors = {};
  if (!validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = " მინიმუმ 2 სიმბოლო";
  }
  if (!validator.isNumeric(data.phone)) {
    errors.phone = "შეიყვანეთ მხოლოდ ციფრები";
  }
  if (!validator.isLength(data.phone, { min: 9, max: 9 })) {
    errors.phone = " შეიყვანეთ 9 ციფრი ";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
