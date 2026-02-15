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
        },

        "glide": {
            name: "Glide",
            tagline: "Turn spreadsheets into mobile and web apps in minutes. No coding required.",
            quickStart: [
                "<strong>Sign up:</strong> Go to glideapps.com and create a free account",
                "<strong>Connect data:</strong> Link a Google Sheet, Excel file, or Airtable",
                "<strong>Choose template:</strong> Pick an app type (directory, CRM, tracker, etc.)",
                "<strong>Customize:</strong> Add components, adjust layout, set up actions",
                "<strong>Share:</strong> Get a link or install as PWA on mobile"
            ],
            steps: [
                {
                    title: "Prepare Your Data",
                    content: "Structure your spreadsheet:<ul><li><strong>Headers in row 1:</strong> Name, Email, Status, etc.</li><li><strong>One row per item:</strong> Each row is a record</li><li><strong>Keep it simple:</strong> Start with 3-5 columns</li><li><strong>Use consistent formatting:</strong> Dates, numbers, text</li></ul>",
                    tip: "Glide works best with clean, well-organized data. Spend time on your spreadsheet structure first."
                },
                {
                    title: "Choose Your Layout",
                    content: "Pick the right screen type:<ul><li><strong>List:</strong> Show all records as cards or rows</li><li><strong>Details:</strong> Single record view with all fields</li><li><strong>Form:</strong> Add or edit data</li><li><strong>Chart:</strong> Visualize data</li></ul>"
                },
                {
                    title: "Add Components",
                    content: "Build your interface:<ul><li>Text, images, buttons</li><li>Action buttons (call, email, navigate)</li><li>Inline lists (show related data)</li><li>Rich text editors</li><li>User profiles and authentication</li></ul>"
                },
                {
                    title: "Set Up Actions",
                    content: "Make your app interactive:<ul><li><strong>Add row:</strong> Submit forms</li><li><strong>Set columns:</strong> Update data</li><li><strong>Send email:</strong> Notify users</li><li><strong>Open link:</strong> External URLs</li><li><strong>Conditions:</strong> Show/hide based on data</li></ul>"
                },
                {
                    title: "Deploy Your App",
                    content: "Share with users:<ul><li>Copy shareable link</li><li>Customize branding (Pro)</li><li>Set up user sign-in</li><li>Install as mobile app (PWA)</li><li>Track usage analytics</li></ul>"
                }
            ],
            example: {
                title: "Event Check-in App",
                goal: "Create an app for volunteers to check in attendees at an event",
                prompt: "Create a Google Sheet with columns: Name, Email, Ticket Type, Checked In (checkbox), Check-in Time",
                time: "30 minutes",
                result: "Mobile app where volunteers can search attendees, mark them as checked in, and see real-time attendance count"
            },
            mistakes: [
                "<strong>Messy data:</strong> Clean your spreadsheet first—Glide reflects your data structure",
                "<strong>Too complex initially:</strong> Start simple, add features gradually",
                "<strong>Not testing on mobile:</strong> Most users will use the mobile view",
                "<strong>Ignoring row limits:</strong> Free tier has limits; plan accordingly",
                "<strong>Poor naming:</strong> Column headers become field labels—make them user-friendly"
            ],
            notUse: [
                "<strong>Complex logic:</strong> No custom code or advanced calculations",
                "<strong>High-volume data:</strong> Better to use a real database for 10,000+ records",
                "<strong>Real-time collaboration:</strong> Spreadsheet sync has slight delays",
                "<strong>Offline-first apps:</strong> Requires internet connection",
                "<strong>Heavy file storage:</strong> Limited storage on free tier"
            ],
            useWhen: "Your data lives in spreadsheets and you need a quick app interface. Ideal for internal tools, databases, and simple mobile apps.",
            nextSteps: [
                "Build a simple inventory tracker",
                "Add user authentication",
                "Try the mobile PWA installation",
                "Explore Glide Templates: <a href='https://www.glideapps.com/templates' target='_blank' style='color: var(--cardinal);'>glideapps.com/templates</a>"
            ]
        },

        "softr": {
            name: "Softr",
            tagline: "Build web apps and client portals on top of Airtable. Perfect for marketplaces, directories, and membership sites.",
            quickStart: [
                "<strong>Sign up:</strong> Create account at softr.io",
                "<strong>Connect Airtable:</strong> Link your Airtable base",
                "<strong>Choose template:</strong> Select marketplace, directory, portal, etc.",
                "<strong>Map data:</strong> Connect Airtable fields to Softr blocks",
                "<strong>Publish:</strong> Get your softr.app subdomain or custom domain"
            ],
            steps: [
                {
                    title: "Structure Your Airtable Base",
                    content: "Set up your database:<ul><li><strong>Tables:</strong> One per content type (Users, Listings, Orders)</li><li><strong>Fields:</strong> Name, description, images, status, etc.</li><li><strong>Relationships:</strong> Link records between tables</li><li><strong>Views:</strong> Filter data for different pages</li></ul>",
                    tip: "Plan your Airtable structure before building in Softr. Changes to base structure may require remapping."
                },
                {
                    title: "Design Your Pages",
                    content: "Build with blocks:<ul><li><strong>List blocks:</strong> Show multiple records as cards/table</li><li><strong>Details blocks:</strong> Single record view</li><li><strong>Forms:</strong> Add/edit Airtable data</li><li><strong>Static content:</strong> Text, images, hero sections</li></ul>"
                },
                {
                    title: "Add User Authentication",
                    content: "Control access:<ul><li>Email/password sign up</li><li>Google or Microsoft login</li><li>User roles and permissions</li><li>User-specific data filtering</li><li>Member directories</li></ul>"
                },
                {
                    title: "Set Up Dynamic Pages",
                    content: "Create scalable content:<ul><li>One page template → shows all records</li><li>URL structure: /listings/[record-id]</li><li>Automatic page generation</li><li>SEO-friendly URLs</li></ul>"
                },
                {
                    title: "Customize and Launch",
                    content: "Polish your app:<ul><li>Custom branding and colors</li><li>Add custom domain</li><li>Set up payments (Stripe integration)</li><li>Configure SEO settings</li><li>Add analytics</li></ul>"
                }
            ],
            example: {
                title: "Service Marketplace",
                goal: "Build a marketplace where users can list and book services",
                prompt: "Create Airtable with tables: Users, Services (with pricing, description, images), Bookings",
                time: "60 minutes",
                result: "Full marketplace with user profiles, service listings, booking forms, and user dashboards"
            },
            mistakes: [
                "<strong>Not planning Airtable first:</strong> Structure your data before building UI",
                "<strong>Ignoring permissions:</strong> Set up user roles properly for data security",
                "<strong>Over-complicating:</strong> Start with core features, add complexity later",
                "<strong>Poor mobile design:</strong> Always check mobile preview",
                "<strong>Not using Airtable views:</strong> Filters and sorts are easier in Airtable"
            ],
            notUse: [
                "<strong>Non-Airtable data:</strong> Softr is built for Airtable (though other sources exist)",
                "<strong>Complex workflows:</strong> Use Zapier or custom code for advanced automation",
                "<strong>Real-time apps:</strong> Data sync has some delay",
                "<strong>Heavy computation:</strong> No backend code execution",
                "<strong>Free hosting needs:</strong> Requires paid plan for custom domains"
            ],
            useWhen: "Building on Airtable and need a polished public interface. Great for marketplaces, directories, and member areas.",
            nextSteps: [
                "Build a simple directory",
                "Add user authentication and profiles",
                "Try the Stripe integration for payments",
                "Browse templates: <a href='https://www.softr.io/templates' target='_blank' style='color: var(--cardinal);'>softr.io/templates</a>"
            ]
        },

        "uizard": {
            name: "Uizard",
            tagline: "AI-powered UI design tool. Turn text prompts, sketches, or screenshots into designs and prototypes.",
            quickStart: [
                "<strong>Sign up:</strong> Create account at uizard.io",
                "<strong>Start project:</strong> Choose mobile app, web app, or website",
                "<strong>Generate with AI:</strong> Describe your UI or upload a sketch",
                "<strong>Customize:</strong> Edit components, colors, text",
                "<strong>Preview:</strong> See your design on device mockups"
            ],
            steps: [
                {
                    title: "Choose Your Generation Method",
                    content: "Three ways to start:<ul><li><strong>Text to design:</strong> Describe your UI in plain English</li><li><strong>Screenshot:</strong> Upload inspiration and Uizard recreates it</li><li><strong>Hand-drawn sketch:</strong> Photo of paper sketch → digital UI</li><li><strong>Template:</strong> Start from pre-made designs</li></ul>",
                    tip: "Text-to-design works best when you're specific: 'Login screen with email field, password field, forgot password link, and blue login button'."
                },
                {
                    title: "Refine Your Design",
                    content: "Edit the generated UI:<ul><li>Drag and drop components</li><li>Change colors and fonts</li><li>Edit text and images</li><li>Adjust spacing and alignment</li><li>Add or remove elements</li></ul>"
                },
                {
                    title: "Build Multi-Screen Flows",
                    content: "Create complete apps:<ul><li>Add new screens with AI</li><li>Link screens together</li><li>Set up navigation flow</li><li>Design consistent UI across screens</li></ul>"
                },
                {
                    title: "Add Interactivity",
                    content: "Make it clickable:<ul><li>Button → screen transitions</li><li>Form interactions</li><li>Modal popups</li><li>Tab navigation</li></ul>"
                },
                {
                    title: "Share and Export",
                    content: "Get your design out:<ul><li>Share link for feedback</li><li>Present in fullscreen</li><li>Export to Figma (Pro)</li><li>Download images</li><li>Export frontend code (Pro)</li></ul>"
                }
            ],
            example: {
                title: "Food Delivery App UI",
                goal: "Design a mobile app for food ordering",
                prompt: "'Create a food delivery app with: home screen showing restaurant cards with photos and ratings, restaurant detail page with menu items and prices, cart screen, and checkout form'",
                time: "20 minutes",
                result: "Complete 4-screen mobile app design ready for feedback or development handoff"
            },
            mistakes: [
                "<strong>Vague prompts:</strong> Be specific about layout, components, and content",
                "<strong>Not iterating:</strong> First generation is a starting point—refine it",
                "<strong>Ignoring consistency:</strong> Keep fonts, colors, spacing consistent",
                "<strong>Over-relying on AI:</strong> You still need to curate and polish",
                "<strong>Skipping mobile view:</strong> Always check responsive behavior"
            ],
            notUse: [
                "<strong>Production-ready code:</strong> Generated code needs heavy refinement",
                "<strong>Complex interactions:</strong> Use Figma or Framer for advanced prototypes",
                "<strong>Design systems:</strong> Figma is better for component libraries",
                "<strong>Detailed illustration:</strong> Use Illustrator or Procreate",
                "<strong>Collaborative design:</strong> Figma has better team features"
            ],
            useWhen: "You need quick UI mockups but lack design skills. AI generates designs from prompts, sketches, or screenshots.",
            nextSteps: [
                "Generate a simple 3-screen app from text",
                "Try screenshot-to-design feature",
                "Export to Figma for detailed work",
                "Browse inspiration: <a href='https://uizard.io/templates/' target='_blank' style='color: var(--cardinal);'>uizard.io/templates</a>"
            ]
        },

        "taskade": {
            name: "Taskade",
            tagline: "AI-powered workspace for notes, tasks, and visual thinking. Generate mind maps, outlines, and project plans.",
            quickStart: [
                "<strong>Sign up:</strong> Create account at taskade.com",
                "<strong>Start with AI:</strong> Click 'Generate with AI' in new project",
                "<strong>Choose format:</strong> List, board, mind map, or org chart",
                "<strong>Describe project:</strong> Tell AI what you're planning",
                "<strong>Refine:</strong> Edit, expand, or regenerate sections"
            ],
            steps: [
                {
                    title: "Generate Project Structure",
                    content: "Let AI create your outline:<ul><li><strong>Project plan:</strong> 'Plan a mobile app launch'</li><li><strong>Research outline:</strong> 'Research renewable energy trends'</li><li><strong>Meeting agenda:</strong> 'Quarterly team meeting agenda'</li><li><strong>Learning roadmap:</strong> 'Learn UX design in 3 months'</li></ul>",
                    tip: "Be specific about your goal and timeframe. AI generates better structure with clear context."
                },
                {
                    title: "Choose Your View",
                    content: "Switch between formats:<ul><li><strong>List:</strong> Traditional task list with subtasks</li><li><strong>Board:</strong> Kanban-style cards</li><li><strong>Mind Map:</strong> Visual branching structure</li><li><strong>Org Chart:</strong> Hierarchical view</li><li><strong>Action view:</strong> Calendar and timeline</li></ul>"
                },
                {
                    title: "Add Tasks and Details",
                    content: "Flesh out your project:<ul><li>Assign to team members</li><li>Set due dates and priorities</li><li>Add descriptions and notes</li><li>Attach files and links</li><li>Create subtasks</li></ul>"
                },
                {
                    title: "Use AI Assistant",
                    content: "Get help throughout:<ul><li>'Expand this task into subtasks'</li><li>'Summarize this meeting notes'</li><li>'Generate ideas for...'</li><li>'Create a timeline for this project'</li></ul>"
                },
                {
                    title: "Collaborate",
                    content: "Work with your team:<ul><li>Share projects with collaborators</li><li>Real-time editing</li><li>Comments and mentions</li><li>Video chat integration</li><li>Share publicly or keep private</li></ul>"
                }
            ],
            example: {
                title: "Product Launch Plan",
                goal: "Plan a 6-week product launch with AI",
                prompt: "'Create a comprehensive 6-week product launch plan for a mobile app. Include: pre-launch preparation, beta testing, marketing activities, launch day tasks, and post-launch monitoring.'",
                time: "15 minutes",
                result: "Complete project plan with tasks organized by week, ready to assign and execute"
            },
            mistakes: [
                "<strong>Not using AI enough:</strong> Let AI handle brainstorming and structure",
                "<strong>Wrong view mode:</strong> Mind maps for brainstorming, lists for execution",
                "<strong>Too detailed initially:</strong> Start high-level, add details as you go",
                "<strong>Not collaborating:</strong> Taskade shines with team input",
                "<strong>Forgetting to assign:</strong> Tasks without owners don't get done"
            ],
            notUse: [
                "<strong>Complex project management:</strong> Use Asana or Monday for enterprise PM",
                "<strong>Time tracking:</strong> No built-in time tracking features",
                "<strong>Gantt charts:</strong> Use dedicated PM tools for detailed timelines",
                "<strong>Document storage:</strong> Not a replacement for Google Drive",
                "<strong>Budget tracking:</strong> No financial management features"
            ],
            useWhen: "Use Taskade for visual thinking, brainstorming sessions, and when you need AI to help structure thoughts into outlines and plans.",
            nextSteps: [
                "Generate a project plan with AI",
                "Try all view modes for same project",
                "Collaborate with a team member",
                "Explore templates: <a href='https://www.taskade.com/templates' target='_blank' style='color: var(--cardinal);'>taskade.com/templates</a>"
            ]
        },

        "elicit": {
            name: "Elicit",
            tagline: "AI research assistant for academic work. Find papers, extract data, and synthesize findings with citations.",
            quickStart: [
                "<strong>Go to:</strong> elicit.com (free to start)",
                "<strong>Ask research question:</strong> Be specific about your query",
                "<strong>Review papers:</strong> Elicit finds relevant academic papers",
                "<strong>Extract data:</strong> Pull key findings, methods, results",
                "<strong>Synthesize:</strong> Compare across papers with AI help"
            ],
            steps: [
                {
                    title: "Ask Well-Formed Research Questions",
                    content: "Structure your query:<ul><li><strong>PICO format:</strong> Population, Intervention, Comparison, Outcome</li><li><strong>Be specific:</strong> 'Effects of meditation on anxiety in college students' not 'meditation research'</li><li><strong>Include timeframe:</strong> Recent studies vs all time</li></ul>",
                    tip: "Elicit works best with focused, answerable research questions rather than broad topics."
                },
                {
                    title: "Review Search Results",
                    content: "Evaluate papers Elicit finds:<ul><li>Relevance score</li><li>Citation count</li><li>Publication date and venue</li><li>Abstract summary</li><li>Full-text availability</li></ul>"
                },
                {
                    title: "Extract Key Information",
                    content: "Pull structured data:<ul><li>Research question and hypothesis</li><li>Sample size and population</li><li>Methodology</li><li>Key findings and results</li><li>Limitations noted</li></ul>"
                },
                {
                    title: "Compare Across Papers",
                    content: "Synthesize findings:<ul><li>Create comparison tables</li><li>Identify patterns and trends</li><li>Note conflicting results</li><li>Find research gaps</li></ul>"
                },
                {
                    title: "Export and Cite",
                    content: "Use your research:<ul><li>Export citations (BibTeX, RIS)</li><li>Download summary tables</li><li>Copy formatted citations</li><li>Save to your library</li></ul>"
                }
            ],
            example: {
                title: "Literature Review",
                goal: "Conduct a lit review on remote work and productivity",
                prompt: "'What is the effect of remote work on employee productivity in knowledge workers? Include studies from 2020-2024.'",
                time: "45 minutes",
                result: "Table of 20+ relevant papers with extracted findings, methodologies, and sample sizes ready for synthesis"
            },
            mistakes: [
                "<strong>Too broad questions:</strong> 'AI research' → Be specific about the phenomenon you're studying",
                "<strong>Not filtering results:</strong> Use relevance and date filters",
                "<strong>Ignoring methodology:</strong> Check if study design matches your needs",
                "<strong>Not reading full papers:</strong> Elicit helps find papers, but read them yourself",
                "<strong>Over-relying on summaries:</strong> AI summaries are helpful but check original text"
            ],
            notUse: [
                "<strong>Non-academic research:</strong> Use Perplexity for general information",
                "<strong>Recent news:</strong> Academic papers take time to publish",
                "<strong>Opinion pieces:</strong> Elicit focuses on peer-reviewed research",
                "<strong>Full paper reading:</strong> Tool for discovery and extraction, not replacement for reading",
                "<strong>Humanities research:</strong> Better for empirical studies than theoretical work"
            ],
            useWhen: "Choose Elicit for academic research or when you need evidence-based answers with proper citations from scholarly sources.",
            nextSteps: [
                "Run a research question in your field",
                "Extract data into a comparison table",
                "Export citations for your reference manager",
                "Watch tutorials: <a href='https://elicit.com/learn' target='_blank' style='color: var(--cardinal);'>elicit.com/learn</a>"
            ]
        },

        "canva": {
            name: "Canva",
            tagline: "All-in-one design platform with AI. Create presentations, social media graphics, and marketing materials quickly.",
            quickStart: [
                "<strong>Sign up:</strong> Free account at canva.com (students get Pro free)",
                "<strong>Choose type:</strong> Presentation, Instagram post, flyer, etc.",
                "<strong>Pick template:</strong> Browse thousands of designs",
                "<strong>Customize:</strong> Edit text, swap images, adjust colors",
                "<strong>Download or share:</strong> Export as PDF, PNG, or share link"
            ],
            steps: [
                {
                    title: "Start with the Right Template",
                    content: "Choose based on your goal:<ul><li><strong>Social media:</strong> Pre-sized for Instagram, Twitter, LinkedIn</li><li><strong>Presentations:</strong> Professional slide decks</li><li><strong>Marketing:</strong> Flyers, posters, brochures</li><li><strong>Documents:</strong> Reports, resumes, newsletters</li></ul>",
                    tip: "Templates save hours. Pick one close to your vision and customize rather than starting blank."
                },
                {
                    title: "Use AI Features",
                    content: "Speed up your work:<ul><li><strong>Magic Write:</strong> Generate copy for your design</li><li><strong>Magic Edit:</strong> AI photo editing and object removal</li><li><strong>Background Remover:</strong> One-click background removal</li><li><strong>Magic Resize:</strong> Adapt design to different sizes</li><li><strong>Text to Image:</strong> Generate custom graphics</li></ul>"
                },
                {
                    title: "Customize Your Design",
                    content: "Make it yours:<ul><li>Replace text with your copy</li><li>Upload your photos or use stock library</li><li>Adjust brand colors</li><li>Choose fonts (max 2-3 per design)</li><li>Add icons, stickers, shapes</li></ul>"
                },
                {
                    title: "Set Up Brand Kit (Pro)",
                    content: "Stay consistent:<ul><li>Upload your logo</li><li>Define brand colors</li><li>Set brand fonts</li><li>Save frequently used elements</li><li>Apply brand to any design instantly</li></ul>"
                },
                {
                    title: "Export and Share",
                    content: "Get your design out:<ul><li><strong>Download:</strong> PNG, PDF, MP4 (for videos)</li><li><strong>Share link:</strong> Collaboration or viewing</li><li><strong>Present:</strong> Fullscreen presentation mode</li><li><strong>Schedule:</strong> Post directly to social media</li></ul>"
                }
            ],
            example: {
                title: "Social Media Campaign",
                goal: "Create a week of Instagram posts for a product launch",
                prompt: "Use Canva's 'Instagram Post' → Pick a template → Customize 7 variants with different messages",
                time: "60 minutes",
                result: "7 on-brand Instagram posts ready to schedule, with consistent style and messaging"
            },
            mistakes: [
                "<strong>Too many fonts:</strong> Stick to 2-3 maximum for clean design",
                "<strong>Cluttered layouts:</strong> White space is your friend",
                "<strong>Low-quality images:</strong> Use high-res photos (Canva provides stock)",
                "<strong>Ignoring templates:</strong> Starting from scratch takes 5x longer",
                "<strong>Not saving to Brand Kit:</strong> Save your colors and fonts for consistency"
            ],
            notUse: [
                "<strong>Complex vector work:</strong> Use Illustrator for detailed vector graphics",
                "<strong>Photo editing:</strong> Photoshop is more powerful for photo manipulation",
                "<strong>Print design (high-end):</strong> Use InDesign for professional print work",
                "<strong>3D design:</strong> Use Blender or Cinema 4D",
                "<strong>Code-based design:</strong> Use Figma for UI/UX design systems"
            ],
            useWhen: "Choose Canva for any graphic design need when you want templates and AI assistance. Perfect for marketing materials and social content.",
            nextSteps: [
                "Create a social media post",
                "Try AI features (Magic Write, Background Remover)",
                "Set up a simple Brand Kit",
                "Explore templates: <a href='https://www.canva.com/templates/' target='_blank' style='color: var(--cardinal);'>canva.com/templates</a>"
            ]
        },

        "dall-e-leonardo": {
            name: "DALL•E / Leonardo",
            tagline: "AI image generators for custom visuals from text prompts. Perfect for unique illustrations and creative concepts.",
            quickStart: [
                "<strong>DALL•E:</strong> Go to ChatGPT Plus or Bing Image Creator",
                "<strong>Leonardo:</strong> Sign up at leonardo.ai (free tier available)",
                "<strong>Describe image:</strong> Be specific about subject, style, composition",
                "<strong>Generate:</strong> Wait 10-30 seconds for results",
                "<strong>Refine:</strong> Iterate with modified prompts"
            ],
            steps: [
                {
                    title: "Write Effective Prompts",
                    content: "Structure your description:<ul><li><strong>Subject:</strong> 'A friendly robot'</li><li><strong>Action/pose:</strong> 'waving at camera'</li><li><strong>Setting:</strong> 'in a modern office'</li><li><strong>Style:</strong> '3D render, Pixar style'</li><li><strong>Mood/lighting:</strong> 'bright, cheerful lighting'</li></ul>",
                    tip: "More details = better results. Include art style, colors, composition, and mood."
                },
                {
                    title: "Choose Your Style",
                    content: "Common styles that work well:<ul><li><strong>Photorealistic:</strong> 'professional photography, 4K'</li><li><strong>Illustration:</strong> 'flat design illustration, minimal'</li><li><strong>3D render:</strong> 'cinema 4d, octane render'</li><li><strong>Artistic:</strong> 'watercolor painting, impressionist'</li><li><strong>Concept art:</strong> 'digital concept art, detailed'</li></ul>"
                },
                {
                    title: "Iterate and Refine",
                    content: "Improve your results:<ul><li>Generate 4+ variations</li><li>Pick the best, ask for variations</li><li>Add specific details to fix issues</li><li>Adjust composition or colors</li><li>Use image-to-image (Leonardo)</li></ul>"
                },
                {
                    title: "Leonardo-Specific Features",
                    content: "Advanced controls:<ul><li><strong>Model selection:</strong> Different AI models for different styles</li><li><strong>Guidance scale:</strong> How strictly to follow prompt</li><li><strong>Image dimensions:</strong> Custom aspect ratios</li><li><strong>ControlNet:</strong> Pose and composition control</li></ul>"
                },
                {
                    title: "Use and Download",
                    content: "Get your images:<ul><li>Download in high resolution</li><li>Edit further in Canva or Photoshop</li><li>Use in presentations or marketing</li><li>Check usage rights (commercial use varies)</li></ul>"
                }
            ],
            example: {
                title: "Marketing Hero Image",
                goal: "Create a hero image for a productivity app landing page",
                prompt: "'A clean, minimal workspace with a floating holographic interface showing task lists and calendars, isometric view, pastel blue and purple color scheme, soft shadows, 3D render style, professional, modern'",
                time: "20 minutes (including iterations)",
                result: "Unique, on-brand hero image that matches your app's aesthetic"
            },
            mistakes: [
                "<strong>Vague prompts:</strong> 'Cool image' → Be extremely specific",
                "<strong>Not iterating:</strong> First generation is rarely perfect—refine it",
                "<strong>Ignoring composition:</strong> Specify camera angle and framing",
                "<strong>Wrong tool for the job:</strong> Use photo editing for touch-ups, not generation",
                "<strong>Copyright assumptions:</strong> Check usage rights for commercial use"
            ],
            notUse: [
                "<strong>Realistic people (sensitive):</strong> Avoid generating real public figures",
                "<strong>Logos and text:</strong> AI struggles with text; design in Canva instead",
                "<strong>Technical diagrams:</strong> Use diagramming tools",
                "<strong>Photo editing:</strong> Use Photoshop for editing existing photos",
                "<strong>Consistent characters:</strong> Hard to generate same character twice (use Midjourney for this)"
            ],
            useWhen: "Use AI image generators when you need custom visuals that don't exist yet. Great for unique illustrations and creative concepts.",
            nextSteps: [
                "Generate 10 images and study what prompts work",
                "Try different artistic styles",
                "Combine AI images with Canva for complete designs",
                "Learn prompt engineering: <a href='https://leonardo.ai/blog' target='_blank' style='color: var(--cardinal);'>leonardo.ai/blog</a>"
            ]
        },

        "microsoft-designer": {
            name: "Microsoft Designer",
            tagline: "Free AI design tool from Microsoft. Create social posts and graphics from simple prompts.",
            quickStart: [
                "<strong>Sign in:</strong> Go to designer.microsoft.com with Microsoft account",
                "<strong>Describe design:</strong> 'Create an Instagram post about...'",
                "<strong>Pick layout:</strong> Choose from AI-generated options",
                "<strong>Customize:</strong> Edit text, images, colors",
                "<strong>Download:</strong> Export as PNG or share link"
            ],
            steps: [
                {
                    title: "Start with a Prompt",
                    content: "Describe what you need:<ul><li>'Instagram post announcing new product launch'</li><li>'LinkedIn graphic about remote work tips'</li><li>'Event invitation for summer party'</li><li>Include key details in your prompt</li></ul>",
                    tip: "Include the type of content, topic, and any specific elements you want in your prompt."
                },
                {
                    title: "Select Your Favorite Layout",
                    content: "Designer generates multiple options:<ul><li>Different compositions</li><li>Various color schemes</li><li>Different text placements</li><li>Pick the closest to your vision</li></ul>"
                },
                {
                    title: "Customize the Design",
                    content: "Make it yours:<ul><li>Edit text directly on canvas</li><li>Replace images (upload or generate with AI)</li><li>Adjust colors to match brand</li><li>Resize for different platforms</li><li>Add stickers or remove elements</li></ul>"
                },
                {
                    title: "Generate Images with AI",
                    content: "Create custom graphics:<ul><li>Powered by DALL-E 3</li><li>Type what image you want</li><li>Generates in seconds</li><li>Automatically fits your design</li></ul>"
                },
                {
                    title: "Export and Use",
                    content: "Get your design:<ul><li>Download as PNG (high res)</li><li>Share direct link</li><li>Copy to PowerPoint</li><li>Schedule to social media (coming soon)</li></ul>"
                }
            ],
            example: {
                title: "Event Announcement Post",
                goal: "Create an Instagram post for a workshop",
                prompt: "'Create an Instagram post for a UX design workshop on March 15th, modern and professional style, teal and white colors'",
                time: "10 minutes",
                result: "Polished Instagram post with custom graphics, ready to post"
            },
            mistakes: [
                "<strong>Not being specific:</strong> Generic prompts → generic designs",
                "<strong>Ignoring brand colors:</strong> Adjust colors to match your brand",
                "<strong>Not exploring options:</strong> Generate multiple variations",
                "<strong>Forgetting platform specs:</strong> Check if resizing is needed",
                "<strong>Over-complicating:</strong> Simple designs often work best"
            ],
            notUse: [
                "<strong>Multi-page documents:</strong> Use Canva or Word for longer docs",
                "<strong>Complex layouts:</strong> Limited design flexibility",
                "<strong>Print design:</strong> Optimized for digital, not print",
                "<strong>Logos:</strong> Use dedicated logo tools or hire a designer",
                "<strong>Photo editing:</strong> Basic editing only; use Photoshop for advanced"
            ],
            useWhen: "Choose Microsoft Designer for quick social graphics when you have a Microsoft account. Simplest AI graphic design option.",
            nextSteps: [
                "Create a social media post from scratch",
                "Try the AI image generation",
                "Make graphics for different platforms",
                "It's free—experiment without limits!"
            ]
        },

        "vizcom": {
            name: "Vizcom",
            tagline: "AI-powered tool for product design visualization. Turn sketches into professional 3D-style renderings.",
            quickStart: [
                "<strong>Sign up:</strong> Create account at vizcom.ai",
                "<strong>Upload sketch:</strong> Hand-drawn or digital rough sketch",
                "<strong>Choose style:</strong> Select rendering style (realistic, concept, etc.)",
                "<strong>Generate:</strong> AI creates professional rendering",
                "<strong>Refine:</strong> Iterate on style, materials, lighting"
            ],
            steps: [
                {
                    title: "Create Your Base Sketch",
                    content: "Start with a drawing:<ul><li><strong>Hand-drawn:</strong> Photograph and upload</li><li><strong>Digital:</strong> Create in iPad or drawing app</li><li><strong>Quality:</strong> Clear lines, basic proportions</li><li><strong>Details:</strong> Don't need to be perfect—AI fills in</li></ul>",
                    tip: "Your sketch doesn't need to be perfect. Focus on clear form and proportions."
                },
                {
                    title: "Select Rendering Style",
                    content: "Choose visualization approach:<ul><li><strong>Photorealistic:</strong> Product photography look</li><li><strong>Concept art:</strong> Artistic, exploratory</li><li><strong>Technical:</strong> Clean, engineering style</li><li><strong>Context:</strong> Product in environment</li></ul>"
                },
                {
                    title: "Adjust Materials and Lighting",
                    content: "Fine-tune the look:<ul><li>Material properties (metal, plastic, wood)</li><li>Surface finish (matte, glossy, brushed)</li><li>Lighting direction and intensity</li><li>Background and context</li></ul>"
                },
                {
                    title: "Generate Variations",
                    content: "Explore options:<ul><li>Multiple rendering styles</li><li>Different color schemes</li><li>Various angles and views</li><li>Alternative materials</li></ul>"
                },
                {
                    title: "Export and Present",
                    content: "Use your renderings:<ul><li>High-resolution downloads</li><li>Multiple file formats</li><li>Use in presentations</li><li>Portfolio pieces</li><li>Client presentations</li></ul>"
                }
            ],
            example: {
                title: "Product Concept Rendering",
                goal: "Visualize a new smart speaker design concept",
                prompt: "Upload rough sketch of cylindrical speaker with fabric top → Select 'Photorealistic' style → Adjust: fabric texture, metallic base, soft lighting",
                time: "30 minutes",
                result: "Professional product rendering that looks like a studio photograph"
            },
            mistakes: [
                "<strong>Unclear sketches:</strong> Basic proportions must be clear",
                "<strong>Not exploring styles:</strong> Try multiple rendering approaches",
                "<strong>Over-relying on AI:</strong> Start with a decent sketch",
                "<strong>Ignoring context:</strong> Render in environment for better presentation",
                "<strong>Wrong tool:</strong> This is for product/industrial design, not UI or graphics"
            ],
            notUse: [
                "<strong>UI/UX design:</strong> Use Figma or Uizard for interfaces",
                "<strong>Graphic design:</strong> Use Canva or Illustrator",
                "<strong>Architecture:</strong> Use dedicated arch viz tools",
                "<strong>Character design:</strong> Use illustration tools",
                "<strong>Final production renders:</strong> Use Blender or KeyShot for production"
            ],
            useWhen: "Use Vizcom for product and industrial design when you need to visualize 3D concepts or render sketches professionally.",
            nextSteps: [
                "Upload a product sketch and experiment",
                "Try different rendering styles",
                "Generate variations with different materials",
                "Check examples: <a href='https://www.vizcom.ai/showcase' target='_blank' style='color: var(--cardinal);'>vizcom.ai/showcase</a>"
            ]
        },

        "nano-banana": {
            name: "Nano Banana",
            tagline: "AI toolkit by Artlist. Generate images and videos quickly for creative projects and prototyping.",
            quickStart: [
                "<strong>Access:</strong> Part of Artlist subscription (free trial available)",
                "<strong>Choose tool:</strong> Image generator or video generator",
                "<strong>Describe content:</strong> Write what you want to create",
                "<strong>Generate:</strong> AI creates your visual in seconds",
                "<strong>Download:</strong> Use in your projects with Artlist license"
            ],
            steps: [
                {
                    title: "Image Generation",
                    content: "Create custom images:<ul><li>Write descriptive prompt</li><li>Choose style (realistic, artistic, etc.)</li><li>Set aspect ratio</li><li>Generate multiple variations</li><li>Download in high quality</li></ul>",
                    tip: "Nano Banana is great for quick iterations and experimentation."
                },
                {
                    title: "Video Generation",
                    content: "Create AI video clips:<ul><li>Describe the scene you want</li><li>Set duration and style</li><li>Generate video clip</li><li>Use as B-roll or backgrounds</li></ul>"
                },
                {
                    title: "Integrate with Artlist Assets",
                    content: "Combine with stock library:<ul><li>Use AI-generated visuals</li><li>Mix with Artlist stock footage</li><li>Add Artlist music and SFX</li><li>Complete project in one ecosystem</li></ul>"
                },
                {
                    title: "Rapid Prototyping",
                    content: "Perfect for quick concepts:<ul><li>Generate placeholder visuals</li><li>Test different visual directions</li><li>Create mood boards quickly</li><li>Iterate on ideas fast</li></ul>"
                },
                {
                    title: "Download and Use",
                    content: "Commercial usage:<ul><li>Included with Artlist subscription</li><li>Commercial license</li><li>Download unlimited</li><li>Use in client projects</li></ul>"
                }
            ],
            example: {
                title: "Video Background Footage",
                goal: "Create abstract background footage for a product video",
                prompt: "'Flowing abstract particles, teal and purple colors, smooth motion, 10 seconds'",
                time: "15 minutes",
                result: "AI-generated background video ready to use in your edit"
            },
            mistakes: [
                "<strong>Expecting perfection:</strong> AI generation is for prototyping and concepts",
                "<strong>Not combining with stock:</strong> Mix AI with real footage for best results",
                "<strong>Ignoring licensing:</strong> Need Artlist subscription for commercial use",
                "<strong>Too complex prompts:</strong> Keep it simple for better results",
                "<strong>Not iterating:</strong> Generate multiple versions"
            ],
            notUse: [
                "<strong>Primary footage:</strong> Use real video for main content",
                "<strong>Precise requirements:</strong> AI generation is imprecise",
                "<strong>Standalone tool:</strong> Best value as part of Artlist ecosystem",
                "<strong>Photo editing:</strong> Not a replacement for Photoshop",
                "<strong>Motion graphics:</strong> Use After Effects for complex animations"
            ],
            useWhen: "Choose Nano Banana for fast AI image/video generation, especially if you already have Artlist for stock media.",
            nextSteps: [
                "Sign up for Artlist free trial",
                "Generate test images and videos",
                "Combine AI with stock footage",
                "Explore Artlist library: <a href='https://artlist.io/' target='_blank' style='color: var(--cardinal);'>artlist.io</a>"
            ]
        },

        "zapier": {
            name: "Zapier",
            tagline: "Connect apps and automate workflows without coding. Eliminate repetitive tasks between 6,000+ apps.",
            quickStart: [
                "<strong>Sign up:</strong> Create account at zapier.com (free tier available)",
                "<strong>Create Zap:</strong> Click 'Create Zap'",
                "<strong>Choose trigger:</strong> 'When this happens...' (e.g., new email)",
                "<strong>Choose action:</strong> 'Do this...' (e.g., add to spreadsheet)",
                "<strong>Test and turn on:</strong> Verify it works, then activate"
            ],
            steps: [
                {
                    title: "Understand Triggers and Actions",
                    content: "Basic concepts:<ul><li><strong>Trigger:</strong> Event that starts the workflow</li><li><strong>Action:</strong> What happens automatically</li><li><strong>Filter:</strong> Conditional logic (Pro)</li><li><strong>Paths:</strong> If/then branching (Pro)</li></ul>",
                    tip: "Think: 'When [trigger] happens in [App A], automatically [action] in [App B]'."
                },
                {
                    title: "Build Your First Zap",
                    content: "Step-by-step setup:<ol style='margin-left: 1.5rem;'><li>Select trigger app and event</li><li>Connect account and authorize</li><li>Test trigger to get sample data</li><li>Select action app and event</li><li>Map data fields from trigger to action</li><li>Test action</li><li>Turn on Zap</li></ol>"
                },
                {
                    title: "Use Filters for Conditional Logic",
                    content: "Add conditions (Pro feature):<ul><li>Only continue if certain conditions met</li><li>Example: Only add to CRM if email contains 'lead'</li><li>Combine multiple conditions (AND/OR)</li><li>Prevent unnecessary actions</li></ul>"
                },
                {
                    title: "Common Automation Patterns",
                    content: "Popular workflows:<ul><li><strong>Lead capture:</strong> Form → CRM/Spreadsheet</li><li><strong>Notifications:</strong> New item → Slack/Email</li><li><strong>Data sync:</strong> App A → App B bidirectionally</li><li><strong>Social media:</strong> RSS feed → Auto-post</li><li><strong>Email management:</strong> Gmail → Task manager</li></ul>"
                },
                {
                    title: "Monitor and Optimize",
                    content: "Maintain your Zaps:<ul><li>Check Zap History for errors</li><li>Review which Zaps are most used</li><li>Turn off unused Zaps</li><li>Update when apps change</li><li>Monitor task usage (limits on free tier)</li></ul>"
                }
            ],
            example: {
                title: "Lead Management Automation",
                goal: "Automatically save form submissions to Airtable and notify team",
                prompt: "Create Zap: When [Google Form submission] → [Add row to Airtable] + [Send Slack message to #leads channel]",
                time: "20 minutes",
                result: "Every form submission automatically goes to Airtable and team gets instant Slack notification"
            },
            mistakes: [
                "<strong>Too complex initially:</strong> Start with simple 2-step Zaps, add complexity later",
                "<strong>Not testing:</strong> Always test before turning on",
                "<strong>Ignoring errors:</strong> Check Zap History regularly",
                "<strong>Duplicate data:</strong> Make sure trigger doesn't fire multiple times",
                "<strong>Hitting task limits:</strong> Monitor usage on free tier (100 tasks/month)"
            ],
            notUse: [
                "<strong>Real-time critical tasks:</strong> Zaps can have 1-15 min delay",
                "<strong>Complex calculations:</strong> Use Google Sheets or Python for heavy logic",
                "<strong>High-volume data:</strong> Thousands of daily triggers → use APIs directly",
                "<strong>Unsupported apps:</strong> Check if your apps are in the 6,000+ directory",
                "<strong>Sensitive data processing:</strong> Consider security for critical data"
            ],
            useWhen: "Choose Zapier to eliminate repetitive tasks by connecting your apps. Great for automating workflows between different tools.",
            nextSteps: [
                "Build a simple 2-step Zap",
                "Explore Zap templates for your tools",
                "Try a multi-step Zap (Pro trial)",
                "Browse ideas: <a href='https://zapier.com/apps' target='_blank' style='color: var(--cardinal);'>zapier.com/apps</a>"
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