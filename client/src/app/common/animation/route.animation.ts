import {trigger, animate, transition, style, query, group, keyframes} from '@angular/animations';

export const routeAnimation = trigger('routeAnimation', [
  transition('* <=> *', [
    query(':enter, :leave', style({
        position: 'fixed',
        width: '100%'
      })
      , {
        optional: true
      }),
    group([  // block executes in parallel
      query(':enter', [
        animate(300, keyframes([
          style({
            opacity: 0,
            display:'none'
          }),
          style({
            opacity: 0.5,
            display:'none'
          }),
          style({
            opacity: 1,
            display:'block'
          })
        ])),
      ], {
        optional: true
      }),
      query(':leave', [
        animate(300, keyframes([
          style({
            opacity: 1,
            display:'none'
          }),
          style({
            opacity: 0.5,
            display:'none'
          }),
          style({
            opacity: 0,
            display:'none'
          })
        ]))
      ], {
        optional: true
      }),
    ])
  ])
]);
