import React from 'react';

export default function ClinicalApp() {
    return (
        <div className="py-20 bg-white min-h-[50vh] flex flex-col items-center justify-center text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">看不見的危機：當前腎病管理的缺口與挑戰</h2>

            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    <div className="rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-[1.02] duration-300">
                        <img
                            src={`${import.meta.env.BASE_URL}images/kidney_stats_80.png`}
                            alt="80%的腎功能已喪失時，腎病患者才開始感到不適"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                    <div className="rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-[1.02] duration-300">
                        <img
                            src={`${import.meta.env.BASE_URL}images/kidney_stats_40.png`}
                            alt="40%的慢性腎臟病起因是2型糖尿病"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
