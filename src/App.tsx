import React, { useState } from 'react';
import './App.css';
import { Button } from './components/Button';
import { Card } from './components/Card';
import { HeroImage } from './components/HeroImage';
import { Text } from './components/Text';
import { Portfolio } from './components/Portfolio';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  if (currentPage === 'portfolio') {
    return <Portfolio onNavigateHome={() => setCurrentPage('home')} />;
  }

  return (
    <div className="App">
      {/* Page Navigation */}
      <nav className="page-nav">
        <div className="container">
          <Button label="Home" onClick={() => setCurrentPage('home')} />
          <Button
            label="Portfolio"
            onClick={() => setCurrentPage('portfolio')}
          />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <HeroImage
          backgroundImage="/images/hero-background.jpg"
          title="Luke Lu - Full Stack Developer"
          subtitle="Analytical and adaptable web development student from Winnipeg, building modern web applications with React, TypeScript, and cutting-edge technologies."
          buttonText="View My Portfolio"
          onButtonClick={() => setCurrentPage('portfolio')}
        />
      </section>

      {/* Centered Page Content */}
      <main className="page-content">
        {/* Work Section */}
        <section id="work" className="work-section">
          <div className="container">
            <Text content="Featured Work & Projects" size="large" />
            <div className="projects-grid">
              <Card
                image="/images/ui-component-library.jpg"
                title="UI Component Library & Portfolio"
                description="Comprehensive React component library with TypeScript, automated testing, Storybook documentation, and professional portfolio website. Features Docker containerization and CI/CD pipeline."
                buttonText="View Projects"
                onButtonClick={() => setCurrentPage('portfolio')}
              />
              <Card
                image="/images/ecommerce-project.jpg"
                title="E-Commerce & Web Applications"
                description="Full-stack web applications including e-commerce platforms, task management systems, and modern responsive websites built with React, Node.js, and database integration."
                buttonText="Explore Work"
                onButtonClick={() => setCurrentPage('portfolio')}
              />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="skills-section">
          <div className="container">
            <Text content="Technical Skills & Expertise" size="large" />
            <div className="skills-grid">
              <Card
                image="/images/frontend-development.jpg"
                title="Frontend Development"
                description="React 19.1.0 with TypeScript, modern JavaScript ES6+, HTML5, CSS3, Styled Components, responsive design principles, and component-based architecture."
                buttonText="View Skills"
                onButtonClick={() => setCurrentPage('portfolio')}
              />
              <Card
                image="/images/backend-development.jpg"
                title="Backend & DevOps"
                description="Node.js & Express, PHP & Laravel, database design, RESTful APIs, Docker containerization, CI/CD pipelines, and automated testing frameworks."
                buttonText="Explore Tools"
                onButtonClick={() => setCurrentPage('portfolio')}
              />
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="resources-section">
          <div className="container">
            <Text content="Learning Resources & Documentation" size="large" />
            <div className="resources-grid">
              <Card
                image="/images/mdn-docs.jpg"
                title="Web Development Resources"
                description="Curated collection of essential development resources including MDN Web Docs, React documentation, TypeScript handbook, GitHub guides, and modern web development best practices."
                buttonText="View Resources"
                onButtonClick={() => setCurrentPage('portfolio')}
              />
              <Card
                image="/images/github-platform.jpg"
                title="Project Management & Collaboration"
                description="GitHub for version control, project management, issue tracking, pull request workflows, and collaborative development practices with modern DevOps methodologies."
                buttonText="See Projects"
                onButtonClick={() => setCurrentPage('portfolio')}
              />
            </div>
          </div>
        </section>

        {/* Developer Setup Section */}
        <section className="setup-section">
          <div className="container">
            <Text content="Development Environment" size="large" />
            <div className="setup-grid">
              <Card
                image="/images/vscode-setup.jpg"
                title="Professional Development Setup"
                description="Optimized VS Code environment with React/TypeScript extensions, Prettier formatting, ESLint linting, GitLens, and custom terminal configuration for maximum productivity."
                buttonText="View Setup"
                onButtonClick={() => setCurrentPage('portfolio')}
              />
              <Card
                image="/images/terminal-setup.jpg"
                title="Tools & Workflow Optimization"
                description="PowerShell and Git Bash terminals, Docker CLI, Node.js environment, custom aliases, and automated workflow scripts for efficient development processes."
                buttonText="See Tools"
                onButtonClick={() => setCurrentPage('portfolio')}
              />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <Text
              content="© 2025 Luke Lu. Built with React and TypeScript. Assignment 14 - Personal Portfolio Website."
              size="small"
            />
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
