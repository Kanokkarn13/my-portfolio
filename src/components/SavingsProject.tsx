import type { Project } from '../data/projects';
import { Link } from 'react-router-dom';

interface Props {
    project: Project;
}

export default function SavingsProject({ project }: Props) {
    return (
        <article className="section full-screen project-detail" style={{ fontFamily: "'Outfit', sans-serif", paddingBottom: '4rem' }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 1.5rem' }}>
                {/* Header */}
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

                {/* Hero Image */}
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

                {/* Introduction */}
                <section className="prose" style={{ maxWidth: '800px', margin: '0 auto 4rem', fontSize: '1.15rem', lineHeight: '1.8', color: '#444' }}>
                    <h3>Project Overview</h3>
                    <p>
                        In the competitive banking sector, identifying potential customers for savings accounts is crucial for targeted marketing.
                        This project aimed to build a robust classification pipeline to predict customer behavior, specifically whether a customer will open a savings account.
                    </p>
                    <p>
                        By leveraging machine learning techniques, we analyzed demographic and behavioral data to uncover key insights and build a predictive model.
                    </p>
                </section>

                {/* EDA Section */}
                <section style={{ marginBottom: '4rem' }}>
                    <h3 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '2rem' }}>Exploratory Data Analysis</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'center' }}>
                        <div>
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Data Distribution</h4>
                            <p style={{ lineHeight: '1.6', color: '#555' }}>
                                We started by examining the distribution of various features. The histograms reveal the spread of numerical variables,
                                helping us identify outliers and skewness in the data.
                            </p>
                        </div>
                        <img src="/Histogram.png" alt="Histogram of features" style={{ width: '100%', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }} />
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'center', marginTop: '3rem' }}>
                        <img src="/Countplot.png" alt="Countplot of categorical features" style={{ width: '100%', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }} />
                        <div>
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Categorical Insights</h4>
                            <p style={{ lineHeight: '1.6', color: '#555' }}>
                                Count plots provided insights into categorical variables like job type, marital status, and education.
                                Understanding these distributions was key to feature engineering.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Class Imbalance Section */}
                <section style={{ marginBottom: '4rem', background: '#f9f9f9', padding: '3rem', borderRadius: '24px' }}>
                    <h3 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '2rem' }}>Handling Class Imbalance</h3>
                    <p style={{ maxWidth: '700px', margin: '0 auto 2rem', textAlign: 'center', lineHeight: '1.6' }}>
                        A major challenge in this dataset was the severe class imbalance—far more customers declined than accepted.
                        Training on this raw data would lead to a biased model.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                        <div style={{ textAlign: 'center' }}>
                            <h4 style={{ marginBottom: '1rem', color: '#d9534f' }}>Before SMOTE</h4>
                            <img src="/before-SMOTE.png" alt="Class distribution before SMOTE" style={{ width: '100%', borderRadius: '12px' }} />
                            <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>Heavily skewed towards the negative class.</p>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <h4 style={{ marginBottom: '1rem', color: '#5cb85c' }}>After SMOTE</h4>
                            <img src="/after-SMOTE.png" alt="Class distribution after SMOTE" style={{ width: '100%', borderRadius: '12px' }} />
                            <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>Balanced classes using Synthetic Minority Over-sampling Technique.</p>
                        </div>
                    </div>
                </section>

                {/* Feature Importance */}
                <section style={{ marginBottom: '4rem' }}>
                    <h3 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '1rem' }}>What Drives the Decision?</h3>
                    <p style={{ maxWidth: '700px', margin: '0 auto 2rem', textAlign: 'center', lineHeight: '1.6' }}>
                        Using our best-performing model, we extracted feature importance scores to understand which factors most strongly influence a customer's decision.
                    </p>
                    <figure style={{ margin: '0 auto', maxWidth: '800px' }}>
                        <img src="/Feature-Importance.png" alt="Feature Importance Plot" style={{ width: '100%', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
                    </figure>
                </section>

                {/* Model Performance */}
                <section style={{ marginBottom: '4rem' }}>
                    <h3 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '2rem' }}>Model Performance</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'start' }}>
                        <div>
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', textAlign: 'center' }}>Model Comparison</h4>
                            <img src="/Model-Performance-Comparison.png" alt="Model Comparison Chart" style={{ width: '100%', borderRadius: '16px', marginBottom: '1rem' }} />
                            <p style={{ lineHeight: '1.6', color: '#555' }}>
                                We benchmarked several algorithms including Logistic Regression, Random Forest, and XGBoost.
                                XGBoost demonstrated the best balance of accuracy and recall.
                            </p>
                        </div>
                        <div>
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', textAlign: 'center' }}>Confusion Matrix</h4>
                            <img src="/Confusion-Matrix.png" alt="Confusion Matrix" style={{ width: '100%', borderRadius: '16px', marginBottom: '1rem' }} />
                            <p style={{ lineHeight: '1.6', color: '#555' }}>
                                The confusion matrix confirms our model's ability to correctly identify positive cases (True Positives)
                                while minimizing false alarms, a critical metric for campaign efficiency.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Links */}
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
