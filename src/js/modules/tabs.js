import { updateAccordionsInContainer } from "./accordeon.js";
import { priceSize } from "./priceSize.js";

export const tabs = () => {
  const tabWrappers = document.querySelectorAll(".tab-wrapper");

  tabWrappers.forEach((wrapper) => {
    const tabBtns = wrapper.querySelectorAll(".tab");
    const tabContents = wrapper.querySelectorAll(".tab-content");
    const tabSelector = wrapper.querySelector(".tab-selector");
    const tabInnerWrappers = wrapper.querySelectorAll(".tab-inner-wrapper");

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

    if (tabInnerWrappers.length > 0) {
      tabInnerWrappers.forEach((innerWrapper) => {
        const tabInnerBtns = innerWrapper.querySelectorAll(".tab-inner");
        const tabInnerContents =
          innerWrapper.querySelectorAll(".tab-inner-content");
        const tabInnerSelector = innerWrapper.querySelector(
          ".tab-inner-selector"
        );
        const fixedSubmitForm = document.querySelector(".fixed-submit-form");
        const submitFormWrapper = innerWrapper.querySelector(
          ".submit-form-wrapper"
        );

        if (tabInnerSelector) {
          const selectorContent =
            tabInnerSelector.querySelector(".selector-content");
          const labels = selectorContent.querySelectorAll("label");

          labels.forEach((label) => {
            label.addEventListener("change", (e) => {
              const { target } = e;
              tabInnerContents.forEach((content) => {
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
              priceSize();

              if (submitFormWrapper) {
                const submitFormBtn = submitFormWrapper.querySelector(".btn");
                const submitFormInfo =
                  submitFormWrapper.querySelector(".submit-form-info");

                submitFormInfo.classList.remove("hidden");
                submitFormBtn.disabled = false;
              }
              if (fixedSubmitForm) {
                fixedSubmitForm.classList.add("ready");
              }
            });
          });
        }

        // Обработка кнопок табов
        tabInnerBtns.forEach((btn) => {
          btn.addEventListener("click", () => {
            const activeTab = wrapper.querySelector(".tab.active");
            if (activeTab) activeTab.classList.remove("active");
            btn.classList.add("active");

            tabInnerContents.forEach((content) => {
              if (btn.dataset.tab !== content.dataset.tab) {
                content.classList.add("hide");
              } else {
                content.classList.remove("hide");
                // Обновляем аккордеоны внутри видимого таба
                updateAccordionsInContainer(content);
                priceSize();
              }
            });
          });
        });
      });
    }
  });
};
