(function() {
    let planData = null;
    let currentWorkflow = null;
    let selectedToolsByStep = {}; 
    let totals = null;
    
    function init() {
        const savedPlan = localStorage.getItem('currentProjectPlan');
        if (!savedPlan) return;
        
        try {
            planData = JSON.parse(savedPlan);
            selectedToolsByStep = planData.selectedTools || {};
            totals = planData.totals || null;

            if (planData.workflowKey === 'custom' && planData.customWorkflowData) {
                currentWorkflow = planData.customWorkflowData;
            } else {
                currentWorkflow = workflowTypes[planData.workflowKey];
            }

            if (currentWorkflow) {
                renderWorkflow(currentWorkflow);
            }
        } catch (e) {
            console.error('Error initializing plan:', e);
        }
    }
    
    function renderWorkflow(workflow) {
        document.getElementById('workflow-title').textContent = workflow.name;
        document.getElementById('workflow-subtitle').textContent = workflow.name;
        document.getElementById('workflow-description').textContent = workflow.description;

        const difficulty = workflow.difficulty || "Flexible";
        
        if (totals) {
            document.getElementById('time-estimate').textContent = totals.time;
            document.getElementById('cost-estimate').textContent = totals.cost;
            document.getElementById('difficulty-estimate').textContent = difficulty;
        }
        
        renderTechStack();
        renderSteps(workflow.steps);
    }
    
    function renderTechStack() {
        const container = document.getElementById('tech-stack-chips');
        const allTools = Object.values(selectedToolsByStep).flat();
        const uniqueTools = getUniqueTools(allTools);
        
        if (uniqueTools.length === 0) {
            container.innerHTML = '<span>No tools selected</span>';
            return;
        }
        
        container.innerHTML = uniqueTools.map(tool => `
            <div class="tool-chip">
                <img src="${tool.logo}" alt="${tool.name}" class="tool-chip-logo" onerror="this.style.display='none'">
                <span class="tool-chip-name">${tool.name}</span>
            </div>
        `).join('');
    }

    function getUniqueTools(toolsArray) {
        const seen = new Set();
        return toolsArray.filter(tool => {
            const duplicate = seen.has(tool.name);
            seen.add(tool.name);
            return !duplicate;
        });
    }

    // --- CORRECTED RENDERING LOGIC ---
    function renderSteps(steps) {
        const container = document.getElementById('steps-container');
        if (!container) return;
    
        container.innerHTML = steps.map((step, index) => {
            const stepTools = selectedToolsByStep[index] || [];
            
            return `
                <div class="plan-step-card">
                    <div class="step-header">
                        <div class="plan-step-num">${index + 1}</div>
                        <div class="step-title-block">
                            <h3>${step.title || "Untitled Step"}</h3>
                            <p class="step-description">${step.description || "Follow the tools below to complete this stage."}</p>
                        </div>
                    </div>
    
                    <div class="step-tools-list">
                        ${stepTools.length > 0 ? stepTools.map((tool, toolIndex) => {
                            const tutorial = getTutorial(tool.name);
                            return `
                                ${toolIndex > 0 ? '<div class="plan-or-divider"><span>OR</span></div>' : ''}
                                
                                <div class="tool-implementation">
                                    <div class="tool-chip-container">
                                        <div class="tool-chip">
                                            <img src="${tool.logo}" alt="${tool.name}" class="tool-chip-logo">
                                            <span class="tool-chip-name">${tool.name}</span>
                                        </div>
                                    </div>
                                    ${tutorial ? `
                                        <div class="step-section">
                                            <h5 class="step-section-title">Quick Start</h5>
                                            <ol class="instruction-list">
                                                ${tutorial.quickStart.map(item => `<li>${stripHtmlTags(item)}</li>`).join('')}
                                            </ol>
                                        </div>
                                    ` : '<p class="no-tutorial">Setup instructions for this tool coming soon.</p>'}
                                </div>
                            `;
                        }).join('') : '<p class="no-tools">No tools selected for this step.</p>'}
                    </div>
                </div>
            `;
        }).join('');
    }
    
    function getTutorial(toolName) {
        if (!window.tutorials) return null;
        const key = toolName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
        return tutorials[key];
    }
    
    function stripHtmlTags(html) {
        const tmp = document.createElement('div');
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || '';
    }
    
    window.exportToPDF = function() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        if (!currentWorkflow) return;
        
        let yPos = 20;
        doc.setFontSize(22);
        doc.setFont("helvetica", "bold");
        doc.text(currentWorkflow.name, 20, yPos);
        
        yPos += 10;
        doc.setFontSize(12);
        const splitDesc = doc.splitTextToSize(currentWorkflow.description || "", 170);
        doc.text(splitDesc, 20, yPos);
        yPos += (splitDesc.length * 7) + 10;

        currentWorkflow.steps.forEach((step, index) => {
            const stepTools = selectedToolsByStep[index] || [];
            if (stepTools.length === 0) return;

            if (yPos > 240) { doc.addPage(); yPos = 20; }
            doc.setFontSize(16);
            doc.setFont("helvetica", "bold");
            doc.text(`${index + 1}. ${step.title}`, 20, yPos);
            yPos += 8;

            stepTools.forEach(tool => {
                const tutorial = getTutorial(tool.name);
                doc.setFontSize(12);
                doc.text(`Tool: ${tool.name}`, 25, yPos);
                yPos += 6;

                if (tutorial) {
                    doc.setFont("helvetica", "normal");
                    tutorial.quickStart.forEach(item => {
                        let cleanItem = stripHtmlTags(item).replace(/→/g, "->").trim();
                        const splitItem = doc.splitTextToSize(`- ${cleanItem}`, 155);
                        if (yPos > 270) { doc.addPage(); yPos = 20; }
                        doc.text(splitItem, 30, yPos);
                        yPos += (splitItem.length * 5) + 2;
                    });
                }
                yPos += 4; 
            });
            yPos += 6; 
        });
        doc.save(`${currentWorkflow.name.replace(/\s+/g, '-').toLowerCase()}-plan.pdf`);
    };
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();