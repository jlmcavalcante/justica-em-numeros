import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { menuJudicialData } from '../../data/menu-juicial-data';
import { MatSelectModule } from '@angular/material/select';
import { OrgaoJulgadorService } from '../../services/orgao-julgador.service';
import { OrgaoJulgador } from '../../models/orgao-julgador.model';
import { HttpClientModule } from '@angular/common/http';
import { MatDividerModule } from '@angular/material/divider';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

interface ItemText {
  title: string;
  description: string;
}

@Component({
  selector: 'app-circular-menu-3',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    CommonModule,
    MatSelectModule,
    HttpClientModule,
    MatDividerModule,
    MatAutocompleteModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [OrgaoJulgadorService],
  templateUrl: './circular-menu-3.component.html',
  styleUrl: './circular-menu-3.component.scss',
})
export class CircularMenu3Component implements OnInit {
  isSmallScreen: boolean = false;
  currentTitle: string = 'Justiça em números';
  currentText: string =
    'Desde 2004, o Relatório Justiça em Números é a principal fonte das estatísticas oficiais do Poder Judiciário, publicado anualmente, e revela a realidade dos tribunais brasileiros com profundidade, oferecendo um panorama detalhado sobre a estrutura, litigiosidade e indicadores essenciais para apoiar a Gestão Judiciária; a partir de 2022, passou a utilizar a Base Nacional de Dados do Poder Judiciário – DataJud, fonte primária para o Sistema de Estatística do Poder Judiciário – SIESPJ, o que trouxe mais transparência, aprimoramento na qualidade da informação, além de maior eficiência e racionalidade na coleta de dados processuais nos tribunais.';
  itemDescriptions: ItemText[] = menuJudicialData;
  orgaos: OrgaoJulgador[] = [];
  uniqueInstancias: string[] = [];
  filteredOrgaos: OrgaoJulgador[] = [];
  selectedInstancia: string | null = null;
  selectedOrgao: string | null = null;

  constructor(private orgaoJulgadorService: OrgaoJulgadorService) {}

  ngOnInit() {
    this.checkScreenSize();

    this.orgaoJulgadorService.getOrgaos().subscribe({
      next: (response: OrgaoJulgador[]) => {
        this.orgaos = response;
        this.extractUniqueInstancias();
        this.filteredOrgaos = this.orgaos;
      },
      error: (error) => {
        console.error('Erro ao carregar dados:', error);
      },
      complete: () => {
        console.log('Requisição completada com sucesso');
      },
    });
  }

  private extractUniqueInstancias(): void {
    this.uniqueInstancias = Array.from(new Set(this.orgaos.map(orgao => orgao.INSTANCIA)));
    console.log("Instâncias únicas:", this.uniqueInstancias);
  }

  // Método chamado ao selecionar uma instância
  onInstanciaChange(instancia: string | null): void {
    this.selectedInstancia = instancia;
    console.log('Instância alterada para:', this.selectedInstancia);
    // Filtra os órgãos com base na instância selecionada ou exibe todos se `instancia` for nulo
    this.filteredOrgaos = instancia
      ? this.orgaos.filter((orgao) => orgao.INSTANCIA === instancia)
      : this.orgaos;
    this.selectedOrgao = null; // Limpa a seleção do autocomplete
  }

  // Filtragem para o autocomplete de "Orgão Julgador"
  filterOrgaos(): void {
    // Se o campo de órgão julgador está vazio, aplique a filtragem pela instância selecionada
    if (!this.selectedOrgao) {
      this.filteredOrgaos = this.selectedInstancia
        ? this.orgaos.filter(
            (orgao) => orgao.INSTANCIA === this.selectedInstancia
          )
        : this.orgaos;
    } else {
      // Caso contrário, aplique a filtragem pelo valor digitado no campo de órgão julgador
      const filterValue = this.selectedOrgao.toLowerCase();
      this.filteredOrgaos = this.orgaos.filter((orgao) =>
        orgao.ORG_JULGADOR.toLowerCase().includes(filterValue)
      );
    }
  }

  // Método chamado ao selecionar um órgão
  onOrgaoChange(orgaoJulgador: string | null): void {
    this.selectedOrgao = orgaoJulgador;
    console.log('Órgão selecionado:', orgaoJulgador);

    // Se a instância não estiver selecionada, define-a automaticamente com base no órgão selecionado
    if (!this.selectedInstancia && orgaoJulgador) {
      const orgaoSelecionado = this.orgaos.find(
        (orgao) => orgao.ORG_JULGADOR === orgaoJulgador
      );
      if (orgaoSelecionado) {
        this.selectedInstancia = orgaoSelecionado.INSTANCIA;
        console.log(
          `Instância selecionada automaticamente: ${this.selectedInstancia}`
        );
        // Aplica a filtragem para exibir apenas órgãos da instância selecionada
        this.filteredOrgaos = this.orgaos.filter(
          (orgao) => orgao.INSTANCIA === this.selectedInstancia
        );
      }
    }
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
    this.currentText =
      'Desde 2004, o Relatório Justiça em Números é a principal fonte das estatísticas oficiais do Poder Judiciário, publicado anualmente, e revela a realidade dos tribunais brasileiros com profundidade, oferecendo um panorama detalhado sobre a estrutura, litigiosidade e indicadores essenciais para apoiar a Gestão Judiciária; a partir de 2022, passou a utilizar a Base Nacional de Dados do Poder Judiciário – DataJud, fonte primária para o Sistema de Estatística do Poder Judiciário – SIESPJ, o que trouxe mais transparência, aprimoramento na qualidade da informação, além de maior eficiência e racionalidade na coleta de dados processuais nos tribunais.';
  }
}
