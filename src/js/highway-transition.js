import highway from "@dogstudio/highway";
import { Tween } from "gsap/gsap-core";

// CREATE FADE CLASS FROM TRANSITION CLASS IN HIGHWAY
class Fade extends highway.Transition {
  in({ from, to, done }) {
    // REMOVE CONTENT  FROM HOME AND REPLACE WITH INFO
    from.remove();

    // ANIMATION FROM HOME TO INFO
    Tween.fromTo(to, 0.5, { opacity: 0 }, { opacity: 1, onComplete: done });
  }

  out({ from, done }) {
    // ANIMATION OF HOME PAGE OUT
    Tween.fromTo(from, 0.5, { opacity: 1 }, { opacity: 0, onComplete: done });
  }
}

export default Fade;
