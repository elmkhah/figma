import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {RouterLink,Router} from '@angular/router';
import {Master} from '../master';
import {RouterOutlet} from '@angular/router';
import {RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-signup',
    imports: [
        FormsModule,
      RouterLink,
      RouterOutlet,
    ],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {
  constructor(public router:Router,private master: Master) {}

  email!: string;
  username!: string;
  password!: string;
  isLoading=false
  ngOnInit() {
    localStorage.setItem('Sname','')
    localStorage.setItem('Semail','')
    localStorage.setItem('Spass','')
  }

  signupClick() {
    this.isLoading=true;
    this.master.signup(this.username, this.email, this.password).subscribe({
      next: (res) => {
        this.email=''
        this.username=''
        this.password=''
        if (res.status === 201) {
          this.isLoading = false;
          this.router.navigate(['/login']);
        }
      },
      error: (err) => {
        this.email=''
        this.username=''
        this.password=''
        this.isLoading = false;
          alert('خطای ثبت‌نام: ' + err.status);
        }
    });
  }


}
