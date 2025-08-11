import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {RouterLink,Router} from "@angular/router";

@Component({
  selector: 'app-page2',
    imports: [
        FormsModule,
        RouterLink
    ],
  templateUrl: './page2.html',
  styleUrl: './page2.css'
})
export class Page2 {
  constructor(private router: Router) {}

  email!: string;
  nextClick(){
    if(this.email)
    localStorage.setItem('Semail', this.email);
    this.router.navigateByUrl('login/signup/3')
  }
}
