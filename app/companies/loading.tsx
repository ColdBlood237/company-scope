export default function Loading() {
  return (
    <main
      aria-busy="true"
      aria-label="Loading companies"
      className="min-h-screen bg-base-200/60 px-4 py-10 font-sans text-base-content sm:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 border-b border-base-300 pb-6">
          <div className="skeleton h-4 w-32" aria-hidden="true" />
          <div className="skeleton mt-3 h-9 w-48" aria-hidden="true" />
          <div
            className="skeleton mt-6 h-28 w-full rounded-box"
            aria-hidden="true"
          />
        </header>

        <section
          aria-label="Company results loading"
          className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3"
        >
          {Array.from({ length: 6 }, (_, cardIndex) => (
            <div
              key={cardIndex}
              className="card card-border min-h-40 bg-base-100 p-5"
              aria-hidden="true"
            >
              <div className="skeleton h-5 w-2/3" />
              <div className="skeleton mt-3 h-4 w-1/3" />
              <div className="mt-auto grid grid-cols-2 gap-4 pt-6">
                <div className="skeleton h-10 w-full" />
                <div className="skeleton h-10 w-full" />
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
