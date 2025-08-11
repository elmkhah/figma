import { Component } from '@angular/core';
import {Master} from '../../log/master';
import {FormsModule} from '@angular/forms';



@Component({
  selector: 'app-setting',
  imports: [FormsModule],
  templateUrl: './setting.html',
  styleUrl: './setting.css'
})
export class Setting {

  chatText=''
  resText=''
  coin !:number
  constructor(private master: Master) {}

  buyClick(coin:number) {
  this.master.buycoin(coin).subscribe(
    {
      next: (res: any) => {
        if (res.status == 200) {
          localStorage.setItem('coin', res.body.coin);
          alert(  "خرید موفقیت آمیز بود. میزان موجودی جدید شما:" + res.body.coin );
        }
      },
      error: err => {
        alert("ناموفق");
      }
    }
  )
  }

  sendMessage() {
    this.master.chatbot(this.chatText).subscribe(
      {
        next: (res: any) => {
          if (res.status == 200) {
            this.resText=res.body.result;
            localStorage.setItem('coin', res.body.coin);
          }
        }
      }
    )
  }

  protected readonly localStorage = localStorage;
}
