const certificates = [
  {
    title: 'DSA with C++ — Live Batch',
    issuer: 'ChaiCode',
    detail: '50+ hour program · Certificate of Completion',
    preview: '/certificates/dsa-cpp-chaicode-preview.png',
    file: '/certificates/dsa-cpp-chaicode.pdf',
    verify: 'https://courses.chaicode.com/learn/certificate/11211684-230407',
  },
  {
    title: 'Complete CSS',
    issuer: 'KnowledgeGate',
    detail: 'Score: 100% · Issued 2 February 2026',
    preview: '/certificates/complete-css-knowledgegate-preview.png',
    file: '/certificates/complete-css-knowledgegate.pdf',
    verify: 'https://www.knowledgegate.ai/certificate/4D6C9B0A',
  },
  {
    title: 'Complete HTML',
    issuer: 'KnowledgeGate',
    detail: 'Score: 100% · Issued 28 January 2026',
    preview: '/certificates/complete-html-knowledgegate-preview.png',
    file: '/certificates/complete-html-knowledgegate.pdf',
    verify: 'https://www.knowledgegate.ai/certificate/E844832D',
  },{
    title: 'web development',
    issuer: 'ChaiCode',
    detail: 'Certificate of Completion',
    preview: '/certificates/web development_page-0001.jpg',
    file: '/certificates/web development_page-0001.jpg',
    verify: 'https://courses.chaicode.com/learn/certificate/11211684-250927',
  }
]

export default function Certificates() {
  return <section id="certificates" className="section-wrap content-section">
    <div className="section-heading reveal"><p className="section-label">MILESTONES & ACHIEVEMENTS</p><h2>Certificates & <span className="gradient-text">learning.</span></h2><p>Courses completed and skills built along the way.</p></div>
    <div className="certificates-grid">
      {certificates.map((certificate, index) => <article className="certificate-card reveal" style={{ '--delay': `${index * 90}ms` }} key={certificate.title}>
        <a className="certificate-preview" href={certificate.file} target="_blank" rel="noreferrer" aria-label={`Open ${certificate.title} certificate PDF`}>
          <img src={certificate.preview} alt={`${certificate.title} certificate preview`} loading="lazy" />
          <span>View certificate ↗</span>
        </a>
        <div className="certificate-info">
          <p className="certificate-issuer">{certificate.issuer}</p>
          <h3>{certificate.title}</h3>
          <p>{certificate.detail}</p>
          <div className="certificate-actions">
            <a href={certificate.file} target="_blank" rel="noreferrer">Open PDF <span>↗</span></a>
            <a href={certificate.verify} target="_blank" rel="noreferrer">Verify <span>↗</span></a>
          </div>
        </div>
      </article>)}
    </div>
  </section>
}
