import { Component, OnInit , Input } from '@angular/core';

import {  trigger,state,style, animate,  transition } from '@angular/animations';



@Component({
    selector: 'media-frame',
    templateUrl: '../html/mediaframe.html',
    styleUrls: ['../css/mediaframe.css'],


animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)'
      })),

         state('void', style({
        transform: 'translate3d(100%, 0, 0)'
      })),



      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out')),
     transition('void => *', animate('400ms ease-in-out'))
     
    ]),
  ]


})

export class MediaFrameeComponent implements OnInit {

onDone()
{
    console.log('Done')
        // this.menuState  =   (this.menuState == 'in' ) ? 'out' : 'in';

}

onStart()
{
    console.log('started')
}

    constructor() { 



    }
menuState:string = 'in';;

    ngOnInit() {


     }

     changeMainContent(num)
     {

    this.menuState  =   (this.menuState == 'in' ) ? 'out' : 'in';


     }
}