export const documentsItem = () => {
  const documentsItems = document.querySelectorAll(".documents-item");
  const originalOverflow = document.body.style.overflow;
  const scrollBarWidth = window.innerWidth - document.body.offsetWidth;
  const header = document.querySelector(".header");

  const fileLoader = `
    <label class="documents-item-content-input-wrapper">
        <input type="file" multiple />
        <div class="clip">
            <img src="@img/accreditation-documents/clip.svg" alt="clip" />
            <p>Прикрепить файл</p>
        </div>
        <p class="condition">Не более 10 мб</p>
    </label>
  `;

  const filesUpload = (files) => `
    <div class='documents-item-content-uploaded'>
        <div class='documents-file-list'>
        ${files
          .map(
            (file) =>
              `
                <div class='file'>
                    <img src="img/doc.svg" alt="doc" />
                    <p>${file.name}</p>
                </div>
            `
          )
          .join("")}
        </div>
        <button class='edit-btn' data-modal-target='edit-files-modal'>
            <img src="img/edit.svg" alt="edit" />
        </button>
    </div>
  `;
  document.body.addEventListener("click", (e) => {
    if (e.target.closest(".edit-btn[data-modal-target]")) {
      const modalId = e.target
        .closest(".edit-btn")
        .getAttribute("data-modal-target");

      console.log("modalId", modalId);
      const modal = document.querySelector(`.${modalId}`);
      console.log("modal", modal);
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollBarWidth}px`;
      if (header) header.style.paddingRight = `${scrollBarWidth}px`;
      setTimeout(() => {
        modal.classList.add("active");
      }, 100);
      modal.style.display = "flex";
    }
  });
  if (documentsItems.length > 0) {
    documentsItems.forEach((item) => {
      const fileInputWrapper = item.querySelector(
        ".documents-item-content-input-wrapper"
      );
      const fileInput = fileInputWrapper.querySelector("input");

      fileInput.addEventListener("input", (e) => {
        const { target } = e;
        const filesUploadHTML = filesUpload([...target.files]);
        fileInputWrapper.outerHTML = filesUploadHTML;
      });
    });
  }
};
