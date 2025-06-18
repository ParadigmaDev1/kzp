export const priceSize = () => {
  const priceObjs = document.querySelectorAll(".price-table");

  if (priceObjs.length === 0) return;

  priceObjs.forEach((priceObj) => {
    priceObj
      .querySelectorAll(".table__item, .price-table-row")
      .forEach((el) => {
        el.style.height = "auto";
      });

    const leftColumnItems = priceObj.querySelectorAll(".table__item");
    const priceColumns = priceObj.querySelectorAll(".price-table__item");

    leftColumnItems.forEach((leftItem, rowIndex) => {
      let maxHeight = leftItem.offsetHeight;
      const rowElements = [leftItem];

      priceColumns.forEach((column) => {
        const columnRow = column.querySelectorAll(".price-table-row")[rowIndex];
        if (columnRow) {
          rowElements.push(columnRow);
          maxHeight = Math.max(maxHeight, columnRow.offsetHeight);
        }
      });

      rowElements.forEach((el) => {
        el.style.height = `${maxHeight}px`;
      });
    });
  });
};
