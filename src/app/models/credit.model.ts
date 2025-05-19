export type CreditStatus = 'PENDING' | 'APPROVED' | 'REJECTED';
export type CreditType = 'PERSONAL' | 'MORTGAGE' | 'PROFESSIONAL';
export type PropertyType = 'APARTMENT' | 'HOUSE' | 'COMMERCIAL';

export interface Credit {
  id: number;
  amount: number;
  duration: number;
  interestRate: number;
  type: CreditType;
  status: CreditStatus;
  requestDate: Date;
  motive?: string;
  propertyType?: PropertyType;
  companyName?: string;
  clientId: number;
}