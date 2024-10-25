import { Component } from '@angular/core';
import { hexagonsData } from '../../data/hexagons-data';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent {
  // Array contendo os dados de cada hexágono (ícone e título)
  hexagons = [
    {
      title: 'Dados de Pessoal',
      icon: 'person',
      text: '1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempus tristique elit a bibendum. Nam lectus diam, dignissim id varius sed, tempor et eros. Aenean rutrum sapien magna, eu luctus augue luctus id. Sed vestibulum lacus at tellus tristique semper. Pellentesque semper nibh non neque cursus, a blandit augue convallis. Proin ligula tortor, venenatis ut tempor quis, ultrices quis metus. Mauris nec arcu non enim tempor tincidunt id in leo. Fusce sit amet nibh nec leo maximus laoreet. Vestibulum nec ipsum sit amet velit gravida tempor consectetur ac erat. Sed eu erat feugiat, aliquam ex sit amet, mollis nibh. Sed cursus orci sed ex interdum scelerisque. Nullam in tristique odio, non eleifend nulla. Pellentesque a ultricies dui.',
    },
    {
      title: 'Estatísticas',
      icon: 'bar_chart',
      text: '2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempus tristique elit a bibendum. Nam lectus diam, dignissim id varius sed, tempor et eros. Aenean rutrum sapien magna, eu luctus augue luctus id. Sed vestibulum lacus at tellus tristique semper. Pellentesque semper nibh non neque cursus, a blandit augue convallis. Proin ligula tortor, venenatis ut tempor quis, ultrices quis metus. Mauris nec arcu non enim tempor tincidunt id in leo. Fusce sit amet nibh nec leo maximus laoreet. Vestibulum nec ipsum sit amet velit gravida tempor consectetur ac erat. Sed eu erat feugiat, aliquam ex sit amet, mollis nibh. Sed cursus orci sed ex interdum scelerisque. Nullam in tristique odio, non eleifend nulla. Pellentesque a ultricies dui.',
    },
    {
      title: 'Painel Cacol',
      icon: 'dashboard',
      text: '3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempus tristique elit a bibendum. Nam lectus diam, dignissim id varius sed, tempor et eros. Aenean rutrum sapien magna, eu luctus augue luctus id. Sed vestibulum lacus at tellus tristique semper. Pellentesque semper nibh non neque cursus, a blandit augue convallis. Proin ligula tortor, venenatis ut tempor quis, ultrices quis metus. Mauris nec arcu non enim tempor tincidunt id in leo. Fusce sit amet nibh nec leo maximus laoreet. Vestibulum nec ipsum sit amet velit gravida tempor consectetur ac erat. Sed eu erat feugiat, aliquam ex sit amet, mollis nibh. Sed cursus orci sed ex interdum scelerisque. Nullam in tristique odio, non eleifend nulla. Pellentesque a ultricies dui.',
    },
    {
      title: 'Painel Júri',
      icon: 'gavel',
      text: '4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempus tristique elit a bibendum. Nam lectus diam, dignissim id varius sed, tempor et eros. Aenean rutrum sapien magna, eu luctus augue luctus id. Sed vestibulum lacus at tellus tristique semper. Pellentesque semper nibh non neque cursus, a blandit augue convallis. Proin ligula tortor, venenatis ut tempor quis, ultrices quis metus. Mauris nec arcu non enim tempor tincidunt id in leo. Fusce sit amet nibh nec leo maximus laoreet. Vestibulum nec ipsum sit amet velit gravida tempor consectetur ac erat. Sed eu erat feugiat, aliquam ex sit amet, mollis nibh. Sed cursus orci sed ex interdum scelerisque. Nullam in tristique odio, non eleifend nulla. Pellentesque a ultricies dui.',
    },
    {
      title: 'Direito a Saúde',
      icon: 'local_hospital',
      text: '5 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempus tristique elit a bibendum. Nam lectus diam, dignissim id varius sed, tempor et eros. Aenean rutrum sapien magna, eu luctus augue luctus id. Sed vestibulum lacus at tellus tristique semper. Pellentesque semper nibh non neque cursus, a blandit augue convallis. Proin ligula tortor, venenatis ut tempor quis, ultrices quis metus. Mauris nec arcu non enim tempor tincidunt id in leo. Fusce sit amet nibh nec leo maximus laoreet. Vestibulum nec ipsum sit amet velit gravida tempor consectetur ac erat. Sed eu erat feugiat, aliquam ex sit amet, mollis nibh. Sed cursus orci sed ex interdum scelerisque. Nullam in tristique odio, non eleifend nulla. Pellentesque a ultricies dui.',
    },
    {
      title: 'Metas',
      icon: 'flag',
      text: '6 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempus tristique elit a bibendum. Nam lectus diam, dignissim id varius sed, tempor et eros. Aenean rutrum sapien magna, eu luctus augue luctus id. Sed vestibulum lacus at tellus tristique semper. Pellentesque semper nibh non neque cursus, a blandit augue convallis. Proin ligula tortor, venenatis ut tempor quis, ultrices quis metus. Mauris nec arcu non enim tempor tincidunt id in leo. Fusce sit amet nibh nec leo maximus laoreet. Vestibulum nec ipsum sit amet velit gravida tempor consectetur ac erat. Sed eu erat feugiat, aliquam ex sit amet, mollis nibh. Sed cursus orci sed ex interdum scelerisque. Nullam in tristique odio, non eleifend nulla. Pellentesque a ultricies dui.',
    },
    {
      title: 'Grandes Litigantes',
      icon: 'account_balance',
      text: '7 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempus tristique elit a bibendum. Nam lectus diam, dignissim id varius sed, tempor et eros. Aenean rutrum sapien magna, eu luctus augue luctus id. Sed vestibulum lacus at tellus tristique semper. Pellentesque semper nibh non neque cursus, a blandit augue convallis. Proin ligula tortor, venenatis ut tempor quis, ultrices quis metus. Mauris nec arcu non enim tempor tincidunt id in leo. Fusce sit amet nibh nec leo maximus laoreet. Vestibulum nec ipsum sit amet velit gravida tempor consectetur ac erat. Sed eu erat feugiat, aliquam ex sit amet, mollis nibh. Sed cursus orci sed ex interdum scelerisque. Nullam in tristique odio, non eleifend nulla. Pellentesque a ultricies dui.',
    },
    {
      title: 'Despesas, Receitas e Pessoal',
      icon: 'attach_money',
      text: '8 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempus tristique elit a bibendum. Nam lectus diam, dignissim id varius sed, tempor et eros. Aenean rutrum sapien magna, eu luctus augue luctus id. Sed vestibulum lacus at tellus tristique semper. Pellentesque semper nibh non neque cursus, a blandit augue convallis. Proin ligula tortor, venenatis ut tempor quis, ultrices quis metus. Mauris nec arcu non enim tempor tincidunt id in leo. Fusce sit amet nibh nec leo maximus laoreet. Vestibulum nec ipsum sit amet velit gravida tempor consectetur ac erat. Sed eu erat feugiat, aliquam ex sit amet, mollis nibh. Sed cursus orci sed ex interdum scelerisque. Nullam in tristique odio, non eleifend nulla. Pellentesque a ultricies dui.',
    },
  ];

  // Variável para armazenar o texto atual a ser exibido no right-container
  currentTitle: string = 'Opala Lab: Justiça em Números';
  currentText: string =
    'Passe o mouse sobre um item para ver mais informações.';

  constructor(private router: Router) {}

  updateText(newText: string) {
    this.currentText = newText;
  }

  resetText() {
    this.currentText =
      'Passe o mouse sobre um hexágono para ver mais informações.';
  }

  goToPage(path: string) {
    this.router.navigate([path]); // Redireciona para 'pagina2'
  }
}
