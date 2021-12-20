import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataimageService } from '../service/dataimage.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-campaigncreate-info',
  templateUrl: './campaigncreate-info.component.html',
  styleUrls: ['./campaigncreate-info.component.css'],
})
export class CampaigncreateInfoComponent implements OnInit {
  public Editor = ClassicEditor;
  USER: {
    url: '';
  };

  people$: string[] = ['30usd.com'];
  Storefront: string[] = [''];
  CategoriesTags: string[] = [''];
  public files: any[];
  selectedPeople = [];
  image: Object;
  Token =
    'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjQyN2VkYmI0NGZmZDAxZDc1OTE3NjMzYmZmZDhhZTEyIiwidHlwIjoiSldUIn0.eyJuYmYiOjE2Mzk0NDgwNDksImV4cCI6MTY0MjA0MDA0OSwiaXNzIjoiaHR0cHM6Ly9sb2dpbi5pY2hpYmEuY28iLCJhdWQiOlsiaHR0cHM6Ly9sb2dpbi5pY2hpYmEuY28vcmVzb3VyY2VzIiwiYWltLXByaXZhdGUtYXBpIiwiY21zLXByaXZhdGUtYXBpIiwib20tcHJpdmF0ZS1hcGkiLCJpY2hpYmEtaWRlbnRpdHktYXBpIiwiY3MtcHJpdmF0ZS1hcGkiLCJ3aC1wcml2YXRlLWFwaSJdLCJjbGllbnRfaWQiOiJ3aCIsInN1YiI6IjNlMjQwOTA1LTFjNmItNGE1MS1iNDc4LTgwNWJhZDU1ODEwOCIsImF1dGhfdGltZSI6MTYzOTQ0ODA0OSwiaWRwIjoibG9jYWwiLCJuYW1lIjoiTMOqIFF1YW5nIFZpbmgiLCJyb2xlIjpbIkRFViIsIlBPIiwiV0hfQURNSU4iLCJBZG1pbiIsIkFDQzEiLCJTTyIsIkFJTSJdLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ2aW5obHEiLCJlbWFpbCI6InZpbmhscUBpY2hpYmEudm4iLCJzY29wZSI6WyJvcGVuaWQiLCJlbWFpbCIsInByb2ZpbGUiLCJhaW0tcHJpdmF0ZS1hcGkiLCJjbXMtcHJpdmF0ZS1hcGkiLCJvbS1wcml2YXRlLWFwaSIsImljaGliYS1pZGVudGl0eS1hcGkiLCJjcy1wcml2YXRlLWFwaSIsIndoLXByaXZhdGUtYXBpIl0sImFtciI6WyJwd2QiXX0.FuVU1QW1HScDQIhYYOlv7t4IA1ZkUNUkp5gljDn4QPro-uJX8Af83Ms7s92WXAsNta2z-Otkfe9beCocb9ceBReQRzUBEJh53RSRThx3A9V0Gt7Nv5Odu43d3-14DRSFcSEpEeEyuy-FJLP178QYFoY77jPHfdhH5lA61EK-mKF1S0FLmXBZX_jJMsTg5zjsAQjAZgW6TJwdbLbsnPAzYnZSiV6x4KrOrF4u-CJi_5PCWSA7ui4n_Wds8lU5aYpKpzyNHNUVYwpL-8Sj__-NZ-hlKGlevymxvtbC9tIh_cJC-V0eZypGvuoZbabmYqDNh-hhDbvP0u5YOvQrG3kq3Q';
  constructor(
    private dataimagservice: DataimageService,
    private http: HttpClient
  ) {
    this.USER = {
      url: '',
    };
  }

  ngOnInit(): void {}
  onFileChanged(event: any) {
    debugger;
    this.files = event.target.files;
    let formData = new FormData();
    for (let file of this.files) {
      formData.append('file', file, file.name);
    }

    console.log(formData);
    let headers = new HttpHeaders().set(
      'Authorization',
      'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjQyN2VkYmI0NGZmZDAxZDc1OTE3NjMzYmZmZDhhZTEyIiwidHlwIjoiSldUIn0.eyJuYmYiOjE2Mzk0NDgwNDksImV4cCI6MTY0MjA0MDA0OSwiaXNzIjoiaHR0cHM6Ly9sb2dpbi5pY2hpYmEuY28iLCJhdWQiOlsiaHR0cHM6Ly9sb2dpbi5pY2hpYmEuY28vcmVzb3VyY2VzIiwiYWltLXByaXZhdGUtYXBpIiwiY21zLXByaXZhdGUtYXBpIiwib20tcHJpdmF0ZS1hcGkiLCJpY2hpYmEtaWRlbnRpdHktYXBpIiwiY3MtcHJpdmF0ZS1hcGkiLCJ3aC1wcml2YXRlLWFwaSJdLCJjbGllbnRfaWQiOiJ3aCIsInN1YiI6IjNlMjQwOTA1LTFjNmItNGE1MS1iNDc4LTgwNWJhZDU1ODEwOCIsImF1dGhfdGltZSI6MTYzOTQ0ODA0OSwiaWRwIjoibG9jYWwiLCJuYW1lIjoiTMOqIFF1YW5nIFZpbmgiLCJyb2xlIjpbIkRFViIsIlBPIiwiV0hfQURNSU4iLCJBZG1pbiIsIkFDQzEiLCJTTyIsIkFJTSJdLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ2aW5obHEiLCJlbWFpbCI6InZpbmhscUBpY2hpYmEudm4iLCJzY29wZSI6WyJvcGVuaWQiLCJlbWFpbCIsInByb2ZpbGUiLCJhaW0tcHJpdmF0ZS1hcGkiLCJjbXMtcHJpdmF0ZS1hcGkiLCJvbS1wcml2YXRlLWFwaSIsImljaGliYS1pZGVudGl0eS1hcGkiLCJjcy1wcml2YXRlLWFwaSIsIndoLXByaXZhdGUtYXBpIl0sImFtciI6WyJwd2QiXX0.FuVU1QW1HScDQIhYYOlv7t4IA1ZkUNUkp5gljDn4QPro-uJX8Af83Ms7s92WXAsNta2z-Otkfe9beCocb9ceBReQRzUBEJh53RSRThx3A9V0Gt7Nv5Odu43d3-14DRSFcSEpEeEyuy-FJLP178QYFoY77jPHfdhH5lA61EK-mKF1S0FLmXBZX_jJMsTg5zjsAQjAZgW6TJwdbLbsnPAzYnZSiV6x4KrOrF4u-CJi_5PCWSA7ui4n_Wds8lU5aYpKpzyNHNUVYwpL-8Sj__-NZ-hlKGlevymxvtbC9tIh_cJC-V0eZypGvuoZbabmYqDNh-hhDbvP0u5YOvQrG3kq3Q'
    );

    this.http
      .post('https://wh-api.ichiba.co/api/File/UploadImage', formData, {
        headers: headers,
      })
      .subscribe((x:{
        fullUrl:string
      }) => {
        this.image = x.fullUrl;
        console.log(x);
        console.log(x.fullUrl);
      });
  }

  // onUpload() {
  //   const formData = new FormData();
  //   for (const file of this.files) {
  //       formData.append("file", file, file.name);
  //   }

  //   this.http.post('url', formData).subscribe();
  // }
}
