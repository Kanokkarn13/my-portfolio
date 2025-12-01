import { useParams, Link } from 'react-router-dom';
import { PROJECTS } from '../data/projects';
import { useEffect } from 'react';
import CarbonProject from './CarbonProject';
import SavingsProject from './SavingsProject';

export default function ProjectDetail() {
    const { id } = useParams<{ id: string }>();
    const project = PROJECTS.find(p => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return (
            <div className="section full-screen" style={{ textAlign: 'center', paddingTop: '100px' }}>
                <h2>Project not found</h2>
                <Link to="/" className="btn primary">Back to Home</Link>
            </div>
        );
    }

    if (project.id === 'carbon-footprint-tracker') {
        return <CarbonProject project={project} />;
    }

    if (project.id === 'savings-account-opening-insights') {
        return <SavingsProject project={project} />;
    }

    return (
        <article className="section full-screen project-detail" style={{ fontFamily: "'Outfit', sans-serif", paddingBottom: '4rem' }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 1.5rem' }}>
                <header style={{ textAlign: 'center', margin: '4rem 0 3rem' }}>
                    <div className="eyebrow" style={{
                        fontSize: '1rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        color: '#666',
                        marginBottom: '1rem',
                        fontWeight: '600'
                    }}>
                        {project.year} • {project.role}
                    </div>
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        fontWeight: '800',
                        lineHeight: '1.1',
                        marginBottom: '1.5rem',
                        letterSpacing: '-0.03em'
                    }}>
                        {project.title}
                    </h1>
                    <div className="project-meta" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.5rem' }}>
                        {project.tags.map(tag => (
                            <span key={tag} style={{
                                background: '#f0f0f0',
                                padding: '0.4rem 1rem',
                                borderRadius: '50px',
                                fontSize: '0.9rem',
                                fontWeight: '500',
                                color: '#333'
                            }}>
                                {tag}
                            </span>
                        ))}
                    </div>
                </header>

                <figure className="project-cover" style={{ margin: '0 0 4rem' }}>
                    <img
                        src={project.cover}
                        alt={`${project.title} cover`}
                        style={{
                            width: '100%',
                            display: 'block',
                            maxHeight: '70vh',
                            objectFit: 'cover',
                            borderRadius: '24px',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                        }}
                    />
                </figure>

                <section className="prose" style={{
                    maxWidth: '800px',
                    margin: '0 auto',
                    fontSize: '1.15rem',
                    lineHeight: '1.8',
                    color: '#444'
                }}>
                    {project.body.map((par, i) => (
                        <p key={i} style={{ marginBottom: '1.5rem' }}>{par}</p>
                    ))}
                </section>

                <div className="link-row" style={{
                    maxWidth: '800px',
                    margin: '3rem auto 0',
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '1.5rem'
                }}>
                    {project.links.map(l => (
                        <a key={l.href} className="btn" target="_blank" rel="noopener noreferrer" href={l.href} style={{
                            background: '#111',
                            color: '#fff',
                            padding: '0.8rem 2rem',
                            borderRadius: '50px',
                            textDecoration: 'none',
                            fontWeight: '600'
                        }}>
                            {l.label}
                        </a>
                    ))}
                    <Link to="/#projects" style={{
                        background: 'transparent',
                        border: '2px solid #eee',
                        color: '#111',
                        padding: '0.8rem 2rem',
                        borderRadius: '50px',
                        textDecoration: 'none',
                        fontWeight: '600'
                    }}>
                        ← Back to Home
                    </Link>
                </div>
            </div>
        </article>
    );
}
