
import Button from '../components/Button.jsx';

const collegeFeatures = [
  {
    number: '01',
    eyebrow: 'VERIFIED PROFILE',
    title: 'Build your college profile',
    description:
      'Showcase your college, courses, fees, campus, placements and achievements in one structured profile that students and recruiters can discover.',
    badges: [
      { label: '♧  NAAC A++ Ready', style: 'green' },
      { label: '98% Match', style: 'blue' },
    ],
  },
  {
    number: '02',
    eyebrow: 'DIRECT ENROLL',
    title: 'Students discover and connect',
    description:
      'Students searching for colleges can discover your profile, explore your courses and fees, and connect directly with your admission team.',
    badges: [
      { label: '▤  Direct Enquiries', style: 'blue' },
      { label: '●  WHATSAPP / CHAT', style: 'neutral' },
      { label: 'Avg. response: <15 min', style: 'plain' },
    ],
  },
  {
    number: '03',
    eyebrow: 'CAMPUS RECRUITING',
    title: 'Recruiters discover your College',
    description:
      'Companies hiring fresh talent can discover your college, explore your talent and connect with your placement team.',
    badges: [
      { label: '▦  500+ Hiring Partners', style: 'purple' },
      { label: '⚖  Connect Directly', style: 'indigo' },
    ],
  },
  {
    number: '04',
    eyebrow: 'LIVE HUD',
    title: 'Track placements in real time',
    description:
      'Track placement activity and keep students, interviews and offers visible in one central place.',
    badges: [
      { label: '●  LIVE PLACEMENTS', style: 'red' },
      { label: 'Students · Interviews · Offers', style: 'solid-blue' },
    ],
  },
];

function CollegeFeatureCard({ feature }) {
  return (
    <article className="college-feature-card">
      <div className="college-feature-content">
        <div className="college-feature-eyebrow">
          <span className="college-feature-number">
            {feature.number}
          </span>
          <span>{feature.eyebrow}</span>
        </div>

        <h3>{feature.title}</h3>
        <p>{feature.description}</p>
      </div>

      <div className="college-feature-badges">
        {feature.badges.map((badge) => (
          <span
            key={badge.label}
            className={`college-feature-badge badge-${badge.style}`}
          >
            {badge.label}
          </span>
        ))}
      </div>
    </article>
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

            <h2>Get Discovered by Students and Recruiters.</h2>

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

          <div className="college-feature-list">
            {collegeFeatures.map((feature) => (
              <CollegeFeatureCard
                key={feature.number}
                feature={feature}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
