var tools = [
    { 
        name: "Framer", 
        category: "website-building", 
        pricing: "student", 
        hasTutorial: true,  // Add this line
        logo: "https://www.google.com/s2/favicons?domain=framer.com&sz=128",
        desc: "Describe the site you want and Framer generates a polished, responsive website you can edit and publish instantly. It feels like Figma but with real production output.",
        url: "https://www.framer.com/",
        pricingDetails: "Free tier with 1 site. Pro plan $15/month for students.",
        useCases: [
            "Building portfolio websites quickly",
            "Creating landing pages for startup ideas",
            "Prototyping interactive web experiences",
            "Publishing production-ready sites without code"
        ],
        whenToUse: "Use Framer when you need a real website fast with AI assistance. Great for portfolios, landing pages, and marketing sites that need to look professional immediately."
    },
    { 
        name: "Carrd", 
        category: "website-building", 
        pricing: "student", 
        hasTutorial: true,  // Add this line
        logo: "images/logos/carrdLogo.png",
        desc: "A simple, fast website builder for landing pages, portfolios, and one-page sites. Lightweight, affordable, and flexible.",
        url: "https://carrd.co/",
        pricingDetails: "Free tier with 3 sites. Pro plan $19/year (very affordable).",
        useCases: [
            "Single-page portfolios",
            "Event landing pages",
            "Personal bio/link pages",
            "Simple product launches"
        ],
        whenToUse: "Choose Carrd for ultra-simple one-page sites when you need something fast, lightweight, and affordable. Perfect for personal pages and quick launches."
    },
    { 
        name: "Glide", 
        category: "app-building", 
        pricing: "student", 
        hasTutorial: true,  // Add this line
        logo: "images/logos/glideLogo.png",
        desc: "Turns spreadsheets or databases into polished mobile and web apps without coding. Great for internal tools and simple SaaS ideas.",
        url: "https://www.glideapps.com/",
        pricingDetails: "Free tier available. Pro plan from $25/month.",
        useCases: [
            "Internal team dashboards",
            "Inventory management apps",
            "Event check-in systems",
            "Customer portals"
        ],
        whenToUse: "Use Glide when your data lives in spreadsheets and you need a quick app interface. Ideal for internal tools, databases, and simple mobile apps."
    },
    { 
        name: "Softr", 
        category: "app-building", 
        pricing: "student", 
        hasTutorial: true,  // Add this line
        logo: "https://www.google.com/s2/favicons?domain=softr.io&sz=128",
        desc: "Build web apps and client portals on top of Airtable or databases. Ideal for marketplaces, dashboards, and membership sites.",
        url: "https://www.softr.io/",
        pricingDetails: "Free tier available. Paid plans from $49/month.",
        useCases: [
            "Membership portals",
            "Online marketplaces",
            "Client dashboards",
            "Directory sites"
        ],
        whenToUse: "Choose Softr when building on Airtable and need a polished public interface. Great for marketplaces, directories, and member areas."
    },
    { 
        name: "Figma", 
        category: "demo-building", 
        pricing: "student", 
        hasTutorial: true,  // Add this line
        logo: "https://www.google.com/s2/favicons?domain=figma.com&sz=128",
        desc: "The industry standard for interface design and prototyping. With AI and interactive components, easy to create realistic product demos.",
        url: "https://www.figma.com/",
        pricingDetails: "Free for students. Professional plan $15/editor/month.",
        useCases: [
            "UI/UX design and prototyping",
            "Product mockups and demos",
            "Design systems and component libraries",
            "Interactive presentations"
        ],
        whenToUse: "Use Figma for any serious design work, interactive prototypes, or when collaborating with designers. Industry standard for product design."
    },
    { 
        name: "Uizard", 
        category: "demo-building", 
        pricing: "student", 
        hasTutorial: true,  // Add this line
        logo: "https://www.google.com/s2/favicons?domain=uizard.io&sz=128",
        desc: "Turns text prompts, sketches, or screenshots into UI designs and prototypes. Great for quickly visualizing ideas without design experience.",
        url: "https://uizard.io/",
        pricingDetails: "Free tier available. Pro plan $19/month.",
        useCases: [
            "Rapid UI mockups from text descriptions",
            "Converting sketches to digital designs",
            "Quick app prototype generation",
            "Non-designer friendly interface creation"
        ],
        whenToUse: "Choose Uizard when you need quick UI mockups but lack design skills. AI generates designs from prompts, sketches, or screenshots."
    },
    { 
        name: "Taskade", 
        category: "writing", 
        pricing: "student", 
        hasTutorial: true,  // Add this line
        logo: "https://www.google.com/s2/favicons?domain=taskade.com&sz=128",
        desc: "AI-powered workspace for notes, tasks, and visual thinking. Generate mind maps, outlines, and project plans with AI.",
        url: "https://www.taskade.com/",
        pricingDetails: "Free tier available. Pro plan $10/month.",
        useCases: [
            "Brainstorming and mind mapping",
            "Project planning and outlines",
            "Team collaboration on ideas",
            "Structured note-taking"
        ],
        whenToUse: "Use Taskade for visual thinking, brainstorming sessions, and when you need AI to help structure thoughts into outlines and plans."
    },
    { 
        name: "Elicit", 
        category: "writing", 
        pricing: "free", 
        hasTutorial: true,  // Add this line
        logo: "https://www.google.com/s2/favicons?domain=elicit.com&sz=128",
        desc: "Research assistant for academic and evidence-based work. Finds papers, summarizes findings, and helps answer complex questions with cited sources.",
        url: "https://elicit.com/",
        pricingDetails: "Free with some usage limits. Plus plan $10/month.",
        useCases: [
            "Literature reviews",
            "Academic research",
            "Evidence-based analysis",
            "Finding and summarizing papers"
        ],
        whenToUse: "Choose Elicit for academic research or when you need evidence-based answers with proper citations from scholarly sources."
    },
    { 
        name: "Claude", 
        category: "writing", 
        pricing: "student", 
        hasTutorial: true,  // Add this line
        logo: "https://www.google.com/s2/favicons?domain=claude.ai&sz=128",
        desc: "Excellent for long-form writing, deep analysis, and structured thinking. Strong context handling—ideal for strategy and complex brainstorming.",
        url: "https://claude.ai/",
        pricingDetails: "Free tier available. Pro plan $20/month.",
        useCases: [
            "Long-form content creation",
            "Complex analysis and research",
            "Strategic planning documents",
            "Code generation and debugging"
        ],
        whenToUse: "Use Claude for nuanced writing, deep analysis, or when you need to work with large documents. Excellent for strategy and thoughtful content."
    },
    { 
        name: "ChatGPT", 
        category: "writing", 
        pricing: "student", 
        hasTutorial: true,  // Add this line
        logo: "https://www.google.com/s2/favicons?domain=chat.openai.com&sz=128",
        desc: "Versatile AI for writing, ideation, coding, research, and problem-solving. A general-purpose thinking partner.",
        url: "https://chat.openai.com/",
        pricingDetails: "Free tier available. Plus plan $20/month.",
        useCases: [
            "General writing and editing",
            "Brainstorming and ideation",
            "Quick questions and research",
            "Code assistance"
        ],
        whenToUse: "Use ChatGPT as your general-purpose AI assistant for everyday tasks, quick answers, brainstorming, and creative work."
    },
    { 
        name: "Canva", 
        category: "visual", 
        pricing: "student", 
        hasTutorial: true,  // Add this line
        logo: "https://www.google.com/s2/favicons?domain=canva.com&sz=128",
        desc: "All-in-one design platform for presentations, social media, and marketing. AI helps generate layouts, images, and copy quickly.",
        url: "https://www.canva.com/",
        pricingDetails: "Free tier available. Pro plan $120/year (often discounted for students).",
        useCases: [
            "Social media graphics",
            "Presentation slides",
            "Marketing materials",
            "Posters and flyers"
        ],
        whenToUse: "Choose Canva for any graphic design need when you want templates and AI assistance. Perfect for marketing materials and social content."
    },
    { 
        name: "DALL•E / Leonardo", 
        category: "visual", 
        pricing: "student", 
        hasTutorial: true,  // Add this line
        logo: "https://www.google.com/s2/favicons?domain=openai.com&sz=128",
        desc: "AI image generators for custom visuals from text prompts. Useful for marketing graphics, concept art, and unique visual content.",
        url: "https://openai.com/dall-e-3",
        pricingDetails: "DALL•E: Pay per image. Leonardo: Free tier with daily credits.",
        useCases: [
            "Custom illustrations",
            "Marketing visuals",
            "Concept art",
            "Social media images"
        ],
        whenToUse: "Use AI image generators when you need custom visuals that don't exist yet. Great for unique illustrations and creative concepts."
    },
    { 
        name: "Microsoft Designer", 
        category: "visual", 
        pricing: "free", 
        hasTutorial: true,  // Add this line
        logo: "https://www.google.com/s2/favicons?domain=designer.microsoft.com&sz=128",
        desc: "Creates social posts, graphics, and marketing visuals from simple prompts. Free with a Microsoft account.",
        url: "https://designer.microsoft.com/",
        pricingDetails: "Completely free with Microsoft account.",
        useCases: [
            "Social media posts",
            "Quick marketing graphics",
            "Event announcements",
            "Simple branded content"
        ],
        whenToUse: "Choose Microsoft Designer for quick social graphics when you have a Microsoft account. Simplest AI graphic design option."
    },
    { 
        name: "Vizcom", 
        category: "visual", 
        pricing: "student", 
        hasTutorial: true,  // Add this line
        logo: "https://www.google.com/s2/favicons?domain=vizcom.ai&sz=128",
        desc: "AI-powered tool for visual and design concepts. Useful for turning ideas into visuals during prototyping.",
        url: "https://www.vizcom.ai/",
        pricingDetails: "Free tier available. Pro plan $20/month.",
        useCases: [
            "Product design visualization",
            "Industrial design concepts",
            "Quick visual explorations",
            "Rendering sketches"
        ],
        whenToUse: "Use Vizcom for product and industrial design when you need to visualize 3D concepts or render sketches professionally."
    },
    { 
        name: "Nano Banana", 
        category: "visual", 
        pricing: "student", 
        hasTutorial: true,  // Add this line
        logo: "https://www.google.com/s2/favicons?domain=artlist.io&sz=128",
        desc: "AI image and video generator by Artlist. Quick visual generation for prototyping and creative projects.",
        url: "https://toolkit.artlist.io/",
        pricingDetails: "Part of Artlist subscription. Free trial available.",
        useCases: [
            "Quick AI images",
            "Video content generation",
            "Creative experimentation",
            "Rapid prototyping visuals"
        ],
        whenToUse: "Choose Nano Banana for fast AI image/video generation, especially if you already have Artlist for stock media."
    },
    { 
        name: "Perplexity", 
        category: "researching", 
        pricing: "student", 
        hasTutorial: true,  // Add this line
        logo: "images/logos/perplexityLogo.png",
        desc: "AI search engine that gives concise answers with citations. Excellent for fast research and fact-checking.",
        url: "https://www.perplexity.ai/",
        pricingDetails: "Free tier available. Pro plan $20/month.",
        useCases: [
            "Quick research with sources",
            "Fact-checking",
            "Current events and news",
            "Comparative analysis"
        ],
        whenToUse: "Use Perplexity when you need current information with citations. Better than traditional search for research questions."
    },
    { 
        name: "Zapier", 
        category: "automating", 
        pricing: "student",
        hasTutorial: true,  // Add this line 
        logo: "https://www.google.com/s2/favicons?domain=zapier.com&sz=128",
        desc: "Connects thousands of apps to automate workflows without coding. Ideal for moving data between tools and eliminating repetitive tasks.",
        url: "https://zapier.com/",
        pricingDetails: "Free tier with 100 tasks/month. Paid plans from $20/month.",
        useCases: [
            "Automating data entry",
            "Connecting apps together",
            "Email and notification workflows",
            "Social media automation"
        ],
        whenToUse: "Choose Zapier to eliminate repetitive tasks by connecting your apps. Great for automating workflows between different tools."
    },
];