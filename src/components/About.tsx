export default function About() {
    return (
        <section id="about" className="section about-dark full-screen">
            <div className="two-col about-columns">
                <div className="col about-copy">
                    <h2 className="section-title light">About <span className="script">Me</span></h2>
                    <p>
                        Hi! I’m <strong>Kanokkarn</strong> (bew) — a Computer Science student at Bangkok University.
                        I’m interested in working in the data field and my goal is to become a <em>Data Scientist</em>.
                    </p>
                    <p>
                        I enjoy learning how to analyze data, build models, and use coding to solve problems.
                        I’m still gaining experience, but I’m motivated to keep improving my skills and grow in this career path.
                    </p>
                </div>

                <aside className="col">
                    <div className="info-card" role="region" aria-labelledby="pi-title">
                        <h3 id="pi-title" className="panel-title">Personal <span className="script">Information</span></h3>
                        <dl className="info-list">
                            <div className="row"><dt>Name:</dt><dd>Kanokkarn Muangjun</dd></div>
                            <div className="row"><dt>Birthdate:</dt><dd>24 August 2003</dd></div>
                            <div className="row"><dt>Location:</dt><dd>Bangkok, Thailand</dd></div>
                            <div className="row"><dt>Hobbies:</dt><dd>Crochet</dd></div>
                        </dl>
                    </div>
                </aside>
            </div>
        </section>
    );
}
