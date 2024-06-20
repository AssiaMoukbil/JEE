import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from './produit';


@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private baseURL = "http://localhost:8080/produits";

  constructor(private httpClient: HttpClient) { }
  
  getProduitList(): Observable<Produit[]>{
    return this.httpClient.get<Produit[]>(`${this.baseURL}/findAll`);
  }

  createProduit(produit: Produit): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/insert`, produit);
  }

  getProduitById(id: number): Observable<Produit>{
    return this.httpClient.get<Produit>(`${this.baseURL}/findById/${id}`);
  }

  updateProduit(id: number, produit: Produit): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/update/${id}`, produit);
  }

  deleteProduit(id: number): Observable<Object>{
    return this.httpClient.get(`${this.baseURL}/delete/${id}`);
  }
}

