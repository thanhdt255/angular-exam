import { UserViewModel } from './../models/model/user.model';
import { Userupdaterequest } from './../models/request/Userupdaterequest';
import { UserResponse } from './../models/response/UserResponse';
import { UserService } from './../service/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../service/user';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-changeinfo',
  templateUrl: './changeinfo.component.html',
  styleUrls: ['./changeinfo.component.css'],
})
export class ChangeinfoComponent implements OnInit {
  user!: UserViewModel;
  linkavatar = new FormData();

  constructor(private http: HttpClient, private userservice: UserService) {}

  ngOnInit(): void {
    this.userservice.getuserbyid(this.userservice.iduser).subscribe((res) => {
      this.user = res.data;
      console.log(this.user)
    });
  }
  Updateinfo() {
    let request: Userupdaterequest = {
      address: this.user.address,
      email: this.user.email,
      phone: this.user.phone,
      userName: this.user.userName
    }
    // this.userservice
    //   .updateuser(this.userservice.iduser, request)
    //   .subscribe((data) => console.log(data));

    // this.userservice.changeUserProfile(true);
    this.userservice.updateUserProfile.next(true);
  }
  Onchangefile($event: any) {
    var files = $event.target.files[0];
    for (let i = 0; i < files.lenght; i++) {
      this.linkavatar.append('files', files[i], files[i]['name']);
    }
  }
  Upload() {
    this.http
      .post('', this.linkavatar)
      .subscribe((res) => {
        console.log(res);
      });
  }
}
