import { transition, style, animate, trigger } from "@angular/animations";

export const Fade = trigger("fade", [
  transition(":enter", [
    style({ opacity: 0 }),
    animate("300ms 100ms ease-in", style({ opacity: 1 })),
  ]),
  transition(":leave", [
    style({ opacity: 1 }),
    animate("300ms 100ms ease-in", style({ opacity: 0 })),
  ]),
]);
