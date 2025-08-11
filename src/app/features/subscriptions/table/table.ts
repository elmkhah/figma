import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-table',
  imports: [],
  templateUrl: './table.html',
  styleUrl: './table.css'
})
export class Table {

  subs=[
    {num:'1', title:'اشتراک عادی' , price:100, messages:'4', date:'1400/1/10'},
    {num:'2', title:'اشتراک عادی' , price:100, messages:'4',date:'1400/1/10'},
    {num:'3', title:'اشتراک عادی' , price:100, messages:'4',date:'1400/1/10'},
    {num:'4', title:'اشتراک عادی' , price:100, messages:'4',date:'1400/1/10'},
    {num:'5', title:'اشتراک عادی' , price:100, messages:'4',date:'1400/1/10'},
    {num:'6', title:'اشتراک عادی' , price:100, messages:'4',date:'1400/1/10'},
    {num:'7', title:'اشتراک عادی' , price:100, messages:'4',date:'1400/1/10'},
    {num:'7', title:'اشتراک عادی' , price:100, messages:'4',date:'1400/1/10'},
    {num:'8', title:'اشتراک عادی' , price:100, messages:'4',date:'1400/1/10'},
    {num:'9', title:'اشتراک عادی' , price:100, messages:'4',date:'1400/1/10'},
    {num:'10', title:'اشتراک عادی' , price:100, messages:'4',date:'1400/1/10'},
    {num:'11', title:'اشتراک عادی' , price:100, messages:'4',date:'1400/1/10'},
    {num:'12', title:'اشتراک عادی' , price:100, messages:'4',date:'1400/1/10'},
    {num:'13', title:'اشتراک عادی' , price:100, messages:'4',date:'1400/1/10'},
    {num:'14', title:'اشتراک عادی' , price:100, messages:'4',date:'1400/1/10'},
    {num:'15', title:'اشتراک عادی' , price:100, messages:'4',date:'1400/1/10'},
    {num:'16', title:'اشتراک عادی' , price:100, messages:'4',date:'1400/1/10'},
  ]


  currentPage = 1;
  itemsPerPage = 5;

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


  @Output() del: EventEmitter<void> = new EventEmitter();

  delEmit(num:string) {
    const Nnum = parseInt(num);
    this.del.emit();
    console.log('del')
  }
}
