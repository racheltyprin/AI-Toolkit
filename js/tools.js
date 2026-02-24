document.addEventListener('DOMContentLoaded', function() {
    // Reference the array from data.js
    const tools = toolsData;

    // --- STATE MANAGEMENT ---
    // Now tracks Category, Product, and Search Term
    let currentCategory = "all";
    let currentProduct = "all";
    let currentSearch = ""; 
    let activeToolCard = null;

    /**
     * Renders the tool cards based on all active filters
     */
    function renderTools() {
        const container = document.getElementById("tools-container");
        const countEl = document.getElementById("results-count");
        const emptyEl = document.getElementById("tools-empty");
        
        if (!container) return;
    
        const filtered = tools.filter(t => {
            const categoryMatch = currentCategory === "all" || t.category === currentCategory;
            const productMatch = currentProduct === "all" || t.product === currentProduct;
            
            const searchTerm = currentSearch.toLowerCase().trim();
            if (searchTerm === "") return categoryMatch && productMatch;
        
            // \b matches the beginning of a word. 
            // This will match "Art" or "Artistic" but NOT "startup" or "Framer"
            const regex = new RegExp(`\\b${searchTerm}`, 'i'); 
        
            const nameMatch = regex.test(t.name);
            const descMatch = regex.test(t.desc);
            const keywordMatch = t.keywords && t.keywords.some(k => regex.test(k));
            const useCaseMatch = t.useCases && t.useCases.some(uc => regex.test(uc));
        
            // Notice we are NOT including guide, mistakes, or nextSteps here
            const searchMatch = nameMatch || descMatch || keywordMatch || useCaseMatch;
        
            return categoryMatch && productMatch && searchMatch; 
        });
    
        // Debugging: Open your browser console (F12) to see this output!
        console.log(`Searching for: "${currentSearch}" | Found: ${filtered.length} tools`);
    
        // Inject cards
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
    
        if (countEl) countEl.textContent = filtered.length;
        if (emptyEl) emptyEl.classList.toggle("hidden", filtered.length > 0);
    }

    /**
     * UI Logic for showing tool details
     */
    function showDetail(toolName, cardElement) {
        const tool = tools.find(t => t.name === toolName);
        if (!tool) return;
    
        const panel = document.getElementById("tool-detail-panel");
        const content = document.getElementById("tool-detail-content");
        const container = document.querySelector(".stage-expansion-content");
        const layout = document.querySelector(".tools-page-layout");
    
        if (activeToolCard) activeToolCard.classList.remove("active");
        cardElement.classList.add("active");
        activeToolCard = cardElement;
    
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
            <div class="tool-detail-section">
                <h4>// Cost </h4>
                <p>${tool.pricingDetails || 'Contact for pricing'}</p>
            </div>
            <div class="tool-detail-actions">
                <a href="${tool.url}" target="_blank" class="action-btn">Launch ${tool.name}</a>
                <a href="tutorial.html?tool=${tool.id || tool.name.toLowerCase().replace(/\s+/g, '-')}" class="action-btn secondary">Step-by-Step Guide</a>
            </div>
        `;
    
        panel.classList.remove("hidden");
    
        if (window.innerWidth <= 900) {
            document.body.appendChild(panel);
            document.body.style.overflow = "hidden";
            panel.style.position = "fixed";
            panel.style.top = "0";
            panel.style.left = "0";
            panel.style.width = "100%";
            panel.style.height = "100%";
            panel.style.marginTop = "0";
            panel.style.zIndex = "99999";
        } else {
            if (layout && !layout.contains(panel)) {
                layout.appendChild(panel);
            }
            document.body.style.overflow = "";
            const containerRect = container.getBoundingClientRect();
            const panelHeight = panel.offsetHeight;
            const TOP_GAP = 16;
            const BOTTOM_GAP = 16;
            const visibleTop = Math.max(containerRect.top, 0);
            const visibleBottom = Math.min(containerRect.bottom, window.innerHeight);
            const visibleHeight = visibleBottom - visibleTop;
            let offsetTop = (visibleHeight - panelHeight) / 2 + (visibleTop - containerRect.top);
            offsetTop = Math.max(offsetTop, TOP_GAP);
            offsetTop = Math.min(offsetTop, containerRect.height - panelHeight - BOTTOM_GAP);
            panel.style.position = "relative";
            panel.style.marginTop = offsetTop + "px";
            panel.style.top = "";
            panel.style.transform = "";
        }
    }
    
    function hideDetail() {
        const panel = document.getElementById("tool-detail-panel");
        const layout = document.querySelector(".tools-page-layout");
        panel.classList.add("hidden");
        document.body.style.overflow = "";
        if (activeToolCard) {
            activeToolCard.classList.remove("active");
            activeToolCard = null;
        }
        if (layout && !layout.contains(panel)) {
            layout.appendChild(panel);
        }
    }

    function setupCollapsibleFilters() {
        document.querySelectorAll('.collapsible-filter').forEach(filterGroup => {
            const toggleBtn = filterGroup.querySelector('.filter-toggle-btn');
            if (toggleBtn) {
                toggleBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    const isOpen = !filterGroup.classList.contains('collapsed');
                    filterGroup.classList.toggle('collapsed', isOpen);
                    toggleBtn.setAttribute('aria-expanded', !isOpen);
                });
            }
        });
    }

    // --- EVENT LISTENERS ---

    // 1. Search Input Listener
    const searchInput = document.getElementById("tool-search");
    if (searchInput) {
        searchInput.addEventListener("input", function(e) {
            currentSearch = e.target.value;
            hideDetail(); // Close detail panel when searching to avoid layout jumps
            renderTools();
        });
    }

    // 2. Category Filter
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

    // 3. End Product Filter
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

    // 4. Tool Card Clicks
    document.getElementById("tools-container").addEventListener("click", function(e) {
        const card = e.target.closest(".tool-card");
        if (!card) return;
        showDetail(card.getAttribute("data-name"), card);
    });

    // 5. Close Detail Panel
    const closeBtn = document.getElementById("tool-detail-close");
    if (closeBtn) {
        closeBtn.addEventListener("click", hideDetail);
    }

    // 6. Handle window resize
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