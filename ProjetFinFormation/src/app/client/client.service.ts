import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from './client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private baseURL = "http://localhost:8080/clients";

  constructor(private httpClient: HttpClient) { }
  
  getClientList(): Observable<Client[]>{
    return this.httpClient.get<Client[]>(`${this.baseURL}/findAll`);
  }

  createClient(client: Client): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/insert`, client);
  }

  getClientById(id: number): Observable<Client>{
    return this.httpClient.get<Client>(`${this.baseURL}/findById/${id}`);
  }

  updateClient(id: number, client: Client): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/update/${id}`, client);
  }

  deleteClient(id: number): Observable<Object>{
    return this.httpClient.get(`${this.baseURL}/delete/${id}`);
  }

  searchClients(keyword: string): Observable<Client[]> {
    return this.httpClient.get<Client[]>(`${this.baseURL}/search?keyword=${keyword}`);
  }

}
