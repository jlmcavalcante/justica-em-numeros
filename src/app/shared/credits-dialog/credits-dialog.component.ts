import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatDialogActions, MatDialogContent } from '@angular/material/dialog';

@Component({
  selector: 'app-credits-dialog',
  standalone: true,
  imports: [MatDialogContent, MatDialogActions, MatButton, CommonModule],
  templateUrl: './credits-dialog.component.html',
  styleUrl: './credits-dialog.component.scss',
})
export class CreditsDialogComponent {
  comiteGestor = [
    'Lorem Ipsum Dolor Sit Amet',
    'Consectetur Adipiscing Elit',
    'Sed Do Eiusmod Tempor Incididunt',
    'Ut Labore Et Dolore Magna',
    'Aliqua Ut Enim Ad Minim Veniam',
    'Quis Nostrud Exercitation Ullamco',
    'Laboris Nisi Ut Aliquip Ex Ea',
    'Excepteur Sint Occaecat Cupidatat',
  ];

  servidoresAdministrativos = [
    'Duis Aute Irure Dolor In Reprehenderit',
    'In Voluptate Velit Esse Cillum',
    'Dolore Eu Fugiat Nulla Pariatur',
    'Excepteur Sint Occaecat Cupidatat Non Proident',
    'Sunt In Culpa Qui Officia Deserunt',
    'Mollit Anim Id Est Laborum',
  ];

  servidoresJudiciais = [
    'Ut Enim Ad Minim Veniam',
    'Quis Nostrud Exercitation Ullamco',
    'Laboris Nisi Ut Aliquip Ex Ea',
    'Duis Aute Irure Dolor In Reprehenderit',
    'In Voluptate Velit Esse Cillum',
    'Excepteur Sint Occaecat Cupidatat Non Proident',
    'Sunt In Culpa Qui Officia Deserunt',
    'Mollit Anim Id Est Laborum',
    'Sed Ut Perspiciatis Unde Omnis',
    'Nostrum Exercitationem Ullam',
    'Voluptatum Eiusmod Tempor Incididunt',
    'Labore Et Dolore Magna',
  ];

  ngOnInit() {
    // Fecha o diálogo automaticamente após 15 segundos
    setTimeout(() => {
      const dialogRef = document.querySelector('mat-dialog-container');
      if (dialogRef) {
        const closeButton = dialogRef
          .closest('.cdk-overlay-pane')
          ?.querySelector('button[mat-dialog-close]');
        closeButton?.dispatchEvent(new MouseEvent('click'));
      }
    }, 15000);
  }
}
