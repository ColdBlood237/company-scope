import Link from "next/link";

export default function CompanyNotFound() {
  return (
    <main className="grid min-h-[70vh] place-items-center bg-base-200/60 px-4 py-16 text-base-content">
      <section className="w-full max-w-xl text-center">
        <p className="font-mono text-6xl font-bold text-base-content/20 sm:text-8xl">
          404
        </p>
        <span className="badge badge-outline mt-3">
          Company record unavailable
        </span>
        <h1 className="mt-4 text-3xl font-semibold">Company not found</h1>
        <p className="mx-auto mt-3 max-w-md text-base-content/65">
          We could not find a company with that ID. It may be invalid or the
          record may have been removed.
        </p>
        <Link href="/companies" className="btn mt-7">
          Back to companies
        </Link>
      </section>
    </main>
  );
}
