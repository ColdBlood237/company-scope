import { getCompanyById } from "@/lib/companies";
import type { RiskLevel } from "@/lib/types";
import Link from "next/link";
import { notFound } from "next/navigation";

const riskBadgeClass: Record<RiskLevel, string> = {
  low: "badge-success",
  medium: "badge-warning",
  high: "badge-error",
};

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const company = getCompanyById(id);

  if (!company) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-base-200/60 px-4 py-10 font-sans text-base-content sm:px-6">
      <div className="mx-auto max-w-5xl">
        <Link href="/companies" className="link link-hover text-sm">
          Back to companies
        </Link>

        <header className="mt-8 border-b border-base-300 pb-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="badge badge-outline">{company.sector}</span>
            <span
              className={`badge badge-soft ${riskBadgeClass[company.riskLevel]}`}
            >
              {company.riskLevel} risk
            </span>
          </div>
          <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">
            {company.name}
          </h1>
          <p className="mt-2 text-base-content/65">{company.city}</p>
        </header>

        <section
          aria-label="Company metrics"
          className="stats stats-vertical mt-8 w-full border border-base-300 bg-base-100 sm:stats-horizontal"
        >
          <div className="stat">
            <div className="stat-title">Employees</div>
            <div className="stat-value text-2xl sm:text-3xl">
              {company.employees.toLocaleString()}
            </div>
          </div>
          <div className="stat">
            <div className="stat-title">Revenue</div>
            <div className="stat-value text-2xl sm:text-3xl">
              ${company.revenueMillions.toLocaleString()}M
            </div>
          </div>
          <div className="stat">
            <div className="stat-title">Growth</div>
            <div className="stat-value text-2xl sm:text-3xl">
              {company.growthPercent > 0 ? "+" : ""}
              {company.growthPercent.toFixed(1)}%
            </div>
          </div>
        </section>

        <section className="mt-10 max-w-3xl">
          <h2 className="text-lg font-semibold">Company overview</h2>
          <p className="mt-3 leading-relaxed text-base-content/75">
            {company.description}
          </p>
        </section>
      </div>
    </main>
  );
}
