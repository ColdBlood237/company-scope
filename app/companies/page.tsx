import { CompanyCard } from "@/components/CompanyCard";
import { CompanyFilters } from "@/components/CompanyFilters";
import { companies } from "@/data/companies";
import { filterCompanies } from "@/lib/filters";
import { RiskLevel, Sector } from "@/lib/types";

type SearchParams = {
  query?: string;
  sector?: string;
  risk?: string;
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;

  const filters = {
    query: params.query ?? "",
    sector: (params.sector as Sector) ?? "all",
    risk: (params.risk as RiskLevel) ?? "all",
  };

  const filteredCompanies = filterCompanies(companies, filters);

  return (
    <main className="min-h-screen bg-base-200/60 px-4 py-10 font-sans text-base-content sm:px-6">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 flex flex-col gap-4 border-b border-base-300 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase text-primary">
              Company Scope
            </p>
            <h1 className="mt-2 text-3xl font-semibold">Companies</h1>
            {/* key prop with the url filters, così ogni volta che cambia una query param rimontiamo il componente*/}
            <CompanyFilters key={JSON.stringify(filters)} />
            <p className="mt-2 text-base-content/65">
              Browse company growth and risk across sectors.
            </p>
          </div>
          <span className="badge badge-lg badge-soft badge-info shrink-0">
            {filteredCompanies.length} records
          </span>
        </header>

        <section
          aria-label="Companies"
          className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3"
        >
          {filteredCompanies.length > 0 ? (
            filteredCompanies.map((company) => (
              <CompanyCard key={company.id} company={company} />
            ))
          ) : (
            <div
              role="status"
              className="alert alert-soft border-base-300 bg-base-100 text-base-content md:col-span-2 xl:col-span-3"
            >
              <div>
                <h2 className="font-semibold">No companies found</h2>
                <p className="text-sm text-base-content/70">
                  Try adjusting or clearing your filters.
                </p>
              </div>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
