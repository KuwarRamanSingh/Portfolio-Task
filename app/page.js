import Link from "next/link"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import ProjectCard from "./components/ProjectCard"

export const metadata = {
  title: "Home | Portfolio",
  description: "Personal portfolio showcasing projects and contact information.",
}

export default function Page() {
  const featured = [
    {
      title: "Password Manager app",
      description: "A clean storefront with product grid, filters, and cart flow.",
      tags: ["HTML", "CSS", "JavaScript"],
      href: "https://github.com/KuwarRamanSingh/Password-Manager.github.io",
    },
    {
      title: "Calculator",
      description: "Efficient Calculation Tool",
      tags: ["HTML", "CSS", "JavaScript"],
      href: "https://github.com/KuwarRamanSingh/Calculator-Task",
    },
    {
      title: "To do List",
      description: "Keep track of task for optimising performance",
      tags: ["HTML", "CSS", "JavaScript"],
      href: "https://github.com/KuwarRamanSingh/To-Do-List-",
    },
  ]

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />

      <main id="content" className="mx-auto max-w-6xl px-4">
        <section className="flex flex-col items-start gap-6 py-16 md:py-20">
          <p className="text-sm font-medium text-indigo-600">Available for freelance</p>
          <h1 className="max-w-3xl text-pretty text-4xl font-bold leading-tight md:text-5xl">
            Hi, I&apos;m Kuwar Raman Singh. I design and build clean, responsive web experiences.
          </h1>
          <p className="max-w-2xl text-lg text-gray-700">
            Front-end developer focused on quality UI, performance, and accessibility. Check out my work and let&apos;s
            collaborate.
          </p>
          <div className="flex items-center gap-3">
            <Link
              href="/portfolio"
              className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
            >
              See Portfolio
            </Link>
            <Link
              href="/contact"
              className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50"
            >
              Contact Me
            </Link>
          </div>
        </section>

        <section className="py-10">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Featured Projects</h2>
            <Link href="/portfolio" className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
              View all
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {featured.map((p) => (
              <ProjectCard key={p.title} {...p} imageAlt={`${p.title} preview`} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
