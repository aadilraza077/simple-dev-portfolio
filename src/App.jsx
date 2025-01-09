import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Twitter, Link as LinkIcon } from 'lucide-react';
import './App.css';

const App = () => {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const homeRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const projects = [
    {
      title: "Project 1",
      description: "Description of project 1",
      github: "https://github.com/yourusername/project1"
    },
    {
      title: "Project 2",
      description: "Description of project 2",
      github: "https://github.com/yourusername/project2"
    },
    {
      title: "Project 3",
      description: "Description of project 3",
      github: "https://github.com/yourusername/project3"
    }
  ];

  const skills = [
    { name: "React", icon: "⚛️" },
    { name: "JavaScript", icon: "JS" },
    { name: "Node.js", icon: "📦" },
    { name: "TypeScript", icon: "TS" }
  ];

  return (
    <div>
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <span className="nav-logo">Portfolio</span>
          <div className="nav-links">
            <button onClick={() => scrollToSection(homeRef)} className="nav-link">Home</button>
            <button onClick={() => scrollToSection(aboutRef)} className="nav-link">About</button>
            <button onClick={() => scrollToSection(projectsRef)} className="nav-link">Projects</button>
            <button onClick={() => scrollToSection(contactRef)} className="nav-link">Contact</button>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section ref={homeRef} className="section home">
        <div className="section-container">
          <div className="home-content">
            <div>
              <img src="/api/placeholder/400/400" alt="Profile" className="profile-image" />
            </div>
            <div className="profile-text">
              <h1 className="section-title">Your Name</h1>
              <p>A passionate developer specialized in building exceptional digital experiences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="section about">
        <div className="section-container">
          <h2 className="section-title">About Me</h2>
          <div className="about-grid">
            <div>
              <h3 className="section-title">Experience</h3>
              <div>
                <div className="experience-card">
                  <h4>Software Engineer</h4>
                  <p>Snovasys Software Solutions Ltd • November 2023 - Present</p>
                </div>
                <div className="experience-card">
                  <h4>Software Trainee Engineer</h4>
                  <p>Snovasys Software Solutions Ltd • June 2023 - November 2023</p>
                </div>
                {/* Add more experience cards as needed */}
              </div>
            </div>
            <div>
              <h3 className="section-title">Skills</h3>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-card">
                    <span>{skill.icon}</span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="section">
        <div className="section-container">
          <h2 className="section-title">Projects</h2>
          <div className="projects-container">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="project-card"
                style={{
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <LinkIcon className="w-5 h-5" />
                  View Repository
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="section contact">
        <div className="section-container">
          <h2 className="section-title">Contact Me</h2>
          <div className="social-links">
            <a href="#" className="social-link">
              <Github size={32} />
            </a>
            <a href="#" className="social-link">
              <Linkedin size={32} />
            </a>
            <a href="#" className="social-link">
              <Twitter size={32} />
            </a>
            <a href="#" className="social-link">
              <Mail size={32} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;