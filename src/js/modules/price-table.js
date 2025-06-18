import { priceSize } from "./priceSize.js";

export const priceTable = () => {
  const table = document.querySelector(".price-table.mob");
  const priceTable = document.querySelector(".price-table");
  if (priceTable) {
    const priceTableTop = priceTable
      .querySelector(".table-fix")
      .querySelector(".table-top");
    const priceFixTable = document.querySelector(".price-fix-table");
    const header = document.querySelector(".header");
    if (priceFixTable) {
      const scrollTable = () => {
        if (
          window.scrollY > priceTableTop.offsetTop &&
          window.scrollY <
            priceTable.offsetTop +
              priceTable.offsetHeight -
              priceFixTable.offsetHeight
        ) {
          priceFixTable.classList.add("active");
          priceFixTable.style.transform = `translateY(${
            header.offsetHeight - 5
          }px)`;
        } else {
          priceFixTable.style.transform = `translateY(0px)`;

          priceFixTable.classList.remove("active");
        }
      };
      scrollTable();
      window.addEventListener("scroll", () => {
        scrollTable();
      });
    }
  }
  if (table) {
    const tableItems = table.querySelectorAll(".table-item");

    const changeTableItemWidth = () => {
      if (tableItems.length === 1 && window.innerWidth < 500) {
        tableItems[0].classList.add("full");
      } else {
        tableItems.forEach((item) => {
          item.classList.remove("full");
        });
      }
    };
    changeTableItemWidth();
    window.addEventListener("resize", () => {
      changeTableItemWidth();
    });
  }

  priceSize();

  window.addEventListener("resize", () => {
    priceSize();
  });
};
