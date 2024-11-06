import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { menuAdministrativoData } from '../../data/menu-administrativo-data';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { OrgaoJulgador } from '../../models/orgao-julgador.model';
import { CookieService } from 'ngx-cookie-service';
import { OrgaoJulgadorService } from '../../services/orgao-julgador.service';
import { MatDialog } from '@angular/material/dialog';
import { CreditsDialogComponent } from '../../shared/credits-dialog/credits-dialog.component';
import { FormsModule } from '@angular/forms';

interface ItemText {
  title: string;
  description: string;
}

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, CommonModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatAutocompleteModule, HttpClientModule, FormsModule],
  providers: [OrgaoJulgadorService],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent implements OnInit {
  public isSmallScreen: boolean = false;
  currentTitle: string = 'Justiça em números';
  currentText: string = 'Desde 2004, o Relatório Justiça em Números é a principal fonte das estatísticas oficiais do Poder Judiciário, publicado anualmente, e revela a realidade dos tribunais brasileiros com profundidade, oferecendo um panorama detalhado sobre a estrutura, litigiosidade e indicadores essenciais para apoiar a Gestão Judiciária; a partir de 2022, passou a utilizar a Base Nacional de Dados do Poder Judiciário – DataJud, fonte primária para o Sistema de Estatística do Poder Judiciário – SIESPJ, o que trouxe mais transparência, aprimoramento na qualidade da informação, além de maior eficiência e racionalidade na coleta de dados processuais nos tribunais.'
  itemDescriptions: ItemText[] = menuAdministrativoData;
  orgaos: OrgaoJulgador[] = [];
  uniqueInstancias: string[] = [];
  filteredOrgaos: OrgaoJulgador[] = [];
  selectedInstancia: string | null = null;
  selectedOrgao: string | null = null;

  constructor(
    private orgaoJulgadorService: OrgaoJulgadorService,
    private cookieService: CookieService,
    public dialog: MatDialog
  ) {}


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

    this.loadSelections();
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

  private extractUniqueInstancias(): void {
    this.uniqueInstancias = Array.from(
      new Set(this.orgaos.map((orgao) => orgao.INSTANCIA))
    );
  }

  onInstanciaChange(instancia: string | null): void {
    this.selectedInstancia = instancia;
    this.filteredOrgaos = instancia
      ? this.orgaos.filter((orgao) => orgao.INSTANCIA === instancia)
      : this.orgaos;
    this.selectedOrgao = null;
  }

  filterOrgaos(): void {
    if (!this.selectedOrgao) {
      this.filteredOrgaos = this.selectedInstancia
        ? this.orgaos.filter(
            (orgao) => orgao.INSTANCIA === this.selectedInstancia
          )
        : this.orgaos;
    } else {
      const filterValue = this.selectedOrgao.toLowerCase();
      this.filteredOrgaos = this.orgaos.filter((orgao) =>
        orgao.ORG_JULGADOR.toLowerCase().includes(filterValue)
      );
    }
  }

  onOrgaoChange(orgaoJulgador: string | null): void {
    this.selectedOrgao = orgaoJulgador;

    if (!this.selectedInstancia && orgaoJulgador) {
      const orgaoSelecionado = this.orgaos.find(
        (orgao) => orgao.ORG_JULGADOR === orgaoJulgador
      );
      if (orgaoSelecionado) {
        this.selectedInstancia = orgaoSelecionado.INSTANCIA;
        this.filteredOrgaos = this.orgaos.filter(
          (orgao) => orgao.INSTANCIA === this.selectedInstancia
        );
      }
    }
  }

  saveSelections() {
    const expirationDays = 7;
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + expirationDays);

    const selections = {
      instancia: this.selectedInstancia,
      orgao: this.selectedOrgao,
    };

    // Converte para string JSON e salva no cookie
    this.cookieService.set(
      'userSelections',
      JSON.stringify(selections),
      expirationDate,
      '/',
      '',
      true,
      'Lax'
    );
    console.log('Seleções salvas no cookie:', selections);
  }

  loadSelections() {
    const cookie = this.cookieService.get('userSelections');
    if (cookie) {
      const selections = JSON.parse(cookie);
      this.selectedInstancia = selections.instancia;
      this.selectedOrgao = selections.orgao;
      console.log('Seleções carregadas do cookie:', selections);
    }
  }

  clearSelections() {
    this.selectedInstancia = null;
    this.selectedOrgao = '';
    this.cookieService.delete('userSelections');
    console.log('Seleções e cookie apagados');
  }

  openCreditsDialog() {
    this.dialog.open(CreditsDialogComponent, {
      width: '800px',
      maxHeight: '80vh',
      height: '50vh',
      panelClass: 'custom-dialog-container',
    });
  }
}
