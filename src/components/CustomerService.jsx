import React from 'react';
import ClinicLocator from './ClinicLocator';
import GlobalDistributors from './GlobalDistributors';

export default function CustomerService() {
    return (
        <div className="py-20 bg-white min-h-[50vh] flex flex-col items-center justify-center">
            <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                    客戶服務
                </div>
                <h2 className="text-3xl font-bold text-primary mb-4">客戶服務專區</h2>
                <p className="text-slate-600 max-w-2xl mx-auto px-4">
                    我們致力於提供最高品質的客戶支援。若您有任何疑問或需求，請隨時與我們聯繫。
                </p>
            </div>

            <ClinicLocator />
            <GlobalDistributors />
        </div>
    );
}
