(function() {
    // Tutorial data for all tools
    var tutorials = {
        "framer": {
            name: "Framer",
            tagline: "Build production-ready websites with AI assistance in under 30 minutes. No code required.",
            quickStart: [
                "<strong>Sign up:</strong> Go to framer.com and create a free account",
                "<strong>Start with AI:</strong> Click 'Start with AI' and describe your website",
                "<strong>Generate:</strong> Let Framer create your site structure",
                "<strong>Customize:</strong> Edit text, swap images, adjust colors",
                "<strong>Publish:</strong> Click Publish → get a live URL instantly"
            ],
            steps: [
                {
                    title: "Describe Your Website",
                    content: "In the AI prompt, be specific about:<ul><li><strong>Purpose:</strong> 'Portfolio for UX designer'</li><li><strong>Sections:</strong> 'Hero, 3 project showcases, contact form'</li><li><strong>Style:</strong> 'Minimal, modern, lots of whitespace'</li></ul>",
                    tip: "The more detail you give, the better the output. Include colors, mood, target audience."
                },
                {
                    title: "Review the Generated Site",
                    content: "Framer will create a multi-page site with:<ul><li>Page structure and navigation</li><li>Placeholder text and images</li><li>Responsive design for mobile</li><li>Basic animations and interactions</li></ul>"
                },
                {
                    title: "Customize Content",
                    content: "Click any element to edit:<ul><li><strong>Text:</strong> Double-click to edit inline</li><li><strong>Images:</strong> Click image → Upload or use Unsplash</li><li><strong>Colors:</strong> Select element → Edit fill color in right panel</li><li><strong>Layout:</strong> Drag elements to reposition</li></ul>"
                },
                {
                    title: "Add Interactions (Optional)",
                    content: "Make your site feel alive:<ul><li>Hover effects on buttons</li><li>Scroll animations</li><li>Page transitions</li><li>Click interactions</li></ul><p style='margin-top: 0.5rem;'><em>Select element → Interactions panel → Add animation</em></p>"
                },
                {
                    title: "Publish Your Site",
                    content: "<ol style='margin-left: 1.5rem;'><li>Click the Publish button (top right)</li><li>Choose a URL (e.g., yourname.framer.website)</li><li>Click Publish</li><li>Share your live link!</li></ol>"
                }
            ],
            example: {
                title: "Personal Portfolio",
                goal: "Create a portfolio to showcase 3 design projects",
                prompt: '"Create a modern, minimal portfolio website for a UX designer. Include:\\n- Hero section with name and tagline\\n- About section with photo and bio\\n- 3 project case studies with images and descriptions\\n- Contact section with email and LinkedIn\\n- Dark mode, lots of whitespace, professional but friendly"',
                time: "25 minutes",
                result: "A polished, responsive portfolio ready to share with employers"
            },
            mistakes: [
                "<strong>Vague AI prompts:</strong> 'Make me a website' → Be specific about sections and purpose",
                "<strong>Not testing mobile:</strong> Always click the mobile preview before publishing",
                "<strong>Too many fonts:</strong> Stick to 2 font families maximum",
                "<strong>Ignoring hierarchy:</strong> Make sure headings are clearly bigger than body text",
                "<strong>Forgetting alt text:</strong> Add descriptions to images for accessibility"
            ],
            notUse: [
                "<strong>Complex web apps:</strong> Use proper development for dashboards, SaaS products",
                "<strong>Heavy e-commerce:</strong> Use Shopify, WooCommerce for stores with many products",
                "<strong>Custom backends:</strong> If you need user authentication, databases → code it",
                "<strong>SEO-critical sites:</strong> WordPress or Next.js are better for content-heavy sites",
                "<strong>Budget constraints:</strong> Free tier limits to 1 site; use Carrd for multiple free sites"
            ],
            useWhen: "You need a beautiful marketing site, portfolio, or landing page fast. Perfect for prototyping and showcasing ideas with real polish.",
            nextSteps: [
                "Build your first site in 30 minutes",
                "Share it with 5 people and get feedback",
                "Iterate based on what confused them",
                "Check out <a href='https://framer.com/academy' target='_blank' style='color: var(--cardinal);'>Framer Academy</a> for advanced techniques"
            ]
        },
        
        "carrd": {
            name: "Carrd",
            tagline: "Create simple, responsive one-page sites in minutes. Perfect for portfolios, landing pages, and link-in-bio pages.",
            quickStart: [
                "<strong>Sign up:</strong> Go to carrd.co and create a free account",
                "<strong>Choose template:</strong> Pick from 50+ starting points",
                "<strong>Customize:</strong> Edit text, colors, images with visual editor",
                "<strong>Add sections:</strong> Use + button to add new content blocks",
                "<strong>Publish:</strong> Click Publish and get your *.carrd.co URL"
            ],
            steps: [
                {
                    title: "Pick Your Template",
                    content: "Choose based on your goal:<ul><li><strong>Profile:</strong> Simple bio with links</li><li><strong>Portfolio:</strong> Showcase work samples</li><li><strong>Landing:</strong> Product or service promotion</li><li><strong>Coming Soon:</strong> Pre-launch page</li></ul>",
                    tip: "Start with a template close to your vision—easier than starting blank."
                },
                {
                    title: "Edit Content",
                    content: "Click any element to edit:<ul><li><strong>Text:</strong> Click to type</li><li><strong>Images:</strong> Click image → Upload (max 5MB)</li><li><strong>Buttons:</strong> Set link URLs and text</li><li><strong>Background:</strong> Solid color, gradient, or image</li></ul>"
                },
                {
                    title: "Add New Sections",
                    content: "Click the + button to add:<ul><li>Text blocks</li><li>Image galleries</li><li>Contact forms</li><li>Social media icons</li><li>Dividers and spacers</li></ul>"
                },
                {
                    title: "Style Your Site",
                    content: "Use the Styles panel:<ul><li><strong>Colors:</strong> Set brand colors</li><li><strong>Fonts:</strong> Choose from Google Fonts</li><li><strong>Spacing:</strong> Adjust padding and margins</li><li><strong>Animations:</strong> Add subtle scroll effects (Pro only)</li></ul>"
                },
                {
                    title: "Publish",
                    content: "Free tier gives you:<ul><li>yourname.carrd.co subdomain</li><li>Up to 3 sites</li><li>100 elements per site</li></ul><p style='margin-top: 0.5rem;'>Pro ($19/year) adds custom domains and more features.</p>"
                }
            ],
            example: {
                title: "Link-in-Bio Page",
                goal: "Create a simple page with links to all your profiles",
                prompt: "N/A - Use the 'Profile' template",
                time: "10 minutes",
                result: "Clean one-page site with your photo, bio, and clickable links to Instagram, portfolio, email, etc."
            },
            mistakes: [
                "<strong>Too much content:</strong> Keep it simple—one-pagers work best with focused content",
                "<strong>Large images:</strong> Files over 5MB won't upload; compress first",
                "<strong>Ignoring mobile:</strong> Check mobile preview—it's where most visitors are",
                "<strong>No clear CTA:</strong> Make your primary button obvious",
                "<strong>Forgetting analytics:</strong> Add Google Analytics to track visitors (Pro feature)"
            ],
            notUse: [
                "<strong>Multi-page sites:</strong> Carrd is for single pages only",
                "<strong>Complex layouts:</strong> Limited to vertical scrolling sections",
                "<strong>E-commerce:</strong> No shopping cart or payment processing",
                "<strong>Heavy media:</strong> Video hosting is limited",
                "<strong>Dynamic content:</strong> No databases or user accounts"
            ],
            useWhen: "You need an ultra-simple, fast-loading one-page site. Perfect for personal pages, events, or quick launches.",
            nextSteps: [
                "Build your first site in 15 minutes",
                "Share the link and track clicks",
                "Upgrade to Pro for custom domain",
                "Browse <a href='https://carrd.co/build/examples' target='_blank' style='color: var(--cardinal);'>examples gallery</a> for inspiration"
            ]
        },

        "figma": {
            name: "Figma",
            tagline: "Industry-standard design tool for creating interfaces, prototypes, and design systems. Free for students.",
            quickStart: [
                "<strong>Sign up:</strong> Get Figma Education (free) at figma.com/education",
                "<strong>Start a design file:</strong> Click + to create new design file",
                "<strong>Add frames:</strong> Press F or select Frame tool, click and drag",
                "<strong>Design:</strong> Use shapes, text, images from left toolbar",
                "<strong>Prototype:</strong> Switch to Prototype tab, connect frames with arrows"
            ],
            steps: [
                {
                    title: "Set Up Your Canvas",
                    content: "Create frames for different screens:<ul><li>Press <strong>F</strong> for Frame tool</li><li>Choose preset (iPhone, Desktop, etc.) or custom size</li><li>Name your frames clearly (e.g., 'Home - Mobile')</li></ul>",
                    tip: "Use consistent frame sizes within a project. Mobile: 375x812, Desktop: 1440x1024 are common."
                },
                {
                    title: "Design Your Interface",
                    content: "Build with basic tools:<ul><li><strong>R:</strong> Rectangle</li><li><strong>T:</strong> Text</li><li><strong>Shift+Cmd/Ctrl+K:</strong> Place image</li><li><strong>Components:</strong> Reusable elements (buttons, cards)</li></ul><p style='margin-top: 0.5rem;'>Explore Community files for free UI kits and templates.</p>"
                },
                {
                    title: "Create Interactive Prototype",
                    content: "Switch to Prototype mode:<ol style='margin-left: 1.5rem;'><li>Click Prototype tab (top right)</li><li>Drag from hotspot on one frame to another</li><li>Choose interaction (On Click, On Hover, etc.)</li><li>Set animation (Instant, Dissolve, Slide, etc.)</li></ol>"
                },
                {
                    title: "Add Auto Layout",
                    content: "Make responsive designs:<ul><li>Select elements → Shift+A for Auto Layout</li><li>Set spacing, padding, and direction</li><li>Elements will resize intelligently</li><li>Essential for buttons and cards</li></ul>"
                },
                {
                    title: "Share and Present",
                    content: "Click Share (top right):<ul><li><strong>View only:</strong> For feedback</li><li><strong>Can edit:</strong> For collaborators</li><li><strong>Present:</strong> Full-screen prototype mode</li></ul>"
                }
            ],
            example: {
                title: "Mobile App Prototype",
                goal: "Design a simple 3-screen app flow (login, home, profile)",
                prompt: "N/A - Manual design",
                time: "45 minutes",
                result: "Clickable prototype showing navigation between screens, ready for user testing"
            },
            mistakes: [
                "<strong>Not using components:</strong> Buttons, headers → make them reusable components",
                "<strong>Inconsistent spacing:</strong> Use 8pt grid system (multiples of 8)",
                "<strong>Unnamed layers:</strong> Name everything clearly for easier navigation",
                "<strong>Skipping Auto Layout:</strong> Makes responsive design 10x easier",
                "<strong>No design system:</strong> Define colors and text styles first"
            ],
            notUse: [
                "<strong>Photo editing:</strong> Use Photoshop or Photopea",
                "<strong>3D design:</strong> Use Blender or Spline",
                "<strong>Print design:</strong> Use InDesign or Canva",
                "<strong>Vector illustration:</strong> Illustrator is more powerful",
                "<strong>Code generation:</strong> Figma exports aren't production-ready"
            ],
            useWhen: "You're doing any serious UI/UX design work, need interactive prototypes, or collaborating with designers. Industry standard for product design.",
            nextSteps: [
                "Complete a 3-screen mobile prototype",
                "Test it with 5 users and take notes",
                "Explore Community files for UI kits",
                "Learn keyboard shortcuts: <a href='https://www.figma.com/shortcuts/' target='_blank' style='color: var(--cardinal);'>figma.com/shortcuts</a>"
            ]
        },

        "claude": {
            name: "Claude",
            tagline: "AI assistant for deep analysis, long-form writing, and complex reasoning. Excellent context handling.",
            quickStart: [
                "<strong>Sign up:</strong> Create account at claude.ai",
                "<strong>Start chat:</strong> Click New Chat",
                "<strong>Be specific:</strong> Describe your task in detail",
                "<strong>Iterate:</strong> Refine responses with follow-up questions",
                "<strong>Use Projects:</strong> Upload documents for context (Pro)"
            ],
            steps: [
                {
                    title: "Write Effective Prompts",
                    content: "Be clear and specific:<ul><li><strong>Context:</strong> 'I'm a grad student building...'</li><li><strong>Task:</strong> 'Write a research summary of...'</li><li><strong>Format:</strong> 'In 500 words, structured as...'</li><li><strong>Tone:</strong> 'Professional but conversational'</li></ul>",
                    tip: "Claude handles long, detailed prompts well. Don't be afraid to give lots of context."
                },
                {
                    title: "Upload Documents (Pro)",
                    content: "Add context with files:<ul><li>PDFs, text files, code files</li><li>Up to 5 files per chat</li><li>Claude reads and references them</li><li>Great for analysis and summaries</li></ul>"
                },
                {
                    title: "Use for Deep Analysis",
                    content: "Claude excels at:<ul><li><strong>Research synthesis:</strong> Combining multiple sources</li><li><strong>Strategy documents:</strong> Thinking through complex plans</li><li><strong>Code review:</strong> Detailed technical feedback</li><li><strong>Long-form writing:</strong> Essays, reports, articles</li></ul>"
                },
                {
                    title: "Iterate and Refine",
                    content: "Build on responses:<ul><li>'Make it more concise'</li><li>'Add examples for each point'</li><li>'Rewrite in a more casual tone'</li><li>'Focus more on the implementation section'</li></ul>"
                },
                {
                    title: "Use Projects Feature",
                    content: "Pro users can:<ul><li>Create persistent Projects</li><li>Add custom instructions</li><li>Upload reference documents once</li><li>All chats in that Project have context</li></ul>"
                }
            ],
            example: {
                title: "Research Report",
                goal: "Synthesize 3 academic papers into a 2-page summary",
                prompt: "'I'm writing a lit review on [topic]. Here are 3 papers [upload PDFs]. Write a 2-page synthesis highlighting key findings, methodologies, and gaps. Use APA citations.'",
                time: "15 minutes",
                result: "Well-structured research summary with proper citations and critical analysis"
            },
            mistakes: [
                "<strong>Too vague:</strong> 'Help me with my project' → Specify exactly what you need",
                "<strong>Not iterating:</strong> First draft is rarely perfect—refine it",
                "<strong>Expecting code execution:</strong> Claude explains code but doesn't run it",
                "<strong>Skipping context:</strong> More background = better responses",
                "<strong>Not fact-checking:</strong> Always verify important claims"
            ],
            notUse: [
                "<strong>Real-time data:</strong> Claude's training cutoff is January 2025",
                "<strong>Image generation:</strong> Use DALL-E or Midjourney",
                "<strong>Quick facts:</strong> Perplexity is faster for research",
                "<strong>Code execution:</strong> Use ChatGPT with Code Interpreter",
                "<strong>Math calculations:</strong> Use calculator or Python"
            ],
            useWhen: "You need nuanced writing, deep analysis, or working with large documents. Excellent for strategy, research, and thoughtful content.",
            nextSteps: [
                "Try a complex writing task",
                "Upload a document and ask for analysis",
                "Compare Claude vs ChatGPT for your use case",
                "Explore Projects feature (Pro)"
            ]
        },

        "chatgpt": {
            name: "ChatGPT",
            tagline: "Versatile AI assistant for writing, coding, research, and problem-solving. Your general-purpose thinking partner.",
            quickStart: [
                "<strong>Sign up:</strong> Create account at chat.openai.com",
                "<strong>Start conversation:</strong> Type your question or task",
                "<strong>Use GPT-4:</strong> Upgrade to Plus ($20/mo) for better responses",
                "<strong>Try tools:</strong> Code Interpreter, DALL-E, web browsing",
                "<strong>Create GPTs:</strong> Custom versions for specific tasks (Plus)"
            ],
            steps: [
                {
                    title: "Master Prompting",
                    content: "Get better outputs:<ul><li><strong>Role:</strong> 'Act as a UX researcher...'</li><li><strong>Task:</strong> 'Analyze this user interview...'</li><li><strong>Format:</strong> 'Output as a table with 3 columns'</li><li><strong>Examples:</strong> Show what you want</li></ul>",
                    tip: "ChatGPT responds well to structured prompts with clear examples."
                },
                {
                    title: "Use Code Interpreter",
                    content: "Analyze data and create visualizations:<ul><li>Upload CSV, Excel, or JSON files</li><li>Ask for analysis, charts, or processing</li><li>ChatGPT writes and runs Python code</li><li>Downloads results or images</li></ul>"
                },
                {
                    title: "Generate Images with DALL-E",
                    content: "Create custom visuals:<ul><li>Describe the image you want</li><li>Be specific about style, mood, composition</li><li>Iterate with 'Make it more...'</li><li>Download or edit further</li></ul>"
                },
                {
                    title: "Browse the Web",
                    content: "Get current information:<ul><li>ChatGPT can search and cite sources</li><li>Good for recent events or data</li><li>Always verify important facts</li></ul>"
                },
                {
                    title: "Create Custom GPTs",
                    content: "Build specialized assistants (Plus only):<ul><li>Add custom instructions</li><li>Upload knowledge files</li><li>Enable specific tools</li><li>Share with others</li></ul>"
                }
            ],
            example: {
                title: "Data Analysis Report",
                goal: "Analyze survey results and create visualizations",
                prompt: "'I have survey data from 100 respondents [upload CSV]. Create: 1) Summary statistics, 2) 3 key insights, 3) Visual charts, 4) Recommendations for next steps.'",
                time: "20 minutes",
                result: "Complete analysis with charts, insights, and actionable recommendations"
            },
            mistakes: [
                "<strong>Not specifying model:</strong> Use GPT-4 for complex tasks, GPT-3.5 for simple ones",
                "<strong>One-shot prompts:</strong> Iterate and refine—conversation is key",
                "<strong>Ignoring tools:</strong> Code Interpreter and DALL-E add huge value",
                "<strong>Not fact-checking:</strong> ChatGPT can hallucinate facts",
                "<strong>Vague requests:</strong> 'Help me' → Specify exactly what you need"
            ],
            notUse: [
                "<strong>Medical/legal advice:</strong> Not a substitute for professionals",
                "<strong>Very long documents:</strong> Claude handles large context better",
                "<strong>Real-time info:</strong> Training cutoff is April 2023 (unless browsing)",
                "<strong>Sensitive data:</strong> Don't share private information",
                "<strong>Academic citations:</strong> Use Elicit or Perplexity for research"
            ],
            useWhen: "You need a versatile AI for everyday tasks, quick answers, brainstorming, and creative work. Best general-purpose assistant.",
            nextSteps: [
                "Try Code Interpreter with a dataset",
                "Generate images with DALL-E 3",
                "Create a custom GPT for your workflow",
                "Compare GPT-4 vs GPT-3.5 for your tasks"
            ]
        },

        "perplexity": {
            name: "Perplexity",
            tagline: "AI-powered search engine with citations. Get accurate answers to research questions with sources.",
            quickStart: [
                "<strong>Go to:</strong> perplexity.ai (no signup required)",
                "<strong>Ask question:</strong> Natural language, be specific",
                "<strong>Review sources:</strong> Click numbered citations to verify",
                "<strong>Follow up:</strong> Ask clarifying questions",
                "<strong>Upgrade to Pro:</strong> ($20/mo) for GPT-4 and more searches"
            ],
            steps: [
                {
                    title: "Ask Research Questions",
                    content: "Perplexity excels at:<ul><li><strong>Factual queries:</strong> 'What are the latest trends in...'</li><li><strong>Comparisons:</strong> 'Compare X vs Y'</li><li><strong>Current events:</strong> 'What happened with...'</li><li><strong>How-to:</strong> 'How do I set up...'</li></ul>",
                    tip: "Be specific and include timeframes when relevant (e.g., '...in 2024')."
                },
                {
                    title: "Verify Sources",
                    content: "Every claim has a citation:<ul><li>Click numbered links [1], [2], etc.</li><li>Review original sources</li><li>Check source credibility</li><li>Use for academic or professional work</li></ul>"
                },
                {
                    title: "Use Collections (Pro)",
                    content: "Organize research by topic:<ul><li>Create Collections for projects</li><li>Save searches and sources</li><li>Share with collaborators</li><li>Build knowledge base</li></ul>"
                },
                {
                    title: "Choose Your Model",
                    content: "Pro users can select:<ul><li><strong>Default:</strong> Fast, good for most queries</li><li><strong>GPT-4:</strong> Deep analysis, complex questions</li><li><strong>Claude:</strong> Long-form, nuanced responses</li></ul>"
                },
                {
                    title: "Follow Up Intelligently",
                    content: "Build on previous answers:<ul><li>'Tell me more about point #3'</li><li>'Compare this to...'</li><li>'What are the counterarguments?'</li><li>'Find recent studies on...'</li></ul>"
                }
            ],
            example: {
                title: "Competitive Research",
                goal: "Research competitors in your space",
                prompt: "'What are the top 5 no-code app builders in 2024? For each, list: pricing, target users, key features, and recent funding. Include sources.'",
                time: "10 minutes",
                result: "Comprehensive competitive analysis with verified data and citations"
            },
            mistakes: [
                "<strong>Not checking sources:</strong> Always verify citations for important work",
                "<strong>Too broad:</strong> 'Tell me about AI' → Be specific",
                "<strong>Ignoring date filters:</strong> Add timeframes for current info",
                "<strong>Not iterating:</strong> Follow-up questions refine results",
                "<strong>Expecting opinions:</strong> Perplexity reports facts, doesn't create"
            ],
            notUse: [
                "<strong>Creative writing:</strong> Use Claude or ChatGPT",
                "<strong>Image generation:</strong> Use DALL-E or Midjourney",
                "<strong>Code generation:</strong> ChatGPT or Claude are better",
                "<strong>Personal advice:</strong> Use conversational AI instead",
                "<strong>Paywalled content:</strong> Can't access subscription-only articles"
            ],
            useWhen: "You need current information with citations. Better than Google for research questions and fact-checking.",
            nextSteps: [
                "Research a topic you're working on",
                "Compare Perplexity vs Google for same query",
                "Try Pro for GPT-4 access",
                "Build a Collection for your project"
            ]
        }
    };

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

        // Render steps
        var stepsHTML = tutorial.steps.map(function(step, index) {
            var tipHTML = step.tip ? 
                '<div class="tip-box"><h4>💡 Pro Tip</h4><p>' + step.tip + '</p></div>' : '';
            
            return '<div class="step-card">' +
                '<span class="step-number">' + (index + 1) + '</span>' +
                '<h4>' + step.title + '</h4>' +
                step.content +
                tipHTML +
                '</div>';
        }).join('');
        document.getElementById('steps-container').innerHTML = stepsHTML;

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