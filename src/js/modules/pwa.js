import { getBrowser } from "./get-browser.js";
import { getOS } from "./get-os.js";

export const pwa = () => {
  const scrollBarWidth = window.innerWidth - document.body.offsetWidth;
  const header = document.querySelector(".header");
  const installBtns = document.querySelectorAll(".install-btn");

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("/service-worker.js", {
        scope: "/price/pshenitsa/",
      })
      .then((registration) => {
        console.log("Service Worker зарегистрирован:", registration.scope);
      })
      .catch((error) => {
        console.log("Ошибка регистрации Service Worker:", error);
      });
  }

  let deferredPrompt;
  const os = getOS();
  const browser = getBrowser();

  // Автоматическая установка через prompt
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

  // Нет поддержки beforeinstallprompt → показать инструкцию вручную
  if (!("onbeforeinstallprompt" in window)) {
    installBtns.forEach((btn) => {
      btn.style.display = "block";
      btn.addEventListener("click", () => {
        if (os === "iOS") {
          document.querySelector(".pwa-ios-modal")?.classList.add("active");
        } else if (os === "MacOS") {
          document.querySelector(".pwa-macos-modal")?.classList.add("active");
        } else if (browser === "Firefox") {
          document.querySelector(".pwa-firefox-modal")?.classList.add("active");
        }

        document.body.style.paddingRight = `${scrollBarWidth}px`;
        document.body.style.overflow = "hidden";
        header.style.paddingRight = `${scrollBarWidth}px`;
      });
    });
  }
};
