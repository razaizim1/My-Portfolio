import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Home.css'

gsap.registerPlugin(ScrollTrigger)

const Home = () => {
  const heroRef = useRef(null)
  const aboutRef = useRef(null)
  const skillsRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)

  useEffect(() => {
    const heroContent = heroRef.current.querySelectorAll('.hero-content > *')
    gsap.from(heroContent, {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out'
    })

    gsap.from('.about-content', {
      scrollTrigger: {
        trigger: aboutRef.current,
        start: 'top 80%'
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    })

    gsap.from('.skill-card', {
      scrollTrigger: {
        trigger: skillsRef.current,
        start: 'top 80%'
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out'
    })

    gsap.from('.project-card', {
      scrollTrigger: {
        trigger: projectsRef.current,
        start: 'top 80%'
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out'
    })

    gsap.from('.contact-content', {
      scrollTrigger: {
        trigger: contactRef.current,
        start: 'top 80%'
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    })
  }, [])

  const skills = [
    { name: 'React', level: 95, category: 'frontend', icon: 'fa-react' },
    { name: 'JavaScript', level: 90, category: 'frontend', icon: 'fa-js' },
    { name: 'Node.js', level: 85, category: 'backend', icon: 'fa-nodejs' },
    { name: 'Python', level: 80, category: 'backend', icon: 'fa-python' },
    { name: 'Figma', level: 85, category: 'tools', icon: 'fa-paint-brush' },
    { name: 'Git', level: 90, category: 'tools', icon: 'fa-git' },
  ]

  const projects = [
    { id: 1, name: 'E-Commerce Platform', image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=modern%20ecommerce%20website%20dashboard%20interface%20with%20products&image_size=square', description: 'Full-stack e-commerce solution with payment integration' },
    { id: 2, name: 'Social Media App', image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=social%20media%20app%20mobile%20interface%20design&image_size=square', description: 'Real-time social platform with chat and feeds' },
    { id: 3, name: 'Analytics Dashboard', image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=data%20analytics%20dashboard%20with%20charts%20and%20graphs&image_size=square', description: 'Interactive data visualization dashboard' },
  ]

  const education = [
    { degree: 'Bachelor of Computer Science', school: 'University of Technology', year: '2018 - 2022' },
    { degree: 'Full Stack Web Development', school: 'Tech Institute', year: '2022 - 2023' },
  ]

  const experience = [
    { title: 'Senior Frontend Developer', company: 'Tech Corp', period: '2023 - Present', description: 'Leading frontend development team and architecting scalable web applications' },
    { title: 'Junior Developer', company: 'StartupXYZ', period: '2022 - 2023', description: 'Developing and maintaining web applications using React and Node.js' },
  ]

  return (
    <div className="home">
      <section id="home" className="hero" ref={heroRef}>
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <p className="hero-greeting">Hello, I'm</p>
              <h1 className="hero-name">John Doe</h1>
              <h2 className="hero-title">Full Stack Developer</h2>
              <p className="hero-description">
                I craft beautiful, functional, and user-centered digital experiences.
                Passionate about turning ideas into reality with clean code and creative design.
              </p>
              <div className="hero-buttons">
                <a href="/resume.pdf" className="btn btn-primary" download>
                  <i className="fa fa-download"></i> Download Resume
                </a>
                <a href="#contact" className="btn btn-secondary">
                  <i className="fa fa-envelope"></i> Contact Me
                </a>
              </div>
              <div className="hero-social">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <i className="fa fa-github"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <i className="fa fa-linkedin"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <i className="fa fa-facebook"></i>
                </a>
              </div>
            </div>
            <div className="hero-image">
              <div className="profile-image-container">
                <div className="profile-image">
                  <img
                    src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=professional%20portrait%20of%20a%20young%20man%20developer%20in%20business%20casual%20attire&image_size=square_hd"
                    alt="John Doe"
                  />
                </div>
                <div className="profile-decoration decoration-1"></div>
                <div className="profile-decoration decoration-2"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <i className="fa fa-chevron-down"></i>
        </div>
      </section>

      <section id="about" className="section about" ref={aboutRef}>
        <div className="container">
          <div className="about-content">
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">Get to know me better</p>
            <div className="about-text">
              <p>
                My journey into programming started in 2018 when I wrote my first "Hello World" program.
                What began as curiosity quickly turned into a passion for creating things that live on the internet.
              </p>
              <p>
                I specialize in building exceptional digital experiences. Whether it's a responsive website,
                a complex web application, or a mobile app, I bring ideas to life with clean, efficient code.
              </p>
              <p>
                When I'm not coding, you'll find me playing basketball, exploring new technologies,
                or painting. I believe that a balanced life fuels creativity and makes me a better developer.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat">
                <h3>5+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>50+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>30+</h3>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section skills" ref={skillsRef}>
        <div className="container">
          <h2 className="section-title">My Skills</h2>
          <p className="section-subtitle">Technologies I work with</p>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card card">
                <div className="skill-icon">
                  <i className={`fa ${skill.icon}`}></i>
                </div>
                <h3 className="skill-name">{skill.name}</h3>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                </div>
                <span className="skill-level">{skill.level}%</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section education-experience">
        <div className="container">
          <div className="edu-exp-grid">
            <div className="edu-exp-section">
              <h2 className="section-title">Education</h2>
              <div className="timeline">
                {education.map((edu, index) => (
                  <div key={index} className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content card">
                      <h3>{edu.degree}</h3>
                      <p className="timeline-school">{edu.school}</p>
                      <p className="timeline-year">{edu.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="edu-exp-section">
              <h2 className="section-title">Experience</h2>
              <div className="timeline">
                {experience.map((exp, index) => (
                  <div key={index} className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content card">
                      <h3>{exp.title}</h3>
                      <p className="timeline-company">{exp.company}</p>
                      <p className="timeline-period">{exp.period}</p>
                      <p className="timeline-description">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section projects" ref={projectsRef}>
        <div className="container">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">Some of my recent work</p>
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card card">
                <div className="project-image">
                  <img src={project.image} alt={project.name} />
                </div>
                <div className="project-content">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <Link to={`/project/${project.id}`} className="btn btn-primary">
                    View Details <i className="fa fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section contact" ref={contactRef}>
        <div className="container">
          <div className="contact-content">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">Let's work together</p>
            <div className="contact-grid">
              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fa fa-envelope"></i>
                  </div>
                  <div>
                    <h4>Email</h4>
                    <p>john@example.com</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fa fa-phone"></i>
                  </div>
                  <div>
                    <h4>Phone</h4>
                    <p>+1 234 567 890</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fa fa-whatsapp"></i>
                  </div>
                  <div>
                    <h4>WhatsApp</h4>
                    <p>+1 234 567 890</p>
                  </div>
                </div>
              </div>
              <form className="contact-form card">
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Subject" required />
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  <i className="fa fa-paper-plane"></i> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
