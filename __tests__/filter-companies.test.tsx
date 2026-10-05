import { companies } from "@/data/companies";
import { filterCompanies } from "@/lib/filters";
import { describe, expect, test } from "vitest";

describe("filtersCompanies", () => {
  test("case-insensitive search", () => {
    expect(
      filterCompanies(companies, {
        query: "nortHStaR",
        sector: "all",
        risk: "all",
      })[0].name,
    ).toBe("Northstar Systems");
  });
});
