import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { CreditType, PersonalCredit, MortgageCredit, ProfessionalCredit } from '../models/credit.model';

@Injectable({ providedIn: 'root' })
export class CreditService {
  private baseUrl = `${environment.apiUrl}/credits`;

  constructor(private http: HttpClient) {}

  getCreditTypes(): CreditType[] {
    return ['PERSONAL', 'MORTGAGE', 'PROFESSIONAL'];
  }

  // ----- PERSONAL CREDITS -----
  getAllPersonalCredits(): Observable<PersonalCredit[]> {
    return this.http.get<PersonalCredit[]>(`${this.baseUrl}/personal`);
  }

  getPersonalCreditById(id: number): Observable<PersonalCredit> {
    return this.http.get<PersonalCredit>(`${this.baseUrl}/personal/${id}`);
  }

  createPersonalCredit(credit: Omit<PersonalCredit, 'id'>): Observable<PersonalCredit> {
    return this.http.post<PersonalCredit>(`${this.baseUrl}/personal`, credit);
  }

  updatePersonalCredit(id: number, credit: PersonalCredit): Observable<PersonalCredit> {
    return this.http.put<PersonalCredit>(`${this.baseUrl}/personal/${id}`, credit);
  }

  // ----- MORTGAGE CREDITS -----
  getAllMortgageCredits(): Observable<MortgageCredit[]> {
    return this.http.get<MortgageCredit[]>(`${this.baseUrl}/mortgage`);
  }

  getMortgageCreditById(id: number): Observable<MortgageCredit> {
    return this.http.get<MortgageCredit>(`${this.baseUrl}/mortgage/${id}`);
  }

  createMortgageCredit(credit: Omit<MortgageCredit, 'id'>): Observable<MortgageCredit> {
    return this.http.post<MortgageCredit>(`${this.baseUrl}/mortgage`, credit);
  }

  updateMortgageCredit(id: number, credit: MortgageCredit): Observable<MortgageCredit> {
    return this.http.put<MortgageCredit>(`${this.baseUrl}/mortgage/${id}`, credit);
  }

  // ----- PROFESSIONAL CREDITS -----
  getAllProfessionalCredits(): Observable<ProfessionalCredit[]> {
    return this.http.get<ProfessionalCredit[]>(`${this.baseUrl}/professional`);
  }

  getProfessionalCreditById(id: number): Observable<ProfessionalCredit> {
    return this.http.get<ProfessionalCredit>(`${this.baseUrl}/professional/${id}`);
  }

  createProfessionalCredit(credit: Omit<ProfessionalCredit, 'id'>): Observable<ProfessionalCredit> {
    return this.http.post<ProfessionalCredit>(`${this.baseUrl}/professional`, credit);
  }

  updateProfessionalCredit(id: number, credit: ProfessionalCredit): Observable<ProfessionalCredit> {
    return this.http.put<ProfessionalCredit>(`${this.baseUrl}/professional/${id}`, credit);
  }
}
