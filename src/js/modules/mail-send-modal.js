export const mailSendModal = () => {
  const mailSendModal = document.querySelector(".mail-send-modal");

  const recoverPasswordModal = document.querySelector(
    ".recover-password-modal"
  );

  if (mailSendModal) {
    const timerElement = mailSendModal.querySelector(".timer");
    const timerCount = timerElement.querySelector("span");
    const resendButton = mailSendModal.querySelector(".btn");
    let countdown;
    let secondsLeft = 60;
    function updateTimer() {
      const minutes = Math.floor(secondsLeft / 60);
      const seconds = secondsLeft % 60;

      timerCount.textContent = `${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`;

      if (secondsLeft === 0) {
        clearInterval(countdown);
        resendButton.disabled = false;
        timerElement.classList.add("hidden");
      } else {
        secondsLeft--;
      }
    }

    function startTimer() {
      secondsLeft = 60;
      resendButton.disabled = true;
      timerCount.textContent = "01:00";
      timerElement.classList.remove("hidden");

      if (countdown) {
        clearInterval(countdown);
      }

      updateTimer();
      countdown = setInterval(updateTimer, 1000);
    }

    let observer = new MutationObserver(() => {
      if (mailSendModal.className.includes("active")) {
        startTimer();
        recoverPasswordModal.classList.remove("active");
      }
    });

    observer.observe(mailSendModal, {
      attributes: true,
    });

    resendButton.addEventListener("click", startTimer);
  }
};
