import React from 'react';
import { Hero, KeySkills } from '../components';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();
    function goToProjects() {
        navigate('/projects');
    }

    return (
        <div>
            <Hero onCTAClick={goToProjects} />
            <KeySkills />
            <section className="mt-16">
                <h2 className="text-2xl font-semibold">Featured</h2>
                <p className="mt-2 text-gray-600">A preview of highlighted work — expand into cards and motion grid.</p>
            </section>
        </div>
    )
}