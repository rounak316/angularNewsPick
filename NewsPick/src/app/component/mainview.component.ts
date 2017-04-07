import { Component, OnInit , AfterViewChecked, ElementRef, ViewChild } from '@angular/core';


@Component({
    selector: 'main-view',
    templateUrl: '../html/mainview.html',
    styleUrls: ['../css/mainview.css']

})

export class MainView implements OnInit {
    constructor() { }

   ngOnInit() { 
        this.scrollToBottom();
    }

    ngAfterViewChecked() {        
        this.scrollToBottom();        
    } 

    scrollToBottom(): void {


console.log( this.myScrollContainer.nativeElement)
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
      
console.log('scrollToBottom' )    
console.log( this.myScrollContainer.nativeElement.scrollTop)
  } catch(err) { 

console.log('scrollToBottom err' , err)
        }                 
    }

     @ViewChild('scrollMe') private myScrollContainer: ElementRef;
}