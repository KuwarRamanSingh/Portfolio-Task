import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ContactForm from "../components/ContactForm"

export const metadata = {
  title: "Contact | Portfolio",
  description: "Get in touch for collaborations and opportunities.",
}

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <header className="mb-8">
          <h1 className="text-3xl font-bold md:text-4xl">Contact</h1>
          <p className="mt-2 text-gray-700">Want to discuss a project or just say hi? Send a message.</p>
        </header>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <section>
            <h2 className="mb-4 text-lg font-semibold">Send a message</h2>
            <ContactForm />
          </section>

          <aside className="space-y-4">
            <h2 className="text-lg font-semibold">Contact details</h2>
            <div className="rounded-lg border border-gray-200 p-4">
              <p className="text-sm text-gray-700">
                Email:{" "}
                <a className="text-indigo-600 hover:text-indigo-700" href="mailto:singhkuwarraman@example.com">
                  singhkuwarraman.com
                </a>
              </p>
              <p className="mt-2 text-sm text-gray-700">Location: Prayagraj, India</p>
            </div>
            <div className="rounded-lg border border-gray-200 p-4">
              <p className="text-sm text-gray-700">
                Prefer social? Reach out on{" "}
                <a
                  className="text-indigo-600 hover:text-indigo-700"
                  href="https://www.linkedin.com/in/kuwar-raman-singh45ab32270"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>{" "}
                or{" "}
                <a
                  className="text-indigo-600 hover:text-indigo-700"
                  href="https://github.com/kuwarramansingh"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                .
              </p>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  )
}
