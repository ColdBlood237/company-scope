import type { Company, RiskLevel } from "@/lib/types";
import Link from "next/link";

const riskBadgeClass: Record<RiskLevel, string> = {
  low: "badge-success",
  medium: "badge-warning",
  high: "badge-error",
};

export function CompanyCard({ company }: { company: Company }) {
  return (
    <article className="card card-border bg-base-100 transition-shadow hover:shadow-md">
      <div className="card-body gap-4 p-5">
        <header className="flex items-start justify-between gap-3">
          <div>
            <h2 className="card-title text-lg leading-snug">
              <Link
                href={`/companies/${company.id}`}
                className="link link-hover"
              >
                {company.name}
              </Link>
            </h2>
            <p className="mt-1 text-sm text-base-content/65">{company.city}</p>
          </div>
          <span
            className={`badge badge-soft ${riskBadgeClass[company.riskLevel]}`}
          >
            {company.riskLevel} risk
          </span>
        </header>

        <dl className="grid grid-cols-2 gap-4 border-t border-base-300 pt-4">
          <div>
            <dt className="text-xs font-medium uppercase text-base-content/60">
              Sector
            </dt>
            <dd className="mt-1 text-sm font-medium">{company.sector}</dd>
          </div>
          <div>
            <dt className="text-xs font-medium uppercase text-base-content/60">
              Growth
            </dt>
            <dd className="mt-1 font-mono text-sm font-semibold">
              {company.growthPercent > 0 ? "+" : ""}
              {company.growthPercent.toFixed(1)}%
            </dd>
          </div>
        </dl>
      </div>
    </article>
  );
}
