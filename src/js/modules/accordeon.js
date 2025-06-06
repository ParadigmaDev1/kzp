// Функция для обновления отдельного элемента аккордеона
export const updateAccordionItem = (item) => {
  const titleHeight = item.querySelector(".accordion-title").scrollHeight;
  const bodyHeight = item.querySelector(".accordion-body")?.scrollHeight || 0;
  item.style.maxHeight = item.classList.contains("active")
    ? `${titleHeight + bodyHeight + 110}px`
    : `${titleHeight}px`;
};

// Функция для обновления всех аккордеонов в контейнере
export const updateAccordionsInContainer = (container) => {
  const accordionItems = container.querySelectorAll(".accordion-item");
  accordionItems.forEach((item) => updateAccordionItem(item));
};

// Основная функция инициализации аккордеона
export const accordeonFunc = () => {
  document.querySelectorAll(".accordion").forEach((accordion) => {
    accordion.querySelectorAll(".accordion-item").forEach((item) => {
      updateAccordionItem(item);

      item.addEventListener("click", (event) => {
        if (!event.target.classList.contains("accordion-title")) return;

        item.classList.toggle("active");
        updateAccordionItem(item);

        const titleShow = item.querySelector(".accordion-title-show p");
        if (titleShow) {
          titleShow.textContent = item.classList.contains("active")
            ? "Свернуть"
            : "Развернуть";
        }
      });

      window.addEventListener("resize", () => updateAccordionItem(item));
    });
  });
};
