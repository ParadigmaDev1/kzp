export const RequestDeliveryForm = () => {
  // Находим элементы
  const fixedSubmitForm = document.querySelector(".fixed-submit-form");
  const submitFormWrapper = document.querySelector(".submit-form-wrapper");

  // Если элементы не найдены - выходим
  if (!fixedSubmitForm || !submitFormWrapper) return;

  // Проверяем видимость элемента при скролле
  const checkVisibility = () => {
    const rect = submitFormWrapper.getBoundingClientRect();
    const isVisible = rect.top <= window.innerHeight - 75 && rect.bottom >= 0;

    if (isVisible) {
      fixedSubmitForm.classList.remove("active");
    } else {
      fixedSubmitForm.classList.add("active");
    }
  };

  // Проверяем сразу при загрузке
  checkVisibility();

  // Проверяем при скролле
  window.addEventListener("scroll", checkVisibility);
};
