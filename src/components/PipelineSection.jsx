import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, FlaskConical, Globe2, ScrollText, Award, TrendingUp } from 'lucide-react';

const phases = [
    {
        id: 1,
        year: '2011~2017',
        title: '探索與轉譯',
        engTitle: 'Discovery & Translation',
        icon: FlaskConical,
        content: [
            { title: '獨家技術', desc: '利用先進蛋白組學技術，發現關鍵生物標記 uPTM-FetA。' },
            { title: '效用初證', desc: '提供歐洲藥廠百靈佳殷格翰全球臨床試驗檢測服務，初步證實臨床效用。' },
            { title: '專利佈局', desc: '全球技術專利佈局。' },
            { title: '原型開發', desc: '成功將創新發現轉化為具備臨床應用潛力的體外診斷試劑 (IVD)。' }
        ]
    },
    {
        id: 2,
        year: '2016-present',
        title: '臨床驗證',
        engTitle: 'Clinical Validation',
        icon: TrendingUp,
        content: [
            { title: '真實世界數據', desc: '執行多國臨床研究，累積超過 6,000 例受試者數據。' },
            { title: '跨國驗證', desc: '與國際頂尖醫學中心合作，證實 DNlite 在早期預測腎功能惡化的優越性。' },
            { title: '學術發表', desc: '研究成果發表於 AJN 等國際權威期刊，奠定堅實的學術基礎。' }
        ]
    },
    {
        id: 3,
        year: '2020-present',
        title: '法規認證',
        engTitle: 'Regulatory Approval',
        icon: Award,
        content: [
            { title: 'IVDR 首發', desc: '以最高品質標準通過歐盟 IVDR 認證，成為全球首項獲此殊榮的腎病檢測產品。' },
            { title: '全球取證', desc: '取得超過 41 國上市許可，版圖遍布東南亞、中東及拉丁美洲等 DKD 高盛行率地區。' },
            { title: '品質系統', desc: '建立符合 ISO 13485 標準及 IVDR/QMS 標準的量產體系，確保產品穩定供應。' }
        ]
    },
    {
        id: 4,
        year: '2023-present',
        title: '指引納入與臨床落地',
        engTitle: 'Guidelines & Adoption',
        icon: ScrollText,
        content: [
            { title: '里程碑成就', desc: '正式被納入《台灣糖尿病腎臟疾病臨床照護指引》，獲醫學會推薦作為風險評估工具。' },
            { title: '臨床標準', desc: '獲得臨床醫師廣泛採用，成為糖尿病患常規照護路徑的一環。' },
            { title: '推動保險給付', desc: '持續推動納入各國臨床指引與保險給付，建立全球照護新標準。' }
        ]
    },
    {
        id: 5,
        year: '2024~future',
        title: '未來展望',
        engTitle: 'The Next Horizon',
        icon: Globe2,
        content: [
            { title: '適應症拓展', desc: '拓展至非糖尿病 (Non-DM) 領域。' },
            { title: '國際接軌', desc: '推動納入國際指引。' },
            { title: '療效指標', desc: '建立成為療效指標。' },
            { title: '創新研發', desc: '開發不同疾病領域的創新生物標記，複製 DNlite 成功模式。' }
        ]
    }
];

export default function PipelineSection() {
    return (
        <section id="pipeline" className="bg-white relative overflow-hidden">
            {/* Background Decoration (Fixed) */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] left-[-5%] w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[80px]" />
                <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[80px]" />
            </div>

            {/* Header Section */}
            <div className="container mx-auto px-6 pt-24 pb-16 relative z-10">
                <div className="text-center max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
                        技術發展藍圖
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
                        驗證之路：從實驗室發現到臨床指引推薦
                    </h2>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        歷經十餘年嚴謹研發與跨國驗證<br />
                        建立腎病精準管理的黃金標準
                    </p>
                </div>
            </div>

            {/* Timeline Section */}
            <div className="relative w-full">
                {/* Continuous Vertical Line */}
                <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/10 via-secondary/30 to-primary/10 md:-translate-x-1/2 z-10" />

                {phases.map((phase, idx) => {
                    const isEven = idx % 2 === 0;
                    return (
                        <div key={phase.id} className={`w-full py-20 relative z-0 ${idx % 2 !== 0 ? 'bg-secondary/5' : 'bg-white'}`}>
                            <div className="container mx-auto px-6 relative z-20">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.6, delay: 0.1 }}
                                    className="flex flex-col md:flex-row gap-12 md:gap-0 relative items-center"
                                >
                                    {/* Timeline Node */}
                                    <div className="absolute left-[20px] md:left-1/2 top-1/2 md:top-1/2 -translate-y-1/2 w-20 h-20 -translate-x-1/2 flex items-center justify-center bg-white rounded-full border-[4px] border-accent shadow-[0_0_20px_rgba(255,102,0,0.4)] z-30">
                                        <phase.icon size={36} className="text-primary" />
                                    </div>

                                    {/* Left Side */}
                                    <div className="md:w-1/2 pl-24 md:pl-0 md:pr-16 text-right flex flex-col items-end justify-center h-full">
                                        {isEven ? (
                                            /* Phase 1, 3, 5: Title Left */
                                            <div className="w-full">
                                                <div className="flex items-center justify-end gap-4 mb-3">
                                                    <div className="hidden md:block flex-1 h-px bg-slate-300/50"></div>
                                                    <span className="text-accent font-black text-3xl tracking-tight">
                                                        {phase.year}
                                                    </span>
                                                </div>
                                                <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4 leading-tight">
                                                    {phase.title}
                                                </h3>
                                                <span className="block text-xl font-medium text-slate-400">
                                                    {phase.engTitle}
                                                </span>
                                            </div>
                                        ) : (
                                            /* Phase 2, 4: Content Left */
                                            <div className="w-full space-y-4">
                                                {phase.content.map((item, i) => (
                                                    <div key={i} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full relative overflow-hidden group/card text-right">
                                                        <div className="absolute top-0 right-0 w-1.5 h-full bg-gradient-to-b from-secondary to-primary opacity-0 group-hover/card:opacity-100 transition-opacity"></div>
                                                        <div className="font-bold text-primary text-lg mb-2 flex items-center justify-end gap-2">
                                                            {item.title}
                                                            <div className="w-2 h-2 rounded-full bg-secondary"></div>
                                                        </div>
                                                        <div className="text-slate-600 text-[15px] leading-relaxed pr-4 border-r border-slate-100">
                                                            {item.desc}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    {/* Right Side */}
                                    <div className="md:w-1/2 pl-24 md:pl-16 text-left flex flex-col items-start justify-center h-full">
                                        {isEven ? (
                                            /* Phase 1, 3, 5: Content Right */
                                            <div className="w-full space-y-4">
                                                {phase.content.map((item, i) => (
                                                    <div key={i} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full relative overflow-hidden group/card text-left">
                                                        <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-secondary to-primary opacity-0 group-hover/card:opacity-100 transition-opacity"></div>
                                                        <div className="font-bold text-primary text-lg mb-2 flex items-center gap-2">
                                                            <div className="w-2 h-2 rounded-full bg-secondary"></div>
                                                            {item.title}
                                                        </div>
                                                        <div className="text-slate-600 text-[15px] leading-relaxed pl-4 border-l border-slate-100">
                                                            {item.desc}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            /* Title Block on Right (Even Items 2,4) */
                                            <div className="w-full">
                                                <div className="flex items-center justify-start gap-4 mb-3">
                                                    <span className="text-accent font-black text-3xl tracking-tight">
                                                        {phase.year}
                                                    </span>
                                                    <div className="hidden md:block flex-1 h-px bg-slate-200"></div>
                                                </div>
                                                <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4 leading-tight">
                                                    {phase.title}
                                                </h3>
                                                <span className="block text-xl font-medium text-slate-400">
                                                    {phase.engTitle}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
