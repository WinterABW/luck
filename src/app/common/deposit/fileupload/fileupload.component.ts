import { Component } from '@angular/core';

@Component({
  selector: 'app-fileupload',
  standalone: true,
  imports: [],
  templateUrl: './fileupload.component.html',
  styleUrl: './fileupload.component.scss'
})
export class FileuploadComponent {

  ok(){
    console.log('ok');
    alert('ok')
  }
}
