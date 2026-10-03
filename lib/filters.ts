import { Company, CompanyFilters } from "./types";

const filteredCompanies: Company[] = [];

export function filterCompanies(
  companies: Company[],
  filters: CompanyFilters,
): Company[] {
  return companies.filter(
    (company) =>
      filters.query.toLowerCase().includes(company.name.toLowerCase()) &&
      (company.sector === filters.sector || filters.sector === "all") &&
      (company.riskLevel === filters.risk || filters.risk === "all"),
  );
}
