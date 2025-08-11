import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-remove',
    imports: [
        FormsModule
    ],
  templateUrl: './remove.html',
  styleUrl: './remove.css'
})
export class Remove {

  @Input() show = true;
  @Output() close = new EventEmitter<void>();
  @Output() yes = new EventEmitter<void>();
  @Output() showb = new EventEmitter<void>();
  Confirm(){
      this.yes.emit();
      this.show = false;
      this.showb.emit();
  }

  Cancel(){
    this.close.emit();
  }



}
