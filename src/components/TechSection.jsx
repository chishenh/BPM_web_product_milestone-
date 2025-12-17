import React from 'react';
import { Database, Cpu, Dna, Layers } from 'lucide-react';

const techs = [
    {
        icon: Dna,
        title: 'Gene Editing',
        desc: 'Proprietary CRISPR-Cas9 variants ensuring zero off-target effects.'
    },
    {
        icon: Database,
        title: 'Bio-Data Bank',
        desc: 'Training our manufacturing AI on the world’s largest genomic dataset.'
    },
    {
        icon: Cpu,
        title: 'In-Silico Modeling',
        desc: 'Simulating drug interactions in virtual environments to reduce failure rates.'
    },
    {
        icon: Layers,
        title: 'Smart Delivery',
        desc: 'Nanoparticle vectors designed for organ-specific targeting.'
    }
];

export default function TechSection() {
    return (
        <section id="technology" className="py-24 bg-surface relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-12 items-end mb-16">
                    <div className="md:w-1/2">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary">
                            Powered by <span className="text-secondary">BioCore™</span>
                        </h2>
                        <p className="text-slate-600 text-lg">
                            Our integrated platform accelerates the drug discovery process from years to months.
                        </p>
                    </div>
                    <div className="md:w-1/2 flex justify-end">
                        <button className="btn bg-primary text-white hover:bg-primary-light">Learn How It Works</button>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {techs.map((tech, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 hover:border-secondary hover:shadow-lg transition-all group">
                            <div className="mb-4 text-secondary group-hover:text-primary transition-colors">
                                <tech.icon size={32} />
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-primary">{tech.title}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                {tech.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
