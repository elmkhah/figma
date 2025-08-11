import { Component } from '@angular/core';
import { RouterLink,Router } from '@angular/router';
import {Master} from '../master';
import {FormsModule} from '@angular/forms';
import {InputOtp} from 'primeng/inputotp';
import {InputOtpModule} from 'primeng/inputotp';

@Component({
  selector: 'app-login',
  imports: [RouterLink, FormsModule, InputOtp,InputOtpModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  constructor(private master: Master, private router: Router) {
  }

  email!: string;
  password!: string;
  value = ''
  valid = false
   cap = this.getCap()
  imgUrl=this.generateCaptchaImage();
  emailError=false
  passwordError=false

  emailStr=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  passwordStr=/^.{8,}$/

  emailCheck(){
    this.emailError=!this.emailStr.test(this.email);
  }

  passwordCheck(){
    this.passwordError=!this.passwordStr.test(this.password);
  }

  getCap() {
    let ss = ''
    let randomIndex:number
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
     randomIndex = Math.floor(Math.random() * letters.length);
    ss += letters[randomIndex];
     randomIndex = Math.floor(Math.random() * letters.length);
    ss += letters[randomIndex];
     randomIndex = Math.floor(Math.random() * letters.length);
    ss += letters[randomIndex];
     randomIndex = Math.floor(Math.random() * letters.length);
    ss += letters[randomIndex];
    return ss
  }

  loginClick() {

    if(this.cap.toUpperCase()=== this.value.toUpperCase()) {
      this.valid=true;
    }

    if (this.valid) {
      this.master.login(this.email, this.password).subscribe(
        {
          next: (res: any) => {
            if (res.status == 200) {
              localStorage.setItem('isLoggedIn', 'true');
              localStorage.setItem('token', res.body.user.token);
              localStorage.setItem('name', res.body.user.name);
              localStorage.setItem('coin', res.body.user.coin);
              this.router.navigateByUrl('/dash');
            }
          },
          error: () => {
            this.email = ''
            this.password = ''
            alert('نام کاربری یا رمز عبور اشتباه است');
          }
        }
      )

    }
    if(!this.valid){
      alert("لطفا کد امنیتی را به درستی وارد کنید")
    }

  }


  generateCaptchaImage(): string {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const captchaText = this.cap.toUpperCase();

    if (ctx) {
      canvas.width = 100;
      canvas.height = 50;
      ctx.font = '30px Arial';
      ctx.fillStyle = 'black';
      ctx.fillText(captchaText,10, 40);


      return canvas.toDataURL();
    }

    return '';
  }
}
