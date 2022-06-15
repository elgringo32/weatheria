const transition = () => {
  const submit = document.querySelector("#submit");
  const side = document.querySelector("#side");
  const input = document.querySelector("input");
  const title = document.querySelector("h1");
  const moveBack = document.querySelector("#move-back");
  const main = document.querySelector("#main");

  submit.addEventListener("click", (e) => {
    // e.preventDefault();
    side.style.width = "20vw";
    title.style.opacity = "0.2";
    side.style.opacity = "0.5";
    moveBack.style.opacity = "1";
    moveBack.style.cursor = "pointer";
    main.style.backgroundColor = "navajowhite";
    // input.innerText = "";
  });
  moveBack.addEventListener("click", () => {
    side.style.width = "200vw";
    title.style.opacity = "1";
    side.style.opacity = "1";
    moveBack.style.opacity = "0.2";
    main.style.backgroundColor = "antiquewhite";
  });
};

export { transition };
