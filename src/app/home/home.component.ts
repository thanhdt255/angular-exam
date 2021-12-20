import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserResponse } from '../models/response/UserResponse';
import { CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY } from '@angular/cdk/overlay/overlay-directives';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  name!: string;
  decodedtoken!: UserResponse;
  User!: UserResponse;
  constructor(
    private userservice: UserService,
    private router: Router,
    private helper: JwtHelperService,
    private route: ActivatedRoute
  ) {
   
    // this.userservice.getUserLocalStorage();
    // this.userservice.getuserbyid(this.userservice.iduser).subscribe((res) => {
    //   this.name = res.data.userName;
    // });
  }

  ngOnInit(): void {

    this.userservice.currentUserProfile.subscribe((res) => {
      if (res == true) {
        this.userservice
          .getuserbyid(this.userservice.iduser)
          .subscribe((res) => {
            this.name = res.data.userName;
          });
      }
    });
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['sigin']);
  }
}
