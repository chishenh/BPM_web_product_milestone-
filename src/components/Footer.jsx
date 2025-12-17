import React from 'react';
import { Dna, Twitter, Linkedin, Facebook } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-primary text-white py-12 border-t border-primary-light">
            <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8">
                <div className="col-span-1 md:col-span-2">
                    <div className="flex items-center gap-2 mb-4 text-white">
                        <Dna size={24} className="text-secondary" />
                        <span className="text-xl font-bold">BioTech</span>
                    </div>
                    <p className="text-white/70 max-w-sm mb-6">
                        Pioneering the future of medicine through advanced genetic engineering and synthetic biology.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-secondary transition-colors"><Twitter size={20} /></a>
                        <a href="#" className="hover:text-secondary transition-colors"><Linkedin size={20} /></a>
                        <a href="#" className="hover:text-secondary transition-colors"><Facebook size={20} /></a>
                    </div>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-4">Company</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-accent transition-colors text-white/80">About Us</a></li>
                        <li><a href="#" className="hover:text-accent transition-colors text-white/80">Careers</a></li>
                        <li><a href="#" className="hover:text-accent transition-colors text-white/80">News & Press</a></li>
                        <li><a href="#" className="hover:text-accent transition-colors text-white/80">Contact</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-4">Science</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-accent transition-colors text-white/80">Technology Platform</a></li>
                        <li><a href="#" className="hover:text-accent transition-colors text-white/80">Pipeline</a></li>
                        <li><a href="#" className="hover:text-accent transition-colors text-white/80">Publications</a></li>
                        <li><a href="#" className="hover:text-accent transition-colors text-white/80">Clinical Trials</a></li>
                    </ul>
                </div>
            </div>
            <div className="container mx-auto px-6 mt-12 pt-8 border-t border-primary-light text-center text-sm text-white/50">
                &copy; {new Date().getFullYear()} BioTech Inc. All rights reserved.
            </div>
        </footer>
    );
}
