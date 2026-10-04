import type { ReactNode } from "react";

type EmptyStateProps = {
  title: string;
  description: string;
  action?: ReactNode;
  className?: string;
};

export function EmptyState({
  title,
  description,
  action,
  className = "",
}: EmptyStateProps) {
  return (
    <div
      role="status"
      className={`alert alert-soft border-base-300 bg-base-100 text-base-content ${className}`}
    >
      <div>
        <h2 className="font-semibold">{title}</h2>
        <p className="text-sm text-base-content/70">{description}</p>
        {action && <div className="mt-2">{action}</div>}
      </div>
    </div>
  );
}
