import Swiper from "swiper";
import { Navigation, Pagination, Controller } from "swiper/modules";

export const priceFilters = () => {
  const priceSwiper = new Swiper(".price-table-swiper", {
    modules: [Navigation, Controller],
    slidesPerView: 3,
    spaceBetween: 0,
    navigation: {
      prevEl: ".price-prev",
      nextEl: ".price-next",
    },
    breakpoints: {
      1024: {
        slidesPerView: 2,
      },
      1280: {
        slidesPerView: 3,
      },
    },
  });
  const priceFixSwiper = new Swiper(".price-fix-table-swiper", {
    modules: [Navigation, Controller],
    slidesPerView: 3,
    spaceBetween: 0,
    navigation: {
      prevEl: ".price-fix-prev",
      nextEl: ".price-fix-next",
    },
    breakpoints: {
      1024: {
        slidesPerView: 2,
      },
      1280: {
        slidesPerView: 3,
      },
    },
  });
  priceFixSwiper.controller.control = priceSwiper;
  priceSwiper.controller.control = priceFixSwiper;
  const priceFilters = document.querySelector(".price-filters ");
  if (priceFilters) {
    const filters = priceFilters.querySelectorAll(".filter-row");
    const clearFilters = priceFilters.querySelector(".clear-price-filters");
    // clearFilters.addEventListener("click", () => {
    //   filters.forEach((filter) => {
    //     const inputs = filter.querySelectorAll("label input");
    //     inputs.forEach((input) => {
    //       input.checked = false;
    //     });
    //     inputs[0].checked = true;
    //   });
    // });

    const ndsSelector = priceFilters.querySelector(".nds-selector");
    const ndsInputs = ndsSelector.querySelectorAll("label input");
    const priceItems = document.querySelectorAll(".price-item");
    const ndsPrice = Array.from(priceItems).filter((item) => {
      return item.dataset.nds === "true";
    });
    const noNdsPrice = Array.from(priceItems).filter((item) => {
      return item.dataset.nds === "false";
    });
    ndsInputs.forEach((input) => {
      input.addEventListener("change", (e) => {
        const { target } = e;
        if (target.value === "nds") {
          ndsPrice.forEach((item) => {
            if (item.className.includes("hidden")) {
              item.classList.remove("hidden");
            }
          });
          noNdsPrice.forEach((item) => {
            item.classList.add("hidden");
          });
        }
        if (target.value === "no-nds") {
          noNdsPrice.forEach((item) => {
            if (item.className.includes("hidden")) {
              item.classList.remove("hidden");
            }
          });
          ndsPrice.forEach((item) => {
            item.classList.add("hidden");
          });
        }
        if (target.value === "all") {
          noNdsPrice.forEach((item) => {
            if (item.className.includes("hidden")) {
              item.classList.remove("hidden");
            }
          });
          ndsPrice.forEach((item) => {
            if (item.className.includes("hidden")) {
              item.classList.remove("hidden");
            }
          });
        }
      });
    });
    const bazisSelector = priceFilters.querySelector(".bazis-selector");
    const bazisInputs = bazisSelector.querySelectorAll("label input");
    const bazisApplyBtn = bazisSelector.querySelector(
      ".success-checkbox-selector"
    );
    const priceTableMob = document.querySelector(".price-table.mob");
    const priceTableMobItems =
      priceTableMob.querySelectorAll(".table-item__price");

    let allSlides = Array.from(document.querySelectorAll(".price-table__item")); // Сохраняем оригинальные слайды
    let allFixSlides = Array.from(
      document.querySelectorAll(".table-fix__item")
    );
    clearFilters.addEventListener("click", () => {
      filters.forEach((filter) => {
        const inputs = filter.querySelectorAll("label input");
        inputs.forEach((input) => (input.checked = false));
        inputs[0].checked = true;
      });
      noNdsPrice.forEach((item) => {
        if (item.className.includes("hidden")) {
          item.classList.remove("hidden");
        }
      });
      ndsPrice.forEach((item) => {
        if (item.className.includes("hidden")) {
          item.classList.remove("hidden");
        }
      });
      restoreAllSlides();
    });

    const filteredDesk = () => {
      bazisInputs.forEach((input) => {
        input.addEventListener("change", applyFilters);
      });

      function applyFilters() {
        const checkedInputs = Array.from(bazisInputs).filter(
          (input) => input.checked
        );
        const selectedBazis = checkedInputs.map((input) => input.value);
        if (selectedBazis.includes("all")) {
          restoreAllSlides();
          return;
        }

        document
          .querySelectorAll(".price-table-swiper .price-table__item")
          .forEach((slide) => {
            slide.remove();
          });
        document
          .querySelectorAll(".price-fix-table-swiper .table-fix__item")
          .forEach((slide) => {
            slide.remove();
          });

        const filteredSlides = allSlides.filter((item) =>
          selectedBazis.includes(item.dataset.bazis)
        );
        const filteredFixSlides = allFixSlides.filter((item) =>
          selectedBazis.includes(item.dataset.bazis)
        );

        const swiperWrapper = document.querySelector(
          ".price-table-swiper .swiper-wrapper"
        );
        const fixSwiperWrapper = document.querySelector(
          ".price-fix-table-swiper .swiper-wrapper"
        );

        filteredSlides.forEach((slide) => {
          swiperWrapper.appendChild(slide);
        });
        filteredFixSlides.forEach((slide) => {
          fixSwiperWrapper.appendChild(slide);
        });

        priceSwiper.update();
        priceFixSwiper.update();
      }

      function restoreAllSlides() {
        document
          .querySelectorAll(".swiper-wrapper .price-table__item")
          .forEach((slide) => {
            slide.remove();
          });
        document
          .querySelectorAll(".swiper-wrapper .price-fix-table__item")
          .forEach((slide) => {
            slide.remove();
          });

        const swiperWrapper = document.querySelector(
          ".price-table-swiper .swiper-wrapper"
        );
        const fixSwiperWrapper = document.querySelector(
          ".price-fix-table-swiper .swiper-wrapper"
        );

        allSlides.forEach((slide) => {
          swiperWrapper.appendChild(slide);
        });
        allFixSlides.forEach((slide) => {
          fixSwiperWrapper.appendChild(slide);
        });

        priceSwiper.update();
        priceFixSwiper.update();
      }
    };
    const filteredMob = () => {
      if (window.innerWidth > 767) {
        bazisInputs.forEach((input) => {
          input.addEventListener("change", () => {
            const checkedInputs = Array.from(bazisInputs).filter(
              (input) => input.checked
            );
            const selectedBazis = checkedInputs.map((input) => input.value);
            if (selectedBazis.includes("all")) {
              priceTableMobItems.forEach((item) => {
                if (item.className.includes("hidden")) {
                  item.classList.remove("hidden");
                }
              });
              return;
            }
            const filteredItems = Array.from(priceTableMobItems).filter(
              (item) => {
                return selectedBazis.includes(item.dataset.bazis);
              }
            );
            priceTableMobItems.forEach((item) => {
              item.classList.add("hidden");
            });
            filteredItems.forEach((item) => {
              if (item.className.includes("hidden")) {
                item.classList.remove("hidden");
              }
            });
          });
        });
      } else {
        bazisApplyBtn.addEventListener("click", () => {
          const checkedInputs = Array.from(bazisInputs).filter(
            (input) => input.checked
          );
          const selectedBazis = checkedInputs.map((input) => input.value);
          if (selectedBazis.includes("all")) {
            priceTableMobItems.forEach((item) => {
              if (item.className.includes("hidden")) {
                item.classList.remove("hidden");
              }
            });
            return;
          }
          const filteredItems = Array.from(priceTableMobItems).filter(
            (item) => {
              return selectedBazis.includes(item.dataset.bazis);
            }
          );
          priceTableMobItems.forEach((item) => {
            item.classList.add("hidden");
          });
          filteredItems.forEach((item) => {
            if (item.className.includes("hidden")) {
              item.classList.remove("hidden");
            }
          });
        });
      }
    };
    if (window.innerWidth > 1024) {
      filteredDesk();
    } else {
      filteredMob();
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth > 1024) {
        filteredDesk();
      } else {
        filteredMob();
      }
    });
  }
};
