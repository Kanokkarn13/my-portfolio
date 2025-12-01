import type { Project } from '../data/projects';
import { Link } from 'react-router-dom';
import { useState } from 'react';

interface Props {
    project: Project;
}

export default function CarbonProject({ project }: Props) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <article className="section" style={{ background: '#fff', color: '#333', padding: '0', display: 'block', minHeight: '100vh', fontFamily: "'Outfit', sans-serif" }}>
            {/* Hero Section */}
            <div style={{ textAlign: 'center', padding: '4rem 1rem 2rem' }}>
                <h1 style={{
                    fontSize: '3.5rem', // Large and bold
                    fontWeight: '800', // Extra bold for modern feel
                    marginBottom: '2rem',
                    color: '#000',
                    fontFamily: "'Outfit', sans-serif",
                    letterSpacing: '-0.03em'
                }}>
                    Carbon offset App
                </h1>
                <img
                    src="/carbon/hero.png"
                    alt="Carbon App Screens"
                    style={{ maxWidth: '100%', height: 'auto', maxHeight: '500px' }}
                />
            </div>

            {/* Project Overview */}
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '4rem',
                padding: '4rem 2rem',
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                <div style={{ flex: '1 1 300px', textAlign: 'center' }}>
                    <img
                        src="/carbon/overview.png"
                        alt="Project Overview"
                        style={{ maxWidth: '100%', height: 'auto', maxHeight: '500px' }}
                    />
                </div>
                <div style={{ flex: '1 1 300px' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#000', fontFamily: "'Outfit', sans-serif", fontWeight: '700', letterSpacing: '-0.02em' }}>Project Overview</h2>
                    <p style={{ lineHeight: '1.6', color: '#555', fontSize: '1.1rem' }}>
                        {project.summary}
                    </p>
                </div>
            </div>

            {/* My Role */}
            <div style={{
                display: 'flex',
                flexWrap: 'wrap-reverse',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '4rem',
                padding: '4rem 2rem',
                maxWidth: '1200px',
                margin: '0 auto',
                background: '#f9f9f9'
            }}>
                <div style={{ flex: '1 1 300px' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#000', fontFamily: "'Outfit', sans-serif", fontWeight: '700', letterSpacing: '-0.02em' }}>My Role</h2>
                    <div style={{ lineHeight: '1.6', color: '#555', fontSize: '1.1rem' }}>
                        {project.body.map((p, i) => (
                            <p key={i} style={{ marginBottom: '1rem' }}>{p}</p>
                        ))}
                    </div>
                </div>

                {/* Flip Card */}
                <div style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center', perspective: '1000px' }}>
                    <div
                        onClick={() => setIsFlipped(!isFlipped)}
                        style={{
                            position: 'relative',
                            width: '300px',
                            height: '500px',
                            cursor: 'pointer',
                            transformStyle: 'preserve-3d',
                            transition: 'transform 0.6s',
                            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
                        }}
                    >
                        {/* Front */}
                        <div style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            backfaceVisibility: 'hidden',
                            WebkitBackfaceVisibility: 'hidden',
                            borderRadius: '40px', // Phone-like rounded corners
                            overflow: 'hidden',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                            background: '#d9d9d9', // Phone body color
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '12px' // Bezel thickness
                        }}>
                            <img
                                src="/carbon/card-front.png"
                                alt="My Role Front"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    borderRadius: '30px', // Screen rounded corners
                                    background: '#fff'
                                }}
                            />
                        </div>

                        {/* Back */}
                        <div style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            backfaceVisibility: 'hidden',
                            WebkitBackfaceVisibility: 'hidden',
                            transform: 'rotateY(180deg)',
                            background: '#555555',
                            borderRadius: '20px',
                            overflow: 'hidden',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '1rem'
                        }}>
                            <img
                                src="/carbon/card-back.png"
                                alt="My Role Back Code"
                                style={{ width: '100%', height: 'auto', maxHeight: '100%', objectFit: 'contain' }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Hand Section (Optional / Extra) */}
            {/* Hand Section with Background Screenshots */}
            <div style={{ position: 'relative', overflow: 'hidden', padding: '4rem 0', background: '#ffffff' }}>
                {/* Scrolling Background */}
                <div style={{
                    display: 'flex',
                    gap: '2rem',
                    position: 'absolute',
                    top: '50%',
                    left: '0',
                    width: 'max-content',
                    animation: 'scroll 20s linear infinite',
                    zIndex: 0,
                    opacity: 0.8,
                    willChange: 'transform' // Hint for GPU acceleration
                }}>
                    {/* 3 Sets of images for seamless looping on wide screens */}
                    {[
                        1, 3, 4, 5, 6, 7,
                        1, 3, 4, 5, 6, 7,
                        1, 3, 4, 5, 6, 7
                    ].map((num, i) => (
                        <img
                            key={i}
                            src={`/carbon/screenshots/${num}.png`}
                            alt={`Screenshot ${num}`}
                            style={{
                                height: '400px',
                                width: 'auto',
                                borderRadius: '16px',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                            }}
                        />
                    ))}
                </div>

                {/* Hand Image Overlay */}
                <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <img
                        src="/carbon/hand.png"
                        alt="App in hand"
                        style={{ maxWidth: '100%', height: 'auto', maxHeight: '600px', filter: 'drop-shadow(0 20px 50px rgba(0,0,0,0.3))' }}
                    />
                </div>

                {/* CSS Animation for scrolling */}
                <style>{`
                    @keyframes scroll {
                        0% { transform: translate3d(0, -50%, 0); }
                        100% { transform: translate3d(-33.3333%, -50%, 0); }
                    }
                `}</style>
            </div>

            <div style={{ textAlign: 'center', padding: '2rem' }}>
                <Link to="/#projects" className="btn primary" style={{ display: 'inline-block' }}>← Back to Home</Link>
            </div>
        </article >
    );
}
