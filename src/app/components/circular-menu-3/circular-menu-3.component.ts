import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CookieService } from 'ngx-cookie-service';
import { menuJudicialData } from '../../data/menu-juicial-data';
import { OrgaoJulgador } from '../../models/orgao-julgador.model';
import { OrgaoJulgadorService } from '../../services/orgao-julgador.service';
import { CreditsDialogComponent } from '../../shared/credits-dialog/credits-dialog.component';

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
  currentTitle: string = 'O que é o UNIDATA?';
  currentText: string =
    'O Projeto UNIDATA é uma iniciativa estratégica que visa centralizar as informações gerenciais do TJPI e estabelecer governança sobre os dados, consolidando-se como a fonte oficial de estatísticas e informações essenciais para a tomada de decisões. Desenvolvido para solucionar problemas de dispersão e inconsistência de dados, o UNIDATA fornecerá uma visão única e confiável por meio de dashboards intuitivos voltados à administração e às unidades judiciais. Resultado de uma parceria entre o Laboratório de Inovação - OpalaLab, a Secretaria de Gestão Estratégica - SEGES e a Secretaria de Tecnologia da Informação e Comunicação - STIC, o projeto visa não apenas aprimorar a eficiência operacional, mas também fortalecer uma cultura de decisões baseadas em dados.';
  itemDescriptions: ItemText[] = menuJudicialData;
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
    this.currentTitle = 'O que é o UNIDATA?';
    this.currentText =
      'O Projeto UNIDATA é uma iniciativa estratégica que visa centralizar as informações gerenciais do TJPI e estabelecer governança sobre os dados, consolidando-se como a fonte oficial de estatísticas e informações essenciais para a tomada de decisões. Desenvolvido para solucionar problemas de dispersão e inconsistência de dados, o UNIDATA fornecerá uma visão única e confiável por meio de dashboards intuitivos voltados à administração e às unidades judiciais. Resultado de uma parceria entre o Laboratório de Inovação - OpalaLab, a Secretaria de Gestão Estratégica - SEGES e a Secretaria de Tecnologia da Informação e Comunicação - STIC, o projeto visa não apenas aprimorar a eficiência operacional, mas também fortalecer uma cultura de decisões baseadas em dados.';
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
