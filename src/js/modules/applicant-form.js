export const applicantForm = () => {
  const applicantFormObj = document.querySelector(".applicant-vacancy");

  if (applicantFormObj) {
    document.querySelector(".js-form").addEventListener("submit", function (e) {
      e.preventDefault();
      // Сохраняем текущую позицию прокрутки
      sessionStorage.setItem("scrollPos", window.scrollY);
    });

    // После загрузки страницы возвращаем позицию
    window.addEventListener("load", function () {
      const scrollPos = sessionStorage.getItem("scrollPos");
      console.log(
        'document.querySelector(".js-form").offsetTop',
        document.querySelector(".js-form").offsetTop
      );
      if (scrollPos) {
        window.scrollTo(0, document.querySelector(".js-form").offsetTop);
        sessionStorage.removeItem("scrollPos");
      }
    });
  }
};
