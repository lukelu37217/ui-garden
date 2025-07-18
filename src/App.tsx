import React from 'react';
import './App.css';
import { Button } from './components/Button';
import { Card } from './components/Card';
import { Text } from './components/Text';
import { Label } from './components/Label';
import { Dropdown } from './components/Dropdown';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>UI Component Library - Assignment 13</h1>
        <p>Lu Luke - UI Component Library with CI/CD Pipeline</p>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            marginTop: '30px',
          }}
          className="component-showcase"
        >
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}
          >
            <Label text="Button Components:" />
            <div style={{ display: 'flex', gap: '10px' }}>
              <Button
                label="Primary Button"
                onClick={() => alert('Button clicked!')}
              />
              <Button label="Disabled Button" disabled onClick={() => {}} />
            </div>
          </div>

          <div>
            <Label text="Text Component:" />
            <Text content="This is a styled text component from our UI library" />
          </div>

          <div>
            <Label text="Dropdown Component:" />
            <Dropdown options={['Option 1', 'Option 2', 'Option 3']} />
          </div>

          <Card
            image="https://via.placeholder.com/300x200"
            title="Component Library Card"
            description="This card demonstrates our reusable UI components"
            buttonText="Learn More"
            onButtonClick={() => alert('Card button clicked!')}
          />

          <div
            style={{ fontSize: '14px', color: '#61dafb', marginTop: '20px' }}
          >
            <p>Code Quality: Prettier + ESLint + Tests</p>
            <p>Pre-commit Hooks: Husky + Lint-staged</p>
            <p>CI/CD Pipeline: GitHub Actions</p>
            <p>Docker Deployment: Port 8018</p>
            <p>GitHub: https://github.com/lukelu37217/ui-garden-assignment13</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
