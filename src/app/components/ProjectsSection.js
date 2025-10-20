import React from "react";
import styles from "./ProjectsSection.module.css";

const projects = [
  {
    name: 'PEPassport',
    img: '/projects/pepassport.png',
    description: 'Developed a fully responsive website for physical education tracking used by schools in the UK. Built dynamic forms and dashboards for teachers and students.',
    link: 'https://pepassport.co.uk/'
  },
  {
    name: 'Miko',
    img: '/projects/miko.jpg',
    description: 'Designed and implemented the blog module with SEO-friendly architecture. Ensured cross-device responsiveness and mobile optimization.',
    link: 'https://miko.ai/'
  },
  {
    name: 'iSolarise',
    img: '/projects/isolarise.png',
    description: 'This is a placeholder for another project. Replace with your real project details.',
    link: 'https://isolarise.com/'
  },
  {
    name: 'Resolva',
    img: '/projects/resolva.png',
    description: 'This is a placeholder for another project. Replace with your real project details.',
    link: 'https://resolva.com.au/'
  },
  // {
  //   name: 'LMS for DGZfP',
  //   img: '/projects/dgzfp.webp',
  //   description: 'Rebuilt performance-critical components, improving load times by 40%. Refactored application structure for maintainability. Agile team collaboration.'
  // },
  // {
  //   name: 'Devshree',
  //   img: '/projects/devshree.png',
  //   description: 'This is a placeholder for another project. Replace with your real project details.'
  // },
  // {
  //   name: 'Craftkaar',
  //   img: '/projects/craftkaar.png',
  //   description: 'This is a placeholder for another project. Replace with your real project details.'
  // },
];

export default function ProjectsSection() {
  return (
    <section style={{ textAlign: 'center', marginTop: 40, borderTop: '2px solid #000000', paddingTop: 40 }}>
      <h2 style={{ borderBottom: '2px solid #000000', display: 'inline-block' }}>Projects</h2>
      <div className={styles.projectsGrid}>
        {projects.map(project => (
          <div key={project.name} className={styles.projectCard}>
            {project.link ? (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img src={project.img} alt={project.name} className={styles.projectImage} />
              </a>
            ) : (
              <img src={project.img} alt={project.name} className={styles.projectImageNoLink} />
            )}
          </div>
        ))}
      </div>
    </section>
  );
} 