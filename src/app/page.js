import Image from "next/image";
import styles from "./page.module.css";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";

// Icons
const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '8px' }}>
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);

const LocationIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '8px' }}>
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '4px' }}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const GitHubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '4px' }}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LeetCodeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '4px' }}>
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a1.653 1.653 0 0 0 0 2.227 1.653 1.653 0 0 0 2.227 0l3.854-4.126 5.406 5.788a1.374 1.374 0 0 0 1.922 0 1.374 1.374 0 0 0 0-1.922L10.57 7.226l3.854-4.126a1.653 1.653 0 0 0 0-2.227 1.653 1.653 0 0 0-2.227 0L8.116 5.226 1.555.438A1.374 1.374 0 0 0 .594 0H13.483z"/>
  </svg>
);

const ExperienceIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '8px' }}>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

const EducationIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '8px' }}>
    <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
  </svg>
);

const CertificationIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '8px' }}>
    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
  </svg>
);

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section style={{ textAlign: 'center' }}>
          <a href="/" >
            <Image 
              src="/logo.jpeg" 
              alt="Site Logo" 
              width={350} 
              height={120} 
              style={{ 
                objectFit: 'cover', 
                marginBottom: 16,
                maxWidth: '100%',
              }} 
            />
          </a>
          <h1>Aman Jaiswal</h1>
          <p>Front-End Developer (Vue.js/React.js)</p>
          <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
            <LocationIcon />
            Korba, Chhattisgarh, India
          </p>
          <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
            <MailIcon />
            <a href="mailto:aj007.12@gmail.com">aj007.12@gmail.com</a>
          </p>
          <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
            <a target="_blank" href="https://www.linkedin.com/in/amanaj/" style={{ display: 'flex', alignItems: 'center' }}>
              <LinkedInIcon />
              LinkedIn
            </a>
            <a target="_blank" href="https://github.com/amanaj007" style={{ display: 'flex', alignItems: 'center' }}>
              <GitHubIcon />
              GitHub
            </a>
            <a target="_blank" href="https://leetcode.com/user4539vs/" style={{ display: 'flex', alignItems: 'center' }}>
              <LeetCodeIcon />
              Leetcode
            </a>
          </p>
        </section>

        {/* Summary */}
        <section style={{ textAlign: 'center', margin: '0 auto', borderTop: '2px solid #fff', paddingTop: 40 }}>
          <h2 style={{ borderBottom: '2px solid #fff', display: 'inline-block' }}>About Me</h2>
          <p>
            Passionate front-end developer with 5+ years of experience building responsive, user-focused web applications. Adept at optimizing performance, collaborating with cross-functional teams, and delivering intuitive UI experiences.
          </p>
        </section>

        {/* Technical Skills */}
        {/* <section style={{ textAlign: 'center', borderTop: '2px solid #fff', paddingTop: 40 }}>
          <h2>Technical Skills</h2>
          <ul style={{ listStyle: 'none' }}>
            <li><b>Languages:</b> JavaScript (ES6+), HTML5, CSS3</li>
            <li><b>Frameworks:</b> Vue.js, React.js, Next.js, Nuxt.js, Express.js, Tailwind CSS, Vuetify</li>
            <li><b>State Management:</b> Vuex, Pinia, Redux</li>
            <li><b>Backend & DB:</b> Node.js, MongoDB, MySQL, Mongoose</li>
            <li><b>Tools:</b> Visual Studio Code, Git, Gitlab, Jira, BitBucket</li>
          </ul>
        </section> */}
        <SkillsSection style={{ borderTop: '2px solid #fff', paddingTop: 40 }} />
        <ProjectsSection style={{ borderTop: '2px solid #fff', paddingTop: 40 }} />

        {/* Quick Links */}
        {/* <section style={{ textAlign: 'center', borderTop: '2px solid #fff', paddingTop: 40 }}>
          <h2>Quick Links</h2>
          <nav>
            <a href="/about">About</a> | <a href="/projects">Projects</a> | <a href="/skills">Skills</a> | <a href="/contact">Contact</a>
          </nav>
        </section> */}

        {/* Experience */}
        <section style={{ textAlign: 'center', marginTop: 40, borderTop: '2px solid #fff', paddingTop: 40 }}>
          <h2 style={{ borderBottom: '2px solid #fff', display: 'inline-block' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              <ExperienceIcon />
              Experience
            </div>
          </h2>
          <ul className={styles.experienceList}>
            <li style={{ marginBottom: '2rem' }}>
              <b>Front End Developer</b> at Workspectation<br />
              January 2025 – Present<br />
              <i>Remote – Goa, India</i><br />
              {/* • Refactored and optimized legacy Vue.js codebase to improve modularity and maintainability.<br />
              • Eliminated redundant API calls and ensured only required endpoints were triggered, reducing API traffic by 35% and boosting performance.<br />
              • Collaborated closely with the backend and design teams in an Agile environment to deliver consistent and scalable UI components. */}
            </li>
            <li style={{ marginBottom: '2rem' }}>
              <b>Vue.js Developer</b> at Yunesg Ind<br />
              September 2023 – April 2024<br />
              <i>Remote – Salem, Tamil Nadu, India</i><br />
              {/* • Built and maintained interactive dashboards and forms using Vue.js and Tailwind CSS, improving user engagement and accessibility.<br />
              • Optimized frontend architecture by restructuring components and reducing re-renders, leading to a 55% improvement in overall page performance. */}
            </li>
            <li style={{ marginBottom: '2rem' }}>
              <b>Full Stack Developer</b> at Adroweb IT Services Private Limited<br />
              August 2022 – August 2023<br />
              <i>Remote – Raipur, Chhattisgarh, India</i><br />
              {/* • Delivered 5+ full-stack web applications using Vue.js, Node.js, and MongoDB.<br />
              • Designed reusable components and integrated REST APIs for dynamic data loading. */}
            </li>
            <li style={{ marginBottom: '2rem' }}>
              <b>Front End Developer</b> at Miko.ai<br />
              June 2022 – July 2022<br />
              <i>Mumbai, Maharashtra, India</i><br />
              {/* • Added pagination and performance improvements to existing features.<br />
              • Removed redundant code, reducing bundle size by 10%. */}
            </li>
            <li style={{ marginBottom: '2rem' }}>
              <b>Full Stack Developer</b> at Chartered Engineering<br />
              April 2019 – May 2022<br />
              <i>Raipur, Chhattisgarh, India</i><br />
              {/* • Built internal tools and portals using MVC frameworks (Node.js).<br />
              • Debugged and resolved backend issues, resulting in 30% fewer runtime errors.<br />
              • Improved system stability and delivery speed for internal users. */}
            </li>
            <li style={{ marginBottom: '2rem' }}>
              <b>Administrative Assistant</b> at EDUKUL SOLUTIONS PRIVATE LIMITED<br />
              September 2018 – January 2019<br />
              <i>Mumbai Metropolitan Region</i>
            </li>
            <li style={{ marginBottom: '2rem' }}>
              <b>Accountant</b> at Khanduja and Associates<br />
              February 2018 – August 2018<br />
              <i>Bilaspur, Chhattisgarh, India</i>
            </li>
          </ul>
        </section>

        {/* Education */}
        <section style={{ textAlign: 'center', marginTop: 40, borderTop: '2px solid #fff', paddingTop: 40 }}>
          <h2 style={{ borderBottom: '2px solid #fff', display: 'inline-block' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              <EducationIcon />
              Education
            </div>
          </h2>
          <ul className={styles.educationList}>
            <li style={{ marginBottom: '1.5rem' }}>
              <b>Master of Computer Applications</b><br />
              Manipal Academy of Higher Education<br />
              <i>Manipal, Karnataka</i><br />
              2025-2027
            </li>
            <li style={{ marginBottom: '1.5rem' }}>
              <b>Bachelor of Foreign Trade</b><br />
              Prestige Institute of Management and Research, DAVV<br />
              <i>Indore, MP, India</i>
            </li>
          </ul>
        </section>

        {/* Certifications */}
        <section style={{ textAlign: 'center', marginTop: 40, borderTop: '2px solid #fff', paddingTop: 40 }}>
          <h2 style={{ borderBottom: '2px solid #fff', display: 'inline-block' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              <CertificationIcon />
              Certifications
            </div>
          </h2>
          <ul className={styles.certificationsList}>
            <li style={{ marginBottom: '0.5rem' }}>
              <b>The Complete Web Development Bootcamp</b>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <b>Data Structure and Algorithms</b>
            </li>
          </ul>
        </section>

      </main>
    </div>
  );
}
