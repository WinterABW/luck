import { Component, OnInit } from '@angular/core';
import { BackHomeComponent } from '../../../shared/back-home/back-home.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [BackHomeComponent, NgClass],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {
  btnC = true;
  data: [string] = [''];

  ngOnInit(): void {
    this.basica();
  }

  basica() {
    this.btnC = true;
    this.data = ['Sin data'];
  }

  retiro() {
    this.btnC = false;
    this.data = ['Sin data'];
  }
}
