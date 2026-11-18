import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import githubLogo from '../assets/github-logo.png'
import linkedinLogo from '../assets/linkedin-logo.png'
import twitterLogo from '../assets/twitter-logo3.webp'

const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export default function Contact() {
  const formRef = useRef()
  const [status, setStatus] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus('sending')
    if (!serviceID || !templateID || !publicKey) { setStatus('error'); return }
    try {
      await emailjs.sendForm(serviceID, templateID, formRef.current, { publicKey })
      setStatus('success')
      formRef.current.reset()
    } catch (error) {
      console.error('EmailJS error:', error)
      setStatus('error')
    }
  }

  return <section id="contact" className="section-wrap content-section contact-section">
    <div className="contact-panel reveal">
      <div className="contact-copy"><p className="section-label">HAVE AN IDEA?</p><h2>Let's make<br /><span className="gradient-text">it happen.</span></h2><p className="contact-intro">Have a project in mind, an opportunity, or just want to say hello? My inbox is always open.</p>
        <div className="social-links">
          <a href="https://github.com/chetanilva86" target="_blank" rel="noreferrer" aria-label="GitHub"><img src={githubLogo} alt="" /></a>
          <a href="https://www.linkedin.com/in/chetan-ilva-6ab801351/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><img src={linkedinLogo} alt="" /></a>
          <a href="https://x.com/ChetanIlve76920" target="_blank" rel="noreferrer" aria-label="X"><img src={twitterLogo} alt="" /></a>
          <a className="instagram-link" href="https://www.instagram.com/ch_etan5419/" target="_blank" rel="noreferrer" aria-label="Instagram">◎</a>
        </div>
        <a className="cv-link" href="/cv.pdf" download>Download my CV <span>↓</span></a>
      </div>
      <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
        <label>Your name<input type="text" name="name" placeholder="How should I call you?" required /></label>
        <label>Email address<input type="email" name="email" placeholder="you@example.com" required /></label>
        <label>Subject<input type="text" name="title" placeholder="What's this about?" required /></label>
        <label>Message<textarea name="message" rows="4" placeholder="Tell me a little about it..." required /></label>
        {status === 'success' && <p className="form-status success">✓ Message sent successfully!</p>}
        {status === 'error' && <p className="form-status error">Something went wrong. Please check EmailJS settings and try again.</p>}
        <button className="button button-primary form-submit" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending...' : 'Send message'} <span>↗</span></button>
      </form>
    </div>
  </section>
}
