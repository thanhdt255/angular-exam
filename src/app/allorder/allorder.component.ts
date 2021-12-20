import { Component, OnInit } from '@angular/core';
import { ColumnMode,SortType } from '@swimlane/ngx-datatable';
@Component({
  selector: 'app-allorder',
  templateUrl: './allorder.component.html',
  styleUrls: ['./allorder.component.css']
})
export class AllorderComponent implements OnInit {
day=new Date()
  constructor() {
    this.fetch((data: any) => {
      this.rows = data;
    });
   }

  ngOnInit(): void {
    console.log(this.day)
  }
  rows = [
    {
    Orders:1,
    Domains:1,
     Customer:1,
      OrderValue:1,
     Date,
      OrderStatus:1,
      FulfillmentStatus:1,
      Country:1,
    Profit:1
    
    }
  ];

  columns = [
    { name: 'Orders' },
    { name: 'Domains' },
    { name: 'Customer' },
    { name: 'Order Value' },
    { name: 'Date' },
    { name: 'Order Status' },
    { name: 'Fulfillment Status' },
    { name: 'Country' },
    { name: 'Profit' },
    
  ];
  allColumns = [
    { name: 'Orders' },
    { name: 'Domains' },
    { name: 'Customer' },
    { name: 'Order Value' },
    { name: 'Date' },
    { name: 'Order Status' },
    { name: 'Fulfillment Status' },
    { name: 'Country' },
    { name: 'Profit' },
  ];

  ColumnMode = ColumnMode;
  SortType = SortType;
  toggle(col: any) {
    const isChecked = this.isChecked(col);

    if (isChecked) {
      this.columns = this.columns.filter((c) => {
        return c.name !== col.name;
      });
    } else {
      this.columns = [...this.columns, col];
    }
  }

  isChecked(col: any) {
    return (
      this.columns.find((c) => {
        return c.name === col.name;
      }) !== undefined
    );
  }

  fetch(cb: any) {
    //   const req = new XMLHttpRequest();
    //   req.open('GET', `assets/data/company.json`);
    //   req.onload = () => {
    //     cb(JSON.parse(req.response));
    //   };
    //   req.send();
    // }
  }

}
