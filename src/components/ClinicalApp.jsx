import React from 'react';

export default function ClinicalApp() {
    return (
        <div className="py-20 bg-white min-h-[50vh] flex flex-col items-center justify-center text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
                臨床應用
            </div>
            <h2 className="text-3xl font-bold text-primary mb-4">臨床應用與價值</h2>
            <p className="text-slate-600 max-w-2xl">
                (內容建置中) 這裡將展示我們的技術如何應用於實際臨床場景，以及為病患與醫療機構帶來的具體價值。
            </p>
        </div>
    );
}
