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

        // Remove previous active state
        if (activeToolCard) {
            activeToolCard.classList.remove("active");
        }

        // Add active state to clicked card
        cardElement.classList.add("active");
        activeToolCard = cardElement;

        // Add class to layout to trigger panel-open styles
        layout.classList.add("panel-open");

        // CHANGED: On mobile, insert after card. On desktop, keep in sidebar.
        if (window.innerWidth <= 900) {
            // Mobile: Insert panel right after the clicked card
            const nextSibling = cardElement.nextElementSibling;
            if (nextSibling) {
                cardElement.parentNode.insertBefore(panel, nextSibling);
            } else {
                cardElement.parentNode.appendChild(panel);
            }
        } else {
            // Desktop: Panel stays in its sticky sidebar position
            // (it's already in the layout from HTML, so we don't need to move it)
        }

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
                <h4>// When to Use</h4>
                <p>${tool.whenToUse}</p>
            </div>
            <div class="tool-detail-section">
                <h4>// Pricing</h4>
                <p>${tool.pricingDetails}</p>
            </div>
            <div class="tool-detail-section">
                <h4>// Use Cases</h4>
                <ul>${tool.useCases.map(u => `<li>${u}</li>`).join('')}</ul>
            </div>
            <a href="${tool.url}" target="_blank" class="action-btn">Launch ${tool.name}</a>
        `;
        
        panel.classList.remove("hidden");

        // Scroll to panel on mobile
        if (window.innerWidth <= 900) {
            setTimeout(() => {
                panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }, 50);
        }
    }

    function hideDetail() {
        const panel = document.getElementById("tool-detail-panel");
        const layout = document.querySelector(".tools-page-layout");
        
        panel.classList.add("hidden");
        layout.classList.remove("panel-open");
        
        if (activeToolCard) {
            activeToolCard.classList.remove("active");
            activeToolCard = null;
        }

        // Move panel back to layout container (for next time)
        if (window.innerWidth <= 900 && !layout.contains(panel)) {
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