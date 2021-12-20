import { UserService } from './../service/user.service';
import { Component, OnInit } from '@angular/core';
import { User, userupdatepassword } from '../service/user';
import { HttpClient } from '@angular/common/http';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css'],
})
export class ChangepasswordComponent implements OnInit {
  @ViewChild('oldpassword') oldpassword!: ElementRef;
  @ViewChild('newpassword') newpassword!: ElementRef;
  @ViewChild('confirmnewpassword') confirmnewpassword!: ElementRef;
  USER!: User;
  Passwordold!: string;
  userpassword!: userupdatepassword;
  email:string;
  satustmessage={
    message:""
  }
  constructor(  private toastr: ToastrService,private userservice: UserService, private http: HttpClient) {
  
    let userlocal=JSON.parse(localStorage.getItem('user'));
    console.log(userlocal);
    this.email=userlocal.email;
    console.log(this.email)
    
    this.userpassword = {
    
      password: "",
      new_password: "",
      confirm_password:""
    };
  }
  ngOnInit(): void {
   
  }
  updatepassword() {
    
   let user={
      email:this.email,
      password: this.userpassword.password,
      new_password: this.userpassword.new_password,
      confirm_password:this.userpassword.confirm_password
    };
    
    this.http
      .put('http://159.65.140.140:8085/tts/api/change-pass' , user)
      .subscribe((response) => {
        console.log(response);
        let a=JSON.stringify(response);
        console.log(a);
        let b=(JSON.parse(a)).message;
        console.log(b)

      this.toastr.info(b,'Message')},
        (error)=>{
          console.log(error);
         
        });
      console.log(user)
  }
  changetypeoldpass() {
    if (this.oldpassword.nativeElement.type == 'password') {
      this.oldpassword.nativeElement.type = 'text';
    } else this.oldpassword.nativeElement.type == 'password';
  }
  changetypenewpass() {
    if (this.newpassword.nativeElement.type == 'password') {
      this.newpassword.nativeElement.type = 'text';
    } else this.newpassword.nativeElement.type == 'password';
  }
  changetypeconfirm() {
    if (this.confirmnewpassword.nativeElement.type == 'password') {
      this.confirmnewpassword.nativeElement.type = 'text';
    } else this.confirmnewpassword.nativeElement.type == 'password';
  }
}
