const transition = () => {
  const button = document.querySelector("button");
  const side = document.querySelector("#side");
  const input = document.querySelector("input");
  const title = document.querySelector("h1");
  const moveBack = document.querySelector("#move-back");
  const main = document.querySelector("#main");

  button.addEventListener("click", () => {
    side.style.width = "20vw";
    title.style.opacity = "0.2";
    input.disabled = true;
    button.disabled = true;
    side.style.opacity = "0.5";
    moveBack.style.opacity = "1";
    moveBack.style.cursor = "pointer";
    main.style.backgroundColor = "navajowhite";
  });
  moveBack.addEventListener("click", () => {
    side.style.width = "200vw";
    title.style.opacity = "1";
    side.style.opacity = "1";
    moveBack.style.opacity = "0.2";
    input.disabled = false;
    button.disabled = false;
    main.style.backgroundColor = "antiquewhite";
  });
};

export { transition };
