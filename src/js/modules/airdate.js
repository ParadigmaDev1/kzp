import AirDatepicker from "air-datepicker";

export const airdate = () => {
  document.querySelectorAll(".date-picker.multiple").forEach((input) => {
    new AirDatepicker(input, {
      range: true,
      multipleDatesSeparator: " - ",
    });
    // IMask(input, {
    //   mask: Date,
    //   min: new Date(1900, 0, 1),
    //   max: new Date(2050, 0, 1),
    // });
  });
  document.querySelectorAll(".date-picker.single").forEach((input) => {
    new AirDatepicker(input);
    // IMask(input, {
    //   mask: Date,
    //   min: new Date(1900, 0, 1),
    //   max: new Date(2050, 0, 1),
    // });
  });
};
