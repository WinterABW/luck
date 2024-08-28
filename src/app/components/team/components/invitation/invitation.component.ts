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

  copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text).then(() => {
      console.log('Texto copiado al portapapeles:', text);
    }).catch(err => {
      console.error('Error al copiar al portapapeles:', err);
    });
  }
}
