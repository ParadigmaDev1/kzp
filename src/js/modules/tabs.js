import { updateAccordionsInContainer } from "./accordeon.js";

export const tabs = () => {
  const tabWrappers = document.querySelectorAll(".tab-wrapper");

  tabWrappers.forEach((wrapper) => {
    const tabBtns = wrapper.querySelectorAll(".tab");
    const tabContents = wrapper.querySelectorAll(".tab-content");
    const tabSelector = wrapper.querySelector(".tab-selector");

    // Обработка селектора (если есть)
    if (tabSelector) {
      const selectorContent = tabSelector.querySelector(".selector-content");
      const labels = selectorContent.querySelectorAll("label");

      labels.forEach((label) => {
        label.addEventListener("change", (e) => {
          const { target } = e;

          tabContents.forEach((content) => {
            if (target.value !== content.dataset.tab) {
              content.classList.add("hide");
            } else {
              content.classList.remove("hide");
              // Обновляем аккордеоны внутри видимого таба
              updateAccordionsInContainer(content);
            }
          });

          const activeLabel = selectorContent.querySelector("label.active");
          if (activeLabel) activeLabel.classList.remove("active");
          label.classList.add("active");
        });
      });
    }

    // Обработка кнопок табов
    tabBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const activeTab = wrapper.querySelector(".tab.active");
        if (activeTab) activeTab.classList.remove("active");
        btn.classList.add("active");

        tabContents.forEach((content) => {
          if (btn.dataset.tab !== content.dataset.tab) {
            content.classList.add("hide");
          } else {
            content.classList.remove("hide");
            // Обновляем аккордеоны внутри видимого таба
            updateAccordionsInContainer(content);
          }
        });
      });
    });
  });
};
