import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [NgClass],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent implements OnInit {
  balance = '0.00';
  todayProfits = 0;
  profits = 0;
  list: any = [];
  btnC = true;

  ngOnInit(): void {
    this.gafasVR();
  }

  gafasVR() {
    this.list = [
      'Vision Pro',
      'Oculus Quest 2',
      'Meta Quest',
      'HTC Vive',
      'Pimax Plus',
      'Gear VR',
      ' Reality Headset ',
      'Rift Box',
    ];
    this.btnC = true;
  }

  myGafas() {
    this.list = ['No items found'];
    this.btnC = false;
  }
}
