import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-qr',
  standalone: true,
  imports: [],
  templateUrl: './qr.component.html',
  styleUrl: './qr.component.scss'
})
export class QrComponent implements OnInit {
  @Input('token') token: string = '';

  ngOnInit() {  
    console.log(this.token);
    
  }

}
