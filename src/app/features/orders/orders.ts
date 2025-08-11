import { Component } from '@angular/core';
import { InputOtpModule } from 'primeng/inputotp';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-orders',
  imports: [CommonModule, FormsModule,InputOtpModule],
  templateUrl: './orders.html',
  styleUrl: './orders.css'
})
export class Orders {
  public value='';

}
