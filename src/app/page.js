import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section style={{ textAlign: 'center' }}>
          
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
        <section style={{ textAlign: 'center', margin: '0 auto', width: '50%' }}>
          <h2>About Me</h2>
          <p>
            Passionate front-end developer with 5+ years of experience building responsive, user-focused web applications. Adept at optimizing performance, collaborating with cross-functional teams, and delivering intuitive UI experiences.
          </p>
        </section>

        {/* Key Skills */}
        <section style={{ textAlign: 'center'}}>
          <h2>Technical Skills</h2>
          <ul style={{ listStyle: 'none' }}>
            <li><b>Languages:</b> JavaScript (ES6+), HTML5, CSS3</li>
            <li><b>Frameworks:</b> Vue.js, React.js, Next.js, Nuxt.js, Express.js, Tailwind CSS, Vuetify</li>
            <li><b>State Management:</b> Vuex, Pinia, Redux</li>
            <li><b>Backend & DB:</b> Node.js, MongoDB, MySQL, Mongoose</li>
            <li><b>Tools:</b> Visual Studio Code, Git, Gitlab, Jira, BitBucket</li>
          </ul>
        </section>

        {/* Quick Links */}
        <section style={{ textAlign: 'center' }}>
          <h2>Quick Links</h2>
          <nav>
            <a href="/about">About</a> | <a href="/projects">Projects</a> | <a href="/skills">Skills</a> | <a href="/contact">Contact</a>
          </nav>
        </section>
      </main>
    </div>
  );
}
