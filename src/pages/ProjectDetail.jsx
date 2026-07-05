import { useParams, Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import './ProjectDetail.css'

const ProjectDetail = () => {
  const { id } = useParams()
  const contentRef = useRef(null)

  useEffect(() => {
    gsap.from(contentRef.current.querySelectorAll('.detail-section > *'), {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out'
    })
  }, [])

  const projects = {
    1: {
      name: 'E-Commerce Platform',
      image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=modern%20ecommerce%20website%20dashboard%20interface%20with%20products&image_size=landscape_16_9',
      techStack: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux', 'AWS'],
      description: 'A full-featured e-commerce platform built from the ground up. Features include user authentication, product management, shopping cart, payment integration with Stripe, order tracking, and an admin dashboard.',
      liveLink: 'https://example-ecommerce.com',
      githubLink: 'https://github.com/username/ecommerce',
      challenges: [
        'Implementing secure payment processing with PCI compliance',
        'Building a real-time inventory management system',
        'Optimizing database queries for large product catalogs',
        'Creating a responsive design that works across all devices'
      ],
      improvements: [
        'Add AI-powered product recommendations',
        'Implement a loyalty program system',
        'Add multi-language support',
        'Integrate with more payment gateways',
        'Add advanced analytics for store owners'
      ]
    },
    2: {
      name: 'Social Media App',
      image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=social%20media%20app%20mobile%20interface%20design&image_size=landscape_16_9',
      techStack: ['React Native', 'Firebase', 'Socket.io', 'Node.js', 'Express'],
      description: 'A real-time social media application with features like user profiles, posts, comments, likes, real-time chat, notifications, and image uploads.',
      liveLink: 'https://example-social.com',
      githubLink: 'https://github.com/username/social-app',
      challenges: [
        'Handling real-time data synchronization across multiple devices',
        'Implementing efficient image compression and storage',
        'Building a scalable notification system',
        'Ensuring data privacy and security'
      ],
      improvements: [
        'Add video calling feature',
        'Implement story feature',
        'Add AI content moderation',
        'Create a recommendation algorithm',
        'Add group chat functionality'
      ]
    },
    3: {
      name: 'Analytics Dashboard',
      image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=data%20analytics%20dashboard%20with%20charts%20and%20graphs&image_size=landscape_16_9',
      techStack: ['Vue.js', 'D3.js', 'Python', 'FastAPI', 'PostgreSQL', 'Docker'],
      description: 'An interactive data visualization dashboard that helps businesses track KPIs, analyze trends, and make data-driven decisions with beautiful charts and real-time updates.',
      liveLink: 'https://example-analytics.com',
      githubLink: 'https://github.com/username/analytics-dashboard',
      challenges: [
        'Processing large datasets efficiently',
        'Creating smooth animations for data transitions',
        'Building customizable widgets',
        'Implementing real-time data streaming'
      ],
      improvements: [
        'Add predictive analytics with ML',
        'Create custom report builder',
        'Add more chart types',
        'Implement data export functionality',
        'Add collaboration features'
      ]
    }
  }

  const project = projects[id] || projects[1]

  return (
    <div className="project-detail">
      <div className="container">
        <Link to="/" className="back-btn">
          <i className="fa fa-arrow-left"></i> Back to Projects
        </Link>

        <div className="detail-content" ref={contentRef}>
          <div className="detail-section">
            <h1 className="project-title">{project.name}</h1>
            <div className="project-image-large">
              <img src={project.image} alt={project.name} />
            </div>
          </div>

          <div className="detail-section">
            <h2 className="section-title">Tech Stack</h2>
            <div className="tech-stack">
              {project.techStack.map((tech, index) => (
                <span key={index} className="tech-badge">{tech}</span>
              ))}
            </div>
          </div>

          <div className="detail-section">
            <h2 className="section-title">Description</h2>
            <p className="project-description">{project.description}</p>
          </div>

          <div className="detail-section">
            <div className="project-links">
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <i className="fa fa-external-link"></i> Live Demo
              </a>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                <i className="fa fa-github"></i> View Code
              </a>
            </div>
          </div>

          <div className="detail-section">
            <h2 className="section-title">Challenges Faced</h2>
            <ul className="challenges-list">
              {project.challenges.map((challenge, index) => (
                <li key={index}>
                  <i className="fa fa-exclamation-circle"></i>
                  {challenge}
                </li>
              ))}
            </ul>
          </div>

          <div className="detail-section">
            <h2 className="section-title">Future Improvements</h2>
            <ul className="improvements-list">
              {project.improvements.map((improvement, index) => (
                <li key={index}>
                  <i className="fa fa-lightbulb-o"></i>
                  {improvement}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail
