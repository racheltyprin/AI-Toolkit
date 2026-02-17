/* ============================================================
   1. DATA DEFINITIONS
   ============================================================ */
/**
 * rawRoadmap defines the structure of the project phases.
 * diffKey: 1 = Low, 2 = Medium, 3 = High
 */
const rawRoadmap = [
    {
        id: "arc-1",
        title: "Phase 1: Research and Exploration",
        subsections: [
            { id: "w1", diffKey: 1, name: "Research the Problem", question: "Have you clearly defined your research scope and stakeholders?", tools: ["perplexity", "elicit", "chatgpt", "claude"], desc: "Dive into the landscape of your research topic. Explore the context, identify stakeholders, and define the scope of your inquiry." },
            { id: "w2", diffKey: 3, name: "Gauge User Interest", question: "Do you have data on real user pain points and motivations?", tools: ["taskade", "elicit"], desc: "Engage potential users early to understand their needs, motivations, and pain points." },
            { id: "w3", diffKey: 2, name: "Evaluate Existing Solutions", question: "Have you identified the gaps in current market solutions?", tools: ["claude", "chatgpt"], desc: "Study the competitive or adjacent solutions already in the problem space. Identify gaps and opportunities."}
        ]
    },
    {
        id: "arc-2",
        title: "Phase 2: Prototype Building and Iteration",
        subsections: [
            { id: "w4", diffKey: 2, name: "Product Designing", question: "Have you translated your research into a concrete design or wireframe?", tools: ["vizcom", "designer", "dalle-leonardo", "uizard"], desc: "Translate insights into concrete design concepts. Sketch or wireframe potential solutions to explore flow." },
            { id: "w5", diffKey: 3, name: "Gathering User Feedback", question: "Have you tested your initial design with potential users?", tools: ["elicit","taskade"], desc: "Test early prototypes with users to validate assumptions and uncover unanticipated needs." },
            { id: "w6", diffKey: 1, name: "Low to High Fidelity Prototypes", question: "Is your prototype functional enough to simulate the real experience?", tools: ["figma", "framer", "canva"], desc: "Start with quick, rough prototypes, then iteratively refine toward high-fidelity, functional models." },
        ]
    },
    {
        id: "arc-3",
        title: "Phase 3: Create an MVP",
        subsections: [
            { id: "w7", diffKey: 1, name: "Product Planning", question: "Have you prioritized the essential features for your launch?", tools: ["taskade", "chatgpt"], desc: "Define the scope, features, and roadmap of your MVP. Prioritize what is essential to learn." },
            { id: "w8", diffKey: 3, name: "Product Creation", question: "Is your functional MVP built and ready for launch?", tools: ["softr", "glide", "carrd","framer","zapier"], desc: "Bring your MVP to life using the refined designs. Focus on building a functional, testable version." },
            { id: "w9", diffKey: 2, name: "Product Test", question: "Have you measured the impact of your solution with live users?", tools: ["nanobanana", "elicity", "taskade"], desc: "Evaluate your MVP with real users to validate assumptions and identify next steps." }
        ]
    }
];

/* ============================================================
   2. PURE LOGIC & HYDRATION
   ============================================================ */

/** Converts numerical keys into readable labels */
const getDiffLabel = (num) => {
    if (num === 3) return "High";
    if (num === 2) return "Medium";
    return "Low";
};

/** Calculates cost label based on tool pricing data */
const getCost = (tools) => {
    if (tools.some(t => t.pricing === 'paid')) return "Paid";
    if (tools.some(t => t.pricing === 'student')) return "Free for Students";
    return "Free";
};

/** Merges raw roadmap with global tool data and calculates metadata */
function hydrateRoadmap(structure, toolsData) {
    return structure.map(phase => {
        const subsections = phase.subsections.map(sub => {
            const tools = sub.tools.map(id => toolsData.find(t => t.id === id)).filter(Boolean);
            const difficultyLabel = getDiffLabel(sub.diffKey);
            return { 
                ...sub, 
                tools, 
                difficulty: difficultyLabel, 
                cost: getCost(tools), 
                // Harder tasks are estimated at a week, others at 3 days
                time: sub.diffKey === 3 ? "1 Week" : "3 Days" 
            };
        });
        
        // Phase difficulty is determined by its hardest step
        const maxDiff = Math.max(...subsections.map(s => s.diffKey));
        return { 
            ...phase, 
            subsections, 
            difficulty: getDiffLabel(maxDiff), 
            cost: getCost(subsections.flatMap(s => s.tools)), 
            time: `${subsections.length * 3}-${subsections.length * 5} Days` 
        };
    });
}

/* ============================================================
   3. STATE MANAGEMENT
   ============================================================ */

const State = {
    get: (id) => localStorage.getItem(id) === 'true',
    set: (id, val) => {
        localStorage.setItem(id, val);
        updateStatus(); 
    },
    clear: () => { 
            localStorage.clear(); 
            location.reload(); 
        
    }
};

/**
 * Sequential Logic: Finds the first unchecked milestone
 * and updates the Navigator panel.
 */
function updateStatus() {
    const statusContainer = document.getElementById('quiz-result');
    const allSteps = rawRoadmap.flatMap(phase => phase.subsections);
    const nextStep = allSteps.find(step => !State.get(step.id));

    if (!nextStep) {
        statusContainer.innerHTML = `
            <div class="status-recommendation complete">
                <p><strong>🎉 All Milestones Complete!</strong></p>
                <p>You are ready for the Symposium.</p>
            </div>`;
        return;
    }

    statusContainer.innerHTML = `
        <div class="status-recommendation">
            <span class="section-label">Current Goal</span>
            <p class="quiz-hint">Focus on <strong>${nextStep.name}</strong> until you can answer "Yes" to:</p>
            <p class="quiz-question" style="margin-top:5px; color:var(--palo-alto-dark);">"${nextStep.question}"</p>
            <button class="jump-btn" onclick="jumpToStep('target-${nextStep.id}')">
                Jump to Tools ↓
            </button>
        </div>`;
}

/* ============================================================
   4. TEMPLATE HELPERS (Visual Components)
   ============================================================ */

const partPhaseHeader = (phase) => `
    <div class="phase-header-block">
        <h2 class="phase-title">${phase.title}</h2>
        <div class="phase-metrics">
            <span class="metric-pill">Time: ${phase.time}</span>
        </div>
    </div>`;

const partToolCard = (t) => `
    <a href="tutorial.html?tool=${t.id}" class="mini-tool-card expanded">
        <div class="card-top-half">
            <img src="${t.logo}" class="mini-logo" alt="${t.name}">
            <span class="tool-name-style">${t.name}</span>
        </div>
        <div class="card-bottom-half">
            <span class="spec-tag">${t.desc}</span>
        </div>
    </a>`;

    const partSubsection = (sub) => `
    <div class="subsection-row" id="target-${sub.id}">
        <div class="sub-sidebar">
            <span class="section-label">Milestone</span>
            <h3 class="sub-name">${sub.name}</h3>
            <div class="sub-metrics-vertical">
                <div class="sub-metric">Difficulty: ${sub.difficulty}</div>
                <div class="sub-metric">Est. Time: ${sub.time}</div>
            </div>
        </div>
        <div class="sub-content">
            <p class="body-text">${sub.desc}</p>
            <div class="tool-integration-grid">${sub.tools.map(partToolCard).join('')}</div>
        </div>
    </div>`;

const partQuizItem = (sub) => `
    <div class="quiz-item-block">
        <label class="quiz-item">
            <input type="checkbox" class="step-check" data-sub-id="${sub.id}" ${State.get(sub.id) ? 'checked' : ''}>
            <span class="custom-box"></span>
            <span class="quiz-item-name">${sub.name}</span>
        </label>
        <p class="quiz-item-question" style="font-size: 0.75rem; font-style: italic; color: #666; margin: 5px 0 0 32px; line-height: 1.3;">
            ${sub.question}
        </p>
    </div>`;

/* ============================================================
   5. RENDERERS & INITIALIZATION
   ============================================================ */

function renderApp(hydratedData) {
    const root = document.getElementById('roadmap-root');
    if (root) {
        root.innerHTML = hydratedData.map(phase => `
        <section class="phase-section" id="${phase.id}">
                ${partPhaseHeader(phase)}
                <div class="roadmap-notebook">${phase.subsections.map(partSubsection).join('')}</div>
            </section>
        `).join('');
    }

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

/** Handles smooth scroll and background highlight animation */
window.jumpToStep = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
        // Optional: Auto-collapse drawer on jump to clear view
        const drawer = document.getElementById('quiz-drawer');
        if (drawer) drawer.classList.add('collapsed');

        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Background Highlight Logic
        element.classList.remove('jump-highlight'); 
        void element.offsetWidth; // Force Reflow
        element.classList.add('jump-highlight');
        
        setTimeout(() => {
            element.classList.remove('jump-highlight');
        }, 2000);
    }
};

document.addEventListener("DOMContentLoaded", () => {
    if (typeof toolsData !== "undefined") {
        const hydrated = hydrateRoadmap(rawRoadmap, toolsData);
        renderApp(hydrated);
        updateStatus();
        if (window.location.hash) {
            const target = document.querySelector(window.location.hash);
            if (target) {
                setTimeout(() => {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        }

        const toggle = document.querySelector('.drawer-toggle');
        const drawer = document.querySelector('.quiz-drawer');

        // --- NEW LOGIC FOR SPECIFIC REDIRECT ---
        // Check if the URL contains "?open=true"
        const urlParams = new URLSearchParams(window.location.search);
        const shouldOpen = urlParams.get('open') === 'true';

        if (drawer) {
            if (shouldOpen) {
                // Open it immediately if coming from the specific link
                drawer.classList.remove('collapsed');
            } else {
                // Keep it closed by default for all other visits
                drawer.classList.add('collapsed');
            }
        }
        // ---------------------------------------

        if (toggle && drawer) {
            toggle.addEventListener('click', (e) => {
                e.preventDefault(); 
                drawer.classList.toggle('collapsed');
        
                // If drawer just opened, scroll content to top
                if (!drawer.classList.contains('collapsed')) {
                    const drawerContent = drawer.querySelector('.drawer-content');
                    if (drawerContent) drawerContent.scrollTop = 0;
                }
            });
        }

        document.addEventListener('change', (e) => {
            if (e.target.classList.contains('step-check')) {
                State.set(e.target.dataset.subId, e.target.checked);
            }
        });
    }
});