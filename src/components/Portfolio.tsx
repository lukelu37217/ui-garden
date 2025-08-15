import React from 'react';
import { Button } from './Button';
import { Card } from './Card';
import { Text } from './Text';

interface PortfolioProps {
  onNavigateHome: () => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onNavigateHome }) => {
  return (
    <div className="portfolio-page">
      {/* Navigation */}
      <nav className="navigation">
        <div className="container">
          <Button label="Back to Home" onClick={onNavigateHome} />
        </div>
      </nav>

      {/* Portfolio Content */}
      <section className="portfolio-content">
        <div className="container">
          <Text content="My Portfolio & Projects" size="large" />

          {/* Featured Projects */}
          <div className="featured-projects">
            <Text content="Featured Projects" size="large" />
            <div className="projects-showcase">
              <Card
                title="E-commerce Platform"
                description="Full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and inventory management."
                image="/images/ecommerce-project.jpg"
                buttonText="View Details"
                onButtonClick={() =>
                  window.open('https://github.com', '_blank')
                }
              />

              <Card
                title="Task Management App"
                description="Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features."
                image="/images/task-management.jpg"
                buttonText="Live Demo"
                onButtonClick={() =>
                  window.open('https://github.com', '_blank')
                }
              />

              <Card
                title="UI Component Library"
                description="Reusable React component library with TypeScript support, comprehensive testing, and Storybook documentation."
                image="/images/ui-component-library.jpg"
                buttonText="Documentation"
                onButtonClick={() =>
                  window.open('https://github.com', '_blank')
                }
              />
            </div>
          </div>

          {/* Skills & Technologies */}
          <div className="skills-showcase">
            <Text content="Technical Skills" size="large" />
            <div className="skills-grid">
              <Card
                title="Frontend Development"
                description={
                  <ul>
                    <li>React & TypeScript</li>
                    <li>HTML5 & CSS3</li>
                    <li>JavaScript ES6+</li>
                    <li>Responsive Design</li>
                    <li>Bootstrap & Material-UI</li>
                  </ul>
                }
              />
              <Card
                title="Backend Development"
                description={
                  <ul>
                    <li>Node.js & Express</li>
                    <li>PHP & Laravel</li>
                    <li>Database Design</li>
                    <li>RESTful APIs</li>
                    <li>Authentication</li>
                  </ul>
                }
              />
              <Card
                title="Tools & Technologies"
                description={
                  <ul>
                    <li>Git & GitHub</li>
                    <li>Docker & Deployment</li>
                    <li>Testing & Debugging</li>
                    <li>Agile Methodologies</li>
                    <li>Code Documentation</li>
                  </ul>
                }
              />
            </div>
          </div>

          {/* Contact Section */}
          <div className="contact-section">
            {/* Move contact-info to the top-left of this section */}
            <div className="contact-info">
              <Text
                content="Ready to collaborate on your next project? Let's connect!"
                size="small"
              />
              <div className="contact-buttons">
                <Button
                  label="Email Me"
                  onClick={() =>
                    window.open('mailto:lukelou3721@gmail.com', '_self')
                  }
                />
                <Button
                  label="View GitHub"
                  onClick={() => window.open('https://github.com', '_blank')}
                />
              </div>
            </div>
            <Text content="Get In Touch" size="large" />
          </div>
        </div>
      </section>
    </div>
  );
};
