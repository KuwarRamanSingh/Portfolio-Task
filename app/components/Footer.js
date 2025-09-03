export default function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-center md:flex-row md:text-left">
        <p className="text-sm text-gray-700">© {new Date().getFullYear()} Kuwar Raman Singh. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/kuwarramansingh"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-gray-700 hover:text-gray-900"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/kuwar-raman-singh45ab32270"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-gray-700 hover:text-gray-900"
          >
            LinkedIn
          </a>
          <a href="singhkuwarraman.com" className="text-sm text-gray-700 hover:text-gray-900">
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
