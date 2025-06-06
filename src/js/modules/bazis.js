export const bazis = () => {
  const bazis = document.querySelectorAll(".bazis");
  if (bazis.length > 0) {
    const radio = document.querySelector(".bazis-radio input");
    const checkboxes = document.querySelectorAll(".bazis-check input");

    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", (e) => {
        const filtered = Array.from(checkboxes).filter((item) => {
          return item.checked === true;
        });
        if (filtered.length === 0) {
          radio.checked = true;
        } else {
          radio.checked = false;
        }
      });
    });
    radio.addEventListener("change", (e) => {
      const { target } = e;
      if (target.checked) {
        checkboxes.forEach((checkbox) => {
          checkbox.checked = false;
        });
      } else {
      }
    });
  }
};
