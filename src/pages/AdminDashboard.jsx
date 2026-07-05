import { useState } from 'react'
import { Link } from 'react-router-dom'
import './AdminDashboard.css'

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('projects')

  const tabs = [
    { id: 'projects', name: 'Projects', icon: 'fa-folder' },
    { id: 'skills', name: 'Skills', icon: 'fa-code' },
    { id: 'profile', name: 'Profile', icon: 'fa-user' },
    { id: 'messages', name: 'Messages', icon: 'fa-envelope' },
  ]

  const sampleProjects = [
    { id: 1, name: 'E-Commerce Platform', status: 'published' },
    { id: 2, name: 'Social Media App', status: 'published' },
    { id: 3, name: 'Analytics Dashboard', status: 'published' },
  ]

  const sampleSkills = [
    { id: 1, name: 'React', level: 95 },
    { id: 2, name: 'JavaScript', level: 90 },
    { id: 3, name: 'Node.js', level: 85 },
  ]

  const sampleMessages = [
    { id: 1, name: 'Sarah Johnson', email: 'sarah@example.com', subject: 'Project Inquiry', date: '2024-01-15' },
    { id: 2, name: 'Mike Chen', email: 'mike@example.com', subject: 'Job Opportunity', date: '2024-01-14' },
  ]

  return (
    <div className="admin-dashboard">
      <div className="admin-sidebar">
        <div className="admin-header">
          <h2><i className="fa fa-cog"></i> Admin Panel</h2>
        </div>
        <nav className="admin-nav">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`admin-nav-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <i className={`fa ${tab.icon}`}></i>
              {tab.name}
            </button>
          ))}
        </nav>
        <Link to="/" className="back-to-site">
          <i className="fa fa-arrow-left"></i> Back to Site
        </Link>
      </div>

      <div className="admin-content">
        <div className="admin-content-header">
          <h1>{tabs.find(t => t.id === activeTab)?.name}</h1>
          <button className="btn btn-primary">
            <i className="fa fa-plus"></i> Add New
          </button>
        </div>

        {activeTab === 'projects' && (
          <div className="admin-table-container">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {sampleProjects.map((project) => (
                  <tr key={project.id}>
                    <td>{project.id}</td>
                    <td>{project.name}</td>
                    <td><span className={`status-badge ${project.status}`}>{project.status}</span></td>
                    <td>
                      <button className="action-btn edit"><i className="fa fa-edit"></i></button>
                      <button className="action-btn delete"><i className="fa fa-trash"></i></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'skills' && (
          <div className="admin-table-container">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Level</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {sampleSkills.map((skill) => (
                  <tr key={skill.id}>
                    <td>{skill.id}</td>
                    <td>{skill.name}</td>
                    <td>{skill.level}%</td>
                    <td>
                      <button className="action-btn edit"><i className="fa fa-edit"></i></button>
                      <button className="action-btn delete"><i className="fa fa-trash"></i></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'profile' && (
          <div className="profile-form card">
            <div className="form-group">
              <label>Name</label>
              <input type="text" defaultValue="John Doe" />
            </div>
            <div className="form-group">
              <label>Title</label>
              <input type="text" defaultValue="Full Stack Developer" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" defaultValue="john@example.com" />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input type="text" defaultValue="+1 234 567 890" />
            </div>
            <div className="form-group">
              <label>Bio</label>
              <textarea rows="5" defaultValue="I craft beautiful, functional, and user-centered digital experiences..."></textarea>
            </div>
            <button className="btn btn-primary">Save Changes</button>
          </div>
        )}

        {activeTab === 'messages' && (
          <div className="admin-table-container">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Subject</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {sampleMessages.map((msg) => (
                  <tr key={msg.id}>
                    <td>{msg.id}</td>
                    <td>{msg.name}</td>
                    <td>{msg.email}</td>
                    <td>{msg.subject}</td>
                    <td>{msg.date}</td>
                    <td>
                      <button className="action-btn view"><i className="fa fa-eye"></i></button>
                      <button className="action-btn delete"><i className="fa fa-trash"></i></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

export default AdminDashboard
