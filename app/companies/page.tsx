import { CompanyCard } from "@/components/CompanyCard";
import { companies } from "@/data/companies";

export default function Page() {
  return (
    <main className="min-h-screen bg-base-200/60 px-4 py-10 font-sans text-base-content sm:px-6">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 flex flex-col gap-4 border-b border-base-300 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase text-primary">
              Company Scope
            </p>
            <h1 className="mt-2 text-3xl font-semibold">Companies</h1>
            <p className="mt-2 text-base-content/65">
              Browse company growth and risk across sectors.
            </p>
          </div>
          <span className="badge badge-outline badge-neutral">
            {companies.length} records
          </span>
        </header>

        <section
          aria-label="Companies"
          className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3"
        >
          {companies.map((company) => (
            <CompanyCard key={company.id} company={company} />
          ))}
        </section>
      </div>
    </main>
  );
}
