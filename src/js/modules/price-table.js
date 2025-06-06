export const priceTable = () => {
  const table = document.querySelector(".price-table.mob");
  const priceTable = document.querySelector(".price-table");
  if (priceTable) {
    const priceTableTop = priceTable
      .querySelector(".table-fix")
      .querySelector(".table-top");
    const priceFixTable = document.querySelector(".price-fix-table");
    const header = document.querySelector(".header");

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
  const priceSize = () => {
    const priceObj = document.querySelector(".price-table-swiper");
    const tableItems = document.querySelectorAll(".table__item");
    if (priceObj) {
      const priceItems = priceObj.querySelectorAll(".price-table__item");
      priceItems.forEach((item) => {
        const priceRows = Array.from(item.querySelectorAll(".price-table-row"));
        tableItems.forEach((item, index) => {
          if (priceRows[index]) {
            if (item.offsetHeight < 150) {
              priceRows[index].style.height = `150px`;
              item.style.height = '150px';
              return;
            }
            priceRows[index].style.height = `${item.offsetHeight}px`;
          }
        });
      });
    }
  };
  priceSize();

  window.addEventListener("resize", () => {
    priceSize();
  });
};
