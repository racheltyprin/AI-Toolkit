const { useState } = React;

// Add debugging
console.log('workflows.js loaded');
console.log('React available:', typeof React !== 'undefined');
console.log('ReactDOM available:', typeof ReactDOM !== 'undefined');
console.log('tools available:', typeof tools !== 'undefined');
console.log('tools array:', tools);


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

// Everything is already loaded by the time Babel runs this, so render immediately
console.log('About to render React app');
const rootElement = document.getElementById('workflow-root');
console.log('Root element:', rootElement);

if (!rootElement) {
  console.error('Could not find #workflow-root element!');
} else if (typeof tools === 'undefined') {
  console.error('Tools array not found');
  rootElement.innerHTML = '<main class="main-content"><div class="content-wrapper"><p style="color: red; font-weight: bold;">Error: Tools data not loaded.</p></div></main>';
} else {
  // Render the app using React 17 syntax
  ReactDOM.render(<WorkflowApp />, rootElement);
  console.log('React app rendered');
}