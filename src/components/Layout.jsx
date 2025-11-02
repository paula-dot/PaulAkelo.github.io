import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white text-gray-900">
            <header className="sticky top-0 bg-white/60 backdrop-blur z-30">
                <nav className="max-w-5xl mx-auto flex items-center justify-between p-4">
                    <Link to="/" className="text-xl font-semibold">Paul Akelo</Link>
                    <div className="flex space-x-4">
                        <Link to="/projects" className="text-sm">Projects</Link>
                        <Link to="/about" className="text-sm">About</Link>
                        <Link to="/contact" className="text-sm">Contact</Link>
                    </div>
                </nav>
            </header>


            <main className="max-w-5xl mx-auto p-6">
                <Outlet />
            </main>


            <footer className="mt-12 py-8 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} Paul Akelo — Built with React, Tailwind, Motion One
            </footer>
        </div>
    )
}