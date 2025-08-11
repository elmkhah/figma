import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Sidebar} from './component/shared/sidebar/sidebar';
import {ButtonModule} from 'primeng/button';
import {MobSidebar} from './component/shared/mob-sidebar/mob-sidebar';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ButtonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
