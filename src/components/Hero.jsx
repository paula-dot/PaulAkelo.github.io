import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Hero({ onCTAClick }) {
  const navigate = useNavigate()

  function handleCTA() {
    if (typeof onCTAClick === 'function') {
      onCTAClick()
      return
    }
    navigate('/projects')
  }

  return (
    <section className="relative py-20 text-center">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
          I turn data and geography into insight.
        </h1>

        <p className="mt-4 text-lg text-slate-600">
          Computer science student • GIS & data visualization • AI/ML developer
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={handleCTA}
            className="inline-flex items-center gap-3 bg-sky-600 hover:bg-sky-700 text-white px-5 py-3 rounded-lg shadow"
          >
            Let’s Explore
          </button>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm text-slate-700 hover:underline"
          >
            Contact
          </a>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-sky-200/20 to-transparent"
      />
    </section>
  )
}