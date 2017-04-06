import { Component, OnInit , Input} from '@angular/core';

import {  trigger,state,style, animate,  transition , keyframes } from '@angular/animations';

@Component({

    selector: 'image-loader',
    templateUrl : '../html/image.loader.html',

    styleUrls: ['../css/image.loader.css'] ,

animations: [

     trigger('loadeImage', [

   state('void', style({

    'animation-duration': '1s',
    'animation-fill-mode': 'forwards',
    'animation-iteration-count': 'infinite',
    'animation-name': 'placeHolderShimmer',
    'animation-timing-function': 'linear',
    // 'background': '#f6f7f8',
    'background': 'linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%)',
    'background-size': '800px 104px',
    'height': '96px',
    'position': 'relative',

      // 'background-position' : '100% 0'
    })),

    state('loadingin', style({

    'animation-duration': '1s',
    'animation-fill-mode': 'forwards',
    'animation-iteration-count': 'infinite',
    'animation-name': 'placeHolderShimmer',
    'animation-timing-function': 'linear',
    // 'background': '#f6f7f8',
    'background': 'linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%)',
    'background-size': '800px 104px',
    'height': '96px',
    'position': 'relative',

      // 'background-position' : '100% 0'
    })),

    state('loadingout', style({

    'animation-duration': '1s',
    'animation-fill-mode': 'forwards',
    'animation-iteration-count': 'infinite',
    'animation-name': 'placeHolderShimmer',
    'animation-timing-function': 'linear',
    // 'background': '#f6f7f8',
    'background': 'linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%)',
    'background-size': '800px 104px',
    'height': '96px',
    'position': 'relative',

      // 'background-position' : '100% 0'
    })),





       transition('void => loadingout', [
      animate( '1000ms linear'  )
    ]),


    transition('* => loadingin', [
      animate( '1000ms linear'  )
    ]),

    transition('* => loadingout', [
      animate('1000ms linear' )
    ]),






  ])
]
    
})

export class ImageLoaderComponent implements OnInit {
    constructor() { }

    state: string = 'loadingin'


    @Input()

    ngOnInit() { }

    animateionOnDone(event)
    {
        

        this.state = (this.state=='loadingin')? 'loadingout' : 'loadingin';

    }

    animateionOnStart()
    {

    }
}