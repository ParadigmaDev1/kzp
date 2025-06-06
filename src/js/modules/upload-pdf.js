export const uploadPDF = () => {
  const fileInputWrapper = document.querySelector(".file-input-wrapper");
  if (fileInputWrapper) {
    const fileInput = fileInputWrapper.querySelector("#pdfInput");
    const outputWrapper = fileInputWrapper.querySelector(
      ".output-file-wrapper"
    );
    const fileBtn = fileInputWrapper.querySelector(".file-btn");
    const uploadFileWrapper = fileInputWrapper.querySelector(
      ".upload-file-wrapper"
    );
    const clearFileBtn = fileInputWrapper.querySelector(".clear-file");
    clearFileBtn.addEventListener("click", () => {
      outputWrapper.classList.add("hidden");
      fileBtn.classList.remove("hidden");
      if (uploadFileWrapper) {
        uploadFileWrapper.classList.remove("hidden");
      }
    });
    fileInput.addEventListener("change", function () {
      const file = this.files[0];
      if (file) {
        outputWrapper.querySelector(
          "#output"
        ).innerHTML = `<p> ${file.name}</p>`;
        outputWrapper.classList.remove("hidden");
        fileBtn.classList.add("hidden");
        if (uploadFileWrapper) {
          uploadFileWrapper.classList.add("hidden");
        }
      } else {
        outputWrapper.classList.add("hidden");
        fileBtn.classList.remove("hidden");
        if (uploadFileWrapper) {
          uploadFileWrapper.classList.remove("hidden");
        }
      }
    });
  }
};
