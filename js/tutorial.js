(function() {
    function getToolFromURL() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('tool');
    }

    function renderTutorial(toolSlug) {
        // 1. Ensure toolsData exists
        if (typeof toolsData === 'undefined') {
            console.error("Data.js not loaded properly.");
            showError();
            return;
        }

        // 2. Find tool (Case-insensitive check)
        const tool = toolsData.find(t => t.id.toLowerCase() === toolSlug.toLowerCase());
        
        if (!tool) {
            showError();
            return;
        }

        // 3. Update UI
        document.title = `${tool.name} // AI TOOLBOX`;

        // Header
        document.getElementById('tutorial-header').innerHTML = `
        <div class="stage-content-left">
        <span class="stage-badge"> ${tool.category} // ${tool.product.toUpperCase()}</span>
        <h2 class="stage-title">${tool.name}</h2>
        <p class="stage-description">${tool.tagline}</p>
        </div>
        
`       ;

        // Quick Start / Use Cases
        document.getElementById('quick-start').innerHTML = `
            <h3 class="section-label">// Core Capabilities</h3>
            <div class="quick-start-box">
                <ul style="padding-left: 20px;">
                    ${tool.useCases.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        `;

        // Steps (Parsing the guide array)
        const stepsContainer = document.getElementById('steps-container');
        stepsContainer.innerHTML = tool.guide.map((stepText, index) => {
            const cleanText = stepText.replace(/<\/?strong>/g, '');
            const parts = cleanText.split(':');
            const title = parts.length > 1 ? parts[0] : `Step ${index + 1}`;
            const content = parts.length > 1 ? parts.slice(1).join(':') : stepText;

            return `
                <div class="step-card">
                    <div class="step-header">
                        <span class="step-number">0${index + 1}</span>
                        <h4>${title}</h4>
                    </div>
                    <div class="step-body">
                        <p>${content}</p>
                    </div>
                </div>
            `;
        }).join('');

        // Example Section
        document.getElementById('example-project').innerHTML = `
            <h4 class="sidebar-label">// Example Project</h4>
            <div class="sidebar-content">
                <h5 style="font-weight:900; margin-bottom:5px;">${tool.example.title}</h5>
                <p style="font-size:0.85rem;"><strong>Goal:</strong> ${tool.example.goal}</p>
                ${tool.example.prompt !== 'N/A' ? `
                    <div class="prompt-box">
                        <code>${tool.example.prompt}</code>
                    </div>
                ` : ''}
            </div>
        `;

        // Mistakes
        document.getElementById('mistakes-section').innerHTML = `
            <h4 class="sidebar-label">// Common Pitfalls</h4>
            <ul style="padding-left: 15px; font-size: 0.8rem;">
                ${tool.mistakes.map(m => `<li style="margin-bottom:8px;">${m}</li>`).join('')}
            </ul>
        `;

        // Next Steps
        document.getElementById('next-steps').innerHTML = `
            <div class="next-steps-card">
                <h4 style="color:var(--illuminating); margin-bottom:10px;">🎯 NEXT STEPS</h4>
                <ul style="list-style:none; padding:0; font-size:0.85rem;">
                    ${tool.nextSteps.map(s => `<li style="margin-bottom:5px;">→ ${s}</li>`).join('')}
                </ul>
            </div>
        `;

        // Strategic Fit
        document.getElementById('not-use-section').innerHTML = `
            <h4 class="sidebar-label">// Constraints</h4>
            <p style="font-size:0.75rem; color:#666;">${tool.notUse}</p>
        `;
    }

    function showError() {
        document.getElementById('error-message').classList.remove('hidden');
        const grid = document.querySelector('.tutorial-grid');
        const divider = document.querySelector('.expansion-divider-line');
        if(grid) grid.style.display = 'none';
        if(divider) divider.style.display = 'none';
    }

    const toolId = getToolFromURL();
    if (toolId) renderTutorial(toolId);
    else showError();
})();