export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border bg-white p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">Let’s work together</h2>
              <p className="mt-2 text-gray-700">Available for freelance and full‑time roles. Open to interesting product ideas.</p>
            </div>
            <div className="flex items-center gap-3">
              <a href="mailto:you@example.com" className="inline-flex items-center rounded-full bg-gray-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-black/80">Email me</a>
              <a href="/resume.pdf" className="inline-flex items-center rounded-full border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-50">Download CV</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
