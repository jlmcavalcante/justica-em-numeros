import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrgaoJulgador } from '../models/orgao-julgador.model';

@Injectable({
  providedIn: 'root'
})
export class OrgaoJulgadorService {
  private jsonUrl = './assets/data/orgaos.json';

  constructor(private http: HttpClient) {}

  getOrgaos(): Observable<OrgaoJulgador[]> {
    return this.http.get<OrgaoJulgador[]>(this.jsonUrl);
  }
}
