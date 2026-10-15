
import Button from '../components/Button.jsx';

const audiences = [
  {
    id: 'colleges',
    status: 'Coming Soon',
    title: 'College',
    description:
      'Explore colleges, courses, fees, placements & more.',
    benefits: [
      'Search by course, location, fees',
      'Connect directly with colleges',
      'Improve student placements',
    ],
    action: 'Join Waitlist',
    href: '#colleges',
  },
  {
    id: 'opportunities',
    status: 'Available Now',
    title: "I'm Looking for a Job",
    description: "Upload your resume. We'll find jobs that fit you.",
    benefits: [
      'Jobs from 1000+ sources',
      'AI-powered matching',
      'WhatsApp & email alerts',
    ],
    action: 'Explore Jobs',
    href: '#opportunities',
    featured: true,
  },
  {
    id: 'employers',
    status: 'Coming Soon',
    title: "I'm Hiring",
    description:
      "We'll find candidates — from students to graduates.",
    benefits: [
      'Connect directly with colleges',
      'Find the right candidates',
      'Simplify your hiring',
    ],
    action: 'Join Waitlist',
    href: '#employers',
  },
];

const stats = [
  { value: '800+', label: 'Students' },
  { value: '130+', label: 'Colleges' },
  { value: '100+', label: 'Jobs & Internships' },
  { value: '100%', label: 'Safe & Trusted' },
];

function AudienceCard({ audience }) {
  return (
    <article
      className={`audience-card card interactive-card ${
        audience.featured ? 'audience-card-featured' : ''
      }`}
    >
      <div className="audience-card-top">
        <span className="audience-status">
          {audience.status}
        </span>
      </div>

      <h3>{audience.title}</h3>
      <p className="audience-description">
        {audience.description}
      </p>

      <ul className="audience-benefits">
        {audience.benefits.map((benefit) => (
          <li key={benefit}>
            <span aria-hidden="true">✓</span>
            {benefit}
          </li>
        ))}
      </ul>

      <Button
        href={audience.href}
        variant={audience.featured ? 'primary' : 'secondary'}
        className="audience-action"
      >
        {audience.action}
      </Button>
    </article>
  );
}

function FloatingNotice({ className, children }) {
  return (
    <div className={`floating-notice ${className}`}>
      {children}
    </div>
  );
}

export default function HeroSection() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-background-glow" aria-hidden="true" />

      <div className="container hero-container">
        <div className="hero-intro">
          <span className="hero-eyebrow">
            Your campus-to-career ecosystem
          </span>

          <h1>
            Connect <span>10X Faster.</span>
          </h1>

          <p className="hero-subtitle">
            One platform connecting students, colleges &amp;
            employers — faster.
          </p>

          <a className="hero-search-prompt" href="#opportunities">
            <span aria-hidden="true">⌕</span>
            <span>What are you looking for?</span>
            <span className="search-arrow" aria-hidden="true">
              →
            </span>
          </a>
        </div>

        <FloatingNotice className="notice-whatsapp">
          <span className="notice-icon" aria-hidden="true">✦</span>
          <div>
            <strong>WhatsApp Alert</strong>
            <p>Get notified on WhatsApp</p>
          </div>
        </FloatingNotice>

        <FloatingNotice className="notice-resume">
          <span className="notice-icon" aria-hidden="true">↗</span>
          <div>
            <strong>AI-Powered Campus Assistant</strong>
            <p>Build your resume</p>
          </div>
        </FloatingNotice>

        <FloatingNotice className="notice-matches">
          <strong>🔥 142 students matched today</strong>
          <p>Just now · IIT, BITS, VIT</p>
        </FloatingNotice>

        <FloatingNotice className="notice-recruiter">
          <strong>Radiant Info shortlisted 8 interns</strong>
          <p>✓ Verified recruiter · 2 days ago</p>
        </FloatingNotice>

        <div className="audience-grid">
          {audiences.map((audience) => (
            <AudienceCard
              key={audience.id}
              audience={audience}
            />
          ))}
        </div>

        <div className="hero-stats">
          {stats.map((stat) => (
            <div className="hero-stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
