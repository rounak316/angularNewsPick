import { Component, OnInit } from '@angular/core';


@Component({

    selector: 'jumbo-news',
    templateUrl: '../html/contentJumbo.html',
    styleUrls: ['../css/contentJumbo.css']





})

export class ContentJumboComponent implements OnInit {
    constructor() { 

        
    }

    ngOnInit() { }


heroState = 'inactive'

    test()
    {

        alert(32131)
    }
}