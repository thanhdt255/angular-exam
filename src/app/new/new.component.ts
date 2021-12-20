import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  Sizes$=[{id:1,name:'Throw'},
  { id: 3, name: 'Twin' },
  { id: 4, name: 'Queen' },
  { id: 5, name: '20oz' },

];
  selectedSizes = [];
  Storefront=[{id:1,name:'mot'}];
  selectedStorefront=[];
  Tags=[{id:1,name:"mot"}];
  selectedTags=[];
  Base=[{id:1,name:'Quilt',disabled: true},
  { id: 2, name: 'Quilt' },
  { id: 3, name: 'Tumbler',disabled: true },
  { id: 4, name: '20oz Tumbler' },
  { id: 5, name: '30oz Tumbler' },
  { id: 6, name: '12oz Tumbler' },
  { id: 7, name: 'Glitter 17oz Tumbler' },
  { id: 8, name: '17oz Tumbler' },
  { id: 9, name: 'Leggings',disabled: true},
  { id: 10, name: 'Leggings' },
  { id: 11, name: 'Hooded Blanket',disabled: true},
  { id: 12, name: 'Hooded Blanket' },
  { id: 13, name: 'Baseball Jersey',disabled: true },
  { id: 14, name: 'Baseball Jersey' },
  { id: 15, name: 'Rugs',disabled: true },
  { id: 16, name: 'Round Rugs' },
  { id: 17, name: 'Square Rugs' },
  { id: 18, name: 'Bathroom Math' },
  { id: 19, name: 'Door Math' },
  { id: 20, name: 'Rubber Door Math' },
  { id: 21, name: 'Garden Flag',disabled: true },
  { id: 22, name: 'Garden Flag' },
  
  
  

];
  selectedBase=[];
  Createfeed=[{id:1,name:'30usd.com'}];
  selectedCreatefeed=[];

  constructor() {
  }

  ngOnInit() {
    
  }

}
