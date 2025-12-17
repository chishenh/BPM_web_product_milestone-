import React from 'react';
import { Target, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    {
        icon: Target,
        title: 'Precision Medicine',
        desc: 'Targeting disease at the molecular level with unprecedented accuracy.'
    },
    {
        icon: ShieldCheck,
        title: 'Safety First',
        desc: 'Rigorous validation and clinical testing to ensure patient well-being.'
    },
    {
        icon: Zap,
        title: 'Accelerated R&D',
        desc: 'Using AI-driven models to shorten the path from discovery to cure.'
    }
];

export default function AboutSection() {
    return (
        <section id="our-mission" className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                        Pioneering the Next Era of Health
                    </h2>
                    <p className="text-lg text-slate-600">
                        We combine biological ingenuity with technological power to create treatments that were once thought impossible.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-8 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all border border-slate-100 group"
                        >
                            <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary mb-6 group-hover:scale-110 transition-transform">
                                <feature.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
                            <p className="text-slate-600 leading-relaxed">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
