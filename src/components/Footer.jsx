import './Footer.css'

const Footer = () => {
  const socialLinks = [
    { name: 'GitHub', icon: 'fa-github', url: 'https://github.com' },
    { name: 'LinkedIn', icon: 'fa-linkedin', url: 'https://linkedin.com' },
    { name: 'Twitter', icon: 'fa-twitter', url: 'https://twitter.com' },
    { name: 'Facebook', icon: 'fa-facebook', url: 'https://facebook.com' },
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">JD<span>Dev</span></h3>
            <p className="footer-text">
              Crafting digital experiences with passion and precision.
            </p>
            <div className="footer-social">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={link.name}
                >
                  <i className={`fa ${link.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Services</h4>
            <ul className="footer-links">
              <li><a href="#">Web Development</a></li>
              <li><a href="#">UI/UX Design</a></li>
              <li><a href="#">Mobile Apps</a></li>
              <li><a href="#">Consulting</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Contact</h4>
            <ul className="footer-contact">
              <li>
                <i className="fa fa-envelope"></i>
                <span>john@example.com</span>
              </li>
              <li>
                <i className="fa fa-phone"></i>
                <span>+1 234 567 890</span>
              </li>
              <li>
                <i className="fa fa-whatsapp"></i>
                <span>+1 234 567 890</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} JDDev. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
