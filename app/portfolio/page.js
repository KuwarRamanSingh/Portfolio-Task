import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ProjectCard from "../components/ProjectCard"

export const metadata = {
  title: "Portfolio | Portfolio",
  description: "A selection of my recent projects and work samples.",
}

export default function Page() {
  const projects = [
    {
      title: "SMS Spam Classifier",
      description: "Detect and remove spams from your SMS",
      tags: ["Jyupter", "Python"],
      href: "https://github.com/KuwarRamanSingh/sms-spam-classifier-main",
    },
    {
      title: "Portfolio Starter",
      description: "Simple starter template focused on accessibility and performance.",
      tags: ["Accessibility", "Lighthouse", "SEO"],
      href: "https://example.com",
    },
    {
      title: "Employee-Management System",
      description: "Manage your Employee and grow your industry",
      tags: ["HTML", "CSS", "JS"],
      href: "https://example.com",
    },
    {
      title: "E‑Commerce Layout",
      description: "Product listing, detail page, and cart flow scaffolding.",
      tags: ["Components", "Routing", "State"],
      href: "https://example.com",
    },
    {
      title: "SaaS Marketing",
      description: "CTA‑focused layout with pricing and FAQ sections.",
      tags: ["Conversion", "Copy", "Layout"],
      href: "https://example.com",
    },
    {
      title: "UI Library",
      description: "Reusable cards, navbars, forms, and buttons collection.",
      tags: ["Design System", "Scale", "Consistency"],
      href: "https://example.com",
    },
  ]

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <header className="mb-8">
          <h1 className="text-3xl font-bold md:text-4xl">Portfolio</h1>
          <p className="mt-2 text-gray-700">A few projects I’ve worked on recently.</p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} imageAlt={`${p.title} cover`} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
