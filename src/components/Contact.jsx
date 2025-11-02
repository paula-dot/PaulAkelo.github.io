import React, { useState } from 'react'

export default function Contact() {
    const [sent , setSent] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        setSent(true)
        setTimeout(() => setSent(false), 2000)
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto space-y-4"
        >
            <input className="w-full border rounded px-3 py-2" placeholder="Your name" required />
            <input className="w-full border rounded px-3 py-2" placeholder="Email" type="email" required />
            <textarea className="w-full border rounded px-3 py-2" rows="5" placeholder="Message" required />
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
                {sent ? 'Sent ✓' : 'Send message'}
            </button>
        </form>
    )
}
