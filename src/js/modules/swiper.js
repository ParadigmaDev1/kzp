import Swiper from "swiper";
import { Navigation, Pagination, Controller } from "swiper/modules";

export const swiper = () => {
  const homeNewsSwiper = new Swiper(".news-swiper", {
    modules: [Navigation, Controller],
    slidesPerView: 2,
    spaceBetween: 24,
    navigation: {
      prevEl: ".news-prev",
      nextEl: ".news-next",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 2,
      },
    },
  });
  const applicantHistorySwiper = new Swiper(".applicant-history-swiper", {
    modules: [Navigation, Controller],
    slidesPerView: 2,
    navigation: {
      prevEl: ".applicant-history-prev",
      nextEl: ".applicant-history-next",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 2,
      },
    },
  });
  const samplePageSwiper = new Swiper(".sample-page-swiper", {
    modules: [Navigation],
    slidesPerView: 1,
    navigation: {
      prevEl: ".sample-page-prev",
      nextEl: ".sample-page-next",
    },
    breakpoints: {},
  });
};
