
const workflowTypes = {
    mvp: {
      name: "Non-Technical MVP Builder",
      description: "Build a basic MVP without writing code",
      time: "2-3 hours",
      cost: "$0",
      difficulty: "Beginner",
      steps: [
        {
          title: "Research & Planning",
          description: "Define your idea and gather requirements",
          toolCategories: ["writing", "researching"],
          defaultToolName: "ChatGPT"
        },
        {
          title: "Visual Design",
          description: "Create mockups and visual assets",
          toolCategories: ["visual", "demo-building"],
          defaultToolName: "Canva"
        },
        {
          title: "Build Website/App",
          description: "Assemble your MVP without code",
          toolCategories: ["website-building", "app-building"],
          defaultToolName: "Framer"
        },
        {
          title: "Test & Iterate",
          description: "Gather feedback and refine",
          toolCategories: ["automating"],
          defaultToolName: "Zapier"
        }
      ]
    },
    research: {
      name: "Research-to-Product Demo Creator",
      description: "Transform research insights into an interactive product demo",
      time: "1.5-2 hours",
      cost: "$0-$15",
      difficulty: "Intermediate",
      steps: [
        {
          title: "Research Phase",
          description: "Gather and synthesize insights",
          toolCategories: ["researching", "writing"],
          defaultToolName: ""
        },
        {
          title: "Concept Development",
          description: "Develop concepts with AI assistance",
          toolCategories: ["writing", "visual"],
          defaultToolName: ""
        },
        {
          title: "Create Visuals",
          description: "Generate visual assets and mockups",
          toolCategories: ["visual"],
          defaultToolName: ""
        },
        {
          title: "Build Demo",
          description: "Create interactive prototype",
          toolCategories: ["demo-building", "website-building"],
          defaultToolName: ""
        },
        {
          title: "Prepare Presentation",
          description: "Package for feedback and testing",
          toolCategories: ["visual", "automating"],
          defaultToolName: ""
        }
      ]
    },
    design: {
      name: "AI-Enhanced Design Prototype",
      description: "Create a polished, interactive design prototype using AI tools",
      time: "2-4 hours",
      cost: "$0-$25",
      difficulty: "Intermediate-Advanced",
      steps: [
        {
          title: "Design Exploration",
          description: "Ideation and exploration with AI",
          toolCategories: ["visual", "writing"],
          defaultToolName: ""
        },
        {
          title: "Design System",
          description: "Create components and patterns",
          toolCategories: ["demo-building"],
          defaultToolName: ""
        },
        {
          title: "Build Screens",
          description: "Design all screens and interactions",
          toolCategories: ["demo-building"],
          defaultToolName: ""
        },
        {
          title: "Add Interactions",
          description: "Polish with microinteractions",
          toolCategories: ["demo-building", "visual"],
          defaultToolName: ""
        },
        {
          title: "User Testing Setup",
          description: "Prepare for testing and iteration",
          toolCategories: ["automating", "researching"],
          defaultToolName: ""
        }
      ]
    }
  };