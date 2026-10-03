import { companies } from "@/data/companies";
import { Company } from "./types";

export function getCompanies() {
  return companies;
}

export function getCompanyById(id: string): Company | undefined {
  return companies.find((company) => company.id === id);
}
