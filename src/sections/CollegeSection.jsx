
import Button from '../components/Button.jsx';

const collegeSteps = [
  {
    number: '01',
    title: 'Build your college profile',
    description:
      'Showcase your institution, courses, facilities, and placement opportunities.',
  },
  {
    number: '02',
    title: 'Students discover and connect',
    description:
      'Help prospective students find your college and enquire directly.',
  },
  {
    number: '03',
    title: 'Recruiters discover your college',
    description:
      'Make your institution more visible to recruiters looking for talent.',
  },
  {
    number: '04',
    title: 'Track placements in real time',
    description:
      'Keep placement activity and outcomes visible in one place.',
  },
];

function CollegeFeature({ icon, title, description }) {
  return (
    <div className="college-feature">
      <span className="college-feature-icon" aria-hidden="true">
        {icon}
      </span>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function CollegeSection() {
  return (
    <section id="colleges" className="college-section section">
      <div className="container">
        <div className="college-layout">
          <div className="college-copy">
            <span className="section-kicker">
              02 · FOR COLLEGES
            </span>

            <h2>
              Get Discovered by Students and Recruiters.
            </h2>

            <p className="college-intro">
              Make your institution easier to discover. Connect
              with prospective students and recruiters, and bring
              your college's opportunities into focus.
            </p>

            <Button href="#support">
              List Your College <span aria-hidden="true">→</span>
            </Button>

            <div className="college-trust-badges">
              <span className="college-trust-badge">
                <strong>NAAC A++</strong>
                <span>Ready</span>
              </span>
              <span className="college-trust-badge">
                <strong>98%</strong>
                <span>Match</span>
              </span>
              <span className="college-trust-badge">
                <strong>500+</strong>
                <span>Hiring Partners</span>
              </span>
            </div>
          </div>

          <div className="college-workflow card">
            <div className="college-workflow-heading">
              <span className="college-workflow-icon" aria-hidden="true">
                ✦
              </span>
              <div>
                <span className="college-workflow-eyebrow">
                  YOUR CAMPUSPE JOURNEY
                </span>
                <h3>One platform. More connections.</h3>
              </div>
            </div>

            <div className="college-steps">
              {collegeSteps.map((step) => (
                <article className="college-step" key={step.number}>
                  <span className="college-step-number">
                    {step.number}
                  </span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="college-contact-card">
              <span className="college-contact-icon" aria-hidden="true">
                ↗
              </span>
              <div>
                <h3>Connect Directly</h3>
                <p>WhatsApp / chat · Avg response under 15 min</p>
              </div>
              <span className="college-live-dot" aria-hidden="true" />
            </div>

            <div className="college-placement-card">
              <div className="college-placement-heading">
                <span className="college-live-dot" aria-hidden="true" />
                <span>LIVE PLACEMENTS</span>
              </div>
              <div className="college-placement-stats">
                <span>Students</span>
                <span>Interviews</span>
                <span>Offers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
