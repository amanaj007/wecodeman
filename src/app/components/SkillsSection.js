import React from "react";
import styles from "./SkillsSection.module.css";

const skills = [
  { name: 'JavaScript', img: '/skills/js.png', link: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/What_is_JavaScript' },
  { name: 'React.js', img: '/skills/react.png', link: 'https://react.dev/' },
  { name: 'Next.js', img: '/skills/next.webp', link: 'https://nextjs.org/' },
  { name: 'Vue.js', img: '/skills/vuewebp.webp', link: 'https://vuejs.org/' },
  { name: 'Node.js', img: '/skills/node.png', link: 'https://nodejs.org/' },
  { name: 'Express.js', img: '/skills/express.png', link: 'https://expressjs.com/' },
  { name: 'MongoDB', img: '/skills/mongodb.svg', link: 'https://www.mongodb.com/' },
  { name: 'Tailwind CSS', img: '/skills/tailwind.png', link: 'https://tailwindcss.com/' },
  { name: 'Git', img: '/skills/git.png', link: 'https://git-scm.com/' },
  { name: 'Vuetify', img: '/skills/icon-green.png', link: 'https://vuetifyjs.com/' },
];

export default function SkillsSection() {
  return (
    <section style={{ textAlign: 'center', marginTop: 40, borderTop: '2px solid #000000', paddingTop: 40 }}>
      <h2 style={{ borderBottom: '2px solid #000000', display: 'inline-block' }}>Skills & Tech Stack</h2>
      <div className={styles.skillsGrid}>
        {skills.map(skill => (
          <a href={skill.link} target="_blank" rel="noopener noreferrer" key={skill.name} className={styles.skillItem}>
            <div key={skill.name} className={styles.skillItem}>
              <img src={skill.img} alt={skill.name} className={styles.skillImage} />
              <div>{skill.name}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
} 