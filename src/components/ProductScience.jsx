import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Droplet, Clock, Target } from 'lucide-react';
import GlobalMap from './GlobalMap';

export default function ProductScience() {
    const features = [
        {
            icon: ShieldCheck,
            title: "獨家專利技術",
            desc: "鎖定尿液中特定的轉譯後修飾蛋白，偵測傳統指標無法看見的微觀病變訊號"
        },
        {
            icon: Droplet,
            title: "非侵入式無痛檢測",
            desc: "僅需少量尿液樣本即可檢測，無輻射、無痛楚，輕鬆融入常規檢查流程"
        },
        {
            icon: Clock,
            title: "黃金期風險預測",
            desc: "在腎功能實質惡化前發出警訊，為醫病雙方爭取寶貴的早期干預窗口"
        },
        {
            icon: Target,
            title: "精準風險管理",
            desc: "協助醫師精準區分高風險與低風險族群，優化醫療資源配置與治療策略"
        }
    ];

    return (
        <div className="bg-surface">
            {/* Main Content Section */}
            <div className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        {/* Text Content */}
                        <motion.div
                            className="lg:w-1/2"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 leading-tight">
                                預見風險：DNlite開啟腎臟病變的<span className="text-accent">黃金干預窗口</span>
                            </h2>
                            <p className="text-lg text-slate-700 leading-relaxed mb-6">
                                從腎臟健康到發生臨床損傷是一個連續的過程。DNlite看見了早期的隱微變化，於不可逆的結構性損傷發生前，偵測到關鍵的訊號。
                            </p>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                這填補了早期篩檢的空白，為醫師與病患爭取到至關重要的「黃金干預窗口」，讓提早介入、延緩病程成為可能，而不再只是被動地等待傳統檢測指標(UACR 或eGFR)發出警報。
                            </p>
                        </motion.div>

                        {/* Image Content */}
                        <motion.div
                            className="lg:w-1/2"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="bg-surface p-4 rounded-3xl shadow-lg border border-slate-100">
                                <img
                                    src="/dnlite_chart.png"
                                    alt="DNlite Golden Intervention Window Chart"
                                    className="w-full h-auto rounded-xl"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Second Content Section: Mechanism */}
            <div className="py-16 md:py-24 bg-surface/50">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
                        {/* Text Content */}
                        <motion.div
                            className="lg:w-1/2"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 leading-tight">
                                DNlite：捕捉腎臟<br /><span className="text-accent">「功能初始異常」</span>的特異性訊號
                            </h2>
                            <p className="text-lg text-slate-700 leading-relaxed mb-6">
                                傳統指標測量的是腎臟「壞了多少」，而 DNlite測量的是腎臟「正在受傷」。
                            </p>
                            <p className="text-lg text-slate-700 leading-relaxed mb-6">
                                正常情況下，Futein-A是腎臟正常運作環境的一環。然而，一旦腎臟組織遭遇損傷刺激，細胞內的轉譯後修飾 (PTM) 機制便會發生改變，導致異常的 uPTM-FetA (DNlite) 產生並釋放至尿液中。
                            </p>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                這個異常產物的出現，標誌著腎臟細胞的正常機制已受到干擾。透過偵測這個關鍵訊號，能在實質結構損傷發生前，聽見腎臟發出的早期警報。
                            </p>
                        </motion.div>

                        {/* Image Content */}
                        <motion.div
                            className="lg:w-1/2"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="bg-white p-4 rounded-3xl shadow-lg border border-slate-100">
                                <img
                                    src="/dnlite_mechanism.png"
                                    alt="DNlite Mechanism: Normal vs Abnormal PTM"
                                    className="w-full h-auto rounded-xl"
                                />
                                <div className="flex justify-between mt-4 px-2 text-sm font-bold text-slate-500">
                                    <div className="text-center w-1/2 border-r border-slate-200">
                                        正常的腎臟環境狀態<br />
                                        <span className="text-primary text-xs">Normal Fetuin-A (正常PTM)</span>
                                    </div>
                                    <div className="text-center w-1/2">
                                        初始功能異常狀態<br />
                                        <span className="text-accent text-xs">uPTM-FetA (DNlite, 異常PTM)</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Feature Grid: Clinical Solutions */}
            <div className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">專為臨床需求打造的檢測方案</h2>
                        <div className="h-1 w-20 bg-accent mx-auto mt-6 rounded-full"></div>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="bg-surface p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-secondary/30 transition-all group h-full"
                            >
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:scale-110 shadow-sm border border-slate-100 transition-all duration-300">
                                    <feature.icon className="text-secondary group-hover:text-white transition-colors" size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-4">{feature.title}</h3>
                                <p className="text-slate-600 leading-relaxed text-sm">
                                    {feature.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Fourth Section: Clinical Evidence & Guidelines */}
            <div className="py-16 md:py-24 bg-surface/50">
                <div className="container mx-auto px-6">
                    {/* Section Title */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">從臨床實證到指引推薦：<br className="md:hidden" />備受醫界肯定的檢測新標準</h2>
                        <div className="h-1 w-24 bg-accent mx-auto mt-6 rounded-full"></div>
                    </div>


                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
                        {/* Evidence 1: Risk Differentiation */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200/60 flex flex-col h-full items-center text-center hover:shadow-md transition-all"
                        >
                            <h3 className="text-2xl font-bold text-primary mb-6">卓越的風險區分能力</h3>
                            <div className="relative mb-6 rounded-2xl overflow-hidden w-fit mx-auto">
                                <img
                                    src="/dnlite_risk_curve.png?v=2"
                                    alt="DNlite Risk Differentiation Curve"
                                    className="h-64 w-auto object-contain"
                                />
                            </div>
                            <p className="text-slate-700 leading-relaxed text-lg flex-grow">
                                臨床追蹤數據顯示，DNlite能顯著區分出腎功能惡化的高風險族群（深色線）。與低風險族群相比，其惡化速度與發生率具有顯著差異，驗證了其作為早期預測指標的可靠性。
                            </p>
                        </motion.div>

                        {/* Evidence 2: Blind Spots */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200/60 flex flex-col h-full items-center text-center hover:shadow-md transition-all"
                        >
                            <h3 className="text-2xl font-bold text-primary mb-6">填補傳統檢測的盲區</h3>
                            <div className="relative mb-6 rounded-2xl overflow-hidden w-fit mx-auto">
                                <img
                                    src="/dnlite_risk_pie.png?v=2"
                                    alt="DNlite Identifying Hidden Risks"
                                    className="h-64 w-auto object-contain"
                                />
                            </div>
                            <p className="text-slate-700 leading-relaxed text-lg flex-grow">
                                在UACR正常的糖尿病患者中，仍有高比例面臨腎功能下降的風險。DNlite 能精準揪出這群被傳統檢測『遺漏』的隱形高風險患者，實現真正的早期防禦。
                            </p>
                        </motion.div>
                    </div>

                    {/* Reference */}
                    <div className="text-sm text-slate-500 mb-16 text-center italic border-t border-slate-200 pt-4 max-w-4xl mx-auto">
                        參考資料: GT Chuang, et al. Am J Nephrol. 2024; 55 (1): 106–114. doi:10.1159/000534514
                    </div>

                    {/* Guideline Recommendation */}
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-secondary/20 relative overflow-hidden max-w-6xl mx-auto">
                        <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-secondary to-primary"></div>
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            <div className="w-16 h-16 md:w-20 md:h-20 bg-secondary/10 rounded-full flex flex-shrink-0 items-center justify-center text-secondary">
                                <ShieldCheck size={40} className="md:w-12 md:h-12" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-primary mb-4">榮獲權威指引推薦</h3>
                                <p className="text-lg text-slate-700 leading-relaxed">
                                    DNlite 正式被納入<span className="font-bold text-secondary">《台灣糖尿病腎臟疾病臨床照護指引》</span>，作為評估二型糖尿病患者腎功能惡化的指標。這標誌著 DNlite 的臨床價值已獲得腎臟科與新陳代謝科專家的雙重認可。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Fifth Section: Global Footprint */}
            <div className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">國際認證與全球足跡</h2>
                        <div className="h-1 w-20 bg-accent mx-auto mt-6 rounded-full"></div>
                    </div>

                    {/* 3 Key Points */}
                    <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="bg-surface p-8 rounded-2xl border border-slate-100 text-center hover:shadow-lg transition-shadow"
                        >
                            <h3 className="text-xl font-bold text-primary mb-4">全球突破</h3>
                            <p className="text-slate-600 leading-relaxed">
                                業界首款獲得歐盟 IVDR 認證的腎病檢測產品，設立最高法規標準。
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="bg-surface p-8 rounded-2xl border border-slate-100 text-center hover:shadow-lg transition-shadow"
                        >
                            <h3 className="text-xl font-bold text-primary mb-4">廣泛覆蓋</h3>
                            <p className="text-slate-600 leading-relaxed">
                                已在超過 41 個國家取得上市許可，網絡遍佈全球。
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-surface p-8 rounded-2xl border border-slate-100 text-center hover:shadow-lg transition-shadow"
                        >
                            <h3 className="text-xl font-bold text-primary mb-4">關鍵佈局</h3>
                            <p className="text-slate-600 leading-relaxed">
                                涵蓋歐盟全境，並成功深入糖尿病腎病變高風險區域，包括東南亞、中東及拉丁美洲主要國家。
                            </p>
                        </motion.div>
                    </div>

                    {/* Map Section */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="max-w-6xl mx-auto"
                    >
                        <GlobalMap />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
