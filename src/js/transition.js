const transition = () => {
  const button = document.querySelector("button");
  const side = document.querySelector("#side");
  const input = document.querySelector("input");
  const title = document.querySelector("h1");

  button.addEventListener("click", () => {
    side.style.width = "20vw";
    title.style.opacity = "0";
  });
  //   side.addEventListener("click", () => {
  //     side.style.width = "200vw";
  //   });
};

export { transition };
