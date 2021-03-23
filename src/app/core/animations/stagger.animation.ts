import {
  transition,
  style,
  animate,
  trigger,
  stagger,
  query,
} from "@angular/animations";

export const SlideUpFadeStagger = trigger("slideUpFadeStagger", [
  transition(":enter", [
    query(
      ":enter",
      [
        style({ opacity: 0, transform: "translate(0, 40)" }),
        stagger("50ms", [
          animate(
            "300ms 300ms",
            style({ opacity: 1, transform: "tranlsate(0, 0)" })
          ),
        ]),
      ],
      { optional: true }
    ),
  ]),
  transition(":leave", [
    query(
      ":leave",
      [
        stagger("50ms", [
          animate(
            "300ms",
            style({ opacity: 0, transform: "translate(0, 40)" })
          ),
        ]),
      ],
      { optional: true }
    ),
  ]),
]);
