import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [NgClass],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent implements OnInit{
  balance = '0.00';
  todayProfits = 0;
  profits = 0;
  list=''
  btnC=true

  ngOnInit(): void {
    this.gafasVR()
  }

  gafasVR() {
    this.list='lista gafas Vr'
    this.btnC=true
  }

  myGafas() {
    this.list='mi lista'
    this.btnC=false
  }
}
