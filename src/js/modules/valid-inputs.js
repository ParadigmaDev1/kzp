import IMask from "imask";

export const validInputs = () => {
  let currentYear = new Date().getFullYear();
  let stepYear = 5;

  function checkName() {
    this.value = this.value.replace(/[^А-Яа-яA-Za-z\ё\Ё\ \-]/g, "");
  }

  function checkMail() {
    this.value = this.value.replace(/[^0-9A-Za-z\@\.]/g, "");
  }

  function checkPhone() {
    document.querySelectorAll(".input__valid-phone").forEach((el) => {
      IMask(el, {
        mask: "+7 (000) 000-00-00",
      });
    });
  }

  function checkPositiveNumber() {
    this.value = this.value.replace(/[^0-9]/g, "");
    this.value = this.value == 0 ? (this.value = 1) : this.value;
  }

  function checkTime(event, input) {
    let text = input.value.split("");
    if (text.length < 5) {
      input.value = "";
    } else {
      text = input.value.split(":");
      if (text[2] < currentYear) {
        text[2] = currentYear;
      }
      input.value = text[0] + ":" + text[1];
    }
  }

  function validTime(event, input) {
    input.value = input.value.replace(/[^0-9\:]/g, "");
    let text = input.value.split("");
    text = text.slice(0, 5);
    if (text.length === 3 && event.inputType !== "deleteContentBackward") {
      text.splice(text.length - 1, 0, ":");
    }
    if (
      (text.length === 1 || text.length === 4) &&
      event.inputType === "insertText" &&
      event.data === ":"
    ) {
      text.splice(text.length - 1, 1);
    }
    if (
      (text.length === 2 || text.length === 5) &&
      event.inputType === "insertText" &&
      event.data === ":"
    ) {
      text.splice(text.length - 2, 0, "0");
      text = text.slice(0, 5);
    }

    if (text.length > 1) {
      if (+(text[0] + text[1]) > 23) {
        text[0] = "0";
        text[1] = "0";
      }
    }

    if (text.length > 4) {
      if (+(text[3] + text[4]) > 59) {
        text[3] = "0";
        text[4] = "0";
      }
    }

    input.value = text.join("");
  }

  function checkDate(event, input) {
    let text = input.value.split("");
    if (text.length < 10) {
      input.value = "";
    } else {
      text = input.value.split(".");
      if (text[2] < currentYear) {
        text[2] = currentYear;
      }
      input.value = text[0] + "." + text[1] + "." + text[2];
    }
  }

  function validDate(event, input) {
    input.value = input.value.replace(/[^0-9\.]/g, "");
    let text = input.value.split("");
    text = text.slice(0, 10);
    if (
      (text.length === 3 || text.length === 6) &&
      event.inputType !== "deleteContentBackward"
    ) {
      text.splice(text.length - 1, 0, ".");
    }
    if (
      text.length === 1 &&
      event.inputType === "insertText" &&
      event.data === "."
    ) {
      text.splice(0, 1);
    }
    if (
      (text.length === 2 || text.length === 5) &&
      event.inputType === "insertText" &&
      event.data === "."
    ) {
      text.splice(text.length - 2, 0, "0");
    }
    if (
      (text.length === 4 || text.length === 7) &&
      event.inputType === "insertText" &&
      event.data === "."
    ) {
      text.splice(text.length - 2, 1);
    }
    if (text.length > 1) {
      if (+(text[0] + text[1]) > 31) {
        text[0] = "3";
        text[1] = "1";
      }
      if (text[0] + text[1] === "00") {
        text[0] = "0";
        text[1] = "1";
      }
    }

    if (text.length > 4) {
      if (+(text[3] + text[4]) > 12) {
        text[3] = "1";
        text[4] = "2";
      }
      if (text[3] + text[4] === "00") {
        text[3] = "0";
        text[4] = "1";
      }
    }

    if (text.length > 6) {
      let yearArr = text.slice(6);
      yearArr = yearArr.join("");

      if (+yearArr > +currentYear + stepYear) {
        yearArr = currentYear;
      }

      let textUpdate = text.slice(0, 6);

      textUpdate.splice(6, 0, yearArr);
      text = textUpdate;
    }

    input.value = text.join("");
  }

  let inputsValidName = document.querySelectorAll(".input__valid-name");
  let inputsValidPhone = document.querySelectorAll(".input__valid-phone");
  let inputsValidPositiveNumber = document.querySelectorAll(
    ".input__valid-positive-number"
  );
  let inputsValidTime = document.querySelectorAll(".input__valid-time");
  let inputsValidDate = document.querySelectorAll(".input__valid-date");

  inputsValidName.forEach((input) =>
    input.addEventListener("input", checkName)
  );
  inputsValidPhone.forEach((input) =>
    input.addEventListener("input", checkPhone)
  );
  inputsValidPositiveNumber.forEach((input) =>
    input.addEventListener("input", checkPositiveNumber)
  );
  inputsValidTime.forEach((input) => {
    input.addEventListener("input", () => validTime(event, input));
    input.addEventListener("change", () => checkTime(event, input));
  });
  inputsValidDate.forEach((input) => {
    input.addEventListener("input", () => validDate(event, input));
    input.addEventListener("change", () => checkDate(event, input));
  });
};
