import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { menuAdministrativoData } from '../../data/menu-administrativo-data';

interface ItemText {
  title: string;
  description: string;
}

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent implements OnInit {
  public isSmallScreen: boolean = false;
  currentTitle: string = 'Justiça em números';
  currentText: string = 'Desde 2004, o Relatório Justiça em Números é a principal fonte das estatísticas oficiais do Poder Judiciário, publicado anualmente, e revela a realidade dos tribunais brasileiros com profundidade, oferecendo um panorama detalhado sobre a estrutura, litigiosidade e indicadores essenciais para apoiar a Gestão Judiciária; a partir de 2022, passou a utilizar a Base Nacional de Dados do Poder Judiciário – DataJud, fonte primária para o Sistema de Estatística do Poder Judiciário – SIESPJ, o que trouxe mais transparência, aprimoramento na qualidade da informação, além de maior eficiência e racionalidade na coleta de dados processuais nos tribunais.'
  itemDescriptions: ItemText[] = menuAdministrativoData;

  constructor() {}

  ngOnInit() {
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkScreenSize();
  }

  private checkScreenSize(): void {
    this.isSmallScreen = window.innerWidth < 768;
  }

  changeText(index: number) {
    this.currentTitle = this.itemDescriptions[index].title;
    this.currentText = this.itemDescriptions[index].description;
  }

  resetText() {
    this.currentTitle = 'Justiça em números';
    this.currentText = 'Desde 2004, o Relatório Justiça em Números é a principal fonte das estatísticas oficiais do Poder Judiciário, publicado anualmente, e revela a realidade dos tribunais brasileiros com profundidade, oferecendo um panorama detalhado sobre a estrutura, litigiosidade e indicadores essenciais para apoiar a Gestão Judiciária; a partir de 2022, passou a utilizar a Base Nacional de Dados do Poder Judiciário – DataJud, fonte primária para o Sistema de Estatística do Poder Judiciário – SIESPJ, o que trouxe mais transparência, aprimoramento na qualidade da informação, além de maior eficiência e racionalidade na coleta de dados processuais nos tribunais.'
  }
}
