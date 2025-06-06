import { getBrowser } from "./get-browser.js";
import { getOS } from "./get-os.js";

export const pwa = () => {
  const scrollBarWidth = window.innerWidth - document.body.offsetWidth;
  const header = document.querySelector(".header");
  const installBtns = document.querySelectorAll(".install-btn");

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("/kzp/service-worker.js")
      // .register("/service-worker.js", {
      //   scope: "/price/pshenitsa/",
      // })
      .then((registration) => {
        console.log("Service Worker зарегистрирован:", registration.scope);
      })
      .catch((error) => {
        console.log("Ошибка регистрации Service Worker:", error);
      });
  }
  let deferredPrompt;

  // Проверка поддержки beforeinstallprompt
  if ("BeforeInstallPromptEvent" in window) {
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      deferredPrompt = e;
      installBtns.forEach((btn) => {
        btn.style.display = "block";
        btn.addEventListener("click", () => {
          if (deferredPrompt) {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then((choiceResult) => {
              if (choiceResult.outcome === "accepted") {
                console.log("Приложение установлено");
              } else {
                console.log("Установка отменена");
              }
              deferredPrompt = null;
            });
          }
        });
      });
    });
  } else {
    installBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const fireFoxModal = document.querySelector(".pwa-firefox-modal");
        const iosModal = document.querySelector(".pwa-ios-modal");
        const browser = getBrowser();
        const os = getOS();
        if (fireFoxModal && browser === "Firefox") {
          fireFoxModal.classList.add("active");
          document.body.style.paddingRight = `${scrollBarWidth}px`;
          document.body.style.overflow = "hidden";
          header.style.paddingRight = `${scrollBarWidth}px`;
        }
        if (iosModal && os === "iOS") {
          iosModal.classList.add("active");
          document.body.style.paddingRight = `${scrollBarWidth}px`;
          document.body.style.overflow = "hidden";
          header.style.paddingRight = `${scrollBarWidth}px`;
        }
      });
    });
  }
};
