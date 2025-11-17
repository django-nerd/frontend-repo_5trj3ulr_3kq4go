export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <div className="rounded-2xl bg-gray-100 p-6 aspect-square"></div>
          </div>
          <div className="md:col-span-7">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">About</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              I’m a full‑stack engineer focused on crafting minimal, performance‑first web apps. I love shipping lean products and iterating quickly while keeping codebases clean and maintainable.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-gray-700">
              <li className="rounded-lg border bg-white p-3">JavaScript / TypeScript</li>
              <li className="rounded-lg border bg-white p-3">React / Next.js</li>
              <li className="rounded-lg border bg-white p-3">Node / FastAPI</li>
              <li className="rounded-lg border bg-white p-3">Tailwind CSS</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
