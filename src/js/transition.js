const button = document.querySelector("#submit");
const popup = document.querySelector("#popup");

const transition = () => {
  window.onload = () => {
    button.addEventListener("click", () => {
      if (popup != null) {
        popup.classList.toggle("is-active");
      }
    });
  };
};

export { transition };
