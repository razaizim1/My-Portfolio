import './Footer.css'

const Footer = () => {
  const socialLinks = [
    { name: 'GitHub', icon: 'fa-github', url: 'https://github.com/razaizim1' },
    { name: 'LinkedIn', icon: 'fa-linkedin', url: 'https://www.linkedin.com/in/razai-zim-475701165/' },
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">Zim<span>Dev</span></h3>
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
                <span>razai.zim1@gmail.com</span>
              </li>
              <li>
                <i className="fa fa-phone"></i>
                <span>+88017 9294 5956</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} ZimDev. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
