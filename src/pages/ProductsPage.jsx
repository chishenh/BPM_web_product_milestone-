import React from 'react';
import { NavLink, Outlet, useLocation, Navigate } from 'react-router-dom';

export default function ProductsPage() {
    const location = useLocation();

    // Redirect to science if exactly /products
    if (location.pathname === '/products') {
        return <Navigate to="/products/science" replace />;
    }

    const tabs = [
        { name: '產品科學與實證', path: '/products/science' },
        { name: '臨床應用與價值', path: '/products/clinical' },
        { name: '技術發展藍圖', path: '/products/roadmap' },
        { name: '客戶服務專區', path: '/products/service' },
    ];

    return (
        <div className="pt-24 min-h-screen bg-slate-50">
            {/* Header */}
            <div className="bg-primary text-white py-16">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">產品與解決方案</h1>
                    <p className="text-xl text-primary-light/80 max-w-2xl mx-auto">
                        致力於開發創新診斷技術，為腎病管理帶來革命性的改變
                    </p>
                </div>
            </div>

            {/* Sticky Tabs Navigation */}
            <div className="bg-white shadow-sm sticky top-[72px] z-40 border-b border-gray-100">
                <div className="container mx-auto px-6">
                    <div className="flex flex-wrap justify-center md:justify-start gap-1 md:gap-8 overflow-x-auto no-scrollbar py-1">
                        {tabs.map((tab) => (
                            <NavLink
                                key={tab.path}
                                to={tab.path}
                                className={({ isActive }) =>
                                    `px-4 py-4 text-sm md:text-base font-bold whitespace-nowrap transition-all border-b-2 ${isActive
                                        ? 'text-secondary border-secondary'
                                        : 'text-slate-500 border-transparent hover:text-primary hover:border-slate-200'
                                    }`
                                }
                            >
                                {tab.name}
                            </NavLink>
                        ))}
                    </div>
                </div>
            </div>

            {/* Content Area */}
            <div className="min-h-[600px]">
                <Outlet />
            </div>
        </div>
    );
}
