import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const links = [
        { to: '/', label: 'Home' },
        { to: '/projects', label: 'Projects' },
        { to: '/about', label: 'About' },
        { to: '/skills', label: 'Skills' },
        { to: '/contact', label: 'Contact' },
    ]

    return (
        <nav className="flex items-center justify-between py-3">
            <div className="flex items-center gap-4">
                <NavLink to="/" className="text-xl font-semibold">
                    Paul Akelo
                </NavLink>
                <span className="hidden sm:inline text-sm text-gray-500">Data \& Geo · AI/ML</span>
            </div>

            <button
                aria-label="Toggle menu"
                onClick={() => setOpen((v) => !v)}
                className="sm:hidden p-2 rounded-md hover:bg-gray-100"
            >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>

            <div
                className={`flex-col sm:flex-row sm:flex sm:items-center sm:gap-6 absolute top-full left-0 right-0 bg-white sm:bg-transparent sm:static z-40 transition-transform transform origin-top ${
                    open ? 'translate-y-0' : '-translate-y-4 sm:translate-y-0'
                } sm:translate-y-0 sm:opacity-100 shadow-sm sm:shadow-none`}
            >
                <div className="flex flex-col sm:flex-row sm:items-center w-full sm:w-auto px-4 py-4 sm:p-0">
                    {links.map((l) => (
                        <NavLink
                            key={l.to}
                            to={l.to}
                            onClick={() => setOpen(false)}
                            className={({ isActive }) =>
                                `px-2 py-2 rounded-sm text-sm sm:text-base ${
                                    isActive ? 'text-sky-600 font-medium' : 'text-gray-700 hover:text-sky-600'
                                }`
                            }
                        >
                            {l.label}
                        </NavLink>
                    ))}
                </div>
            </div>
        </nav>
    )
}