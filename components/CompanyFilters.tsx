"use client";

import { sectors } from "@/lib/types";
import Form from "next/form";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export function CompanyFilters() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [query, setQuery] = useState(searchParams.get("query") ?? "");
  const [sector, setSector] = useState(searchParams.get("sector") ?? "all");
  const [risk, setRisk] = useState(searchParams.get("risk") ?? "all");

  function clearFilters() {
    router.replace("/companies", undefined);
    setQuery("");
    setSector("all");
    setRisk("all");
  }

  return (
    <Form
      action=""
      aria-label="Company filters"
      className="my-5 grid grid-cols-1 gap-3 rounded-box border border-base-300 bg-base-100 p-4 sm:grid-cols-2 lg:grid-cols-4 lg:items-end"
    >
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Company name</legend>
        <input
          className="input w-full"
          type="search"
          id="query"
          name="query"
          placeholder="Search companies"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </fieldset>

      <fieldset className="fieldset">
        <legend className="fieldset-legend">Sector</legend>
        <select
          className="select w-full"
          name="sector"
          id="sector"
          value={sector}
          onChange={(e) => setSector(e.target.value)}
        >
          <option value="all">All sectors</option>
          {sectors.map((sector) => (
            <option key={sector} value={sector}>
              {sector}
            </option>
          ))}
        </select>
      </fieldset>

      <fieldset className="fieldset">
        <legend className="fieldset-legend">Risk</legend>
        <select
          className="select w-full"
          name="risk"
          id="risk"
          value={risk}
          onChange={(e) => setRisk(e.target.value)}
        >
          <option value="all">All risks</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </fieldset>

      <div className="flex flex-wrap gap-2 sm:col-span-2 lg:col-span-1">
        <button className="btn" type="submit">
          Apply filters
        </button>
        <button className="btn btn-ghost" type="button" onClick={clearFilters}>
          Clear filters
        </button>
      </div>
    </Form>
  );
}
