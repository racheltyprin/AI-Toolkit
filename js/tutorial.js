

/* data.js declares `const toolsData = [...]` which isn't automatically
   on window in all environments. This makes it available either way. */
   if (typeof toolsData !== "undefined" && !window.toolsData) {
    window.toolsData = toolsData;
}

/* ============================================================
   HELPERS
   ============================================================ */

/** Reads ?tool=<id> from the URL. */
function getToolId() {
    const params = new URLSearchParams(window.location.search);
    return params.get("tool");
}

/**
 * Finds a tool by id inside window.toolsData.
 * Supports both array format:  [ { id: "zapier", ... }, ... ]
 * and object format:           { zapier: { id: "zapier", ... }, ... }
 */
function findTool(id) {
    if (!id || !window.toolsData) return null;
    if (Array.isArray(window.toolsData)) {
        return window.toolsData.find(t => t.id === id) || null;
    }
    return window.toolsData[id] || null;
}

/** Maps difficulty string  CSS modifier class. */
function diffClass(difficulty) {
    if (!difficulty) return "";
    switch (difficulty.toLowerCase()) {
        case "easy":   return "diff-easy";
        case "hard":   return "diff-hard";
        default:       return "diff-medium";
    }
}

/* ============================================================
   RENDER — NOTEBOOK HEADER
   ============================================================ */
function renderHeader(tool) {
    return `
        <div class="nb-logo-fallback" id="logo-fallback">
            ${(tool.name || "?").charAt(0)}
        </div>
        <img
            class="nb-logo"
            id="tool-logo"
            src="${tool.logo || ""}"
            alt="${tool.name} logo"
            onerror="
                this.style.display='none';
                document.getElementById('logo-fallback').style.display='flex';
            "
        />
        <div class="nb-header-text">
            <div class="nb-tool-name">${tool.name || ""}</div>
            <div class="nb-tagline">${tool.tagline || ""}</div>
        </div>
        <div class="nb-header-meta">
            <a class="nb-url-btn" href="${tool.url || "#"}" target="_blank" rel="noopener">
                Visit Site
            </a>
        </div>
    `;
}

/* ============================================================
   RENDER — LEFT CUE COLUMN
   Quick-reference: cost, difficulty, URL
   ============================================================ */
function renderLeftColumn(tool) {
    const dc = diffClass(tool.difficulty);
    const videoUrl = (tool.video || "").trim();

    const videoBtn = videoUrl ? `
        <a class="left-video-btn" href="${videoUrl}" target="_blank" rel="noopener">
            Video Tutorial
        </a>
    ` : `
        <span class="left-video-btn left-video-btn--disabled">
            Video Tutorial
        </span>
    `;

    return `
        <div class="left-column">
            <span class="section-label">// Quick Info</span>

            <div class="meta-pill cost">
                <span class="meta-pill-dot"></span>
                <span>${tool.pricingDetails || tool.pricing || "N/A"}</span>
            </div>

            <div class="meta-pill ${dc}">
                <span class="meta-pill-dot"></span>
                <span>Difficulty: ${tool.difficulty || "N/A"}</span>
            </div>

            ${videoBtn}
        </div>
    `;
}

/* ============================================================
   RENDER — RIGHT NOTES COLUMN SECTIONS
   Each section() call wraps content in a labelled row block.
   ============================================================ */

function section(label, contentHTML) {
    return `
        <div class="nb-row-content">
            <div class="row-label">
                <span class="section-label">${label}</span>
            </div>
            ${contentHTML}
        </div>
    `;
}

function renderDescription(tool) {
    return section("// Description", `
        <p class="body-text">${tool.desc || ""}</p>
    `);
}

function renderUseCases(tool) {
    if (!tool.useCases || !tool.useCases.length) return "";
    const chips = tool.useCases
        .map(u => `<span class="chip">${u}</span>`)
        .join("");
    return section("// Use Cases", `<div class="chip-list">${chips}</div>`);
}

function renderGuide(tool) {
    if (!tool.guide || !tool.guide.length) return "";
    const steps = tool.guide
        .map((step, i) => `
            <div class="guide-step">
                <div class="step-num">${String(i + 1).padStart(2, "0")}</div>
                <div class="step-text">${step}</div>
            </div>
        `)
        .join("");
    return section("// Step-by-Step Guide", `<div class="guide-steps">${steps}</div>`);
}

function renderMistakes(tool) {
    if (!tool.mistakes || !tool.mistakes.length) return "";
    const items = tool.mistakes
        .map(m => `
            <div class="mistake-item">
                <div class="mistake-x">--</div>
                <div>${m}</div>
            </div>
        `)
        .join("");
    return section("// Common Mistakes", `<div class="mistake-list">${items}</div>`);
}

function renderVerdict(tool) {
    if (!tool.useWhen && !tool.notUse) return "";
    return section("// When to Use / Not to Use", `
        <div class="verdict-grid">
            <div class="verdict-box use">
                <span class="verdict-head">Use for</span>
                <p>${tool.useWhen || "N/A"}</p>
            </div>
            <div class="verdict-box no">
                <span class="verdict-head">Avoid For</span>
                <p>${tool.notUse || "N/A"}</p>
            </div>
        </div>
    `);
}



function renderRightColumn(tool) {
    return `
        <div class="right-column">
            ${renderDescription(tool)}
            ${renderUseCases(tool)}
            ${renderGuide(tool)}
            ${renderMistakes(tool)}
            ${renderVerdict(tool)}
        </div>
    `;
}


/* ============================================================
   MOUNT — Entry point
   ============================================================ */
function renderTutorial() {
    const id   = getToolId();
    const tool = findTool(id);

    /* ── Tool not found or no tutorial ── */
    if (!tool || !tool.hasTutorial) {
        document.getElementById("notebook").style.display = "none";
        document.getElementById("error-state").style.display = "block";
        return;
    }

    /* ── Page title ── */
    document.title = `AI Toolbox - ${tool.name}`;

    /* ── Header ── */
    document.getElementById("nb-header").innerHTML = renderHeader(tool);

    /* ── Cornell body:  left-column | right-column + summary spanning both ── */
    document.getElementById("nb-body").innerHTML =
        renderLeftColumn(tool) +
        renderRightColumn(tool);
}

document.addEventListener("DOMContentLoaded", renderTutorial);