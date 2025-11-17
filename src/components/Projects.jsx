import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Case Study A',
    desc: 'Designing a minimal landing experience with focus on speed and clarity.',
    tags: ['React', 'Tailwind', 'Vite'],
  },
  {
    title: 'Case Study B',
    desc: 'Optimizing a dashboard for accessibility and mobile performance.',
    tags: ['Next.js', 'A11y', 'Perf'],
  },
  {
    title: 'Case Study C',
    desc: 'Building a modular component system and design tokens.',
    tags: ['Design Systems', 'Storybook'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">Selected Projects</h2>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900">View all</a>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border bg-white p-6 hover:shadow-md transition-shadow"
            >
              <div className="aspect-[16/10] rounded-xl bg-gray-100" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
