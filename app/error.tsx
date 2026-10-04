"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="grid min-h-[70vh] place-items-center bg-base-200/60 px-4 py-16 text-base-content">
      <section className="w-full max-w-xl text-center">
        <span className="badge badge-outline">Unexpected error</span>
        <h1 className="mt-4 text-3xl font-semibold">
          This page could not load
        </h1>
        <p className="mx-auto mt-3 max-w-md text-base-content/65">
          Something went wrong while loading this page. You can retry or return
          to the company directory.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <button className="btn" type="button" onClick={retry}>
            Try again
          </button>
          <Link href="/companies" className="btn btn-ghost">
            Go to companies
          </Link>
        </div>
      </section>
    </main>
  );
}
