import { Component } from '@angular/core';
import { NoticeComponent } from '../notice/notice.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { ActionsCardComponent } from '../actions-card/actions-card.component';
import { CompanyComponent } from './components/company/company.component';
import { TimeComponent } from './components/time/time.component';
import { TasksComponent } from './components/tasks/tasks.component';

const components = [
  NoticeComponent,
  CarouselComponent,
  ActionsCardComponent,
  CompanyComponent,
  TimeComponent,
  TasksComponent,
];

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [components],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
