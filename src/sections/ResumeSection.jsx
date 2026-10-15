import { useRef, useState } from 'react';
import Button from '../components/Button.jsx';

const MAX_FILE_SIZE = 10 * 1024 * 1024;
const ALLOWED_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];

const benefits = [
  {
    title: 'Resume analyzed',
    description: 'Ready in 4s',
    icon: '✦',
  },
  {
    title: 'Skills matched',
    description: 'Deep taxonomy',
    icon: '◎',
  },
  {
    title: 'Experience matched',
    description: 'Contextual seniority',
    icon: '↗',
  },
  {
    title: '1,000+ sources searched',
    description: 'Real-time aggregators',
    icon: '⌕',
  },
  {
    title: 'ATS Compliant',
    description: 'Standardized parser',
    icon: '✓',
  },
];

export default function ResumeSection() {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [message, setMessage] = useState('');

  function handleFile(file) {
    if (!file) return;

    const extensionIsValid = /\.(pdf|doc|docx)$/i.test(file.name);
    const typeIsValid =
      !file.type || ALLOWED_TYPES.includes(file.type);

    if (!extensionIsValid || !typeIsValid) {
      setSelectedFile(null);
      setMessage('Please select a PDF, DOC, or DOCX file.');
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      setSelectedFile(null);
      setMessage('The file must be 10 MB or smaller.');
      return;
    }

    setSelectedFile(file);
    setMessage(
      'File selected. Upload and AI analysis require a connected service.',
    );
  }

  function handleDrop(event) {
    event.preventDefault();
    handleFile(event.dataTransfer.files[0]);
  }

  return (
    <section id="resume" className="resume-section section">
      <div className="container">
        <div className="resume-layout">
          <div className="resume-copy">
            <span className="section-kicker">
              AI-POWERED RESUME MATCHING
            </span>

            <h2>
              Upload your resume.
              <br />
              <span>Find jobs that fit.</span>
            </h2>

            <p className="resume-intro">
              Upload once. CampusPe reads your skills, experience,
              and preferences, then finds relevant jobs across
              1,000+ sources.
            </p>

            <div className="resume-benefits">
              {benefits.map((benefit) => (
                <article className="resume-benefit" key={benefit.title}>
                  <span className="resume-benefit-icon" aria-hidden="true">
                    {benefit.icon}
                  </span>
                  <div>
                    <h3>{benefit.title}</h3>
                    <p>{benefit.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="resume-visual">
            <div className="resume-match-card">
              <div>
                <span className="resume-match-label">
                  AI RESUME MATCHING
                </span>
                <h3>98% Match Rate</h3>
              </div>
              <span className="resume-match-icon" aria-hidden="true">
                ✦
              </span>
              <div className="resume-match-track" aria-hidden="true">
                <span />
              </div>
              <p>AI semantic rank</p>
            </div>

            <div className="resume-upload-card">
              <div className="resume-upload-heading">
                <span className="resume-file-icon" aria-hidden="true">
                  ↑
                </span>
                <div>
                  <h3>Upload your resume</h3>
                  <p>
                    PDF, DOC, or DOCX · Up to 10MB · We'll use it to
                    understand your skills and experience
                  </p>
                </div>
              </div>

              <button
                type="button"
                className="resume-dropzone"
                onClick={() => fileInputRef.current?.click()}
                onDragOver={(event) => event.preventDefault()}
                onDrop={handleDrop}
                aria-label="Choose or drop your resume file"
              >
                <span className="resume-drop-icon" aria-hidden="true">
                  ↑
                </span>
                <strong>
                  {selectedFile ? selectedFile.name : 'Drag & drop your resume'}
                </strong>
                <span>or browse files from your device</span>
                <span className="resume-file-types">
                  <span>PDF</span>
                  <span>DOC</span>
                  <span>DOCX</span>
                </span>
              </button>

              <input
                ref={fileInputRef}
                className="resume-file-input"
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={(event) => {
                  handleFile(event.target.files?.[0]);
                  event.target.value = '';
                }}
                aria-label="Select resume file"
              />

              <Button
                className="resume-upload-button"
                onClick={() => fileInputRef.current?.click()}
              >
                Upload resume <span aria-hidden="true">↑</span>
              </Button>

              <p className="resume-file-message" aria-live="polite">
                {message || 'Your file stays selected in this demo; nothing is uploaded.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}