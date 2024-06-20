import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LigneCommande } from './ligne-commande';

@Injectable({
  providedIn: 'root'
})
export class LigneCommandeService {

  private baseURL = "http://localhost:8080/LDC";

  constructor(private httpClient: HttpClient) { }
  
  getLigneCommandeList(): Observable<LigneCommande[]>{
    return this.httpClient.get<LigneCommande[]>(`${this.baseURL}/findAll`);
  }

  createLigneCommande(ligneCommande: LigneCommande): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/insert`, ligneCommande);
  }

  getLigneCommandeById(id: number): Observable<LigneCommande>{
    return this.httpClient.get<LigneCommande>(`${this.baseURL}/findById/${id}`);
  }

  updateLigneCommande(id: number, ligneCommande: LigneCommande): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/update/${id}`, ligneCommande);
  }

  deleteLigneCommande(id: number): Observable<Object>{
    return this.httpClient.get(`${this.baseURL}/delete/${id}`);
  }
}

