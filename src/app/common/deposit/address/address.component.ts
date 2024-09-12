import { Component } from '@angular/core';
import { FileuploadComponent } from './fileupload/fileupload.component';

@Component({
  selector: 'app-address',
  standalone: true,
  imports: [FileuploadComponent],
  templateUrl: './address.component.html',
  styleUrl: './address.component.scss',
})
export class AddressComponent {
  btnText: string = 'Recarga completada';
  link: string = 'TThr4nZA59XZ5MC8ZPkUdjPa7QAtpAx692';

  copyToClipboard(text: string, button: HTMLButtonElement): void {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        button.textContent = 'Copied';
        setTimeout(() => {
          button.textContent = 'Copiar';
        }, 1000);
      })
      .catch((err) => {
        console.error('Error al copiar al portapapeles:', err);
      });
  }

  complete() {
    if(this.btnText === 'Recarga completada') {
      this.btnText = 'Confirmar';
    }else if(this.btnText === 'Confirmar') {
      alert('Check picture');
      this.btnText = 'Recarga completada';
    }
  }
}
