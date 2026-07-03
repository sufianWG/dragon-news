import Link from "next/link";

const NotFoundPage = () => {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-6 py-16 text-white">
      {/* Background decoration */}
      <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-600/30 blur-[120px]" />

      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-blue-600/20 blur-[100px]" />

      <div className="absolute right-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-fuchsia-600/20 blur-[100px]" />

      {/* Content */}
      <section className="relative z-10 mx-auto max-w-2xl text-center">
        {/* Icon */}
        <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-violet-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h9a2.25 2.25 0 002.25-2.25V12m-9 3l3-3m0 0l-3-3m3 3H21"
            />
          </svg>
        </div>

        {/* Error number */}
        <p className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-blue-400 bg-clip-text text-8xl font-black tracking-tight text-transparent sm:text-9xl">
          404
        </p>

        {/* Heading */}
        <h1 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-5xl">
          Page Not Found
        </h1>

        {/* Description */}
        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
          Sorry, the page you are looking for doesn&apos;t exist, has been
          removed, or the URL may be incorrect.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-violet-600/20 transition duration-300 hover:-translate-y-0.5 hover:bg-violet-500 sm:w-auto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955a1.125 1.125 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-6.75h4.5V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75"
              />
            </svg>

            Back to Home
          </Link>

          <Link
            href="/contact"
            className="inline-flex w-full items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-slate-200 backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10 sm:w-auto"
          >
            Contact Support
          </Link>
        </div>

        {/* Footer message */}
        <p className="mt-10 text-sm text-slate-500">
          Error code: 404 — The requested page could not be found.
        </p>
      </section>
    </main>
  );
};

export default NotFoundPage;