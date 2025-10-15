import React from 'react'
import { motion } from 'motion@motionone/react'

const SKILLS = ['AI', 'GIS', 'Data Viz', 'Fullstack', 'Python', 'PostGIS']

export default function KeySkills() {
    return (
        <section className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {SKILLS.map((s, i) =>(
                <motion.div
                    key={s}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="p-3 bg-white rounded-lg shadow-sm text-center"
                >
                    <div className="font-semibold">{s}</div>
                </motion.div>
            ))}
        </section>
    )
}