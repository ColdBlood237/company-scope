import { Company, Filters } from "./types";

export function filterCompanies(
  companies: Company[],
  filters: Filters,
): Company[] {
  return companies.filter(
    (company) =>
      company.name.toLowerCase().includes(filters.query.toLowerCase()) &&
      (company.sector === filters.sector || filters.sector === "all") &&
      (company.riskLevel === filters.risk || filters.risk === "all"),
  );
}
