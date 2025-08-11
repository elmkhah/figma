import { Component,ViewEncapsulation  } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add',
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule],
  templateUrl: './add.html',
  styleUrls: ['./add.css'],
  encapsulation: ViewEncapsulation.None,
  standalone:true,
})
export class Add {
panel=false;
telegram=false;
whatsapp=false;
email=false;
massNum:number=0;
}
