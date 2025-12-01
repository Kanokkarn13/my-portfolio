import { Link } from 'react-router-dom';
import { PROJECTS } from '../data/projects';

export default function Projects() {
    return (
        <section id="projects" className="section projects full-screen">
            <div className="section-head">
                <h2 className="section-title">My <span className="script">Work</span></h2>
                <p className="muted">Click any project to view details.</p>
            </div>
            <div className="grid">
                {PROJECTS.map(project => (
                    <div className="tile" key={project.id}>
                        <img src={project.cover} alt={project.title} />
                        <div className="tile-body">
                            <h3>{project.title}</h3>
                            <p>{project.summary}</p>
                            <Link to={`/project/${project.id}`} className="btn small">Read More →</Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
