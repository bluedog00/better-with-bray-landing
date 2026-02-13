import React from 'react';

function App() {
  return (
    <>
      <header>
        <nav className="container">
          <img src="/images/logo.png" alt="Better With Bray" className="logo" />
          <a href="#contact" className="nav-cta">Schedule a Strategy Call</a>
        </nav>
      </header>

      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>
                Helping Insurance Agency Owners Build <span className="accent">Profitable, Process-Driven Agencies</span> That Scale.
              </h1>
              <p className="subheadline">
                I partner with growth-minded agency owners to improve retention, increase profitability, and build documented systems that create freedom—not chaos.
              </p>
              <a href="#contact" className="hero-cta">Schedule a Strategy Call</a>
            </div>
            <div className="hero-image">
              <img src="/images/lori-headshot.jpg" alt="Lori Bray" />
            </div>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="container">
          <div className="section-header">
            <h2>Built From the Inside. Designed to Scale.</h2>
          </div>
          <div className="about-content">
            <p>
              I'm Lori Bray—agency owner, operator, and founder of Better With Bray. After building and scaling a multi-million dollar Allstate agency in Georgia, I learned firsthand that revenue alone doesn't create freedom. Systems do. Leadership does. Discipline does.
            </p>
            <p>
              Over the years, I built documented SOPs, compensation structures, performance scorecards, retention processes, onboarding systems, and financial dashboards that allowed my agency to grow profitably and operate with clarity. I didn't just sell insurance—I built a business that could run on structure, accountability, and measurable results.
            </p>
            <p>
              I started Better With Bray because I saw too many talented agency owners stuck in daily chaos—strong at sales but overwhelmed operationally. My mission is simple: help agency owners move from reactive to strategic. From busy to scalable. From stressed to structured.
            </p>
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="container">
          <div className="section-header">
            <h2>How I Help Agency Owners Win</h2>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <h3>Retention & Profitability Consulting</h3>
              <p>
                A deep dive into your agency's retention strategy, service workflows, call handling, documentation standards, and cancellation processes. We identify process gaps, coach leadership, and implement a 90-day roadmap designed to stop the bleed and increase long-term profitability.
              </p>
            </div>
            <div className="service-card">
              <h3>SOP & Trainual Implementation</h3>
              <p>
                Done-with-you or guided implementation of fully documented Standard Operating Procedures using Trainual. Includes onboarding systems, sales talk paths, compliance checklists, billing workflows, performance expectations, and role clarity—so your agency operates consistently and predictably.
              </p>
            </div>
            <div className="service-card">
              <h3>Financial & KPI Strategy</h3>
              <p>
                We build clarity around what actually matters—cost per item, ROI by lead source, payroll percentage, retention rate, new business targets, and expense control. I help owners shift from "What's in my bank account?" to disciplined financial leadership.
              </p>
            </div>
            <div className="service-card">
              <h3>Leadership & Sales Team Development</h3>
              <p>
                Coaching for agency leaders and sales managers focused on performance standards, compensation clarity, accountability rhythms, and measurable production goals. We create structure that supports high performers—and corrects underperformance quickly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits" id="benefits">
        <div className="container">
          <div className="section-header">
            <h2>The Bray Advantage</h2>
          </div>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">💼</div>
              <h3>Operator, Not Theorist</h3>
              <p>
                I've built and managed a high-producing agency myself. My strategies come from real-world application—not corporate theory.
              </p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">📊</div>
              <h3>Process-Driven & Metrics-Focused</h3>
              <p>
                Everything we implement ties back to measurable KPIs. If it can't be tracked, it can't be improved.
              </p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">💬</div>
              <h3>Direct, Honest Guidance</h3>
              <p>
                I will tell you the truth. Growth requires clarity, and clarity sometimes requires uncomfortable conversations. My goal isn't to impress you—it's to strengthen your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="container">
          <div className="section-header">
            <h2>Ready to Strengthen Your Agency?</h2>
          </div>
          <div className="contact-content">
            <p>
              If you're serious about improving retention, increasing profitability, and building systems that support growth, let's talk. I'll help you identify what's holding your agency back—and build a clear plan forward.
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <span className="label">Email</span>
                <span className="value">
                  <a href="mailto:loribray1971@gmail.com">loribray1971@gmail.com</a>
                </span>
              </div>
              <div className="contact-item">
                <span className="label">Phone</span>
                <span className="value">
                  <a href="tel:770-316-0318">770-316-0318</a>
                </span>
              </div>
              <div className="contact-item">
                <span className="label">Location</span>
                <span className="value">Georgia (Serving nationwide)</span>
              </div>
            </div>
            <a href="https://calendly.com/loribray" className="contact-cta" target="_blank" rel="noopener noreferrer">
              Book Your Strategy Call
            </a>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/loribray/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/loribray2020/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Better With Bray Consulting. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;