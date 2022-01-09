import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Credential } from '../credential';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  creds: Credential[];
  error: string;
  

  constructor(private fb: FormBuilder,
    private router: Router,
    private auth: AuthService) { }

  ngOnInit(): void {
    this.getCreds();
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.fb.group({
      //, Validators.pattern('[a-zA-Z]*')
      tunnus: [null, Validators.required],
      salasana: [null, Validators.required]
    })
  }

  onSubmit(formdata) {
    console.log(formdata.tunnus,' ', formdata.salasana)
    if (formdata.tunnus === this.creds[0].username &&
      formdata.salasana === this.creds[0].password) {
        this.auth.isLoggedIn = true;
        this.router.navigate(['/new']);
      } else {
        this.error = 'Tunnus tai salasana väärä';
        console.log('Tunnus tai salasana väärä')
      }
  }

  getCreds(): void {
    this.auth.getCredentials()
      .subscribe(creds => this.creds = creds);
  }
}
