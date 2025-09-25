import React from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import EnquiryForm from './components/EnquiryForm';
import AboutUs from './components/AboutUs';
import BrandMarquee from './components/BrandMarquee';
import CompanyDetails from './components/CompanyDetails';
import products from './data/products';
export default function App() {
    return (
        <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
            <video
                autoPlay
                loop
                muted
                playsInline
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    objectFit: 'cover',
                    zIndex: 0,
                    opacity: 0.5,
                    pointerEvents: 'none',
                }}
            >
                <source src="/video/background animation video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div style={{ position: 'relative', zIndex: 1 }}>
                <Navbar />
                <header className="hero" style={{position:'relative',overflow:'hidden'}}>
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            zIndex: 0,
                            opacity: 0.7,
                            pointerEvents: 'none',
                        }}
                    >
                        <source src="/video/background animation video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="hero-inner" style={{position:'relative',zIndex:1}}>
                        <h1>MarvelTech — CNC Spare Parts & Services</h1>
                        <p><strong>Your Mission Our Vision </strong></p>
                        <p>Premium CNC Spare Parts, repair & retrofitting services at Coimbatore.</p>
                        <p>We are committed to providing high-quality products and exceptional customer service.</p>
                    </div>
                </header>
                <AboutUs />
                <BrandMarquee />
                <main className="container">
                    <ProductList products={products} />
                    <EnquiryForm />
                </main>
                <CompanyDetails />
                <footer className="site-footer">• © 2025 MarvelTech •</footer>
            </div>
        </div>
    );
}