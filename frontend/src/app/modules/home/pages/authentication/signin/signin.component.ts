import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/core/services/form/question.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})

export class SigninComponent implements OnInit {
  form: FormGroup = this.fb.group({
    username: this.fb.control('', [Validators.minLength(8), Validators.required, Validators.email]),
    password: this.fb.control('', [Validators.required, Validators.minLength(8)])
  });

  passwordData = {
    icon: 'visibility',
    type: 'password'
  };

  constructor(
    private service: QuestionService,
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {
  }

  getControlSelector(selector: string): FormControl {
    return this.form.get(selector) as FormControl;
  }

  changePasswordData() {
    this.passwordData.icon = this.passwordData.icon === 'visibility' ? 'visibility_off' : 'visibility';
    this.passwordData.type = this.passwordData.type === 'text' ? 'password' : 'text';
  }

  login() {
    console.log(this.form.value);
  }


}
