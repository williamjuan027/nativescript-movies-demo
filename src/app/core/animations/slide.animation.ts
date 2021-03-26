import { transition, style, animate, trigger } from "@angular/animations";

export const SlideUp = trigger("slideUp", [
  transition(":enter", [
    style({ transform: "translate(0, 100)" }),
    animate("300ms ease-in-out", style({ transform: "translate(0,0)" })),
  ]),
  transition(":leave", [
    style({ transform: "translate(0,0)" }),
    animate(
      "300ms cubic-bezier(0.17, 0.89, 0.24, 1.11)",
      style({ transform: "translate(0, 300)" })
    ),
  ]),
]);
