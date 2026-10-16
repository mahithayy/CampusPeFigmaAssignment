
import emailIcon from '../assets/icons/emailBlue_Icon.svg';
import phoneIcon from '../assets/icons/PhoneBlue_Icon.svg';
import youtubeIcon from '../assets/icons/Youtube_Icon.svg';
import facebookIcon from '../assets/icons/FaceBook_Icon.svg';
import twitterIcon from '../assets/icons/Twitter_Icon.svg';
import instagramIcon from '../assets/icons/Instagram_Icon.svg';
import linkedInIcon from '../assets/icons/LinkedIn_Icon.svg';

const footerGroups = [
  {
    title: 'For Students',
    links: [
      { label: 'Explore Opportunities', href: '#opportunities' },
      { label: 'Resume Matching', href: '#resume' },
      { label: 'Explore Colleges', href: '#colleges' },
    ],
  },
  {
    title: 'For Colleges',
    links: [
      { label: 'List Your College', href: '#colleges' },
      { label: 'Student Discovery', href: '#colleges' },
      { label: 'Contact Support', href: '#support' },
    ],
  },
  {
    title: 'For Employers',
    links: [
      { label: 'Find Candidates', href: '#employers' },
      { label: 'Post a Job', href: '#employers' },
      { label: 'Contact Support', href: '#support' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About CampusPe', href: '#home' },
      {
        label: 'Blogs',
        href: 'mailto:contactus@campuspe.com?subject=CampusPe%20Blogs',
      },
      { label: 'Contact Us', href: 'mailto:contactus@campuspe.com' },
    ],
  },
  {
    title: 'Legal & Policies',
    links: [
      {
        label: 'Privacy Policy',
        href: 'mailto:contactus@campuspe.com?subject=Privacy%20Policy',
      },
      {
        label: 'Terms & Conditions',
        href: 'mailto:contactus@campuspe.com?subject=Terms%20and%20Conditions',
      },
      {
        label: 'Grievance',
        href: 'mailto:contactus@campuspe.com?subject=Grievance',
      },
    ],
  },
];

const socialLinks = [
  { label: 'YouTube', icon: youtubeIcon, href: null },
  { label: 'Facebook', icon: facebookIcon, href: null },
  { label: 'Twitter', icon: twitterIcon, href: null },
  { label: 'Instagram', icon: instagramIcon, href: null },
  { label: 'LinkedIn', icon: linkedInIcon, href: null },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <a
              className="footer-logo"
              href="#home"
              aria-label="CampusPe home"
            >
              Campus<span>Pe</span>
            </a>

            <p>
              One platform connecting students, colleges, and employers —
              faster.
            </p>

            <div className="footer-contact">
              <a href="mailto:contactus@campuspe.com">
                <img src={emailIcon} alt="" aria-hidden="true" />
                <span>contactus@campuspe.com</span>
              </a>

              <a href="tel:+916362606464">
                <img src={phoneIcon} alt="" aria-hidden="true" />
                <span>+91 636 2606464</span>
              </a>
            </div>

            <div className="footer-socials" aria-label="Social media">
              {socialLinks.map((social) =>
                social.href ? (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={social.icon} alt="" aria-hidden="true" />
                  </a>
                ) : (
                  <span
                    key={social.label}
                    className="footer-social-placeholder"
                    title={`${social.label} link not configured`}
                  >
                    <img src={social.icon} alt={social.label} />
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="footer-links">
            {footerGroups.map((group) => (
              <div className="footer-link-group" key={group.title}>
                <h3>{group.title}</h3>
                <ul>
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © 2026 CampusPe Technologies Pvt. Ltd. All rights reserved.
          </p>

          <a className="footer-back-to-top" href="#home">
            Back to top <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
