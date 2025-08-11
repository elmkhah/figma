import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive,Router} from '@angular/router';
import {Master} from '../../../log/master';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {
  constructor(public router: Router,public master:Master) {}

  protected readonly RouterLinkActive = RouterLinkActive;

  protected readonly localStorage = localStorage;
}
