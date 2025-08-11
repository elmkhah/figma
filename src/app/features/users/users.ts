import { Component } from '@angular/core';
import {TableModule} from 'primeng/table';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Master} from '../../log/master';


interface User {
  userId: number;
  userName: string | null;
  emailId: string;
  fullName: string;
  role: string | null;
  createdDate: string;
  password: string;
  projectName: string;
  refreshToken: string;
  refreshTokenExpiryTime: string;
}

@Component({
  selector: 'app-users',
  imports: [TableModule,CommonModule,FormsModule],
  templateUrl: './users.html',
  styleUrl: './users.css'
})
export class Users {
  constructor(private master:Master) {
  }

  text:string=""
  pageSize=10
  pageNum=1
  total=0

  req(){
    this.master.searchUsers(this.text,this.pageNum,this.pageSize).subscribe({
      next: data => {
        this.users=data.body.data;
        this.total=data.body.totalRecords;
      }
    })
  }


  getPageNumbers(): number[] {
    const totalPages = this.pages;
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  get pages(){
    return Math.ceil(this.total/this.pageSize)
  }

  // ngOnInit() {
  //   this.req();
  // }



  users: User[]=[
  ]

  sortNId() {
    this.users.sort((a, b) => {
      return b.fullName.localeCompare(a.fullName);
    });
  }
  sortSId(){
    this.users.sort((a,b)=>{
      return a.fullName.localeCompare(b.fullName);
    })
  }

}
