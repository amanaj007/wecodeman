import Image from "next/image";
import styles from "./page.module.css";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";

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
          <p>Location: Korba, Chhattisgarh, India</p>
          <p>
            <a href="mailto:aj007.12@gmail.com">aj007.12@gmail.com</a>          </p>
          <p>
            <a target="_blank" href="https://www.linkedin.com/in/amanaj/">LinkedIn</a> | <a target="_blank" href="https://github.com/amanaj007">GitHub</a> | <a target="_blank" href="https://leetcode.com/user4539vs/">Leetcode</a>
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
          <h2 style={{ borderBottom: '2px solid #fff', display: 'inline-block' }}>Experience</h2>
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
          <h2 style={{ borderBottom: '2px solid #fff', display: 'inline-block' }}>Education</h2>
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
          <h2 style={{ borderBottom: '2px solid #fff', display: 'inline-block' }}>Certifications</h2>
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
