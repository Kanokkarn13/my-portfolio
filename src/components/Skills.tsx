export default function Skills() {
    return (
        <section id="skills" className="section skills full-screen">
            <div className="section-head">
                <h2 className="section-title">My <span className="script">Skills</span></h2>
                <p className="muted">Technical and soft skills I use.</p>
            </div>
            <div className="skills-wrap">
                <article className="skill-group">
                    <h3>Hard Skills</h3>
                    <div className="skill-tags">
                        <span className="tag">Analyze data</span>
                        <span className="tag">Develop and deploy ML models</span>
                        <span className="tag">Design databases</span>
                        <span className="tag">Program in Python & SQL</span>
                    </div>
                </article>
                <article className="skill-group">
                    <h3>Soft Skills</h3>
                    <div className="skill-tags">
                        <span className="tag">Collaborate in teams</span>
                        <span className="tag">Manage time effectively</span>
                        <span className="tag">Take responsibility</span>
                        <span className="tag">Work well under pressure</span>
                        <span className="tag">Solve problems</span>
                        <span className="tag">Apply critical thinking</span>
                    </div>
                </article>

                <article className="skill-group">
                    <h3>Software & Tools</h3>
                    <div className="tool-grid" aria-label="Software and tools">
                        <div className="tool-card">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/3/38/Jupyter_logo.svg" alt="Jupyter" />
                            <span>Jupyter</span>
                        </div>
                        <div className="tool-card">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Colaboratory_SVG_Logo.svg" alt="Google Colab" />
                            <span>Colab</span>
                        </div>
                        <div className="tool-card">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" alt="Power BI" />
                            <span>Power BI</span>
                        </div>

                        <div className="tool-card">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"
                                role="img" aria-label="Microsoft Excel"
                                style={{ height: 'var(--tool-ico)', width: 'auto' }}>
                                <title>Microsoft Excel</title>
                                <path fill="#169154" d="M29,6H15.744C14.781,6,14,6.781,14,7.744v7.259h15V6z"></path>
                                <path fill="#18482a" d="M14,33.054v7.202C14,41.219,14.781,42,15.743,42H29v-8.946H14z"></path>
                                <path fill="#0c8045" d="M14 15.003H29V24.005000000000003H14z"></path>
                                <path fill="#17472a" d="M14 24.005H29V33.055H14z"></path>
                                <g>
                                    <path fill="#29c27f" d="M42.256,6H29v9.003h15V7.744C44,6.781,43.219,6,42.256,6z"></path>
                                    <path fill="#27663f" d="M29,33.054V42h13.257C43.219,42,44,41.219,44,40.257v-7.202H29z"></path>
                                    <path fill="#19ac65" d="M29 15.003H44V24.005000000000003H29z"></path>
                                    <path fill="#129652" d="M29 24.005H44V33.055H29z"></path>
                                </g>
                                <path fill="#0c7238" d="M22.319,34H5.681C4.753,34,4,33.247,4,32.319V15.681C4,14.753,4.753,14,5.681,14h16.638 C23.247,14,24,14.753,24,15.681v16.638C24,33.247,23.247,34,22.319,34z"></path>
                                <path fill="#fff" d="M9.807 19L12.193 19 14.129 22.754 16.175 19 18.404 19 15.333 24 18.474 29 16.123 29 14.013 25.07 11.912 29 9.526 29 12.719 23.982z"></path>
                            </svg>
                            <span>Excel</span>
                        </div>

                        <div className="tool-card">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Database-mysql.svg" alt="MySQL" />
                            <span>MySQL</span>
                        </div>
                        <div className="tool-card">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/TensorFlow_logo.svg" alt="TensorFlow" />
                            <span>TensorFlow</span>
                        </div>
                        <div className="tool-card">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/1/10/PyTorch_logo_icon.svg" alt="PyTorch" />
                            <span>PyTorch</span>
                        </div>
                        <div className="tool-card">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg" alt="Git" />
                            <span>Git</span>
                        </div>
                        <div className="tool-card">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="Amazon Web Services" />
                            <span>AWS</span>
                        </div>
                    </div>
                </article>

                <article className="skill-group">
                    <h3>Languages</h3>
                    <div className="skill-tags">
                        <span className="tag">Thai (Native)</span>
                        <span className="tag">English (Intermediate)</span>
                        <span className="tag">Chinese (Basic)</span>
                    </div>
                </article>
            </div>
        </section>
    );
}
