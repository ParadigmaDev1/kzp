import LazyLoad from "vanilla-lazyload";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { Fancybox } from "@fancyapps/ui";
import { isBrowserSupportWebp } from "./modules/support-webp.js";
import IMask from "imask";

import { validInputs } from "./modules/valid-inputs.js";
import { formHandle } from "./modules/form-handle.js";
import { validateForm } from "./modules/validate.js";
import { bazis } from "./modules/bazis.js";
// import { downloadUrl } from "./modules/download-url.js";
import { swiper } from "./modules/swiper.js";
import { modals } from "./modules/modals.js";
import { pwa } from "./modules/pwa.js";
import { map } from "./modules/map.js";
import { selector } from "./modules/selector.js";
import { header } from "./modules/header.js";
import { accordeonFunc } from "./modules/accordeon.js";
import { priceTable } from "./modules/price-table.js";
import { uploadPDF } from "./modules/upload-pdf.js";
import { priceFilters } from "./modules/price-filters.js";
import { checkbox } from "./modules/checkbox.js";
import { tabs } from "./modules/tabs.js";
import { airdate } from "./modules/airdate.js";
import { RequestDeliveryForm } from "./modules/request-delivery-form.js";
import { mailSendModal } from "./modules/mail-send-modal.js";
import { documentsItem } from "./modules/documents-item.js";
import { accountApplications } from "./modules/account-applications.js";
import { inputMask } from "./modules/input-mask.js";
// import { sw } from "./modules/sw.js";

isBrowserSupportWebp();
bazis();
airdate();
// downloadUrl();
swiper();
pwa();
map();
modals();
selector();
header();
accordeonFunc();
priceTable();
uploadPDF();
priceFilters();
checkbox();
tabs();
RequestDeliveryForm();
//handleAttachFiles();
// validInputs();
// formHandle();
documentsItem();
mailSendModal();
accountApplications();
validateForm();
inputMask();

const textareas = document.querySelectorAll("textarea");
const maxHeight = 320;
if (textareas) {
  textareas.forEach((textarea) => {
    textarea.addEventListener("input", function () {
      textarea.style.height = "141px";
      textarea.style.height = Math.min(textarea.scrollHeight, maxHeight) + "px";
      if (textarea.scrollHeight > maxHeight) {
        textarea.style.overflowY = "scroll";
        textarea.style.borderRadius = "16px 0 0 16px ";
      } else {
        textarea.style.borderRadius = "16px";

        textarea.style.overflowY = "hidden";
      }
    });
  });
}

document.querySelectorAll(".input__valid-phone").forEach((el) => {
  IMask(el, {
    mask: "+7 (000) 000-00-00",
  });
});

let myLazyLoad = new LazyLoad();
myLazyLoad.update();

// нумерация документов ндс / без ндс
try {
  const docs = document.querySelectorAll(".document-item[data-nds='с ндс']");
  const docs2 = document.querySelectorAll(".document-item[data-nds='без ндс']");

  docs.forEach((el, i) => {
    const numberEl = el.querySelector(".number");
    numberEl.innerText = i + 1;
  });

  docs2.forEach((el, i) => {
    const numberEl = el.querySelector(".number");
    numberEl.innerText = i + 1;
  });
} catch (e) {
  console.log(e);
}
