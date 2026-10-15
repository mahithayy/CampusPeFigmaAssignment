
import Button from '../components/Button.jsx';

const actions = [
  {
    label: 'Explore Colleges',
    href: '#colleges',
    variant: 'secondary',
  },
  {
    label: 'Find Opportunities',
    href: '#opportunities',
    variant: 'primary',
  },
  {
    label: 'List Your College',
    href: '#support',
    variant: 'secondary',
  },
  {
    label: 'Post a Job',
    href: '#support',
    variant: 'primary',
  },
];

export default function FinalCTASection() {
  return (
    <section
      className="final-cta-section section"
      aria-labelledby="final-cta-heading"
    >
      <div className="container">
        <div className="final-cta-panel">
          <span className="final-cta-eyebrow">
            YOUR NEXT CHAPTER STARTS HERE
          </span>

          <h2 id="final-cta-heading">
            Ready for what’s next?
          </h2>

          <p>
            Discover colleges, find opportunities, list your
            institution, or start hiring with CampusPe.
          </p>

          <div className="final-cta-actions">
            {actions.map((action) => (
              <Button
                key={action.label}
                href={action.href}
                variant={action.variant}
                className="final-cta-button"
              >
                {action.label}
                <span aria-hidden="true">→</span>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
