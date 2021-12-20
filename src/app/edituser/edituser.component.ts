import { Component, OnInit, ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css'],
})
export class EdituserComponent implements OnInit {
  @ViewChild('changepassword1') changepassword1!: ElementRef;
  @ViewChild('changeinfocolor') changeinfocolor!: ElementRef;
  constructor() {}

  ngOnInit(): void {}
  changecolorinfo() {
    this.changeinfocolor.nativeElement.style.color = 'red';
  }
  changepasswordcolor() {
    this.changepassword1.nativeElement.style.color = 'red';
  }
}
