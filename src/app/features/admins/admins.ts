import { Component } from '@angular/core';
import { MultiSelectModule } from 'primeng/multiselect';

@Component({
  selector: 'app-admins',
  imports: [MultiSelectModule ],
  templateUrl: './admins.html',
  styleUrl: './admins.css'
})
export class Admins {
  cities = [
    { name: 'همدان'},
    { name: 'تهران'},
    { name: 'اصفهان' },
    { name: 'کرمان'}
  ];
}
