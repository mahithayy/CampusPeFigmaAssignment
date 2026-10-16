
import { useState } from 'react';
import Button from '../components/Button.jsx';

import iimBLogo from '../assets/logos/IIMB_Logo.svg';
import marketingGigLogo from '../assets/logos/MarketingGig_Logo.svg';

const filters = [
  'All',
  'Colleges',
  'Jobs',
  'Internships',
  'Freelance',
  'Part-time',
];

const opportunities = [
  {
    id: 1,
    title: 'IIM Bangalore',
    logo: iimBLogo,
    category: 'Colleges',
    badge: 'Top College',
    location: 'Bengaluru',
    mode: '',
    compensation: '₹3L+',
    description:
      "India's premier management institute with global exposure.",
  },
  {
    id: 2,
    title: 'Product Intern',
    category: 'Internships',
    badge: 'Internship',
    location: 'Bengaluru',
    mode: 'Hybrid',
    compensation: '₹35K/mo',
    description:
      'Work on real products, learn from top engineers and build your portfolio.',
  },
  {
    id: 3,
    title: 'Marketing Gig',
    logo: marketingGigLogo,
    category: 'Freelance',
    badge: 'Freelance',
    location: 'Remote',
    mode: 'Flexible',
    compensation: '₹10K',
    description:
      'Create content and help with social media campaigns for growing brands.',
  },
  {
    id: 4,
    title: 'Graduate Software Engineer',
    category: 'Jobs',
    badge: 'Full-time',
    location: 'Bengaluru',
    mode: 'Hybrid',
    compensation: '₹6L/yr',
    description:
      'Start your software engineering career in a collaborative product team.',
  },
  {
    id: 5,
    title: 'Part-time Campus Ambassador',
    category: 'Part-time',
    badge: 'Part-time',
    location: 'Remote',
    mode: 'Flexible',
    compensation: '₹8K/mo',
    description:
      'Connect students with opportunities and organise campus activities.',
  },
];

const steps = [
  {
    number: '01',
    title: 'Set your preferences',
    description:
      "Tell us what you're looking for, from colleges and courses to jobs, internships and gigs.",
    label: 'Smart Profile',
  },
  {
    number: '02',
    title: 'Discover relevant opportunities',
    description:
      'Explore colleges and career opportunities matched to your profile, interests and goals.',
    label: 'AI Ranked',
  },
  {
    number: '03',
    title: 'Get notified when something fits',
    description:
      'Get notified when a relevant college or new opportunity is found, so you can act early.',
    label: 'Instant Alerts',
  },
];

function OpportunityCard({ opportunity, onViewDetails }) {
  return (
    <article className="opportunity-card">
      <div className="opportunity-card-heading">
        {opportunity.logo ? (
          <img
            className="opportunity-logo"
            src={opportunity.logo}
            alt=""
            aria-hidden="true"
          />
        ) : (
          <div className="opportunity-avatar" aria-hidden="true">
            {opportunity.title.charAt(0)}
          </div>
        )}

        <div className="opportunity-title-group">
          <h4>{opportunity.title}</h4>
          <span className="opportunity-badge">{opportunity.badge}</span>
        </div>

        <Button
          variant="secondary"
          className="opportunity-view-button"
          onClick={() => onViewDetails(opportunity)}
        >
          View Details
        </Button>
      </div>

      <div className="opportunity-meta">
        <span>{opportunity.location}</span>
        {opportunity.mode && <span>{opportunity.mode}</span>}
        <strong>{opportunity.compensation}</strong>
      </div>

      <p>{opportunity.description}</p>
    </article>
  );
}

function OpportunityDashboard() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedOpportunity, setSelectedOpportunity] = useState(null);

  const filteredOpportunities =
    activeFilter === 'All'
      ? opportunities
      : opportunities.filter(
          (opportunity) => opportunity.category === activeFilter,
        );

  return (
    <div className="opportunity-dashboard">
      <div className="dashboard-topbar">
        <div>
          <span className="dashboard-eyebrow">
            CAMPUSPE OPPORTUNITY FEED
          </span>
          <h3>12 new matches today</h3>
          <p>Colleges &amp; opportunities matched to you</p>
        </div>

        <span className="dashboard-live-indicator">
          <span aria-hidden="true" />
          Updated daily
        </span>
      </div>

      <div
        className="opportunity-filters"
        role="group"
        aria-label="Filter opportunities by category"
      >
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            className={`opportunity-filter ${
              activeFilter === filter ? 'is-active' : ''
            }`}
            aria-pressed={activeFilter === filter}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="opportunity-list" aria-live="polite">
        {filteredOpportunities.length > 0 ? (
          filteredOpportunities.map((opportunity) => (
            <OpportunityCard
              key={opportunity.id}
              opportunity={opportunity}
              onViewDetails={setSelectedOpportunity}
            />
          ))
        ) : (
          <p className="opportunity-empty">
            No opportunities in this category yet.
          </p>
        )}
      </div>

      <div className="dashboard-footer">
        <span>Curated for you</span>
        <span aria-hidden="true">•</span>
        <span>{filteredOpportunities.length} shown</span>
      </div>

      {selectedOpportunity && (
        <div
          className="opportunity-modal-backdrop"
          onClick={() => setSelectedOpportunity(null)}
        >
          <section
            className="opportunity-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="opportunity-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="opportunity-modal-close"
              aria-label="Close details"
              onClick={() => setSelectedOpportunity(null)}
            >
              ×
            </button>

            <span className="opportunity-badge">
              {selectedOpportunity.badge}
            </span>

            <h3 id="opportunity-modal-title">
              {selectedOpportunity.title}
            </h3>

            <p>{selectedOpportunity.description}</p>

            <div className="opportunity-meta">
              <span>{selectedOpportunity.location}</span>
              {selectedOpportunity.mode && (
                <span>{selectedOpportunity.mode}</span>
              )}
              <strong>{selectedOpportunity.compensation}</strong>
            </div>

            <Button onClick={() => setSelectedOpportunity(null)}>
              Close Details
            </Button>
          </section>
        </div>
      )}
    </div>
  );
}

export default function OpportunitySection() {
  return (
    <section
      id="opportunities"
      className="opportunity-section section"
    >
      <div className="container">
        <div className="opportunity-layout">
          <div className="opportunity-copy">
            <span className="section-kicker">
              01 · OPPORTUNITY DISCOVERY
            </span>

            <h2>
              Stop searching.
              <br />
              <span>Start getting matched.</span>
            </h2>

            <p className="opportunity-intro">
              Tell CampusPe your skills, preferences and goals.
              We continuously monitor company career pages and job
              sources, find opportunities that match you, and notify
              you when they appear.
            </p>

            <div className="opportunity-steps">
              {steps.map((step) => (
                <article className="opportunity-step" key={step.number}>
                  <span className="opportunity-step-number">
                    {step.number}
                  </span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </article>
              ))}
            </div>

            <Button href="#resume">
              Explore Opportunities <span aria-hidden="true">→</span>
            </Button>
          </div>

          <OpportunityDashboard />
        </div>
      </div>
    </section>
  );
}
