import { Component, OnInit } from '@angular/core';
import { MenuService} from '../service/menu.service'

@Component({
    selector: 'nav-bar',
    templateUrl: '../html/navbar.html'

})

export class NavBar implements OnInit {

secondaryBlock  = 'secondaryBlock'
shown= false
Logo = {
type: 'logo',
text: 'Brand'

}




menuHeaders =[]

    constructor(private menuService : MenuService  ) {
this.menuHeaders = menuService.getMenuItems() ;



     }

    ngOnInit() { }
}