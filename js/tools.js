document.addEventListener('DOMContentLoaded', function() {
    // Reference the array from data.js
    const tools = toolsData;

    // State management - NOW WITH TWO FILTERS
    let currentCategory = "all";
    let currentProduct = "all";
    let activeToolCard = null;

    function renderTools() {
        const container = document.getElementById("tools-container");
        const countEl = document.getElementById("results-count");
        const emptyEl = document.getElementById("tools-empty");
        
        if (!container) return;

        // Filter the data based on BOTH filters
        const filtered = tools.filter(t => {
            const categoryMatch = currentCategory === "all" || t.category === currentCategory;
            const productMatch = currentProduct === "all" || t.product === currentProduct;
            return categoryMatch && productMatch; // Both must match
        });

        // Inject the cards into the HTML
        container.innerHTML = filtered.map(t => `
            <div class="tool-card" data-name="${t.name}">
                <div class="tool-header">
                    <img src="${t.logo}" class="tool-logo" onerror="this.style.display='none'">
                    <div>
                        <div class="tool-name">${t.name}</div>
                        <p class="tool-description">${t.desc}</p>
                    </div>
                </div>
            </div>
        `).join("");

        // Update the UI elements
        if (countEl) countEl.textContent = filtered.length;
        if (emptyEl) emptyEl.classList.toggle("hidden", filtered.length > 0);
    }

    function showDetail(toolName, cardElement) {
        const tool = tools.find(t => t.name === toolName);
        if (!tool) return;
    
        const panel = document.getElementById("tool-detail-panel");
        const content = document.getElementById("tool-detail-content");
        const layout = document.querySelector(".tools-page-layout");
        const resultsColumn = layout.querySelector(".tools-results-column");
    
        // --- Active card state ---
        if (activeToolCard) activeToolCard.classList.remove("active");
        cardElement.classList.add("active");
        activeToolCard = cardElement;
        layout.classList.add("panel-open");
    
        // --- Move panel depending on screen ---
        if (window.innerWidth <= 900) {
            // MOBILE: place panel directly under card
            cardElement.after(panel);
        } else {
            // DESKTOP: ensure panel is inside layout
            if (panel.parentNode !== layout) {
                layout.appendChild(panel);
            }
        }
    
        // --- Inject content ---
        content.innerHTML = `
            <div class="tool-detail-header">
                <img src="${tool.logo}" class="tool-detail-logo" onerror="this.style.display='none'">
                <h3 class="tool-detail-title">${tool.name}</h3>
            </div>
            <div class="tool-detail-section">
                <h4>// Overview</h4>
                <p>${tool.desc}</p>
            </div>
            <div class="tool-detail-section">
                <h4>// Use Cases</h4>
                <ul>${tool.useCases.map(u => `<li>${u}</li>`).join('')}</ul>
            </div>
            <a href="${tool.url}" target="_blank" class="action-btn">Launch ${tool.name}</a>
        `;
    
        panel.classList.remove("hidden");
    
        // --- Wait for layout so height is accurate ---
        requestAnimationFrame(() => {
            if (window.innerWidth > 900) {
                // ===== DESKTOP POSITIONING =====
        
                const layoutRect = layout.getBoundingClientRect();
                const cardRect = cardElement.getBoundingClientRect();
        
                // Desired alignment
                let offsetTop = cardRect.top - layoutRect.top;
        
                const panelHeight = panel.offsetHeight;
                const containerHeight = resultsColumn.offsetHeight;
        
                // --- spacing controls ---
                const TOP_GAP = 8;      // optional top breathing room
                const BOTTOM_GAP = 70;  // space from bottom edge
        
                // Clamp so panel never touches edges
                const maxOffset = containerHeight - panelHeight - BOTTOM_GAP;
        
                offsetTop = Math.min(offsetTop, maxOffset);
                offsetTop = Math.max(offsetTop, TOP_GAP);
        
                panel.style.marginTop = offsetTop + "px";
            } else {
                panel.scrollIntoView({ behavior: "smooth", block: "nearest" });
            }
        });
        
    }
    
    function hideDetail() {
        const panel = document.getElementById("tool-detail-panel");
        const layout = document.querySelector(".tools-page-layout");
        panel.style.marginTop = "0";

        
        panel.classList.add("hidden");
        layout.classList.remove("panel-open");
        
        if (activeToolCard) {
            activeToolCard.classList.remove("active");
            activeToolCard = null;
        }

        // Move panel back to layout container
        if (!layout.contains(panel)) {
            layout.appendChild(panel);
        }
    }

    // --- COLLAPSIBLE FILTER LOGIC ---
    function setupCollapsibleFilters() {
        document.querySelectorAll('.collapsible-filter').forEach(filterGroup => {
            const toggleBtn = filterGroup.querySelector('.filter-toggle-btn');
            
            if (toggleBtn) {
                toggleBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    const isOpen = !filterGroup.classList.contains('collapsed');
                    filterGroup.classList.toggle('collapsed', isOpen);
                    toggleBtn.setAttribute('aria-expanded', !isOpen);
                });
            }
        });
    }

    // --- EVENT LISTENERS ---

    // 1. Category Filter
    const filterCategory = document.getElementById("filter-category");
    if (filterCategory) {
        filterCategory.addEventListener("click", function(e) {
            const btn = e.target.closest(".filter-chip");
            if (!btn) return;

            currentCategory = btn.getAttribute("data-value");
            filterCategory.querySelectorAll(".filter-chip").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            hideDetail();
            renderTools();
        });
    }

    // 2. End Product Filter
    const filterProduct = document.getElementById("filter-product");
    if (filterProduct) {
        filterProduct.addEventListener("click", function(e) {
            const btn = e.target.closest(".filter-chip");
            if (!btn) return;

            currentProduct = btn.getAttribute("data-value");
            filterProduct.querySelectorAll(".filter-chip").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            hideDetail();
            renderTools();
        });
    }

    // 3. Tool Card Clicks
    document.getElementById("tools-container").addEventListener("click", function(e) {
        const card = e.target.closest(".tool-card");
        if (!card) return;
        showDetail(card.getAttribute("data-name"), card);
    });

    // 4. Close Detail Panel
    const closeBtn = document.getElementById("tool-detail-close");
    if (closeBtn) {
        closeBtn.addEventListener("click", hideDetail);
    }

    // 5. Handle window resize
    window.addEventListener("resize", function() {
        const panel = document.getElementById("tool-detail-panel");
        if (!panel.classList.contains("hidden")) {
            hideDetail();
        }
    });

    // Initialize
    setupCollapsibleFilters();
    renderTools();
});