(function() {

    // Get tool from URL parameter
    function getToolFromURL() {
        var urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('tool');
    }

    // Render tutorial content
    function renderTutorial(toolSlug) {
        var tutorial = tutorials[toolSlug];
        
        if (!tutorial) {
            document.getElementById('error-message').classList.remove('hidden');
            document.getElementById('tutorial-header').style.display = 'none';
            document.getElementById('quick-start').style.display = 'none';
            document.getElementById('steps-container').style.display = 'none';
            document.getElementById('example-project').style.display = 'none';
            document.getElementById('mistakes-section').style.display = 'none';
            document.getElementById('not-use-section').style.display = 'none';
            document.getElementById('next-steps').style.display = 'none';
            return;
        }

        // Update page title
        document.title = tutorial.name + " Tutorial | AI Prototyping Cart";

        // Render header
        document.getElementById('tutorial-header').innerHTML = 
            '<h1>Getting Started with ' + tutorial.name + '</h1>' +
            '<p class="lead">' + tutorial.tagline + '</p>';

        // Render quick start
        document.getElementById('quick-start').innerHTML = 
            '<h3>⚡ Quick Start (5 minutes)</h3>' +
            '<ol>' + tutorial.quickStart.map(function(step) {
                return '<li>' + step + '</li>';
            }).join('') + '</ol>';

            var stepsHTML = tutorial.steps.map(function(step, index) {
                var tipHTML = step.tip ? 
                    '<div class="tip-box"><h4>💡 Pro Tip</h4><p>' + step.tip + '</p></div>' : '';
                
                return '<div class="step-card" data-step="' + index + '">' +
                    '<button class="step-toggle" data-step="' + index + '">Show Less</button>' +
                    '<div class="step-card-header">' +
                    '<span class="step-number">' + (index + 1) + '</span>' +
                    '<h4>' + step.title + '</h4>' +
                    '</div>' +
                    '<div class="step-card-content">' +
                    step.content +
                    tipHTML +
                    '</div>' +
                    '</div>';
            }).join('');
            document.getElementById('steps-container').innerHTML = stepsHTML;

            // Add toggle event listeners
        document.querySelectorAll('.step-toggle').forEach(function(button) {
            button.addEventListener('click', function() {
                var stepIndex = this.getAttribute('data-step');
                var card = document.querySelector('.step-card[data-step="' + stepIndex + '"]');
                card.classList.toggle('collapsed');
                this.textContent = card.classList.contains('collapsed') ? 'Show More' : 'Show Less';
                });
        });
        // Render example project
        var exampleHTML = '<h3>📋 Example Project: ' + tutorial.example.title + '</h3>' +
            '<p><strong>Goal:</strong> ' + tutorial.example.goal + '</p>';
        
        if (tutorial.example.prompt !== 'N/A - Manual design' && tutorial.example.prompt !== 'N/A - Use the \'Profile\' template') {
            exampleHTML += '<p><strong>AI Prompt:</strong></p>' +
                '<div class="tutorial-code">' + tutorial.example.prompt + '</div>';
        }
        
        exampleHTML += '<p><strong>Time to complete:</strong> ' + tutorial.example.time + '</p>' +
            '<p><strong>Result:</strong> ' + tutorial.example.result + '</p>';
        
        document.getElementById('example-project').innerHTML = exampleHTML;

        // Render mistakes
        document.getElementById('mistakes-section').innerHTML = 
            '<h3>🚫 Common Mistakes</h3>' +
            '<ul>' + tutorial.mistakes.map(function(mistake) {
                return '<li>' + mistake + '</li>';
            }).join('') + '</ul>';

        // Render when NOT to use
        document.getElementById('not-use-section').innerHTML = 
            '<h3>⛔ When NOT to Use ' + tutorial.name + '</h3>' +
            '<ul>' + tutorial.notUse.map(function(item) {
                return '<li>' + item + '</li>';
            }).join('') + '</ul>' +
            '<div class="tip-box" style="margin-top: 1.5rem;"><h4>✅ Use ' + tutorial.name + ' When:</h4>' +
            '<p>' + tutorial.useWhen + '</p></div>';

        // Render next steps
        document.getElementById('next-steps').innerHTML = 
            '<h4>🎯 Next Steps</h4>' +
            '<ul style="margin-top: 0.5rem;">' + tutorial.nextSteps.map(function(step) {
                return '<li>' + step + '</li>';
            }).join('') + '</ul>';
    }

    // Initialize on page load
    var toolSlug = getToolFromURL();
    if (toolSlug) {
        renderTutorial(toolSlug);
    } else {
        document.getElementById('error-message').classList.remove('hidden');
        document.getElementById('tutorial-header').style.display = 'none';
        document.getElementById('quick-start').style.display = 'none';
        document.getElementById('steps-container').style.display = 'none';
        document.getElementById('example-project').style.display = 'none';
        document.getElementById('mistakes-section').style.display = 'none';
        document.getElementById('not-use-section').style.display = 'none';
        document.getElementById('next-steps').style.display = 'none';
    }
})();