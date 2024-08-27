import { Component } from '@angular/core';
import { NoticeComponent } from '../notice/notice.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { ActionsCardComponent } from '../actions-card/actions-card.component';

const components = [NoticeComponent, CarouselComponent,ActionsCardComponent];

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [components],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
