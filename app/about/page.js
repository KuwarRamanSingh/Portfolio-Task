import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export const metadata = {
  title: "About | Portfolio",
  description: "Learn more about my background and skills.",
}

export default function Page() {
  const skills = ["Next.js", "React", "Tailwind CSS", "Accessibility", "Performance"]

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900 ">
      <Navbar />
      <main className="mx-auto max-w-6xl flex-1 px-4 py-12 md:py-16">
        <header className="mb-8">
          <h1 className="text-3xl font-bold md:text-4xl">About Me</h1>
          <p className="mt-2 text-gray-700">
            Developer who cares about clean UI, maintainable code, and real‑world impact.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <section className="md:col-span-2 space-y-4">
            <p className="text-gray-700">
              I build websites and apps that are fast, accessible, and easy to use. Over the years, I've worked on
              dashboards, marketing pages, and component libraries.
            </p>
            <p className="text-gray-700">
              My process is simple: understand the goal, design for clarity, and ship with quality. I enjoy
              collaborating with teams and translating ideas into polished interfaces.
            </p>
          </section>

          <aside>
            <h2 className="mb-3 text-lg font-semibold">Skills</h2>
            <ul className="grid grid-cols-2 gap-2">
              {skills.map((s) => (
                <li key={s} className="rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-900">
                  {s}
                </li>
              ))}
            </ul>
          </aside>
          
        </div>
      </main>
      <Footer />
    </div>
  )
}
