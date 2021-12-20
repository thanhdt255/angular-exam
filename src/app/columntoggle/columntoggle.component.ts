import { Component, OnInit } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-columntoggle',
  templateUrl: './columntoggle.component.html',
  styleUrls: ['./columntoggle.component.css']
})
export class ColumntoggleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  rows = [
    {
      name: 'Claudine Neal',
      gender: 'female',
      company: 'Sealoud'
    },
    {
      name: 'Beryl Rice',
      gender: 'female',
      company: 'Velity'
    }
  ];

  columns = [{ name: 'Name' }, { name: 'Gender' }, { name: 'Company' }];

  allColumns = [{ name: 'Name' }, { name: 'Gender' }, { name: 'Company' }];

  ColumnMode =ColumnMode;

  toggle(col:any) {
    const isChecked = this.isChecked(col);

    if (isChecked) {
      this.columns = this.columns.filter(c => {
        return c.name !== col.name;
      });
    } else {
      this.columns = [...this.columns, col];
    }
  }

  isChecked(col:any) {
    return (
      this.columns.find(c => {
        return c.name === col.name;
      }) !== undefined
    );
  }

}
