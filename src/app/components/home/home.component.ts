import { Component } from '@angular/core';
import { NoticeComponent } from './components/notice/notice.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CompanyComponent } from './components/company/company.component';
import { TimeComponent } from './components/time/time.component';
import { ActionsCardComponent } from './components/actions-card/actions-card.component';
import { SliderComponent } from './components/slider/slider.component';
import { ActivityComponent } from './components/activity/activity.component';
import { MemberlistComponent } from './components/memberlist/memberlist.component';

const components = [
  NoticeComponent,
  CarouselComponent,
  ActionsCardComponent,
  CompanyComponent,
  TimeComponent,
  SliderComponent,
  ActivityComponent,
  MemberlistComponent
];

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [components],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
