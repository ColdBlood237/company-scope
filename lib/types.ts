// "as const" crea una tupla readonly
export const sectors = [
  "Technology",
  "Manufacturing",
  "Energy",
  "Healthcare",
] as const;

// "[number]" rappresenta qualsiasi position numerica
export type Sector = (typeof sectors)[number];

export type RiskLevel = "low" | "medium" | "high";

export interface Company {
  id: string;
  name: string;
  sector: Sector;
  city: string;
  employees: number;
  revenueMillions: number;
  growthPercent: number;
  riskLevel: RiskLevel;
  description: string;
}

export interface CompanyFilters {
  query: string;
  sector: Sector | "all";
  risk: RiskLevel | "all";
}
