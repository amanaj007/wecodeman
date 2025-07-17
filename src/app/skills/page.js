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

export default function Skills() {
  return (
    <main style={{ padding: '2rem', maxWidth: 900, margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center' }}>Skills & Tech Stack</h1>
      <div style={{
        display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', marginTop: '2rem'
      }}>
        {skills.map(skill => (
          <div key={skill.name} style={{ textAlign: 'center', width: 120 }}>
            <img src={skill.img} alt={skill.name} style={{ width: 64, height: 64, objectFit: 'contain', marginBottom: 8 }} />
            <div>{skill.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
} 