import { Component,Output,EventEmitter } from '@angular/core';
import { Sidebar } from '../sidebar/sidebar';

@Component({
  selector: 'app-mob-sidebar',
  standalone: true,
  imports: [Sidebar],
  templateUrl: './mob-sidebar.html',
  styleUrl: './mob-sidebar.css'
})
export class MobSidebar {
   @Output() show = new EventEmitter<void>();

   sendShow(){
     this.show.emit();
   }
}
