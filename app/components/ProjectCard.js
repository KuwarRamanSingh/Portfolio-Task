import Link from "next/link"
import Image from 'next/image';

export default function ProjectCard({ title, description, tags = [], href, imageAlt }) {
  return (
    <article className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
      <div className="aspect-[16/10] w-full overflow-hidden bg-gray-100">
        <Image
  src="https://images.pexels.com/photos/3183188/pexels-photo-3183188.jpeg"
  alt={imageAlt || `${title} screenshot`}
  width={800} // Approx width (required)
  height={600} // Approx height (required)
  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
  unoptimized // Because it's an external URL
/>
      </div>
      <div className="space-y-3 p-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-700">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="rounded-full bg-amber-100 px-2.5 py-1 text-xs font-medium text-amber-800">
              {t}
            </span>
          ))}
        </div>
        {href && (
          <div>
            <Link
              href={href}
              className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-700"
            >
              View Project
              <svg className="ml-1 h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path stroke="currentColor" strokeWidth="2" d="M7 17L17 7M17 7H9M17 7V15" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </article>
  )
}
