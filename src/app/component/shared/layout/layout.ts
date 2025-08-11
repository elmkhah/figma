import { Component } from '@angular/core';
import {MobSidebar} from "../mob-sidebar/mob-sidebar";
import {RouterOutlet} from "@angular/router";
import {Sidebar} from "../sidebar/sidebar";

@Component({
  selector: 'app-layout',
    imports: [
        MobSidebar,
        RouterOutlet,
        Sidebar
    ],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {

  menu=false;
  showMenu(){
    this.menu= !this.menu;
  }

  protected readonly localStorage = localStorage;
}
