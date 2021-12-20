import { DataimageService } from './../service/dataimage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clipart',
  templateUrl: './clipart.component.html',
  styleUrls: ['./clipart.component.css']
})
export class ClipartComponent implements OnInit {

  constructor(private dataimageService:DataimageService,) { }

  ngOnInit(): void {

  }

}


