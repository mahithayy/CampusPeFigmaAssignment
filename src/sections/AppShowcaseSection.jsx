
import Button from '../components/Button.jsx';

const screenPreviews = [
  { id: 'student', label: 'Student home', variant: 'student' },
  { id: 'courses', label: 'Explore courses', variant: 'courses' },
  { id: 'home', label: 'CampusPe home', variant: 'home' },
  { id: 'jobs', label: 'Job opportunities', variant: 'jobs' },
  { id: 'college', label: 'College profile', variant: 'college' },
];

function PhoneScreen({ variant, label, featured = false }) {
  return (
    <div
      className={`app-phone app-phone-${variant} ${
        featured ? 'app-phone-featured' : ''
      }`}
      role="img"
      aria-label={`${label} app screen preview`}
    >
      <div className="app-phone-frame">
        <div className="app-phone-speaker" />

        <div className="app-screen">
          <div className="app-screen-topbar">
            <strong>CampusPe<span>.</span></strong>
            <span className="app-screen-avatar">M</span>
          </div>

          {variant === 'student' && (
            <>
              <div className="app-screen-greeting">
                <span>GOOD MORNING</span>
                <strong>Find your next opportunity.</strong>
              </div>
              <div className="app-screen-search">⌕ Search colleges, jobs...</div>
              <div className="app-screen-banner">
                <span>YOUR NEXT CHAPTER</span>
                <strong>Discover what's possible.</strong>
                <i />
              </div>
              <div className="app-screen-section-title">Explore categories</div>
              <div className="app-screen-category-row">
                <span>Colleges</span><span>Jobs</span><span>Courses</span>
              </div>
              <div className="app-screen-section-title">Recommended for you</div>
              <div className="app-screen-mini-card">
                <i />
                <span><b>Product Intern</b><small>Internship · Hybrid</small></span>
              </div>
              <div className="app-screen-mini-card">
                <i />
                <span><b>Explore colleges</b><small>Find your best fit</small></span>
              </div>
            </>
          )}

          {variant === 'courses' && (
            <>
              <div className="app-screen-heading">Explore courses</div>
              <div className="app-screen-search">⌕ Search courses</div>
              <div className="app-screen-filter-row">
                <span>All</span><span>Popular</span><span>Online</span>
              </div>
              {['Engineering', 'Management', 'Design', 'Computer Science'].map(
                (course, index) => (
                  <div className="app-screen-course" key={course}>
                    <i className={`app-course-art art-${index + 1}`} />
                    <span><b>{course}</b><small>Explore courses and colleges</small></span>
                    <span className="app-screen-chevron">›</span>
                  </div>
                ),
              )}
            </>
          )}

          {variant === 'home' && (
            <>
              <div className="app-screen-hero-art">
                <span>YOUR FUTURE, CONNECTED</span>
                <strong>Discover. Connect. Grow.</strong>
                <div className="app-art-orbit"><i /><i /><i /></div>
              </div>
              <div className="app-screen-section-title">What are you looking for?</div>
              <div className="app-screen-home-grid">
                <span><i>⌂</i><b>Colleges</b></span>
                <span><i>↗</i><b>Jobs</b></span>
                <span><i>▤</i><b>Courses</b></span>
                <span><i>☆</i><b>Internships</b></span>
              </div>
              <div className="app-screen-section-title">Trending opportunities</div>
              <div className="app-screen-feature-card">
                <span className="app-screen-feature-image" />
                <b>Find your next big opportunity</b>
                <small>Matched to your interests</small>
              </div>
            </>
          )}

          {variant === 'jobs' && (
            <>
              <div className="app-screen-heading">Find your next job</div>
              <div className="app-screen-search">⌕ Search jobs and internships</div>
              <div className="app-screen-filter-row">
                <span>All</span><span>Internships</span>
              </div>
              {['Product Intern', 'Software Engineer', 'Marketing Associate', 'Design Intern'].map(
                (job, index) => (
                  <div className="app-screen-job" key={job}>
                    <i className={`app-job-logo job-logo-${index + 1}`}>
                      {job.charAt(0)}
                    </i>
                    <span><b>{job}</b><small>{index % 2 ? 'Full time' : 'Internship'} · Relevant match</small></span>
                  </div>
                ),
              )}
            </>
          )}

          {variant === 'college' && (
            <>
              <div className="app-screen-campus-art">
                <span>COLLEGE PROFILE</span>
                <div className="app-campus-building"><i /><i /><i /><i /></div>
              </div>
              <div className="app-screen-college-title">Discover your campus</div>
              <div className="app-screen-rating">★ 4.8 <span>Verified profile</span></div>
              <div className="app-screen-section-title">Explore campus life</div>
              <div className="app-screen-photo-grid"><i /><i /><i /></div>
              <div className="app-screen-section-title">Courses and opportunities</div>
              <div className="app-screen-mini-card">
                <i />
                <span><b>Explore programmes</b><small>Courses · Admissions</small></span>
              </div>
            </>
          )}

          <div className="app-screen-bottom-nav">
            <span>⌂<small>Home</small></span>
            <span>⌕<small>Explore</small></span>
            <span>♡<small>Saved</small></span>
            <span>◯<small>Profile</small></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AppShowcaseSection() {
  return (
    <section className="app-showcase-section section" aria-labelledby="app-showcase-heading">
      <div className="container">
        <div className="app-showcase-heading">
          <span className="section-kicker">THE CAMPUSPE APP</span>
          <h2 id="app-showcase-heading">Checkout Our App Interface Look</h2>
          <p>
            Experience the power of a unified campus ecosystem right in your
            pocket. CampusPe offers a tailored interface for every user:
            students can explore trending courses, colleges can showcase their
            campus life, and companies can post job vacancies directly to a
            pool of qualified candidates.
          </p>
        </div>

        <div className="app-phone-gallery">
          {screenPreviews.map((screen) => (
            <div className="app-phone-item" key={screen.id}>
              <PhoneScreen
                variant={screen.variant}
                label={screen.label}
                featured={screen.variant === 'home'}
              />
            </div>
          ))}
        </div>

        <div className="app-showcase-pagination" aria-hidden="true">
          <span /><span /><span className="is-active" /><span /><span />
        </div>

        <div className="app-download-layout">
          <div className="app-download-copy">
            <span className="section-kicker">CAMPUSPE ON THE GO</span>
            <h3>Download App Now</h3>
            <p>
              Elevate your academic journey with CampusPe, the all-in-one
              digital ecosystem designed to bridge the gap between education
              and industry. Whether you’re a student seeking your next big
              internship, a college looking to empower your cohort, or a
              company scouting for top-tier talent, CampusPe streamlines the
              connection. Your career doesn’t start at graduation—it starts here.
            </p>
            <Button href="#support" className="app-download-button">
              Download App Now <span aria-hidden="true">↓</span>
            </Button>
            <p className="app-download-note">
              App-store links can be connected when the official download URLs
              are available.
            </p>
          </div>

          <div className="app-device-stack" aria-label="CampusPe app screens preview">
            <div className="app-device app-device-back">
              <PhoneScreen variant="courses" label="Course screen" />
            </div>
            <div className="app-device app-device-front">
              <PhoneScreen variant="home" label="App home screen" featured />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
