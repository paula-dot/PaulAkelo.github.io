import React, { useState } from 'react'

function Footer() {
    const [copied, setCopied] = useState(false)
    const email = 'degrante77@gmail.com'

    async function copyEmail() {
        try {
            await navigator.clipboard.writeText(email)
            setCopied(true)
            setTimeout(() => setCopied(false), 1800)
        } catch {

        }
    }

    return (
        <footer className="mt-12 py-8 text-center text-sm text-gray-600">
            <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                    © {new Date().getFullYear()} Paul Akelo
                    <span className="hidden sm:inline"> — Built with React · Tailwind · Motion One</span>
                </div>

                <div className="flex items-center gap-4">
                    <a
                        href="https://github.com/paula-dot"
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-600 hover:text-gray-900"
                        aria-label="GitHub"
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                            <path d="M12 .5C5.73.5.86 5.36.86 11.64c0 4.8 3.11 8.87 7.44 10.31.54.1.74-.23.74-.51 0-.25-.01-.92-.01-1.8-3.02.66-3.66-1.47-3.66-1.47-.5-1.28-1.22-1.62-1.22-1.62-.99-.68.07-.67.07-.67 1.1.08 1.68 1.14 1.68 1.14.97 1.66 2.55 1.18 3.17.9.1-.7.38-1.18.69-1.45-2.41-.27-4.95-1.21-4.95-5.38 0-1.19.42-2.16 1.11-2.92-.11-.27-.48-1.37.11-2.86 0 0 .91-.29 2.98 1.11a10.3 10.3 0 0 1 2.71-.36c.92.01 1.85.12 2.71.36 2.07-1.4 2.98-1.11 2.98-1.11.59 1.49.22 2.59.11 2.86.69.76 1.11 1.73 1.11 2.92 0 4.18-2.54 5.11-4.96 5.38.39.34.74 1 .74 2.02 0 1.46-.01 2.64-.01 3 .01.28.2.62.75.51 4.33-1.45 7.44-5.52 7.44-10.31C23.14 5.36 18.27.5 12 .5z" />
                        </svg>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/paula-dot"
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-600 hover:text-gray-900"
                        aria-label="LinkedIn"
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                            <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.22 8.99H4.7V24H.22zM8.66 8.99h4.28v2.05h.06c.6-1.14 2.07-2.34 4.26-2.34 4.56 0 5.4 3 5.4 6.89V24h-4.47v-7.13c0-1.7-.03-3.9-2.38-3.9-2.38 0-2.75 1.86-2.75 3.78V24H8.66z" />
                        </svg>
                    </a>

                    <button
                        onClick={copyEmail}
                        className="px-3 py-1 rounded bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm"
                        aria-label="Copy email"
                    >
                        {copied ? 'Email copied ✓' : 'Copy email'}
                    </button>
                </div>
            </div>
        </footer>
    )
}

export default Footer

