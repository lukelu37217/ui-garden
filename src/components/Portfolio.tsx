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
          {/* Basic Information Section - Assignment Requirement */}
          <div className="basic-info-section">
            <Text content="Luke Lu - Full Stack Developer" size="large" />
            <Text
              content="Analytical and adaptable web development student from Winnipeg, passionate about creating modern, user-friendly web applications. Currently pursuing advanced web development with expertise in React, TypeScript, and modern DevOps practices."
              size="medium"
            />
          </div>

          {/* Work Section - Assignment Requirement: Title, Description, Image, Link, Tech List */}
          <div className="work-section">
            <Text content="Work & Projects" size="large" />
            <div className="projects-showcase">
              <Card
                title="E-commerce Platform"
                description={
                  <div>
                    <p>
                      <strong>Description:</strong> Full-stack e-commerce
                      solution built with React, Node.js, and MongoDB. Features
                      include user authentication, payment processing, and
                      inventory management with modern responsive design.
                    </p>
                    <p>
                      <strong>Tech Stack:</strong>
                    </p>
                    <ul>
                      <li>
                        Frontend: React 19.1.0, TypeScript, Styled Components
                      </li>
                      <li>Backend: Node.js, Express, RESTful APIs</li>
                      <li>Database: MongoDB with Mongoose ODM</li>
                      <li>
                        Authentication: JWT tokens, bcrypt password hashing
                      </li>
                      <li>Payment: Stripe API integration</li>
                      <li>Deployment: Docker containerization, Nginx</li>
                    </ul>
                  </div>
                }
                image="/images/project-ecommerce.jpg"
                buttonText="View Project"
                onButtonClick={() =>
                  window.open(
                    'https://github.com/lukelu37217/ui-garden',
                    '_blank'
                  )
                }
              />

              <Card
                title="Task Management Application"
                description={
                  <div>
                    <p>
                      <strong>Description:</strong> Collaborative task
                      management application with real-time updates,
                      drag-and-drop functionality, and team collaboration
                      features. Built using React hooks and modern state
                      management.
                    </p>
                    <p>
                      <strong>Tech Stack:</strong>
                    </p>
                    <ul>
                      <li>
                        Frontend: React with hooks, Context API, TypeScript
                      </li>
                      <li>Real-time: WebSocket connections, Socket.io</li>
                      <li>State Management: Redux Toolkit, React Query</li>
                      <li>UI/UX: Drag-and-drop with React DnD library</li>
                      <li>Backend: Express.js, PostgreSQL database</li>
                      <li>Testing: Jest, React Testing Library</li>
                    </ul>
                  </div>
                }
                image="/images/project-taskmanager.jpg"
                buttonText="Live Demo"
                onButtonClick={() =>
                  window.open(
                    'https://github.com/lukelu37217/ui-garden',
                    '_blank'
                  )
                }
              />

              <Card
                title="UI Component Library (Assignment 13)"
                description={
                  <div>
                    <p>
                      <strong>Description:</strong> Comprehensive React
                      component library with TypeScript support, automated
                      testing with Jest, Storybook documentation, and CI/CD
                      pipeline integration.
                    </p>
                    <p>
                      <strong>Tech Stack:</strong>
                    </p>
                    <ul>
                      <li>Framework: React 19.1.0 with TypeScript</li>
                      <li>Styling: Styled Components, CSS-in-JS</li>
                      <li>
                        Testing: Jest, React Testing Library, Coverage reports
                      </li>
                      <li>Documentation: Storybook for component showcase</li>
                      <li>Quality: ESLint, Prettier, Husky pre-commit hooks</li>
                      <li>CI/CD: GitHub Actions for automated testing</li>
                    </ul>
                  </div>
                }
                image="/images/project-ui-library.jpg"
                buttonText="Documentation"
                onButtonClick={() =>
                  window.open(
                    'https://github.com/lukelu37217/ui-garden',
                    '_blank'
                  )
                }
              />

              <Card
                title="DevOps & Database Projects"
                description={
                  <div>
                    <p>
                      <strong>Description:</strong> Various database design
                      projects, Docker containerization examples, and automated
                      deployment pipelines showcasing modern DevOps practices
                      and cloud deployment strategies.
                    </p>
                    <p>
                      <strong>Tech Stack:</strong>
                    </p>
                    <ul>
                      <li>Containerization: Docker, Docker Compose</li>
                      <li>Web Servers: Nginx configuration and optimization</li>
                      <li>Databases: PostgreSQL, MongoDB, database design</li>
                      <li>CI/CD: GitHub Actions, automated deployments</li>
                      <li>
                        Cloud: AWS deployment strategies, server management
                      </li>
                      <li>
                        Version Control: Git workflows, branching strategies
                      </li>
                    </ul>
                  </div>
                }
                image="/images/project-devops.jpg"
                buttonText="View Repository"
                onButtonClick={() =>
                  window.open(
                    'https://github.com/lukelu37217/ui-garden',
                    '_blank'
                  )
                }
              />
            </div>
          </div>

          {/* Skills Section - Assignment Requirement: Description, Languages/frameworks, Tools */}
          <div className="skills-showcase">
            <Text content="Technical Skills & Technologies" size="large" />
            <div className="skills-grid">
              <Card
                title="Languages & Frameworks"
                description={
                  <div>
                    <strong>Frontend Development:</strong>
                    <ul>
                      <li>React 19.1.0 with TypeScript</li>
                      <li>HTML5, CSS3, JavaScript ES6+</li>
                      <li>Styled Components & Responsive Design</li>
                      <li>Bootstrap, Material-UI, Tailwind CSS</li>
                    </ul>
                    <strong>Backend Development:</strong>
                    <ul>
                      <li>Node.js & Express.js</li>
                      <li>PHP & Laravel Framework</li>
                      <li>RESTful API Development</li>
                      <li>GraphQL and Apollo Server</li>
                    </ul>
                  </div>
                }
                image="/images/skills-frontend.jpg"
                buttonText="View Projects"
                onButtonClick={() =>
                  window.open(
                    'https://github.com/lukelu37217/ui-garden',
                    '_blank'
                  )
                }
              />
              <Card
                title="Development Tools"
                description={
                  <div>
                    <strong>Version Control & Collaboration:</strong>
                    <ul>
                      <li>Git & GitHub with branching strategies</li>
                      <li>Pull requests and code reviews</li>
                      <li>Agile development methodologies</li>
                      <li>Project management with GitHub Issues</li>
                    </ul>
                    <strong>DevOps & Deployment:</strong>
                    <ul>
                      <li>Docker containerization</li>
                      <li>CI/CD pipelines with GitHub Actions</li>
                      <li>Nginx web server configuration</li>
                      <li>AWS cloud deployment strategies</li>
                    </ul>
                  </div>
                }
                image="/images/skills-devops.jpg"
                buttonText="View Repository"
                onButtonClick={() =>
                  window.open(
                    'https://github.com/lukelu37217/ui-garden',
                    '_blank'
                  )
                }
              />
              <Card
                title="Database & Testing"
                description={
                  <div>
                    <strong>Database Technologies:</strong>
                    <ul>
                      <li>MongoDB & PostgreSQL</li>
                      <li>Database design and optimization</li>
                      <li>Data modeling and relationships</li>
                      <li>SQL query optimization</li>
                    </ul>
                    <strong>Quality Assurance:</strong>
                    <ul>
                      <li>Jest testing framework</li>
                      <li>ESLint & Prettier for code quality</li>
                      <li>Storybook for component documentation</li>
                      <li>Unit testing and integration testing</li>
                    </ul>
                  </div>
                }
                image="/images/skills-database.jpg"
                buttonText="View Tests"
                onButtonClick={() =>
                  window.open(
                    'https://github.com/lukelu37217/ui-garden',
                    '_blank'
                  )
                }
              />
            </div>
          </div>

          {/* Resources Section - Assignment Requirement: Title, Image/Icon, Summary, Link */}
          <div className="resources-section">
            <Text content="Learning Resources & Documentation" size="large" />
            <div className="resources-grid">
              <Card
                title="React & TypeScript Documentation"
                description="Official React documentation with hooks, context, and modern patterns. TypeScript handbook for type safety and better development experience."
                image="/images/resource-react.jpg"
                buttonText="Visit React Docs"
                onButtonClick={() =>
                  window.open('https://react.dev/learn', '_blank')
                }
              />
              <Card
                title="MDN Web Development Resources"
                description="Comprehensive web development documentation covering HTML, CSS, JavaScript fundamentals, Web APIs, and modern browser features."
                image="/images/resource-mdn.jpg"
                buttonText="Visit MDN"
                onButtonClick={() =>
                  window.open('https://developer.mozilla.org/', '_blank')
                }
              />
              <Card
                title="GitHub Platform & Version Control"
                description="GitHub for project management, issue tracking, pull requests, and collaborative development workflows with Git version control best practices."
                image="/images/resource-github.jpg"
                buttonText="View GitHub"
                onButtonClick={() =>
                  window.open(
                    'https://github.com/lukelu37217/ui-garden',
                    '_blank'
                  )
                }
              />
              <Card
                title="TypeScript Documentation"
                description="TypeScript official handbook covering type systems, interfaces, generics, and advanced patterns for large-scale JavaScript applications."
                image="/images/resource-typescript.jpg"
                buttonText="TypeScript Docs"
                onButtonClick={() =>
                  window.open('https://www.typescriptlang.org/docs/', '_blank')
                }
              />
            </div>
          </div>

          {/* Developer Setup Section - Assignment Requirement: VsCode setup, Terminal setup, Preferred editor font */}
          <div className="developer-setup-section">
            <Text content="Development Environment Setup" size="large" />
            <div className="setup-grid">
              <Card
                title="VS Code Configuration"
                description="Primary development environment configured with React/Redux DevTools, TypeScript support, ESLint, Prettier, GitLens, and productivity extensions for efficient coding."
                image="/images/setup-vscode.jpg"
                buttonText="View Extensions"
                onButtonClick={() =>
                  window.open(
                    'https://code.visualstudio.com/docs/editor/extension-marketplace',
                    '_blank'
                  )
                }
              />
              <Card
                title="Terminal & Command Line Setup"
                description="Configured PowerShell and Git Bash terminals with custom aliases, Git configuration, Node.js environment, and Docker CLI for streamlined development workflow."
                image="/images/setup-terminal.jpg"
                buttonText="Setup Guide"
                onButtonClick={() =>
                  window.open(
                    'https://docs.microsoft.com/en-us/powershell/',
                    '_blank'
                  )
                }
              />
              <Card
                title="Preferred Editor Font & Themes"
                description="Optimized coding experience with Fira Code font family for better readability, custom VS Code themes, and personalized keybindings for maximum productivity."
                image="/images/setup-fonts.jpg"
                buttonText="Font Download"
                onButtonClick={() =>
                  window.open('https://github.com/tonsky/FiraCode', '_blank')
                }
              />
            </div>
          </div>

          {/* Contact Section */}
          <div className="contact-section">
            <Text content="Get In Touch" size="large" />
            <div className="contact-info">
              <Text
                content="Ready to collaborate on your next project? I'm always excited to work on new challenges and contribute to innovative web development projects."
                size="medium"
              />
              <div className="contact-buttons">
                <Button
                  label="Email Me"
                  onClick={() =>
                    window.open('mailto:lukelou3721@gmail.com', '_self')
                  }
                />
                <Button
                  label="View GitHub Profile"
                  onClick={() =>
                    window.open('https://github.com/lukelu37217', '_blank')
                  }
                />
                <Button
                  label="LinkedIn Profile"
                  onClick={() =>
                    window.open('https://linkedin.com/in/lukelou', '_blank')
                  }
                />
              </div>
            </div>
          </div>

          {/* Footer Information */}
          <div className="portfolio-footer">
            <Text
              content="© 2025 Luke Lu | Full Stack Developer | Built with React, TypeScript & Docker | Assignment 14 - Portfolio Website"
              size="small"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
