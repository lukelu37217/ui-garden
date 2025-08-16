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
          subtitle="Analytical and adaptable web development student from Winnipeg"
          buttonText="View My Portfolio"
          onButtonClick={() => setCurrentPage('portfolio')}
        />
      </section>

      {/* Centered Page Content */}
      <main className="page-content">
        {/* Work Section */}
        <section id="work" className="work-section">
          <div className="container">
            <Text content="My Work & Projects" size="large" />
            <div className="projects-grid">
              <Card
                image="/images/ui-component-library.jpg"
                title="Recent Projects"
                description="View my latest work including UI component libraries, e-commerce platforms, and task management systems built with modern web technologies."
                buttonText="View Projects"
                onButtonClick={() => setCurrentPage('portfolio')}
              />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="skills-section">
          <div className="container">
            <Text content="Technical Skills" size="large" />
            <div className="skills-grid">
              {/* Revert to original single-card style for the Home page */}
              <Card
                image="/images/frontend-development.jpg"
                title="Technical Skills"
                description="Frontend: React, TypeScript, JavaScript, HTML5, CSS3. Backend: Node.js & Express. Databases: MongoDB, PostgreSQL. Tools: Git, Docker, VS Code."
                buttonText="View Skills"
                onButtonClick={() => setCurrentPage('portfolio')}
              />
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="resources-section">
          <div className="container">
            <Text content="Learning Resources" size="large" />
            <div className="resources-grid">
              <Card
                image="/images/mdn-docs.jpg"
                title="Learning Resources"
                description="Including MDN Web Docs, React documentation, TypeScript handbook, GitHub project management and other essential development resources."
                buttonText="View Resources"
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
                title="Development Setup"
                description="Using VS Code as primary development environment with React/Redux plugins, Prettier, ESLint and other productivity extensions."
                buttonText="View Setup"
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
