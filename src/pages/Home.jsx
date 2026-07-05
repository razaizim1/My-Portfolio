import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Home.css'
import profilePhoto from '../assets/profile.png'

gsap.registerPlugin(ScrollTrigger)

const Home = () => {
  const heroRef = useRef(null)
  const aboutRef = useRef(null)
  const skillsRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)

  useEffect(() => {
    try {
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
    } catch (error) {
      console.log('Animations disabled:', error)
    }
  }, [])

  const skills = [
    { name: 'WordPress', level: 98, category: 'frontend', icon: 'fa-wordpress' },
    { name: 'JavaScript', level: 95, category: 'frontend', icon: 'fa-js' },
    { name: 'React', level: 90, category: 'frontend', icon: 'fa-react' },
    { name: 'PHP', level: 92, category: 'backend', icon: 'fa-code' },
    { name: 'Node.js', level: 85, category: 'backend', icon: 'fa-server' },
    { name: 'MongoDB', level: 80, category: 'database', icon: 'fa-database' },
    { name: 'PostgreSQL', level: 75, category: 'database', icon: 'fa-database' },
    { name: 'Prisma', level: 70, category: 'tools', icon: 'fa-cubes' },
    { name: 'TypeScript', level: 80, category: 'frontend', icon: 'fa-code' },
    { name: 'GSAP', level: 85, category: 'tools', icon: 'fa-magic' },
    { name: 'Figma', level: 80, category: 'tools', icon: 'fa-paint-brush' },
    { name: 'Git', level: 90, category: 'tools', icon: 'fa-git' },
  ]

  const projects = [
    { 
      id: 9, 
      name: 'Topper Pack – Elementor Development Toolkit', 
      image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=comprehensive%20WordPress%20Elementor%20plugin%20development%20toolkit%20with%20modular%20architecture&image_size=square', 
      description: 'Comprehensive Elementor development toolkit that extends WordPress with a modular architecture for visual site building. Includes Theme Builder, CPT Builder, WooCommerce Builder, Mega Menu, Template Library, and custom widget library.',
      featured: true
    },
    { 
      id: 1, 
      name: 'Tronix – IT Service & Technology', 
      image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=modern%20IT%20service%20technology%20WordPress%20theme%20website&image_size=square', 
      description: 'Professional IT services and technology WordPress theme for ThemeForest',
      liveLink: 'https://themeforest.net/item/tronix-it-service-and-technology-wordpress-theme/46259979'
    },
    { 
      id: 2, 
      name: 'Ecofine – Ecology & Environment', 
      image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=ecology%20environment%20green%20WordPress%20theme%20design&image_size=square', 
      description: 'Ecology and environmental conservation WordPress theme',
      liveLink: 'https://themeforest.net/item/ecofine-ecology-environment-wordpress-theme/45087619'
    },
    { 
      id: 3, 
      name: 'Nobility – Charity & Nonprofit', 
      image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=charity%20nonprofit%20donation%20WordPress%20theme&image_size=square', 
      description: 'Multipurpose charity and nonprofit WordPress theme with donation features',
      liveLink: 'https://themeforest.net/item/nobility-charity-nonprofit-multipurpose-wordpress-theme/56350886'
    },
    { 
      id: 4, 
      name: 'EduPLS – Education & Courses', 
      image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=education%20online%20courses%20learning%20WordPress%20theme&image_size=square', 
      description: 'Education and online courses WordPress theme',
      liveLink: 'https://themeforest.net/item/edupls-education-online-course-wordpress-theme/51709654'
    },
    { 
      id: 5, 
      name: 'GrowHub – Business & Consulting', 
      image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=business%20consulting%20professional%20WordPress%20theme&image_size=square', 
      description: 'Business and consulting WordPress theme',
      liveLink: 'https://themeforest.net/item/growhub-business-consulting-wordpress-theme/49945718'
    },
    { 
      id: 6, 
      name: 'ArtVista – Art Gallery & Museum', 
      image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=art%20gallery%20museum%20creative%20WordPress%20theme&image_size=square', 
      description: 'Art gallery and museum WordPress theme',
      liveLink: 'https://themeforest.net/item/artvista-art-gallery-museum-wordpress-theme/53968372'
    },
    { 
      id: 7, 
      name: 'Vektor – Industrial & Services', 
      image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=industrial%20factory%20services%20WordPress%20theme&image_size=square', 
      description: 'Industrial and services WordPress theme',
      liveLink: 'https://themeforest.net/item/vektor-industrial-service-wordpress-theme/51669072'
    },
    { 
      id: 8, 
      name: 'Merida – Restaurant & Food', 
      image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=restaurant%20food%20cafe%20WordPress%20theme&image_size=square', 
      description: 'Restaurant and food WordPress theme',
      liveLink: 'https://themeforest.net/item/merida-restaurant-food-wordpress-theme/54260125'
    },
  ]

  const education = [
    { degree: 'Full Stack Web Development', school: 'Tech Institute', year: '2018 - 2020' },
    { degree: 'WordPress Theme Development', school: 'ThemeForest Author Program', year: '2021 - Present' },
  ]

  const experience = [
    { 
      title: 'WordPress Developer', 
      company: 'Islamic Charity Organization', 
      period: 'Present', 
      description: 'Building and maintaining 8 production websites, developing custom fundraising platforms, multi-currency donation systems, payment gateway integrations, and campaign management systems' 
    },
    { 
      title: 'ThemeForest WordPress Theme Creator', 
      company: 'Self-Employed', 
      period: '2021 - Present', 
      description: 'Created 8+ premium WordPress themes for ThemeForest including Tronix, Ecofine, Nobility, EduPLS, GrowHub, ArtVista, Vektor, and Merida' 
    },
    { 
      title: 'Freelance Full Stack Developer', 
      company: 'Freelance', 
      period: '2020 - Present', 
      description: 'Custom WordPress theme development, Elementor widget development, and modern full-stack applications with React, Node.js, Express, MongoDB, PostgreSQL, Prisma, and TypeScript' 
    },
  ]

  const expertise = {
    wordpress: [
      'Custom Fundraising Platform Development',
      'Multi-Currency Donation Systems',
      'Custom Payment Gateway Integration',
      'Advanced Elementor Widget Development',
      'Gutenberg Block Development',
      'Custom Database Design (WPDB)',
      'Donation Checkout & Transaction Workflows',
      'Campaign & Donor Management Systems',
      'WordPress Theme Development',
      'WooCommerce Customization',
      'Performance-Focused WordPress Development',
    ],
    plugins: [
      'Elementor Plugin Architecture',
      'WordPress Plugin Engineering',
      'Theme Builder Development',
      'Custom Post Type (CPT) Builder Development',
      'WooCommerce Builder Development',
      'Mega Menu System Development',
      'Template Library Development',
      'Modular Plugin Architecture',
      'API & Third-Party Integration',
      'Scalable WordPress Product Development',
      'Developer Tooling for WordPress',
      'Enterprise WordPress Plugin Architecture',
    ],
    mern: [
      'MERN Stack Full-Stack Development',
      'PostgreSQL Database Design',
      'Prisma ORM Integration',
      'Type-Safe Development with TypeScript',
      'React Application Development',
      'Node.js & Express API Development',
      'REST API Development & Integration',
      'Scalable Web Application Development',
      'Authentication & Authorization Systems',
      'MongoDB Database Design',
    ]
  }

  return (
    <div className="home">
      <section id="home" className="hero" ref={heroRef}>
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <p className="hero-greeting">Hello, I'm</p>
              <h1 className="hero-name">Razai Zim</h1>
              <h2 className="hero-title">WordPress & Modern Full Stack Developer</h2>
              <p className="hero-description">
                Passionate WordPress Developer and Full-Stack Web Developer with expertise in both WordPress ecosystem and modern MERN stack. ThemeForest WordPress Theme Creator with experience in building custom fundraising platforms, donation systems, and scalable web applications with React, Node.js, Prisma, TypeScript, and PostgreSQL.
              </p>
              <div className="hero-buttons">
                <a href="#contact" className="btn btn-primary">
                  <i className="fa-envelope"></i> Let's Work Together
                </a>
                <a href="https://www.linkedin.com/in/razai-zim-475701165/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  <i className="fa-linkedin"></i> LinkedIn Profile
                </a>
              </div>
              <div className="hero-social">
                <a href="https://github.com/razaizim1" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <i className="fa fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/razai-zim-475701165/" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <i className="fa fa-linkedin"></i>
                </a>
                <a href="https://www.behance.net/wpexpert5956" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <i className="fa fa-behance"></i>
                </a>
              </div>
            </div>
            <div className="hero-image">
              <div className="profile-image-container">
                <div className="profile-image">
                  <img
                    src={profilePhoto}
                    alt="Razai Zim"
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
                I'm a passionate <strong>WordPress Developer</strong>, <strong>Plugin Engineer</strong>, and <strong>Modern Full-Stack Developer</strong> with expertise in three key areas:
              </p>
              
              <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'rgba(100, 200, 255, 0.1)', borderRadius: '0.5rem' }}>
                <h4 style={{ margin: '0 0 0.5rem 0', color: '#2563eb' }}><i className="fa fa-wordpress"></i> WordPress Development</h4>
                <p style={{ margin: 0 }}>Custom theme development, Elementor widgets, Gutenberg blocks, WooCommerce customization, fundraising platforms, multi-currency donation systems, payment gateways, and 8+ ThemeForest themes. Currently building/maintaining 8 production websites for an Islamic Charity Organization.</p>
              </div>

              <div style={{ marginTop: '1rem', padding: '1rem', background: 'rgba(100, 255, 200, 0.1)', borderRadius: '0.5rem' }}>
                <h4 style={{ margin: '0 0 0.5rem 0', color: '#059669' }}><i className="fa fa-cogs"></i> WordPress Plugin Engineering</h4>
                <p style={{ margin: 0 }}>Elementor plugin architecture, theme builders, CPT builders, WooCommerce builders, mega menu systems, template libraries, modular plugin development, API integrations, and performance-focused, scalable WordPress products like Topper Pack.</p>
              </div>

              <div style={{ marginTop: '1rem', padding: '1rem', background: 'rgba(255, 200, 100, 0.1)', borderRadius: '0.5rem' }}>
                <h4 style={{ margin: '0 0 0.5rem 0', color: '#d97706' }}><i className="fa fa-code"></i> MERN & Modern Stack Development</h4>
                <p style={{ margin: 0 }}>Full-stack applications with MERN (React, Node.js, Express, MongoDB), plus PostgreSQL, Prisma, and TypeScript for type-safe, scalable backends. REST APIs, authentication systems, dashboards, and clean, maintainable code.</p>
              </div>
            </div>
            <div className="about-stats">
              <div className="stat">
                <h3>20+</h3>
                <p>ThemeForest Themes</p>
              </div>
              <div className="stat">
                <h3>15+</h3>
                <p>Production Websites</p>
              </div>
              <div className="stat">
                <h3>5+</h3>
                <p>Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section expertise-section">
        <div className="container">
          <h2 className="section-title">Expertise Highlights</h2>
          <p className="section-subtitle">What I specialize in</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div className="card" style={{ padding: '1.5rem' }}>
              <h3 style={{ color: '#2563eb', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><i className="fa fa-wordpress"></i> WordPress Development</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {expertise.wordpress.map((item, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <i className="fa fa-check-circle" style={{ color: '#2563eb' }}></i>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card" style={{ padding: '1.5rem' }}>
              <h3 style={{ color: '#059669', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><i className="fa fa-cogs"></i> Plugin Engineering</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {expertise.plugins.map((item, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <i className="fa fa-check-circle" style={{ color: '#059669' }}></i>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card" style={{ padding: '1.5rem' }}>
              <h3 style={{ color: '#d97706', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><i className="fa fa-code"></i> MERN & Modern Stack</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {expertise.mern.map((item, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <i className="fa fa-check-circle" style={{ color: '#d97706' }}></i>
                    <span>{item}</span>
                  </div>
                ))}
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
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Portfolio case studies</p>
          <div className="projects-grid">
            {projects.filter(p => p.featured).map((project) => (
              <div key={project.id} className="project-card card" style={{ gridColumn: '1 / -1', maxWidth: '800px', margin: '0 auto' }}>
                <div className="project-image">
                  <img src={project.image} alt={project.name} />
                </div>
                <div className="project-content">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div style={{ marginTop: '1rem', padding: '1rem', background: 'rgba(0,0,0,0.05)', borderRadius: '0.5rem' }}>
                    <p><strong>Portfolio Case Study Summary:</strong> Topper Pack is a comprehensive Elementor development toolkit that extends WordPress with a modular architecture for visual site building. The plugin includes a Theme Builder, Custom Post Type Builder, WooCommerce Builder, Mega Menu Builder, Template Library, API integration framework, and a large library of custom Elementor widgets and extensions. The project demonstrates experience building scalable WordPress products with maintainable architecture, extensible modules, and performance-focused engineering.</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section projects">
        <div className="container">
          <h2 className="section-title">ThemeForest Themes</h2>
          <p className="section-subtitle">My premium WordPress themes</p>
          <div className="projects-grid">
            {projects.filter(p => !p.featured).map((project) => (
              <div key={project.id} className="project-card card">
                <div className="project-image">
                  <img src={project.image} alt={project.name} />
                </div>
                <div className="project-content">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    View on ThemeForest <i className="fa fa-external-link"></i>
                  </a>
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
            <p className="section-subtitle">Let's build something amazing together!</p>
            <div className="contact-grid">
              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fa fa-envelope"></i>
                  </div>
                  <div>
                    <h4>Email</h4>
                    <p>razai.zim1@gmail.com</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fa fa-linkedin"></i>
                  </div>
                  <div>
                    <h4>LinkedIn</h4>
                    <p>linkedin.com/in/razai-zim-475701165</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fa fa-github"></i>
                  </div>
                  <div>
                    <h4>GitHub</h4>
                    <p>github.com/razaizim1</p>
                  </div>
                </div>
              </div>
              <form className="contact-form card" onSubmit={(e) => e.preventDefault()}>
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
