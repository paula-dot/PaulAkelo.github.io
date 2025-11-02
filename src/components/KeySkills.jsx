import React from 'react'

const SKILLS = ['AI', 'GIS', 'Data Viz', 'Fullstack', 'Python', 'PostGIS']

export default function KeySkills() {
    return (
        <section className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {SKILLS.map((s) =>(
                <div
                    key={s}
                    className="p-3 bg-white rounded-lg shadow-sm text-center"
                >
                    <div className="font-semibold">{s}</div>
                </div>
            ))}
        </section>
    )
}