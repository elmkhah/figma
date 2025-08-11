import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";
import {EventEmitter} from '@angular/core';
import {Output} from '@angular/core';

@Component({
  selector: 'app-page1',
    imports: [
        FormsModule,
        RouterLink,

    ],
  templateUrl: './page1.html',
  styleUrl: './page1.css'
})
export class Page1 {

  constructor(public router:Router) {}
  protected readonly Router = Router;
  protected readonly RouterLink = RouterLink;


  name!: string;
  nextClick(){
    if(this.name)
    localStorage.setItem('Sname', this.name);
    this.router.navigateByUrl('login/signup/2')
  }
}
