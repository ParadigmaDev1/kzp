export const header = () => {
  const originalOverflow = document.body.style.overflow;
  const scrollBarWidth = window.innerWidth - document.body.offsetWidth;

  const header = document.querySelector(".header");
  const headerWhite = document.querySelector(".header.white");
  const burger = header.querySelector(".burger");
  const menu = document.querySelector(".menu");
  const closeMenu = menu.querySelector(".close-btn");

  const activeHeader = () => {
    if (typeof window !== "undefined" && headerWhite) {
      if (window.scrollY > 0) {
        headerWhite.classList.remove("white");
      } else {
        headerWhite.classList.add("white");
      }
    }
  };
  document.addEventListener("DOMContentLoaded", () => {
    activeHeader();
  });
  window.addEventListener("scroll", () => {
    activeHeader();
  });

  burger.addEventListener("click", () => {
    menu.classList.add("active");
    document.body.style.paddingRight = `${scrollBarWidth}px`;
    document.body.style.overflow = "hidden";
  });
  window.addEventListener("click", (e) => {
    if (e.target === menu) {
      menu.classList.remove("active");
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = "0px";
    }
  });
  closeMenu.addEventListener("click", () => {
    menu.classList.remove("active");
    document.body.style.overflow = originalOverflow;
    document.body.style.paddingRight = "0px";
  });
};
