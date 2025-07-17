const projects = [
  {
    name: 'LMS for DGZfP',
    img: '/projects/dgzfp.webp',
    description: 'Rebuilt performance-critical components, improving load times by 40%. Refactored application structure for maintainability. Agile team collaboration.'
  },
  {
    name: 'PEPassport',
    img: '/projects/pepassport.png',
    description: 'Developed a fully responsive website for physical education tracking used by schools in the UK. Built dynamic forms and dashboards for teachers and students.'
  },
  {
    name: 'Miko',
    img: '/projects/miko.jpg',
    description: 'Designed and implemented the blog module with SEO-friendly architecture. Ensured cross-device responsiveness and mobile optimization.'
  },
  {
    name: 'Devshree',
    img: '/projects/devshree.png',
    description: 'This is a placeholder for another project. Replace with your real project details.'
  },
  {
    name: 'Craftkaar',
    img: '/projects/craftkaar.png',
    description: 'This is a placeholder for another project. Replace with your real project details.'
  }
];

export default function Projects() {
  return (
    <main style={{ padding: '2rem', maxWidth: 1000, margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center' }}>Projects</h1>
      <div style={{
        display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', marginTop: '2rem'
      }}>
        {projects.map(project => (
          <div key={project.name} style={{
            width: 260, border: '1px solid #eee', borderRadius: 12, boxShadow: '0 2px 8px #0001', padding: 16, background: '#fff', textAlign: 'center'
          }}>
            <img src={project.img} alt={project.name} style={{ width: '100%', height: 120, objectFit: 'contain', borderRadius: 8, marginBottom: 12 }} />
            <h3>{project.name}</h3>
            <p style={{ fontSize: 14 }}>{project.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
} 