import React from "react";
import styles from "./SkillsSection.module.css";

const skills = [
  { name: 'JavaScript', img: '/skills/js.png' },
  { name: 'React.js', img: '/skills/react.png' },
  { name: 'Next.js', img: '/skills/next.webp' },
  { name: 'Vue.js', img: '/skills/vuewebp.webp' },
  { name: 'Node.js', img: '/skills/node.png' },
  { name: 'Express.js', img: '/skills/express.png' },
  { name: 'MongoDB', img: '/skills/mongodb.svg' },
  { name: 'Tailwind CSS', img: '/skills/tailwind.png' },
  { name: 'Git', img: '/skills/git.png' },
  { name: 'Vuetify', img: '/skills/icon-green.png' },
];

export default function SkillsSection() {
  return (
    <section style={{ textAlign: 'center', marginTop: 40, borderTop: '2px solid #000000', paddingTop: 40 }}>
      <h2 style={{ borderBottom: '2px solid #000000', display: 'inline-block' }}>Skills & Tech Stack</h2>
      <div className={styles.skillsGrid}>
        {skills.map(skill => (
          <div key={skill.name} className={styles.skillItem}>
            <img src={skill.img} alt={skill.name} className={styles.skillImage} />
            <div>{skill.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
} 