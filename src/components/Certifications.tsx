import { useState } from 'react';

export default function Certifications() {
    const [selectedImage, setSelectedImage] = useState<{ src: string, alt: string } | null>(null);

    const openLightbox = (src: string, alt: string) => {
        setSelectedImage({ src, alt });
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setSelectedImage(null);
        document.body.style.overflow = '';
    };

    return (
        <>
            <section id="certs" className="section certs full-screen">
                <div className="section-head">
                    <h2 className="section-title">My <span className="script">Certifications</span></h2>
                    <p className="muted">Browse my certificates and achievements.</p>
                </div>

                <div className="grid">
                    {/* Oracle HCM */}
                    <div className="tile" onClick={() => openLightbox('/HCMcert.jpg', 'Oracle Fusion Cloud HCM Foundations Associate')}>
                        <img src="/HCMcert.jpg" alt="Oracle HCM Foundations Certificate" />
                        <div className="tile-body">
                            <h3>Oracle Fusion Cloud HCM Foundations Associate</h3>
                            <p>Issued May 2025 · Oracle University</p>
                        </div>
                    </div>

                    {/* Oracle SCM */}
                    <div className="tile" onClick={() => openLightbox('/SCMcert.jpg', 'Oracle Fusion Cloud SCM Foundations Associate')}>
                        <img src="/SCMcert.jpg" alt="Oracle SCM Foundations Certificate" />
                        <div className="tile-body">
                            <h3>Oracle Fusion Cloud SCM Foundations Associate</h3>
                            <p>Issued May 2025 · Oracle University</p>
                        </div>
                    </div>

                    {/* Oracle ERP */}
                    <div className="tile" onClick={() => openLightbox('/ERPcert.jpg', 'Oracle ERP Foundations Certificate')}>
                        <img src="/ERPcert.jpg" alt="Oracle ERP Foundations Certificate" />
                        <div className="tile-body">
                            <h3>Oracle Fusion Cloud ERP Foundations Associate</h3>
                            <p>Issued May 2025 · Oracle University</p>
                        </div>
                    </div>

                    {/* Oracle CX */}
                    <div className="tile" onClick={() => openLightbox('/CXcert.jpg', 'Oracle CX Foundations Certificate')}>
                        <img src="/CXcert.jpg" alt="Oracle CX Foundations Certificate" />
                        <div className="tile-body">
                            <h3>Oracle Fusion Cloud CX Foundations Associate</h3>
                            <p>Issued May 2025 · Oracle University</p>
                        </div>
                    </div>

                    {/* Python Chatbot */}
                    <div className="tile" onClick={() => openLightbox('/PythonCert.jpg', 'Coursera Chatbot with Python Certificate')}>
                        <img src="/PythonCert.jpg" alt="Coursera Chatbot with Python Certificate" />
                        <div className="tile-body">
                            <h3>Customer Service with Python: Build a Chatbot using ChatGPT</h3>
                            <p>Issued Feb 2025 · Coursera Project Network</p>
                        </div>
                    </div>

                    {/* Storytelling */}
                    <div className="tile" onClick={() => openLightbox('/Storytelling.jpg', 'Coursera Data Storytelling Certificate')}>
                        <img src="/Storytelling.jpg" alt="Coursera Data Storytelling Certificate" />
                        <div className="tile-body">
                            <h3>Generative AI for Data Visualization and Storytelling</h3>
                            <p>Issued Feb 2025 · Coursera Instructor Network</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Lightbox */}
            <div
                id="certLightbox"
                className={`lightbox ${selectedImage ? 'is-open' : ''}`}
                role="dialog"
                aria-modal="true"
                aria-hidden={!selectedImage}
                onClick={(e) => { if (e.target === e.currentTarget) closeLightbox(); }}
            >
                <button className="lightbox-close" type="button" aria-label="Back" onClick={closeLightbox}>← Back</button>
                <img id="certLightboxImg" src={selectedImage?.src || ''} alt={selectedImage?.alt || ''} />
            </div>
        </>
    );
}
