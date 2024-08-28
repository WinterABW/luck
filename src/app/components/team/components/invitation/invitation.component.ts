import { Component } from '@angular/core';

@Component({
  selector: 'app-invitation',
  standalone: true,
  imports: [],
  templateUrl: './invitation.component.html',
  styleUrl: './invitation.component.scss',
})
export class InvitationComponent {
  code = '703240';
  link = 'https://ai-redbullvip.com/#/register?ic=703240';
  
  copyToClipboard(text: string, button: HTMLButtonElement): void {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        // Cambiar el texto del botón a "Copied"
        button.textContent = 'Copied';

        // Revertir el texto del botón después de 1 segundo
        setTimeout(() => {
          button.textContent = 'Copiar';
        }, 1000);
      })
      .catch((err) => {
        console.error('Error al copiar al portapapeles:', err);
      });
  }
}
