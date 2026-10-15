
import Button from '../components/Button.jsx';

const hiringSteps = [
  {
    number: '01',
    title: 'Post a role in minutes',
    description: 'Share the role and the skills you need.',
  },
  {
    number: '02',
    title: 'Receive a matched shortlist',
    description: 'Discover relevant candidates across campuses.',
  },
  {
    number: '03',
    title: 'Connect with candidates directly',
    description: 'Schedule interviews and start conversations.',
  },
  {
    number: '04',
    title: 'Reduce your time-to-hire',
    description: 'Move from sourcing to selection more efficiently.',
  },
];

const employerBenefits = [
  'Instant setup',
  '500+ Campus Network',
  'Zero CV Clutter',
  'Tier 1–Tier 3 Parity',
  'In-App Scheduling',
  '1-Click Video / Chat',
];

export default function EmployerSection() {
  return (
    <section
      id="employers"
      className="employer-section section"
      aria-labelledby="employer-heading"
    >
      <div className="container employer-layout">
        <div className="employer-copy">
          <span className="employer-eyebrow">
            03 <span /> FOR EMPLOYERS
          </span>

          <h2 id="employer-heading">
            Stop running campus drives.{' '}
            <span>Start hiring the right people.</span>
          </h2>

          <p className="employer-intro">
            Connect with relevant candidates across campuses,
            simplify your hiring workflow, and spend less time
            searching for the right fit.
          </p>

          <Button href="#support" className="employer-cta">
            Post a Job <span aria-hidden="true">→</span>
          </Button>

          <div className="employer-benefits">
            {employerBenefits.map((benefit) => (
              <span className="employer-benefit" key={benefit}>
                <span className="employer-benefit-check" aria-hidden="true">
                  ✓
                </span>
                {benefit}
              </span>
            ))}
          </div>
        </div>

        <div className="employer-visual">
          <div className="employer-workflow-card">
            <div className="employer-workflow-header">
              <div>
                <span className="employer-card-eyebrow">
                  CAMPUSPE FOR EMPLOYERS
                </span>
                <h3>Your next great hire starts here.</h3>
              </div>

              <div className="employer-header-icon" aria-hidden="true">
                ↗
              </div>
            </div>

            <div className="employer-steps">
              {hiringSteps.map((step, index) => (
                <div className="employer-step" key={step.number}>
                  <div className="employer-step-marker">
                    <span>{step.number}</span>
                    {index < hiringSteps.length - 1 && (
                      <span className="employer-step-connector" />
                    )}
                  </div>

                  <div className="employer-step-content">
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="employer-workflow-footer">
              <span className="employer-footer-dot" />
              One streamlined hiring journey
            </div>
          </div>

          <div className="employer-speed-card">
            <span className="employer-speed-icon" aria-hidden="true">
              ↗
            </span>
            <div>
              <strong>57% Faster Hiring</strong>
              <span>Designed to reduce hiring time</span>
            </div>
          </div>

          <div className="employer-time-card">
            <span>TIME TO HIRE</span>
            <strong>&lt;2 DAYS</strong>
            <span className="employer-time-caption">
              A more efficient process
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
