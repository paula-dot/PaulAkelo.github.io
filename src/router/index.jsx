import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '../components/Layout'
import Home from '../pages/Home.jsx'
import AboutPage from '../pages/AboutPage.jsx'
import ProjectsPage from '../pages/ProjectsPage.jsx'
import Skills from '../pages/SkillsPage.jsx'
import Contact from '../pages/ContactPage.jsx'

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="projects" element={<ProjectsPage />} />
                    <Route path="skills" element={<Skills />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}