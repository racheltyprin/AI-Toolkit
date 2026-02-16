(function() {
    // Get workflow and tool selections from localStorage
    let planData = null;
    let WORKFLOW_ID = 'ai-app-builder'; // Default fallback
    let selectedToolsByStep = {}; // { stepIndex: [tool, tool] }
    let totals = null;
    
    // Try to load from localStorage (saved by workflows.jsx)
    const savedPlan = localStorage.getItem('currentProjectPlan');
    if (savedPlan) {
        try {
            planData = JSON.parse(savedPlan);
            WORKFLOW_ID = planData.workflowKey;
            selectedToolsByStep = planData.selectedTools || {};
            totals = planData.totals || null;
            console.log('Loaded plan data:', planData);
        } catch (e) {
            console.error('Error parsing saved plan:', e);
        }
    }
    
    // Initialize the page
    function init() {
        const workflow = workflowTypes[WORKFLOW_ID];
        if (!workflow) {
            console.error('Workflow not found:', WORKFLOW_ID);
            return;
        }
        
        renderWorkflow(workflow, planData);
    }
    
    // Main render function
    function renderWorkflow(workflow, planData) {
        // Update title, subtitle, description
        document.getElementById('workflow-title').textContent = workflow.name; // Changed .title to .name
        document.getElementById('workflow-subtitle').textContent = workflow.name; // or leave blank if no subtitle
        document.getElementById('workflow-description').textContent = workflow.description;

        // Update project info - use totals from planData if available
        if (totals) {
            document.getElementById('time-estimate').textContent = totals.time;
            document.getElementById('cost-estimate').textContent = totals.cost;
            document.getElementById('difficulty-estimate').textContent = workflow.difficulty;
        } else {
            document.getElementById('time-estimate').textContent = workflow.time;
            document.getElementById('cost-estimate').textContent = workflow.cost;
            document.getElementById('difficulty-estimate').textContent = workflow.difficulty;
        }
        
        // Render tech stack from selected tools
        renderTechStack();
        
        // Render all steps with selected tools
        renderSteps(workflow.steps);
    }
    
    // Render tech stack chips from selected tools
    function renderTechStack() {
        const container = document.getElementById('tech-stack-chips');
        
        // Get all unique selected tools
        const allTools = Object.values(selectedToolsByStep).flat();
        const uniqueTools = getUniqueTools(allTools);
        
        if (uniqueTools.length === 0) {
            container.innerHTML = '<span style="color: var(--black-light); font-size: 0.9rem;">No tools selected</span>';
            return;
        }
        
        container.innerHTML = uniqueTools.map(tool => {
            return `
                <div class="tool-chip">
                    <img src="${tool.logo}" alt="${tool.name}" class="tool-chip-logo" onerror="this.style.display='none'">
                    <span class="tool-chip-name">${tool.name}</span>
                </div>
            `;
        }).join('');
    }
    
    // Get unique tools (by name) from array
    function getUniqueTools(toolsArray) {
        const seen = new Set();
        return toolsArray.filter(tool => {
            const duplicate = seen.has(tool.name);
            seen.add(tool.name);
            return !duplicate;
        });
    }
    
    // Render all step cards
    function renderSteps(steps) {
        const container = document.getElementById('steps-container');
        
        container.innerHTML = steps.map((step, index) => {
            // Get selected tools for this step from planData
            const stepTools = selectedToolsByStep[index] || [];
            
            if (stepTools.length === 0) {
                // No tools selected for this step - skip it or show placeholder
                return `
                    <div class="step-card">
                        <div class="step-header">
                            <div class="step-number">${index + 1}</div>
                            <div class="step-title-block">
                                <h3>${step.title}</h3>
                                <p class="step-description">${step.description}</p>
                                <p style="color: var(--black-light); font-size: 0.9rem; margin-top: 0.5rem;">No tools selected for this step</p>
                            </div>
                        </div>
                    </div>
                `;
            }
            
            // Render cards for each selected tool in this step
            return stepTools.map(tool => {
                const tutorial = getTutorial(tool.name);
                
                if (!tutorial) {
                    console.warn('Missing tutorial for:', tool.name);
                    return '';
                }
                
                return renderStepCard(step, tool, tutorial, index + 1);
            }).join('');
            
        }).join('');
    }
    
    // Render individual step card
    function renderStepCard(step, tool, tutorial, stepNumber) {
        return `
            <div class="step-card">
                <div class="step-header">
                    <div class="step-number">${stepNumber}</div>
                    <div class="step-title-block">
                        <h3>${step.title}</h3>
                        <p class="step-description">${step.description}</p>
                    </div>
                </div>

                <!-- Tool Chip -->
                <div class="tool-chip-container">
                    <div class="tool-chip">
                        <img src="${tool.logo}" alt="${tool.name}" class="tool-chip-logo" onerror="this.style.display='none'">
                        <span class="tool-chip-name">${tool.name}</span>
                    </div>
                </div>

                <!-- Quick Start -->
                <div class="step-section">
                    <h5 class="step-section-title">Quick Start</h5>
                    <ol class="instruction-list">
                        ${tutorial.quickStart.map(item => `<li>${stripHtmlTags(item)}</li>`).join('')}
                    </ol>
                </div>

                <!-- Step by Step -->
                ${tutorial.steps && tutorial.steps.length > 0 ? `
                <div class="step-section">
                    <h5 class="step-section-title">Step by Step Instructions</h5>
                    <ol class="instruction-list">
                        ${tutorial.steps.map(s => `<li><strong>${s.title}:</strong> ${stripHtmlTags(s.content)}</li>`).join('')}
                    </ol>
                </div>
                ` : ''}

                <!-- Common Mistakes -->
                ${tutorial.mistakes && tutorial.mistakes.length > 0 ? `
                <div class="step-section">
                    <h5 class="step-section-title">Common Mistakes</h5>
                    <ul class="mistakes-list">
                        ${tutorial.mistakes.map(mistake => `<li>${stripHtmlTags(mistake)}</li>`).join('')}
                    </ul>
                </div>
                ` : ''}
            </div>
        `;
    }
    
    // Helper: Get tutorial by tool name
    function getTutorial(toolName) {
        // Convert tool name to tutorial key format
        const key = toolName.toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-|-$/g, '');
        
        return tutorials[key];
    }
    
    // Helper: Strip HTML tags for display
    function stripHtmlTags(html) {
        const tmp = document.createElement('div');
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || '';
    }
    
    // PDF Export function
    window.exportToPDF = function() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        const workflow = workflowTypes[WORKFLOW_ID];
        
        let yPos = 20; // Starting vertical position in mm
    
        // --- Header ---
        doc.setFontSize(22);
        doc.setFont("helvetica", "bold");
        doc.text(workflow.name, 20, yPos);
        
        yPos += 10;
        doc.setFontSize(12);
        doc.setFont("helvetica", "normal");
        // This wraps the description so it doesn't run off the page
        const splitDesc = doc.splitTextToSize(workflow.description, 170);
        doc.text(splitDesc, 20, yPos);
        
        yPos += (splitDesc.length * 7) + 10;
    
        // --- Render Steps ---
        workflow.steps.forEach((step, index) => {
            const stepTools = selectedToolsByStep[index] || [];
            if (stepTools.length === 0) return; // Skip steps with no tools
    
            // Check for page overflow
            if (yPos > 250) {
                doc.addPage();
                yPos = 20;
            }
    
            doc.setFontSize(16);
            doc.setFont("helvetica", "bold");
            doc.text(`${index + 1}. ${step.title}`, 20, yPos);
            yPos += 8;
    
            stepTools.forEach(tool => {
                const tutorial = getTutorial(tool.name);
                
                doc.setFontSize(12);
                doc.setFont("helvetica", "bold");
                doc.text(`Tool: ${tool.name}`, 25, yPos);
                yPos += 6;
    
                // Quick Start Items
                doc.setFont("helvetica", "normal");
                tutorial.quickStart.forEach(item => {
                    // Remove HTML tags for the PDF
                    const cleanItem = stripHtmlTags(item);
                    const splitItem = doc.splitTextToSize(`• ${cleanItem}`, 160);
                    doc.text(splitItem, 30, yPos);
                    yPos += (splitItem.length * 5) + 2;
                });
                
                yPos += 5; // Extra spacing between tools
            });
            
            yPos += 5; // Extra spacing between steps
        });
    
        doc.save('ai-project-plan.pdf');
    };
    
    // Initialize on page load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();