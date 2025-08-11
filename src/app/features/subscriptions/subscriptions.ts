import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {Table} from './table/table';
import {Plans} from './plans/plans';
import {Remove} from './remove/remove';


@Component({
  selector: 'app-subscriptions',
  imports: [RouterLink,Table,Plans,Remove],
  templateUrl: './subscriptions.html',
  styleUrl: './subscriptions.css'
})
export class Subscriptions {
  show=false
  conf=false
  handleDel(){
    this.show=true
  }
}
