import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";
import {Master} from '../../master';

@Component({
  selector: 'app-page3',
    imports: [
        FormsModule,
        RouterLink
    ],
  templateUrl: './page3.html',
  styleUrl: './page3.css'
})
export class Page3 {
  constructor(private router: Router,public master: Master) {}

  password!: string;
  nextClick(){
    if(this.password)
    localStorage.setItem('Spass', this.password);

    if(localStorage.getItem('Sname') && localStorage.getItem('Semail') && localStorage.getItem('Spass')){
      this.master.signup(localStorage.getItem('Sname') || '',localStorage.getItem('Semail') || '',localStorage.getItem('Spass')|| '').subscribe(
      {
        next: (res)=>{
          if(res.status == 201){
          alert('ثبت نام با موفقیت انجام شد')
          this.router.navigate(['/login']);
        }
        }

      }
    )
  }
    else {
      alert('لطفا تمامی موارد را تکمیل کنید')
    }
  }
}
