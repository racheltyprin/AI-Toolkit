const { useState } = React;

const workflowTypes = {
  mvp: {
    name: "Non-Technical MVP Builder",
    description: "Build a basic MVP without writing code",
    time: "2-3 hours",
    cost: "$0",
    difficulty: "Beginner",
    steps: [
      {
        title: "Research & Planning",
        description: "Define your idea and gather requirements",
        toolCategories: ["writing", "researching"]
      },
      {
        title: "Visual Design",
        description: "Create mockups and visual assets",
        toolCategories: ["visual", "demo-building"]
      },
      {
        title: "Build Website/App",
        description: "Assemble your MVP without code",
        toolCategories: ["website-building", "app-building"]
      },
      {
        title: "Test & Iterate",
        description: "Gather feedback and refine",
        toolCategories: ["automating"]
      }
    ]
  },
  research: {
    name: "Research-to-Product Demo Creator",
    description: "Transform research insights into an interactive product demo",
    time: "1.5-2 hours",
    cost: "$0-$15",
    difficulty: "Intermediate",
    steps: [
      {
        title: "Research Phase",
        description: "Gather and synthesize insights",
        toolCategories: ["researching", "writing"]
      },
      {
        title: "Concept Development",
        description: "Develop concepts with AI assistance",
        toolCategories: ["writing", "visual"]
      },
      {
        title: "Create Visuals",
        description: "Generate visual assets and mockups",
        toolCategories: ["visual"]
      },
      {
        title: "Build Demo",
        description: "Create interactive prototype",
        toolCategories: ["demo-building", "website-building"]
      },
      {
        title: "Prepare Presentation",
        description: "Package for feedback and testing",
        toolCategories: ["visual", "automating"]
      }
    ]
  },
  design: {
    name: "AI-Enhanced Design Prototype",
    description: "Create a polished, interactive design prototype using AI tools",
    time: "2-4 hours",
    cost: "$0-$25",
    difficulty: "Intermediate-Advanced",
    steps: [
      {
        title: "Design Exploration",
        description: "Ideation and exploration with AI",
        toolCategories: ["visual", "writing"]
      },
      {
        title: "Design System",
        description: "Create components and patterns",
        toolCategories: ["demo-building"]
      },
      {
        title: "Build Screens",
        description: "Design all screens and interactions",
        toolCategories: ["demo-building"]
      },
      {
        title: "Add Interactions",
        description: "Polish with microinteractions",
        toolCategories: ["demo-building", "visual"]
      },
      {
        title: "User Testing Setup",
        description: "Prepare for testing and iteration",
        toolCategories: ["automating", "researching"]
      }
    ]
  }
};

function WorkflowApp() {
  const [selectedWorkflow, setSelectedWorkflow] = useState(null);
  const [expandedSteps, setExpandedSteps] = useState({});

  const getToolsForCategories = (categories) => {
    return tools.filter(tool => categories.includes(tool.category));
  };

  const toggleStep = (stepIndex) => {
    setExpandedSteps(prev => ({
      ...prev,
      [stepIndex]: !prev[stepIndex]
    }));
  };

  const selectedWorkflowData = selectedWorkflow ? workflowTypes[selectedWorkflow] : null;

  return (
    <main className="main-content">
      <div className="content-wrapper">
        <h1 className="page-title">Workflow Builder</h1>
        <p className="lead">Select a workflow type to see the steps and recommended tools for building your project.</p>

        {/* Workflow Type Selection */}
        <div className="workflow-selector">
          <div className="workflow-buttons">
            <button
              className={`workflow-button ${selectedWorkflow === 'mvp' ? 'active' : ''}`}
              onClick={() => {
                setSelectedWorkflow('mvp');
                setExpandedSteps({});
              }}
            >
              Non-Technical MVP Builder
            </button>
            <button
              className={`workflow-button ${selectedWorkflow === 'research' ? 'active' : ''}`}
              onClick={() => {
                setSelectedWorkflow('research');
                setExpandedSteps({});
              }}
            >
              Research-to-Product Demo
            </button>
            <button
              className={`workflow-button ${selectedWorkflow === 'design' ? 'active' : ''}`}
              onClick={() => {
                setSelectedWorkflow('design');
                setExpandedSteps({});
              }}
            >
              AI-Enhanced Design Prototype
            </button>
          </div>
        </div>

        {/* Workflow Builder Canvas */}
        <div className="workflow-builder">
          {!selectedWorkflow ? (
            <div className="workflow-builder-empty">
              Select a workflow type above to see the steps and recommended tools
            </div>
          ) : (
            <div className="workflow-steps-container">
              {selectedWorkflowData?.steps.map((step, index) => {
                const stepTools = getToolsForCategories(step.toolCategories);
                const isExpanded = expandedSteps[index];
                
                return (
                  <div key={index} className="workflow-step-wrapper">
                    <div className="workflow-step">
                      <div className="workflow-step-header">
                        <div className="workflow-step-number">{index + 1}</div>
                        <div className="workflow-step-title">{step.title}</div>
                      </div>
                      <div className="workflow-step-description">{step.description}</div>
                      
                      <div 
                        className="workflow-step-tools-header"
                        onClick={() => toggleStep(index)}
                      >
                        <div className="workflow-step-tools-label">
                          Tools ({stepTools.length})
                        </div>
                        <div className="workflow-step-tools-toggle">
                          {isExpanded ? '−' : '+'}
                        </div>
                      </div>
                      
                      <div className={`workflow-step-tools ${isExpanded ? 'expanded' : ''}`}>
                        {stepTools.map((tool, toolIndex) => (
                          <div key={toolIndex} className="tool-option">
                            <img 
                              src={tool.logo} 
                              alt={tool.name}
                              className="tool-option-logo"
                              onError={(e) => e.target.style.display = 'none'}
                            />
                            <div className="tool-option-info">
                              <div className="tool-option-name">{tool.name}</div>
                              <div className="tool-option-category">{tool.category.replace('-', ' ')}</div>
                            </div>
                            <span className={`tool-pricing-badge ${tool.pricing}`}>
                              {tool.pricing}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {index < selectedWorkflowData.steps.length - 1 && (
                      <div className="workflow-arrow">→</div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Workflow Info Footer */}
        {selectedWorkflow && selectedWorkflowData && (
          <div className="workflow-info-footer">
            <div className="workflow-info-title">{selectedWorkflowData.name}</div>
            <div className="workflow-info-content">{selectedWorkflowData.description}</div>
            <div className="workflow-info-meta">
              <div className="workflow-info-meta-item">
                <span className="workflow-info-meta-label">Time</span>
                <span className="workflow-info-meta-value">{selectedWorkflowData.time}</span>
              </div>
              <div className="workflow-info-meta-item">
                <span className="workflow-info-meta-label">Cost</span>
                <span className="workflow-info-meta-value">{selectedWorkflowData.cost}</span>
              </div>
              <div className="workflow-info-meta-item">
                <span className="workflow-info-meta-label">Difficulty</span>
                <span className="workflow-info-meta-value">{selectedWorkflowData.difficulty}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

// Wait for the DOM and tools to be ready
window.addEventListener('DOMContentLoaded', () => {
  // Check if tools array exists
  if (typeof tools === 'undefined') {
    console.error('Tools array not found. Make sure js/toolsContent.js is loaded.');
    document.getElementById('workflow-root').innerHTML = '<main class="main-content"><div class="content-wrapper"><p>Error: Tools data not loaded. Please check that js/toolsContent.js exists.</p></div></main>';
    return;
  }

  // Render the app using React 17 syntax
  ReactDOM.render(<WorkflowApp />, document.getElementById('workflow-root'));
});