import { UserLoginResponse } from './../models/response/UserLoginResponse';
import { UserLoginRequest } from './../models/request/UserLoginRequest';
import { Component, OnInit } from '@angular/core';
import { datalogin, userlogin } from '../service/user';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.css'],
})
export class SiginComponent implements OnInit {
  Personlogin!: userlogin;
  Datalogin!: datalogin;
  message: string;
  //   $http({
  //     method: 'POST',
  //     url: '/someUrl'
  //  }).then(function successCallback(response) {
  //     // this callback will be called asynchronously
  //     // when the response is available
  //  }, function errorCallback(response) {
  //     // called asynchronously if an error occurs
  //     // or server returns response with an error status.
  //  });
  constructor(
    private toastr: ToastrService,
    private userservice: UserService,
    public auth: AuthService,
    public router: Router
  ) {
    this.Personlogin = {
      email: '',
      password: '',
    };

console.log('SiginComponent', this.auth.isAuthenticated())
     if (!this.auth.isAuthenticated()) {
       this.router.navigate(['sigin']);
      } else {
     this.router.navigate(['home']);
     }
  }
  showSuccess() {
    this.toastr.success('success', 'login success');
  }
  errorshow(){
    this.toastr.error('ERROR','The email or password is incorrect')
  }
  ngOnInit(): void {}


  getlogin() {
    let request: UserLoginRequest = {
      email: this.Personlogin.email,
      password: this.Personlogin.password,
    };
    this.userservice.postuserlogin(request).subscribe(
      (response) => {
      
        console.log(response)
      
        this.showSuccess()

         localStorage.setItem('user',JSON.stringify(response) );
        
        
         this.router.navigate(['platform/dashboard']);
      },
      (error) => {
        this.errorshow()
        console.log(error.status);
        console.log(error);
        console.log(error.message);
      }
    );
  }
}
