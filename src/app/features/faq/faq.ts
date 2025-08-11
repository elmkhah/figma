import { Component } from '@angular/core';
import {CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-faq',
  imports: [CdkDropList, CdkDrag],
  templateUrl: './faq.html',
  styleUrl: './faq.css'
})
export class Faq {
  public questions=[
    {num: 1,q: 'چطور می توانم به شما کمک کنم؟ این سوال اول من است',a: 'شما می توانید با ارسال شماره موبایل، کمک کنید این جواب سوال اول تو بود',active:false},
    {num: 2,q: 'چطور می توانم به شما کمک کنم؟',a: 'شما می توانید با ارسال شماره موبایل، کمک کنید',active:false},
    {num: 3,q: 'چطور می توانم به شما کمک کنم؟',a: 'شما می توانید با ارسال شماره موبایل، کمک کنید',active:false},
    {num: 4,q: 'چطور می توانم به شما کمک کنم؟',a: 'شما می توانید با ارسال شماره موبایل، کمک کنید',active:false},

  ]

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.questions, event.previousIndex, event.currentIndex);
  }
}
