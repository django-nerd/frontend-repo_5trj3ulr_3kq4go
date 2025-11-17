export default function Experience() {
  const experiences = [
    { role: 'Senior Frontend Engineer', company: 'Acme Inc.', period: '2022 — Present', points: ['Leading product UI', 'Performance and a11y', 'Design systems'] },
    { role: 'Full‑Stack Engineer', company: 'Beta Labs', period: '2020 — 2022', points: ['Built SaaS MVPs', 'Data‑heavy dashboards', 'API design'] },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">Experience</h2>
        <div className="mt-8 grid gap-6">
          {experiences.map((e) => (
            <div key={e.role} className="rounded-2xl border bg-white p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <div>
                  <p className="text-lg font-medium text-gray-900">{e.role}</p>
                  <p className="text-sm text-gray-600">{e.company}</p>
                </div>
                <p className="text-sm text-gray-700">{e.period}</p>
              </div>
              <ul className="mt-4 list-disc pl-5 text-sm text-gray-700 space-y-1">
                {e.points.map(p => <li key={p}>{p}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
