import React from 'react'
import { Contact } from '../components'

export default function ContactPage() {
    return (
        <section>
            <h1 className="text-3xl font-bold">Contact</h1>
            <p className="mt-2 text-gray-600">Let's connect — form below.</p>
            <div className="mt-6">
                <Contact />
            </div>
        </section>
    )
}