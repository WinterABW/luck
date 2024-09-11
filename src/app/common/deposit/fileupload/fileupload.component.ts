import { Component } from '@angular/core';

@Component({
  selector: 'app-fileupload',
  standalone: true,
  imports: [],
  templateUrl: './fileupload.component.html',
  styleUrl: './fileupload.component.scss'
})
export class FileuploadComponent {
  fileName:string='';

  ok(){
    console.log('ok');
    alert('ok')
  }

  onFileSelected(event: any) {
    if(event.srcElement.files[0].type==='image/png'){
      this.fileName=event.srcElement.files[0].name
    }
  }
}
