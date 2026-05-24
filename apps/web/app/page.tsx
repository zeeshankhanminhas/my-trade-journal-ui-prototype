import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#050505] px-6 py-10 text-white">
      <div className="mx-auto flex min-h-[80vh] max-w-3xl flex-col justify-center gap-6">
        <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
          MY-Trade-Journal
        </p>
        <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
          Trading intelligence UI prototype
        </h1>
        <p className="max-w-xl text-base leading-7 text-zinc-400">
          Manual-execution dashboard for gap exploitation, rule discipline,
          review debt, and risk visibility.
        </p>
        <Link
          href="/dashboard"
          className="w-fit rounded-full border border-zinc-700 px-5 py-3 text-sm font-medium text-zinc-100 transition hover:border-zinc-400 hover:bg-zinc-900"
        >
          Open dashboard
        </Link>
      </div>
    </main>
  );
}
