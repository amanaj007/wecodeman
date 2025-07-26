import Image from "next/image";
import styles from "./page.module.css";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main} style={{ width: '70%' }}>
        <section style={{ textAlign: 'center', paddingTop: 40 }}>
          <a href="/" >
            <Image src="/logo.jpeg" alt="Site Logo" width={350} height={120} style={{ objectFit: 'cover', marginBottom: 16 }} />
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
          <h2>About Me</h2>
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
        <section style={{ textAlign: 'center', borderTop: '2px solid #fff', paddingTop: 40 }}>
          <h2>Quick Links</h2>
          <nav>
            <a href="/about">About</a> | <a href="/projects">Projects</a> | <a href="/skills">Skills</a> | <a href="/contact">Contact</a>
          </nav>
        </section>

        {/* Experience */}
        <section style={{ textAlign: 'center', marginTop: 40, borderTop: '2px solid #fff', paddingTop: 40 }}>
          <h2>Experience</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>
              <b>Front-End Developer</b> at Example Company<br />
              Jan 2020 – Present<br />
              <i>Worked on modern web applications using React and Vue.js.</i>
            </li>
          </ul>
        </section>

        {/* Education */}
        <section style={{ textAlign: 'center', marginTop: 40, borderTop: '2px solid #fff', paddingTop: 40 }}>
          <h2>Education</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>
              <b>Bachelor of Technology in Computer Science</b><br />
              Example University, 2015 – 2019
            </li>
          </ul>
        </section>

        {/* Certifications */}
        <section style={{ textAlign: 'center', marginTop: 40, borderTop: '2px solid #fff', paddingTop: 40 }}>
          <h2>Certifications</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>
              <b>Certified JavaScript Developer</b> – Example Certifying Authority, 2021
            </li>
          </ul>
        </section>

        {/* Contact */}
        <section style={{ textAlign: 'center', marginTop: 40, borderTop: '2px solid #fff', paddingTop: 40, marginBottom: 40 }}>
          <h2>Contact</h2>
          <p>You can reach me at <a href="mailto:your@email.com">your@email.com</a> or fill out the form below (dummy form):</p>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem', maxWidth: 400, marginLeft: 'auto', marginRight: 'auto' }}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows={4} required />
            <button type="submit" disabled>Send (disabled)</button>
          </form>
        </section>
      </main>
    </div>
  );
}
