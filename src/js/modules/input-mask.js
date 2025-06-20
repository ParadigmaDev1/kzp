import IMask from "imask";

export const inputMask = () => {
  document.querySelectorAll(".input__valid-inn").forEach((el) => {
    IMask(el, {
      mask: "0000000000",
    });
  });
  document.querySelectorAll(".input__valid-number").forEach((el) => {
    IMask(el, {
      mask: "000000000000000",
    });
  });
};
