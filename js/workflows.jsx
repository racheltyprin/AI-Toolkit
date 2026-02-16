const { useState } = React;

function WorkflowApp() {
  // --- 1. STATE MANAGEMENT ---
  const [selectedWorkflow, setSelectedWorkflow] = useState(null);
  const [expandedSteps, setExpandedSteps] = useState({});
  const [selectedTools, setSelectedTools] = useState({}); // Stores { stepIndex: [tool, tool] }
  
  // Custom Builder States
  const [customName, setCustomName] = useState("");
  const [customDesc, setCustomDesc] = useState("");
  const [customSteps, setCustomSteps] = useState([
    { title: '', description: '', toolCategories: ['all'] }
  ]);

  // Determine if we are in "Custom" mode or using a template
  const isCustomMode = selectedWorkflow === 'custom';
  const selectedWorkflowData = isCustomMode 
    ? { name: customName, steps: customSteps } 
    : workflowTypes[selectedWorkflow];

  // --- 2. HELPER FUNCTIONS ---
  
  // Open/Close tool selection for a step
  const toggleStep = (stepIndex) => {
    setExpandedSteps(prev => ({ ...prev, [stepIndex]: !prev[stepIndex] }));
  };

  // Select/Deselect a tool for a specific step
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

  // Add a new blank step (Custom Mode only)
  const addCustomStep = () => {
    setCustomSteps([...customSteps, { title: '', description: '', toolCategories: ['all'] }]);
  };

  // Remove a step and clean up its tools (Custom Mode only)
  const removeCustomStep = (indexToRemove) => {
    if (customSteps.length <= 1) return;
    
    // Remove the step from the list
    const updatedSteps = customSteps.filter((_, index) => index !== indexToRemove);
    setCustomSteps(updatedSteps);

    // Re-map the tools so they stay with the correct remaining steps
    const newTools = {};
    Object.keys(selectedTools).forEach(key => {
      const idx = parseInt(key);
      if (idx < indexToRemove) newTools[idx] = selectedTools[idx];
      if (idx > indexToRemove) newTools[idx - 1] = selectedTools[idx];
    });
    setSelectedTools(newTools);
  };

  // Update text for title or description in custom mode
  const updateCustomStep = (index, field, value) => {
    const updated = [...customSteps];
    updated[index][field] = value;
    setCustomSteps(updated);
  };

  // --- 3. MATH & TOTALS ---
  
  const calculateTotals = () => {
    if (!selectedWorkflowData) return { count: 0, time: "0 hours", cost: "$0" };
    
    const allSelected = Object.values(selectedTools).flat();
    const uniqueTools = Array.from(new Set(allSelected.map(t => t.name)));
    
    // Custom steps count as 1 hour each; templates use their own base time
    const baseTimeNum = isCustomMode ? customSteps.length : parseInt(selectedWorkflowData.time || 0);
    const totalTime = baseTimeNum + (uniqueTools.length * 0.5);
    const paidCount = allSelected.filter(t => t.pricing === 'paid').length;

    return {
      count: uniqueTools.length,
      time: `${totalTime} hours`,
      cost: paidCount > 0 ? `Est. $${paidCount * 15}/mo` : "$0 (Free Stack)"
    };
  };

  const totals = calculateTotals();

  const getUniqueSelectedTools = () => {
    const allSelected = Object.values(selectedTools).flat();
    const seen = new Set();
    return allSelected.filter(tool => {
      const duplicate = seen.has(tool.name);
      seen.add(tool.name);
      return !duplicate;
    });
  };

  // --- 4. NAVIGATION ---

  const handleGeneratePlan = () => {
    if (!selectedWorkflow) {
      alert("Please select a workflow first.");
      return;
    }
  
    const planData = {
      workflowKey: selectedWorkflow,
      selectedTools: selectedTools,
      totals: totals,
      customWorkflowData: isCustomMode ? {
        name: customName || "Custom Project Plan",
        description: customDesc || "Custom AI Workflow",
        steps: customSteps
      } : null
    };
    
    localStorage.setItem('currentProjectPlan', JSON.stringify(planData));
    window.location.href = 'projectplan.html';
  };

  // --- 5. RENDER ---

  return (
    <main className="main-content">
      <div className="content-wrapper">
        <h1 className="page-title">Workflow Builder</h1>
        
        {/* Step 1: Select Workflow Type */}
        <div className="workflow-selector">
          <div className="workflow-buttons">
            {Object.keys(workflowTypes).map(key => (
              <button
              key={key}
              className={`workflow-button ${selectedWorkflow === key ? 'active' : ''}`}
              onClick={() => {
                  setSelectedWorkflow(key);
                  setExpandedSteps({});
                  
                  // Auto-load tools for templates, clear for 'custom'
                  // Auto-load specific default tools for templates
                if (key !== 'custom' && workflowTypes[key]) {
                  const autoSelected = {};
                  workflowTypes[key].steps.forEach((step, index) => {
                    let match;
                    
                    // 1. Try to find the specific tool by name (e.g., "ChatGPT")
                    if (step.defaultToolName) {
                      match = tools.find(t => t.name.toLowerCase() === step.defaultToolName.toLowerCase());
                    }
                    
                    // 2. Fallback: If no name provided or tool not found, grab first matching category
                    if (!match) {
                      match = tools.find(t => step.toolCategories.includes(t.category));
                    }
                    
                    if (match) autoSelected[index] = [match];
                  });
                  setSelectedTools(autoSelected);
                }
              }}
            >
                {workflowTypes[key].name}
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Custom Project Name & Global Description (Only in Custom Mode) */}
        {isCustomMode && (
          <div className="custom-builder-inputs" style={{ marginBottom: '2rem' }}>
            <input 
              className="title-input" 
              placeholder="Project Name (e.g., My AI Portfolio)" 
              value={customName}
              onChange={(e) => setCustomName(e.target.value)}
              style={{ width: '100%', padding: '12px', fontSize: '1.5rem', fontWeight: '700', border: 'none', borderBottom: '2px solid var(--cardinal-light)', outline: 'none', marginBottom: '10px' }} 
            />
            <textarea 
              placeholder="What are you building? (Overall project description)" 
              value={customDesc}
              onChange={(e) => setCustomDesc(e.target.value)}
              style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #eee', minHeight: '80px', fontFamily: 'inherit' }} 
            />
          </div>
        )}

        <div className="math-container">
          {selectedWorkflow && (
            <>
              {/* Step 3: The List of Steps (The "Math" Rows) */}
              <div className="math-steps-list">
                {(isCustomMode ? customSteps : workflowTypes[selectedWorkflow].steps).map((step, index) => {
                  const availableTools = isCustomMode ? tools : tools.filter(t => step.toolCategories.includes(t.category));
                  const activeTools = selectedTools[index] || [];
                  const isExpanded = expandedSteps[index];

                  return (
                    <div key={index} className="math-row">
                      <div className="math-operator">{index === 0 ? "" : "+"}</div>
                      
                      <div className="workflow-step">
                        {/* Card Header: Title and Delete Button */}
                        <div className="workflow-step-header">
                      <div className="workflow-step-number">{index + 1}</div>
                      
                      {isCustomMode ? (
                        <input 
                          className="step-title-input" 
                          placeholder="Step Title..." 
                          value={step.title}
                          onChange={(e) => updateCustomStep(index, 'title', e.target.value)}
                        />
                      ) : (
                        <div className="workflow-step-title">{step.title}</div>
                      )}

                      {isCustomMode && customSteps.length > 1 && (
                        <button className="delete-step-btn" onClick={() => removeCustomStep(index)}>✕</button>
                      )}
                    </div>
                        
                        {/* Step Description Section */}
                        <div className="step-description-area" style={{ margin: '10px 0' }}>
                          {isCustomMode ? (
                            <textarea 
                              className="step-desc-input"
                              placeholder="Describe this specific step..."
                              value={step.description}
                              onChange={(e) => updateCustomStep(index, 'description', e.target.value)}
                              style={{ width: '100%', border: 'none', background: 'transparent', fontSize: '0.85rem', color: 'var(--black-light)', resize: 'none', fontFamily: 'inherit' }}
                            />
                          ) : (
                            <p className="workflow-step-description">{step.description}</p>
                          )}
                        </div>
                        
                        {/* Tool Selection Button */}
                        <div className="step-actions">
                          <button className="filter-chip" onClick={() => toggleStep(index)}>
                             {availableTools.length} Tools Available {isExpanded ? '▴' : '▾'}
                          </button>
                        </div>

                        {/* Dropdown for Tool Selection */}
                        {isExpanded && (
                          <div className="math-dropdown">
                            {availableTools.map((tool, i) => {
                              const isSelected = activeTools.some(t => t.name === tool.name);
                              return (
                                <div key={i} className={`tool-option ${isSelected ? 'selected' : ''}`} onClick={() => handleToolToggle(index, tool)}>
                                  <span>{tool.name}</span>
                                  {isSelected && <span className="check">✓</span>}
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>

                      {/* Right Side: Selected Tools Visualization */}
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

              {/* Add Step Button (Custom Only) */}
              {isCustomMode && (
                <button className="filter-chip" onClick={addCustomStep} style={{margin: '1.5rem 0 1.5rem 64px', background: 'var(--fog)', cursor: 'pointer', fontWeight: 'bold'}}>
                  + Add New Step
                </button>
              )}

              <div className="math-sum-line"></div>

              {/* Footer: Summary and Tech Stack */}
              <div className="math-footer-container">
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

                <div className="final-stack-card">
                  <h3 className="workflow-info-title">Final Tech Stack</h3>
                  <div className="stack-tools-list">
                    {getUniqueSelectedTools().map((tool, i) => (
                        <div key={i} className="stack-tool-tag">
                          <img src={tool.logo} alt="" />
                          <span>{tool.name}</span>
                        </div>
                    ))}
                  </div>
                </div>
              </div>

              <button className="generate-plan-btn" onClick={handleGeneratePlan}>
                Generate Detailed Project Plan →
              </button> 
            </>
          )}
        </div>
      </div>
    </main>
  );
}

ReactDOM.render(<WorkflowApp />, document.getElementById('workflow-root'));