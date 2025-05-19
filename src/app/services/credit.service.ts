import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Credit, CreditType } from '../models/credit.model';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class CreditService {
  private apiUrl = `${environment.apiBaseUrl}/credits`;

  constructor(private http: HttpClient) {}

  getCredits() {
    return this.http.get<Credit[]>(this.apiUrl);
  }

  createCredit(credit: Omit<Credit, 'id'>) {
    return this.http.post<Credit>(this.apiUrl, credit);
  }

  getCreditTypes(): CreditType[] {
    return ['PERSONAL', 'MORTGAGE', 'PROFESSIONAL'];
  }
}