
import Button from '../components/Button.jsx';

export default function SupportSection() {
  return (
    <section
      id="support"
      className="support-section section"
      aria-labelledby="support-heading"
    >
      <div className="container">
        <div className="support-panel">
          <div className="support-content">
            <span className="support-icon" aria-hidden="true">
              ?
            </span>

            <h2 id="support-heading">Still have questions?</h2>

            <p>
              Our support team is here to help you succeed. Get in
              touch anytime.
            </p>

            <div className="support-actions">
              <Button
                href="mailto:contactus@campuspe.com"
                className="support-contact-button"
              >
                Contact Support
                <span aria-hidden="true">↗</span>
              </Button>

              <Button
                variant="secondary"
                href="mailto:contactus@campuspe.com?subject=Schedule%20a%20Call"
                className="support-schedule-button"
              >
                Schedule a Call
                <span aria-hidden="true">↗</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
