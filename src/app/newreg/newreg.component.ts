import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegService } from '../reg.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-newreg',
  templateUrl: './newreg.component.html',
  styleUrls: ['./newreg.component.css']
})
export class NewregComponent implements OnInit {
  foods = ['kala', 'liha', 'kasvis'];
  reg: any = {};
  regForm: FormGroup;

  constructor(private fb: FormBuilder, 
    private regService: RegService,
    private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.sendLogstate();
    this.createRegForm();
  }

  createRegForm() {
    this.regForm = this.fb.group({
      name: [null, Validators.required],
      email: [null, [Validators.required,Validators.email]],
      food: [null, Validators.required],
      sauna: [null, Validators.required]
    })
  }

  onSubmit(formData) {
    if (formData.sauna !== true) {
      formData.sauna = 'ei';
    } else if (formData.sauna === true) {
      formData.sauna = 'joo';
      if (this.reg === undefined) {
        this.reg.length = 0;
      }
    }
    this.regService.setRegsToLS({
      id: this.reg.length + 1,
      name: formData.name,
      email: formData.email,
      food: formData.food,
      sauna: formData.sauna
    });
  }
}
