import { Component } from '@angular/core';
import { NavBar } from './component/navbar.component';
import { MainView } from './component/mainview.component';
import { MenuService} from './service/menu.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NavBar  , MainView, MenuService]
})
export class AppComponent {
  title = 'app works!';
}
