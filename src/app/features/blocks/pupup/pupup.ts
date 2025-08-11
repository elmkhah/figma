import { Component, Input, Output, EventEmitter } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-pupup',
  standalone: true,
  imports:[FormsModule],
  templateUrl: './pupup.html',
})
export class Pupup {
  @Input() show = false;
  @Output() close = new EventEmitter<void>();
  @Output() conf = new EventEmitter<string>();

  haveError=false
  phoneNum:string='';
  Confirm(){
    const regex = /^(\+98|0)9\d{9}$/;
    if(regex.test(this.phoneNum)){
    this.conf.emit(this.phoneNum);
    this.close.emit();
    this.haveError=false}
    this.haveError=true
  }


  protected readonly confirm = confirm;
}
