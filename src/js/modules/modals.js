export const modals = () => {
  const originalOverflow = document.body.style.overflow;
  const scrollBarWidth = window.innerWidth - document.body.offsetWidth;
  const modals = document.querySelectorAll(".modal");
  const header = document.querySelector(".header");

  const ttnBtns = document.querySelectorAll("button.download-ttn-btn");
  const ttnModal = document.querySelector(".ttn-modal");

  if (ttnBtns) {
    ttnBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        ttnModal.classList.add("active");
        document.body.style.paddingRight = `${scrollBarWidth}px`;
        document.body.style.overflow = "hidden";
        header.style.paddingRight = `${scrollBarWidth}px`;
      });
    });
  }
  const resumeBtns = document.querySelectorAll(".resume-btn");
  const resumeModal = document.querySelector(".resume-modal");

  if (resumeBtns) {
    resumeBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        resumeModal.classList.add("active");
        document.body.style.paddingRight = `${scrollBarWidth}px`;
        document.body.style.overflow = "hidden";
        header.style.paddingRight = `${scrollBarWidth}px`;
      });
    });
  }
  const callBtns = document.querySelectorAll(".call-btn");
  const callModal = document.querySelector(".call-modal");

  if (callBtns) {
    callBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        callModal.classList.add("active");
        document.body.style.paddingRight = `${scrollBarWidth}px`;
        document.body.style.overflow = "hidden";
        header.style.paddingRight = `${scrollBarWidth}px`;
      });
    });
  }

  if (modals) {
    modals.forEach((modal) => {
      const closeModal = modal.querySelectorAll(".close-modal");

      window.addEventListener("click", (e) => {
        if (e.target === modal) {
          modal.classList.remove("active");
          document.body.style.overflow = originalOverflow;
          document.body.style.paddingRight = "0px";
          header.style.paddingRight = `0px`;
        }
      });
      if (closeModal) {
        closeModal.forEach((close) => {
          close.addEventListener("click", () => {
            modal.classList.remove("active");
            document.body.style.overflow = originalOverflow;
            document.body.style.paddingRight = "0px";
            header.style.paddingRight = `0px`;
          });
        });
      }
    });
  }
};
