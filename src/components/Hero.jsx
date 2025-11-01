import React from 'react'
import { motion } from 'motion@motionone/react'

export default function Hero({ onCTAClick }) {
    return (
        <section className="py-20 text-center">
            <motion.h1
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-5xl font-extrabold"
            >
                I turn data and geography into insight.
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-4 text-lg text-gray-600"
            >
                Computer science student • GIS & data visualization • AI/ML developer
            </motion.p>

            <motion.button
                onClick={onCTAClick}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 inline-flex items-center gap-3 bg-blue-600 text-white px-5 py-3 rounded-lg shadow"
            >
                Let's Explore
            </motion.button>
        </section>
    )
}