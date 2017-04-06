import {
    Directive, ElementRef, AfterViewChecked, 
    Input, HostListener
} from '@angular/core';

@Directive({
    selector: '[heightEquator]'
})
export class MatchHeightDirective implements AfterViewChecked {
    // class name to match height




    search_bar_gallerylist = 'search-mainframe-bar'

            @Input()
    target: string;

            @Input()
    source: string;

    constructor(private el: ElementRef) {


    }

    ngAfterViewChecked() {
        console.log( this.target  + "  " +  this.source )

        // call our matchHeight function here later
         this.matchHeight(this.el.nativeElement, this.target , this.source);
    }


     matchHeight(parent: HTMLElement, target: string , source: string) {
        // match height logic here

        if (!parent ||  !target || !source ) return;


        // step 1: find all the child elements with the selected class name
        const target_children = parent.getElementsByClassName(target);
        const source_children = parent.getElementsByClassName(source);
        const search_bar = parent.getElementsByClassName(this.search_bar_gallerylist)[0];



        let search_bar_height =search_bar.clientHeight

        let height = source_children[0].clientHeight
        
        if( search_bar_height )
        {
         height -= search_bar_height
        }

        if (source_children.length < 1) return;


        Array.from(target_children).forEach( ( child :HTMLElement) => child.style.height = height + 'px' )


      
    }

        @HostListener('window:resize') 
    onResize() {
        // call our matchHeight function here
        this.matchHeight(this.el.nativeElement, this.target , this.source);
    }

}