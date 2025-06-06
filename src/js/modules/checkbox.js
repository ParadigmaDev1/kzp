export const checkbox = () => {
  window.addEventListener("keyup", function (e) {
    const target = document.querySelector(".checkbox-ios input:focus");

    if (e.keyCode === 9 && target) {
      target.closest(".checkbox-ios").classList.add("focused");
    }
  });

  document.querySelectorAll(".checkbox-ios input").forEach(function (checkbox) {
    checkbox.addEventListener("focusout", function () {
      this.closest(".checkbox-ios").classList.remove("focused");
    });
  });
};
