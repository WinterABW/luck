import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormComponent } from './form/form.component';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgClass,FormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  btnC = true;

  ngOnInit(): void {
    this.email();
  }

  email() {
    this.btnC = true;
  }

  telf() {
    this.btnC = false;
  }
}
