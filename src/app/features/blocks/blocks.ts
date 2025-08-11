import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {Pupup} from './pupup/pupup';

@Component({
  selector: 'app-blocks',
    imports: [
        Pupup
    ],
  templateUrl: './blocks.html',
  styleUrl: './blocks.css'
})
export class Blocks {


  subs=[
    {num:1 , name:'نام کاربر', phone:'09102009154' , date:'1400/12/1', status:'مسدود'},
    {num:2 , name:'نام کاربر', phone:'09102009154' , date:'1400/12/1', status:'مسدود'},
    {num:3 , name:'نام کاربر', phone:'09102009154' , date:'1400/12/1', status:'مسدود'},
    {num:4 , name:'نام کاربر', phone:'09102009154' , date:'1400/12/1', status:'مسدود'},
    {num:5 , name:'نام کاربر', phone:'09102009154' , date:'1400/12/1', status:'مسدود'},
    {num:6 , name:'نام کاربر', phone:'09102009154' , date:'1400/12/1', status:'مسدود'},
    {num:7 , name:'نام کاربر', phone:'09102009154' , date:'1400/12/1', status:'مسدود'},
    {num:8 , name:'نام کاربر', phone:'09102009154' , date:'1400/12/1', status:'مسدود'},
    {num:9 , name:'نام کاربر', phone:'09102009154' , date:'1400/12/1', status:'مسدود'},
    {num:10 , name:'نام کاربر', phone:'09102009154' , date:'1400/12/1', status:'مسدود'},
    {num:11 , name:'نام کاربر', phone:'09102009154' , date:'1400/12/1', status:'مسدود'},
    {num:12 , name:'نام کاربر', phone:'09102009154' , date:'1400/12/1', status:'مسدود'},
    {num:13 , name:'نام کاربر', phone:'09102009154' , date:'1400/12/1', status:'مسدود'},
    {num:14 , name:'نام کاربر', phone:'09102009154' , date:'1400/12/1', status:'مسدود'},
    {num:15 , name:'نام کاربر', phone:'09102009154' , date:'1400/12/1', status:'مسدود'},
  ]

  isModalOpen = false;

  currentPage = 1;
  itemsPerPage = 10;

  visibleItems() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.subs.slice(start, start + this.itemsPerPage);
  }

  nextPage() {
    if (this.currentPage * this.itemsPerPage < this.subs.length) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  handleConf(_phone:string) {
    this.subs.push({num: 20, phone: _phone,name: 'کاربر جدید' , date: '1400/11/1', status: 'مسدود'})
  }
}
