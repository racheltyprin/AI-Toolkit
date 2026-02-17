/* ============================================================
   1. DATA DEFINITIONS
   ============================================================ */
   const rawRoadmap = [
    {
        id: "arc-1",
        title: "Arc 1: Introduction to Design Thinking",
        subsections: [
            { id: "w1", name: "Community Formation", tools: ["chatgpt", "taskade"], desc: "Meet and greet activities and setting program expectations." },
            { id: "w2", name: "Stakeholders & Research Communication", tools: ["claude", "canva"], desc: "Pecha Kucha-style sharing and framing research communication as a design practice." }
        ]
    },
    {
        id: "arc-2",
        title: "Arc 2: Applied Design to Research",
        subsections: [
            { id: "w3", name: "Needs Finding & Discovery", tools: ["elicit", "chatgpt"], desc: "Stakeholder mapping and identifying key players in your research context." },
            { id: "w4", name: "Empathetic Interviewing", tools: ["claude"], desc: "Framing discovery interviews and capturing observations and tensions." },
            { id: "w5", name: "Synthesis & Insight", tools: ["chatgpt", "taskade"], desc: "Identifying patterns, unmet needs, and framing 'How Might We' opportunities." },
            { id: "w6", name: "Ideation & Brainstorming", tools: ["dalle-leonardo", "vizcom"], desc: "Generating multiple solution directions under constraints." },
            { id: "w7", name: "Prototyping & Iteration", tools: ["uizard", "figma"], desc: "Building lightweight prototypes and engaging in rapid feedback loops." }
        ]
    },
    {
        id: "arc-3",
        title: "Arc 3: Final Project Development",
        subsections: [
            { id: "w8", name: "Work-in-Progress Sharing", tools: ["canva", "framer"], desc: "Reflecting on methods learned and cohort-based project feedback." },
            { id: "w9", name: "Refining Discovery & Direction", tools: ["softr", "glide"], desc: "Narrowing project scope and validating core assumptions." },
            { id: "w10", name: "Symposium Celebration", tools: ["carrd"], desc: "Final project sharing in a symposium-style open house." }
        ]
    }
];

/* ============================================================
   2. PURE LOGIC & HYDRATION (The "Brain")
   ============================================================ */

const getDiff = (tools) => {
    const d = tools.map(t => t.difficulty.toLowerCase());
    return d.some(v => v.includes('hard') || v.includes('high')) ? "High" : d.some(v => v.includes('medium')) ? "Medium" : "Low";
};

const getCost = (tools) => {
    if (tools.some(t => t.pricing === 'paid')) return "Paid";
    if (tools.some(t => t.pricing === 'student')) return "Free for Students";
    return "Free";
};

/** Pre-calculates all metrics so renderers are "dumb" */
function hydrateRoadmap(structure, toolsData) {
    return structure.map(phase => {
        const subsections = phase.subsections.map(sub => {
            const tools = sub.tools.map(id => toolsData.find(t => t.id === id)).filter(Boolean);
            const difficulty = getDiff(tools);
            return { ...sub, tools, difficulty, cost: getCost(tools), time: difficulty === "High" ? "1 Week" : "3 Days" };
        });
        const allTools = subsections.flatMap(s => s.tools);
        return { 
            ...phase, 
            subsections, 
            difficulty: getDiff(allTools), 
            cost: getCost(allTools), 
            time: `${subsections.length * 3}-${subsections.length * 5} Days` 
        };
    });
}

/* ============================================================
   3. STATE MANAGEMENT (LocalStorage)
   ============================================================ */

/* Add this to your State object in Section 3 */
const State = {
    get: (id) => localStorage.getItem(id) === 'true',
    set: (id, val) => {
        localStorage.setItem(id, val);
        updateStatus(); // Update the text message immediately
    },
    clear: () => { 
        if(confirm("Clear all progress?")) { 
            localStorage.clear(); 
            location.reload(); 
        }
    }
};

/* Add this new function to Section 5 (Renderers) */
function updateStatus() {
    const checks = Array.from(document.querySelectorAll('.step-check'));
    const checkedCount = checks.filter(c => c.checked).length;
    const statusText = document.getElementById('status-text');
    
    if (checkedCount === 0) {
        statusText.innerText = "Select your completed steps.";
    } else if (checkedCount === checks.length) {
        statusText.innerText = "All Arcs complete! Ready for the Symposium.";
    } else {
        statusText.innerText = `Finished ${checkedCount} milestones. Keep going!`;
    }
}

/* Add this function for the toggle button */
function toggleDrawer() {
    document.getElementById('quiz-drawer').classList.toggle('collapsed');
}

/* Update your DOMContentLoaded to call updateStatus at the start */
document.addEventListener("DOMContentLoaded", () => {
    if (typeof toolsData !== "undefined") {
        const hydrated = hydrateRoadmap(rawRoadmap, toolsData);
        renderApp(hydrated);
        updateStatus(); // Set initial text based on localStorage

        document.addEventListener('change', (e) => {
            if (e.target.classList.contains('step-check')) {
                State.set(e.target.dataset.subId, e.target.checked);
            }
        });
    }
});

/* ============================================================
   4. TEMPLATE HELPERS (Visual Components)
   ============================================================ */

const partPhaseHeader = (phase) => `
    <div class="phase-header-block">
        <h2 class="phase-title">${phase.title}</h2>
        <div class="phase-metrics">
            <span class="metric-pill">Diff: ${phase.difficulty}</span>
            <span class="metric-pill">Time: ${phase.time}</span>
            <span class="metric-pill">Cost: ${phase.cost}</span>
        </div>
    </div>`;

const partToolCard = (t) => `
    <a href="tutorial.html?tool=${t.id}" class="mini-tool-card expanded">
        <img src="${t.logo}" class="mini-logo">
        <div class="mini-info">
            <h4>${t.name}</h4>
            <span class="spec-tag">${t.pricing === 'student' ? 'Free for Students' : t.pricing}</span>
        </div>
    </a>`;

const partSubsection = (sub) => `
    <div class="subsection-row" id="target-${sub.id}">
        <div class="sub-sidebar">
            <span class="section-label">Milestone</span>
            <h3 class="sub-name">${sub.name}</h3>
            <div class="sub-metrics-vertical">
                <div class="sub-metric">Diff: ${sub.difficulty}</div>
                <div class="sub-metric">Cost: ${sub.cost}</div>
            </div>
        </div>
        <div class="sub-content">
            <p class="body-text">${sub.desc}</p>
            <div class="tool-integration-grid">${sub.tools.map(partToolCard).join('')}</div>
        </div>
    </div>`;

const partQuizItem = (sub) => `
    <label class="quiz-item">
        <input type="checkbox" class="step-check" data-sub-id="${sub.id}" ${State.get(sub.id) ? 'checked' : ''}>
        <span class="custom-box"></span>
        <span>${sub.name}</span>
    </label>`;

/* ============================================================
   5. RENDERERS (DOM Injection)
   ============================================================ */

function renderApp(hydratedData) {
    // Render Roadmap
    const root = document.getElementById('roadmap-root');
    if (root) {
        root.innerHTML = hydratedData.map(phase => `
            <section class="phase-section">
                ${partPhaseHeader(phase)}
                <div class="roadmap-notebook">${phase.subsections.map(partSubsection).join('')}</div>
            </section>
        `).join('');
    }

    // Render Quiz
    const quizList = document.getElementById('steps-list');
    if (quizList) {
        quizList.innerHTML = hydratedData.map(phase => `
            <div class="quiz-phase-group">
                <p class="quiz-phase-label">${phase.title}</p>
                ${phase.subsections.map(partQuizItem).join('')}
            </div>
        `).join('');
    }
}

/* ============================================================
   6. INITIALIZATION
   ============================================================ */

   document.addEventListener("DOMContentLoaded", () => {
    if (typeof toolsData !== "undefined") {
        const hydrated = hydrateRoadmap(rawRoadmap, toolsData);
        renderApp(hydrated);
        updateStatus(); 

        // --- DRAWER TOGGLE LOGIC ---
        const drawer = document.querySelector('.quiz-drawer');
        const toggle = document.querySelector('.drawer-toggle');

        if (toggle && drawer) {
            toggle.addEventListener('click', () => {
                drawer.classList.toggle('collapsed');
            });
        }

        // Global Event for Checkboxes
        document.addEventListener('change', (e) => {
            if (e.target.classList.contains('step-check')) {
                State.set(e.target.dataset.subId, e.target.checked);
            }
        });
    }
});