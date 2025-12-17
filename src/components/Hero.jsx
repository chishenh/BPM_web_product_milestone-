import React from 'react';
import { ArrowRight, Activity, Microscope, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary-light to-secondary-dark pt-20">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0 opacity-30">
                <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-secondary/30 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-primary-light/40 rounded-full blur-[120px]" />
            </div>

            {/* Pattern Overlay */}
            <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <div className="text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium mb-8 backdrop-blur-sm">
                            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                            Leading the way in Biotechnology
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
                            Innovating for a <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-light to-white">Healthier Tomorrow</span>
                        </h1>

                        <p className="text-lg text-slate-200 mb-10 max-w-lg leading-relaxed font-light">
                            Pioneering new standards in drug delivery and therapeutic development to improve patient lives globally.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <button className="px-8 py-4 rounded-md bg-accent text-white font-semibold hover:bg-accent-hover transition-all shadow-lg hover:shadow-accent/20">
                                Discover Our Platform
                            </button>
                            <button className="px-8 py-4 rounded-md bg-white/10 text-white font-semibold hover:bg-white/20 border border-white/20 backdrop-blur-sm transition-all flex items-center gap-2">
                                View Pipeline <ArrowRight size={18} />
                            </button>
                        </div>
                    </motion.div>
                </div>

                <div className="relative hidden md:block">
                    {/* Abstract tech visualization */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative z-10"
                    >
                        <div className="relative w-full aspect-square max-w-md mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-tr from-secondary to-primary rounded-2xl rotate-6 blur-2xl opacity-40"></div>
                            <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
                                <div className="grid grid-cols-2 gap-6 h-full">
                                    <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-6 flex flex-col justify-between border border-white/10 hover:border-secondary/50 transition-colors">
                                        <Activity className="text-secondary" size={40} />
                                        <div>
                                            <div className="text-3xl font-bold text-white mb-1">98%</div>
                                            <div className="text-sm text-slate-300">Efficacy Rate</div>
                                        </div>
                                    </div>
                                    <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-6 flex flex-col justify-between border border-white/10 hover:border-secondary/50 transition-colors">
                                        <Microscope className="text-accent" size={40} />
                                        <div>
                                            <div className="text-3xl font-bold text-white mb-1">20+</div>
                                            <div className="text-sm text-slate-300">Active Trials</div>
                                        </div>
                                    </div>
                                    <div className="col-span-2 bg-gradient-to-r from-primary-light/50 to-primary/50 rounded-xl p-6 flex items-center justify-between border border-white/10">
                                        <div>
                                            <div className="text-base text-white font-medium mb-1">Global Reach</div>
                                            <div className="text-sm text-slate-300">Partnered with top institutions</div>
                                        </div>
                                        <Globe className="text-secondary-light" size={48} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
                    <div className="w-1 h-3 bg-white/50 rounded-full"></div>
                </div>
            </div>
        </section>
    );
}
