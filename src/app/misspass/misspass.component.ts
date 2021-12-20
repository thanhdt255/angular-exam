import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Userresetresponse } from '../models/response/Userresetpassresponse';
import { Router } from '@angular/router';
@Component({
  selector: 'app-misspass',
  templateUrl: './misspass.component.html',
  styleUrls: ['./misspass.component.css'],
})
export class MisspassComponent implements OnInit {
  emailuser: {
    email: '';
  };
  constructor(
    private toastr: ToastrService,
    private http: HttpClient,
    private router: Router
  ) {
    this.emailuser = {
      email: '',
    };
  }

  ngOnInit(): void {}
  resetpass() {
    console.log(this.emailuser);

    this.http
      .post('http://159.65.140.140:8085/tts/api/recover', this.emailuser)
      .subscribe(
        (response: { message: string}) => {
          console.log(response);
          let a=JSON.stringify(response);
          this.toastr.info(a) 
        },
        (error) => {}
      );
  }
}
