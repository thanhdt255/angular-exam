import { Component, OnInit,  } from '@angular/core';
import { usersignup } from '../service/user';
import { ElementRef, ViewChild } from '@angular/core';
import { UserService } from '../service/user.service';
import { UserSignUpRequest } from '../models/request/UserSignUpRequest';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-sigout',
  templateUrl: './sigout.component.html',
  styleUrls: ['./sigout.component.css'],
})
export class SigoutComponent implements OnInit {
  @ViewChild('password') password!: ElementRef;
  @ViewChild('confirmpassword') confirmpassword!: ElementRef;
  @ViewChild('checkbox1') checkbox1!:ElementRef;
  addperson!: usersignup;
  validfullname!: boolean;
  validpassword!: boolean;
  validPhoneNumber!: boolean;
  validemail!: boolean;
  model: any = {};
  checked:boolean;
  constructor(
    private toastr: ToastrService,
    private userservice: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.addperson = {
      email: '',
      password: '',
      confirm_password: '',
      phone: '',
    };
    this.checked = false;
  }

  ngOnInit(): void {}
  showsignupsucccess() {
    this.toastr.success('success!', 'signup success');   
  }
  showsignuperror() {}

  onsubmit() {
    if(this.checked == false){
      this.toastr.error("You with agree with the Terms & Conditions");
      return;
    }
    let request: UserSignUpRequest = {
      email: this.addperson.email,

      password: this.addperson.password,
      phone: this.addperson.phone,
      confirm_password: this.addperson.confirm_password,
    };

    this.userservice.potusersignup(request).subscribe(
      (res) => {
        console.log(res);
        this.showsignupsucccess();

        // localStorage.setItem('id',res.id);
        // localStorage.setItem('email',res.email)
   
        this.router.navigate(['/sigin'], { relativeTo: this.route });
      },
      (error) => {
        console.log(error.status);
        console.log(error.error.message);
        this.toastr.error('ERROR!', error.error.message);
      }
    );
  }
  onvalidemail() {
    // var regexemail = new RegExp('^[a-z]$');
    // debugger;
    // this.validemail = regexemail.test(this.addperson.email);
  }
  onvalidfullname() {
    // var regexfullname = new RegExp('^[a-z]$');
    // this.validfullname = regexfullname.test(this.addperson.fullname);
  }
  onvalidpassword() {
    var regexpassword = new RegExp('^[0-9A-Z]{8,20}$');
    this.validpassword = regexpassword.test(this.addperson.password);
  }
  onValidPhoneNumber() {
    var regexnumber = new RegExp('^[0-9]{10}$');
    this.validPhoneNumber = regexnumber.test(this.addperson.phone);
  }
  changetype() {
    if (this.password.nativeElement.type == 'password') {
      this.password.nativeElement.type = 'text';
    } else {
      this.password.nativeElement.type = 'password';
    }
  }
  changetypeconfirm() {
    if (this.confirmpassword.nativeElement.type == 'password') {
      this.confirmpassword.nativeElement.type = 'text';
    } else {
      this.confirmpassword.nativeElement.type = 'password';
    }
  }
}
