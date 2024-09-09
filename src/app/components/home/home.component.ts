import { Component } from '@angular/core';
import { NoticeComponent } from './components/notice/notice.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CompanyComponent } from './components/company/company.component';
import { TimeComponent } from './components/time/time.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { ActionsCardComponent } from './components/actions-card/actions-card.component';
import { SliderComponent } from './components/slider/slider.component';

const components = [
  NoticeComponent,
  CarouselComponent,
  ActionsCardComponent,
  CompanyComponent,
  TimeComponent,
  TasksComponent,
  SliderComponent
];

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [components],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
