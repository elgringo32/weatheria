import { transition } from "./transition.js";
import highway from "@dogstudio/highway";
import Fade from "./highway-transition.js";

window.addEventListener("load", () => {
  // document.querySelector("#container").classList.remove("preload");

  const H = new highway.Core({
    transitions: {
      default: Fade,
    },
  });

  transition();
});
