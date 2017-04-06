import { ElementRef  , ViewChild, Component, OnInit } from '@angular/core';

@Component({

    selector: 'progress-listner',
    templateUrl: '../html/progressListner.html'
})

export class FeatureComponent implements OnInit {


visible = false

scripts : Array<string> = []


getScripts()
{

    return this.scripts;
}

setScripts(scripts)
{

     this.scripts = scripts;
}

 @ViewChild("pg") progressbar: ElementRef;
 

        ngOnInit() { 
this.getProgresss()
    }




public setProgress( progress )
{

let _progressBar : HTMLElement =   this.progressbar.nativeElement
_progressBar.style.width = progress + '%'

}




public getProgresss()
{

this.getProgressFromShellScripts(  ) ;
this.setProgress(this.progress)


if (this.progress <= 100)
{
    setTimeout( () => { this.getProgresss() } , 300 )
}
console.log(this.progress)
}

constructor(private _elementRef : ElementRef)
{

this.setScripts( [ '4324234324' ,'423423423'] )

}



public getProgressFromShellScripts()
{

this.progress +=Math.floor(Math.random() * 10) + 1 

this.visible = !this.visible

if(this.progress > 100)
{
    return 100;
}
else
{
return this.progress
}

}

progress: number = 0;





}