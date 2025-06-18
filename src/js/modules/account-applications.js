export const accountApplications = () => {
  const applicationItems = document.querySelectorAll(".application-item");
  if (applicationItems.length > 0) {
    applicationItems.forEach((item) => {
      const showSpecifications = item.querySelector(".show-specifications");
      const specificationList = item.querySelector(".specification-list");
      console.log("showSpecifications", showSpecifications);
      showSpecifications.addEventListener("click", () => {
        if (specificationList.className.includes("hidden")) {
          specificationList.classList.remove("hidden");
          showSpecifications.classList.add("active");

          showSpecifications.innerHTML = ` <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="28"
                    width="28"
                    height="28"
                    rx="14"
                    transform="rotate(90 28 0)"
                    fill="#8C8C8C"
                  />
                  <path d="M19 12L14.125 18L9.25 12" stroke="white" />
                </svg>свернуть спецификации`;
        } else {
          specificationList.classList.add("hidden");
          showSpecifications.classList.remove("active");
          showSpecifications.innerHTML = `
          <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="28"
                    width="28"
                    height="28"
                    rx="14"
                    transform="rotate(90 28 0)"
                    fill="#8C8C8C"
                  />
                  <path d="M19 12L14.125 18L9.25 12" stroke="white" />
                </svg>смотреть спецификации`;
        }
      });
    });
  }
};
