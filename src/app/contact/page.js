export default function Contact() {
  return (
    <main style={{ padding: '2rem', maxWidth: 600, margin: '0 auto' }}>
      <h1>Contact</h1>
      <p>You can reach me at <a href="mailto:your@email.com">your@email.com</a> or fill out the form below (dummy form):</p>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows={4} required />
        <button type="submit" disabled>Send (disabled)</button>
      </form>
    </main>
  );
} 