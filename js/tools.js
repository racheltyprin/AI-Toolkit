(function () {
    

    var state = { category: "all", pricing: "all" };

    function renderTools() {
        var container = document.getElementById("tools-container");
        var emptyEl = document.getElementById("tools-empty");
        var countEl = document.getElementById("results-count");

        var filtered = tools.filter(function (t) {
            var catOk = state.category === "all" || t.category === state.category;
            var priceOk = state.pricing === "all" || t.pricing === state.pricing;
            return catOk && priceOk;
        });

        container.innerHTML = filtered.map(function (t) {
            return '<div class="tool-card" data-category="' + t.category + '" data-pricing="' + t.pricing + '">' +
                '<div class="tool-header">' +
                '<div class="tool-header-left">' +
                '<img src="' + t.logo + '" alt="' + t.name + ' logo" class="tool-logo" onerror="this.style.display=\'none\'">' +
                '<span class="tool-name">' + t.name + '</span>' +
                '</div>' +
                '</div>' +
                '<p class="tool-description">' + t.desc + '</p>' +
                '</div>';
        }).join("");

        countEl.textContent = filtered.length === 0 ? "No tools match." : filtered.length + " tool" + (filtered.length !== 1 ? "s" : "") + ".";
        emptyEl.classList.toggle("hidden", filtered.length > 0);
    }

    function setActiveChip(filterKey, value) {
        var selector = '[data-filter="' + filterKey + '"]';
        document.querySelectorAll(".filter-chip" + selector).forEach(function (btn) {
            btn.classList.toggle("active", btn.getAttribute("data-value") === value);
        });
    }

    var detailPanel = document.getElementById("tool-detail-panel");
    var detailContent = document.getElementById("tool-detail-content");
    var closeBtn = document.getElementById("tool-detail-close");

    function showToolDetail(tool) {
        // Convert tool name to URL-friendly format
        var tutorialSlug = tool.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    
        // Conditionally build tutorial link
        var tutorialLink = tool.hasTutorial 
        ? '<a href="tutorial.html?tool=' + tutorialSlug + '" class="tool-detail-link tutorial-link">Get Started Guide →</a>' : '';
        
        detailContent.innerHTML = 
            '<div class="tool-detail-header">' +
            '<img src="' + tool.logo + '" alt="' + tool.name + ' logo" class="tool-detail-logo">' +
            '<h3 class="tool-detail-title">' + tool.name + '</h3>' +
            '</div>' +
            '<div class="tool-detail-actions">' +
            '<a href="' + tool.url + '" target="_blank" rel="noopener noreferrer" class="tool-detail-link">Visit ' + tool.name + ' →</a>' +
            tutorialLink +
            '</div>' +
            '<div class="tool-detail-section"><h4>Overview</h4><p>' + tool.desc + '</p></div>' +
            '<div class="tool-detail-section"><h4>Pricing</h4><p>' + tool.pricingDetails + '</p></div>' +
            '<div class="tool-detail-section"><h4>Use Cases</h4><ul>' + 
            tool.useCases.map(function(u){return '<li>'+u+'</li>';}).join('') + '</ul></div>' +
            '<div class="tool-detail-section"><h4>When to Use</h4><p>' + tool.whenToUse + '</p></div>';

        detailPanel.classList.remove("hidden");
    }

    function hideToolDetail() {
        detailPanel.classList.add("hidden");
    }

    document.getElementById("filter-category").addEventListener("click", function (e) {
        var btn = e.target.closest(".filter-chip[data-filter=category]");
        if (!btn) return;
        state.category = btn.getAttribute("data-value");
        setActiveChip("category", state.category);
        renderTools();
    });

    var toolsContainer = document.getElementById("tools-container");
    if (toolsContainer) {
        toolsContainer.addEventListener("click", function(e) {
            var card = e.target.closest(".tool-card");
            if (!card) return;
            var toolName = card.querySelector(".tool-name").textContent;
            var tool = tools.find(function(t) { return t.name === toolName; });
            if (tool) showToolDetail(tool);
        });
    }

    if (closeBtn) closeBtn.addEventListener("click", hideToolDetail);

    // Collapsible filters
    var filtersEl = document.getElementById("tools-filters");
    var toggleBtn = document.getElementById("tools-filters-toggle");
    var filtersBody = document.getElementById("tools-filters-body");
    var toggleIcon = toggleBtn && toggleBtn.querySelector(".tools-filters-toggle-icon");
    
    if (toggleBtn && filtersBody) {
        toggleBtn.addEventListener("click", function (e) {
            e.preventDefault();
            e.stopPropagation();
            var isOpen = !filtersEl.classList.contains("collapsed");
            filtersEl.classList.toggle("collapsed", isOpen);
            toggleBtn.setAttribute("aria-expanded", !isOpen);
            if (toggleIcon) toggleIcon.textContent = isOpen ? "▶" : "▼";
        });
    }

    setActiveChip("category", state.category);
    renderTools();
    
})();