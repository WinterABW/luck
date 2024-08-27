import { Component } from '@angular/core';
import { NoticeComponent } from '../notice/notice.component';

const components=[NoticeComponent]

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [components],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
