export const downloadUrl = () => {
  document
    .getElementById("addToDesktop")
    .addEventListener("click", function () {
      // Создаем ссылку на страницу
      const url = window.location.href; // Текущий URL страницы
      const link = document.createElement("a");
      link.href = url;
      link.download = "Ссылка на страницу.url"; // Имя файла ярлыка

      // Создаем содержимое для файла .url
      const blob = new Blob([`[InternetShortcut]\nURL=${url}`], {
        type: "application/url",
      });
      link.href = URL.createObjectURL(blob);

      // Программно кликаем по ссылке, чтобы начать загрузку
      link.click();

      // Освобождаем объект URL
      URL.revokeObjectURL(link.href);
    });
};
