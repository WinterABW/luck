import { Component } from '@angular/core';

@Component({
  selector: 'app-address',
  standalone: true,
  imports: [],
  templateUrl: './address.component.html',
  styleUrl: './address.component.scss',
})
export class AddressComponent {
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
}
