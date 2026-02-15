const { useState } = React;

function WorkflowApp() {
  const [selectedWorkflow, setSelectedWorkflow] = useState(null);
  const [expandedSteps, setExpandedSteps] = useState({});
  const [selectedTools, setSelectedTools] = useState({}); // Stores { stepIndex: [tool, tool] }

  const toggleStep = (stepIndex) => {
    setExpandedSteps(prev => ({ ...prev, [stepIndex]: !prev[stepIndex] }));
  };

  const handleToolToggle = (stepIndex, tool) => {
    setSelectedTools(prev => {
      const stepTools = prev[stepIndex] || [];
      const exists = stepTools.find(t => t.name === tool.name);
      if (exists) {
        return { ...prev, [stepIndex]: stepTools.filter(t => t.name !== tool.name) };
      } else {
        return { ...prev, [stepIndex]: [...stepTools, tool] };
      }
    });
  };

  const selectedWorkflowData = selectedWorkflow ? workflowTypes[selectedWorkflow] : null;

  const calculateTotals = () => {
    if (!selectedWorkflowData) return null;
    const allSelected = Object.values(selectedTools).flat();
    const uniqueTools = Array.from(new Set(allSelected.map(t => t.name)));
    
    // Logic: Each unique tool adds 30 mins to the project
    const baseTimeNum = parseInt(selectedWorkflowData.time);
    const totalTime = baseTimeNum + (uniqueTools.length * 0.5);
    
    // Logic: Count paid tools for a price estimate
    const paidCount = allSelected.filter(t => t.pricing === 'paid').length;

    return {
      count: uniqueTools.length,
      time: `${totalTime} hours`,
      cost: paidCount > 0 ? `Est. $${paidCount * 15}/mo` : "$0 (Free Stack)"
    };
  };

  const totals = calculateTotals();

  // Helper to get unique tools for the Final Tech Stack display
  const getUniqueSelectedTools = () => {
    const allSelected = Object.values(selectedTools).flat();
    const seen = new Set();
    return allSelected.filter(tool => {
      const duplicate = seen.has(tool.name);
      seen.add(tool.name);
      return !duplicate;
    });
  };

  return (
    <main className="main-content">
      <div className="content-wrapper">
        <h1 className="page-title">Workflow Builder</h1>
        <p className="lead">Select a workflow and add tools to each step to calculate your project requirements.</p>

        <div className="workflow-selector">
          <div className="workflow-buttons">
            {Object.keys(workflowTypes).map(key => (
              <button
                key={key}
                className={`workflow-button ${selectedWorkflow === key ? 'active' : ''}`}
                onClick={() => { setSelectedWorkflow(key); setExpandedSteps({}); setSelectedTools({}); }}
              >
                {workflowTypes[key].name}
              </button>
            ))}
          </div>
        </div>

        <div className="math-container">
          {selectedWorkflow && (
            <>
              <div className="math-steps-list">
                {selectedWorkflowData.steps.map((step, index) => {
                  const availableTools = tools.filter(t => step.toolCategories.includes(t.category));
                  const activeTools = selectedTools[index] || [];
                  const isExpanded = expandedSteps[index];

                  return (
                    <div key={index} className="math-row">
                      <div className="math-operator">{index === 0 ? "" : "+"}</div>
                      
                      <div className="workflow-step">
                        <div className="workflow-step-header">
                          <div className="workflow-step-number">{index + 1}</div>
                          <div className="workflow-step-title">{step.title}</div>
                        </div>
                        <p className="workflow-step-description">{step.description}</p>
                        
                        <div className="step-actions">
                          <button className="filter-chip" onClick={() => toggleStep(index)}>
                             {availableTools.length} Available Tools {isExpanded ? '▴' : '▾'}
                          </button>
                        </div>

                        {isExpanded && (
                          <div className="math-dropdown">
                            {availableTools.map((tool, i) => {
                              const isSelected = activeTools.some(t => t.name === tool.name);
                              return (
                                <div 
                                  key={i} 
                                  className={`tool-option ${isSelected ? 'selected' : ''}`}
                                  onClick={() => handleToolToggle(index, tool)}
                                >
                                  <span>{tool.name}</span>
                                  {isSelected && <span className="check">✓</span>}
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>

                      <div className="selected-tools-tray">
                        {activeTools.map((tool, i) => (
                          <div key={i} className="mini-tool-card">
                            <img src={tool.logo} alt="" onError={e => e.target.style.display='none'} />
                            <span className="mini-tool-name">{tool.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="math-sum-line"></div>

              {/* SIDE-BY-SIDE FOOTER CONTAINER */}
              <div className="math-footer-container">
                {/* LEFT BOX: Project Totals */}
                <div className="workflow-info-footer math-footer">
                  <div className="workflow-info-title">Project Total</div>
                  <div className="workflow-info-meta">
                    <div className="workflow-info-meta-item">
                      <span className="workflow-info-meta-label">Total Tools</span>
                      <span className="workflow-info-meta-value">{totals.count}</span>
                    </div>
                    <div className="workflow-info-meta-item">
                      <span className="workflow-info-meta-label">Time Est.</span>
                      <span className="workflow-info-meta-value">{totals.time}</span>
                    </div>
                    <div className="workflow-info-meta-item">
                      <span className="workflow-info-meta-label">Cost Est.</span>
                      <span className="workflow-info-meta-value">{totals.cost}</span>
                    </div>
                  </div>
                </div>

                {/* RIGHT BOX: Final Tech Stack */}
                <div className="final-stack-card">
                  <h3 className="workflow-info-title">Final Tech Stack</h3>
                  <div className="stack-tools-list">
                    {getUniqueSelectedTools().length > 0 ? (
                      getUniqueSelectedTools().map((tool, i) => (
                        <div key={i} className="stack-tool-tag">
                          <img src={tool.logo} alt="" onError={e => e.target.style.display='none'} />
                          <span>{tool.name}</span>
                        </div>
                      ))
                    ) : (
                      <span style={{color: 'var(--black-light)', fontSize: '0.9rem'}}>No tools selected yet.</span>
                    )}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
}

ReactDOM.render(<WorkflowApp />, document.getElementById('workflow-root'));