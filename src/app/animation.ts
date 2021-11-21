import { animate, keyframes, query, stagger, state, style, transition, trigger } from "@angular/animations";


export let fade = trigger('fadeIn',[
    state('void',style({opacity : 0})),
    transition(':enter , :leave',[animate(200)])
  ])

export let listanimation = trigger('listAnimation',[
    transition('*=>*',[
        query(':enter',style({opacity:0}),{optional:true}),
        query(':enter',stagger('600ms',[
            animate('1s ease-in',keyframes([
                style({opacity:0,transform:'translateX(-75px)',offset:0}),
                style({opacity:.5,transform:'translateX(35px)',offset:0.3}),
                style({opacity:1,transform:'translateX(0)',offset:1})
            ]))
        ]),{optional:true})
    ])
])
export let listanimationXX = trigger('listAnimationXX',[
    transition('*=>*',[
            animate('2s ease-in',keyframes([
                style({opacity:0,transform:'translateX(75px)',offset:0}),
                style({opacity:.5,transform:'translateX(35px)',offset:0.3}),
                style({opacity:1,transform:'translateX(0)',offset:1})
            ]))
        ])
])