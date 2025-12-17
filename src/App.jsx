import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import ProductScience from './components/ProductScience';
import ClinicalApp from './components/ClinicalApp';
import PipelineSection from './components/PipelineSection';
import CustomerService from './components/CustomerService';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <div className="min-h-screen font-sans selection:bg-secondary/30">
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />

                        <Route path="/products" element={<ProductsPage />}>
                            <Route path="science" element={<ProductScience />} />
                            <Route path="clinical" element={<ClinicalApp />} />
                            <Route path="roadmap" element={<PipelineSection />} />
                            <Route path="service" element={<CustomerService />} />
                        </Route>
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
