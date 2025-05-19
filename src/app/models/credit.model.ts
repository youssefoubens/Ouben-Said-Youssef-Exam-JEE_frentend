export type CreditType = 'PERSONAL' | 'MORTGAGE' | 'PROFESSIONAL';

export interface Credit {
  id: number;
  amount: number;
  interestRate: number;
  duration: number; // in months or years, depending on backend
  type: CreditType;
}

// Extend base Credit interface to include type-specific fields
export interface PersonalCredit extends Credit {
  purpose: string; // e.g., education, travel
}

export interface MortgageCredit extends Credit {
  propertyValue: number;
  downPayment: number;
}

export interface ProfessionalCredit extends Credit {
  businessType: string; // e.g., startup, SME
  annualRevenue: number;
}
