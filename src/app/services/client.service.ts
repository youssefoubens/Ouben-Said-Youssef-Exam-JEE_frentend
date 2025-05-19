import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Client } from '../models/client.model';
import { Observable } from 'rxjs';
import { CreditSummary } from '../models/credit-summary.model'; // You’ll need to define this model

@Injectable({ providedIn: 'root' })
export class ClientService {
  private apiUrl = `${environment.apiUrl}/clients`; // Make sure `apiUrl` exists in `environment.ts`

  constructor(private http: HttpClient) {}

  // GET /api/clients
  getAllClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.apiUrl);
  }

  // GET /api/clients/:id
  getClientDetails(id: number): Observable<Client> {
    return this.http.get<Client>(`${this.apiUrl}/${id}`);
  }

  // POST /api/clients
  createClient(client: Omit<Client, 'id' | 'createdAt'>): Observable<Client> {
    return this.http.post<Client>(this.apiUrl, client);
  }

  // PUT /api/clients/:id
  updateClient(id: number, client: Partial<Client>): Observable<Client> {
    return this.http.put<Client>(`${this.apiUrl}/${id}`, client);
  }

  // DELETE /api/clients/:id
  deleteClient(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // GET /api/clients/:id/credits
  getClientCredits(id: number): Observable<CreditSummary[]> {
    return this.http.get<CreditSummary[]>(`${this.apiUrl}/${id}/credits`);
  }
}
