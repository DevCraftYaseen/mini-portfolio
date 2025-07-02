const servicesData = [
  {
    id: "01",
    title: "Web design",
    heroDescription:
      "Creating visually appealing, user-friendly, and responsive websites that align with your brand and goals.",
    description: [
      "Our web design services combine creativity with functionality to deliver websites that make a lasting impression.",
      "We focus on user-centered design principles, responsive layouts, and seamless navigation experiences.",
      "Whether you're launching a new brand or revamping an existing site, we tailor each project to reflect your unique identity.",
    ],
    process: [
      {
        title: "Research & Planning",
        description: "Understanding your goals, audience, and brand voice to shape the design strategy.",
      },
      {
        title: "Design Mockups",
        description: "Creating visual layouts and interactive prototypes to showcase your future site.",
      },
      {
        title: "Development",
        description: "Converting designs into a functional, SEO-optimized website with clean, scalable code.",
      },
      {
        title: "Launch & Support",
        description: "Testing across browsers and devices, then going live with optional ongoing maintenance.",
      },
    ],
    features: [
      "Responsive design",
      "SEO optimization",
      "UX-focused layout",
      "CMS integration",
      "Fast-loading pages",
      "Mobile-first strategy",
      "Brand alignment",
      "Interactive UI",
      "Accessibility compliance",
      "Post-launch support",
    ],
    ctaTitle: "Let’s Build Your Dream Website",
    ctaDescription: "Book a free consultation today to start transforming your online presence.",
    faqs: [
      {
        question: "Do you use templates or custom design?",
        answer: "We specialize in custom design tailored to your brand, but we can also work with themes if requested.",
      },
      {
        question: "Will my site be editable?",
        answer: "Yes! We build user-friendly admin panels so you can easily manage your content post-launch.",
      },
      {
        question: "Can you redesign an existing website?",
        answer: "Yes, we specialize in redesigns. We can audit your current site and improve both visuals and performance."
      },
      {
        question: "Do you offer e-commerce website design?",
        answer: "Absolutely! We design fully functional online stores using platforms like Shopify, WooCommerce, and custom builds."
      }
    ],
  },
  {
    id: "02",
    title: "Graphics design",
    heroDescription:
      "Designing engaging graphics, logos, and visuals that capture attention and communicate your message clearly.",
    description: [
      "Our team blends creativity with strategy to craft designs that leave a lasting impression.",
      "Whether it’s a logo, brochure, or social media post, we ensure your visuals are aligned with your brand voice.",
    ],
    process: [
      {
        title: "Discovery",
        description: "We understand your brand’s personality, audience, and design preferences.",
      },
      {
        title: "Ideation",
        description: "Sketching and brainstorming multiple design directions based on your goals.",
      },
      {
        title: "Execution",
        description: "Refining selected concepts and preparing final graphics in all required formats.",
      },
      {
        title: "Delivery",
        description: "Delivering source files and guidelines to help you maintain consistency.",
      },
    ],
    features: [
      "Logo design",
      "Posters & flyers",
      "Business cards",
      "Brand kits",
      "Social media templates",
      "Infographics",
      "Brochure design",
      "UI graphics",
      "Print-ready formats",
      "Unlimited revisions",
    ],
    ctaTitle: "Ready for Bold Visuals?",
    ctaDescription: "Let’s create scroll-stopping designs that reflect your vision.",
    faqs: [
      {
        question: "Can you design for print and digital?",
        answer: "Yes, we provide both high-res print-ready files and web-optimized assets.",
      },
      {
        question: "Do I get source files?",
        answer: "Absolutely. We provide editable files in PSD, AI, or your preferred format.",
      },
      {
        question: "Do you follow brand guidelines?",
        answer: "Yes, we work with existing brand guidelines and can help create one if you don't have it yet."
      },
      {
        question: "Can I request editable files?",
        answer: "Definitely. We provide source files (AI, PSD, etc.) upon final delivery."
      }
    ],
  },
  {
    id: "03",
    title: "Social media",
    heroDescription:
      "Managing and growing your brand presence across platforms with strategic content and audience engagement.",
    description: [
      "Our social media services help you connect, engage, and grow with your target audience.",
      "We handle everything from content creation to community management and analytics.",
      "Whether it's Instagram, Facebook, LinkedIn, or TikTok, we tailor your voice for each platform.",
    ],
    process: [
      {
        title: "Audit & Strategy",
        description: "Analyzing your current presence and defining content strategies that drive engagement.",
      },
      {
        title: "Content Calendar",
        description: "Planning regular posts, stories, and campaigns to keep your brand top-of-mind.",
      },
      {
        title: "Engagement & Growth",
        description: "Building an active community by responding, commenting, and boosting reach with hashtags and ads.",
      },
      {
        title: "Monthly Reports",
        description: "Tracking performance and refining strategy with data-driven insights.",
      },
    ],
    features: [
      "Custom content creation",
      "Hashtag strategy",
      "Audience targeting",
      "Monthly analytics reports",
      "Platform management",
      "Visual content design",
      "Ad campaign setup",
      "Community engagement",
      "Reels & Stories creation",
      "Influencer collaboration",
    ],
    ctaTitle: "Grow Your Social Presence",
    ctaDescription: "Let us handle your socials so you can focus on running your business.",
    faqs: [
      {
        question: "Which platforms do you manage?",
        answer: "We work with Instagram, Facebook, LinkedIn, Twitter, Pinterest, and TikTok.",
      },
      {
        question: "Can you create content for me?",
        answer: "Yes! We handle everything from captions to custom graphics and videos.",
      },
      {
        question: "Do you offer paid ads management?",
        answer: "Yes, we manage Facebook, Instagram, and LinkedIn ads with performance tracking."
      },
      {
        question: "How often will you post on my profiles?",
        answer: "Our standard packages include 3–5 posts per week, but we can customize based on your needs."
      }
    ],
  },
  {
    id: "04",
    title: "App design",
    heroDescription:
      "Designing intuitive and sleek user interfaces for mobile applications that enhance user experience and usability.",
    description: [
      "We design mobile-first, intuitive UIs for iOS and Android apps that keep users engaged.",
      "Our designs balance functionality and visual appeal to deliver optimal in-app experiences.",
    ],
    process: [
      {
        title: "User Research",
        description: "Understanding user behavior, goals, and pain points.",
      },
      {
        title: "UX Wireframing",
        description: "Sketching user flows, screens, and interactions.",
      },
      {
        title: "UI Design",
        description: "Designing pixel-perfect interfaces with your brand in mind.",
      },
      {
        title: "Handoff & Support",
        description: "Preparing assets and design systems for seamless developer handoff.",
      },
    ],
    features: [
      "Mobile-first UI",
      "User journey mapping",
      "iOS & Android designs",
      "Prototyping",
      "Design systems",
      "Interaction design",
      "Micro-animations",
      "Dark/light mode support",
      "Developer handoff",
      "Post-launch improvements",
    ],
    ctaTitle: "Design a Delightful App",
    ctaDescription: "We’ll help you create an app users love and return to.",
    faqs: [
      {
        question: "Do you design for both Android and iOS?",
        answer: "Yes, our UI kits are platform-specific and follow design guidelines for both systems.",
      },
      {
        question: "Can you help with prototyping?",
        answer: "Definitely. We use Figma and Adobe XD to build interactive prototypes for testing and presentations.",
      },
      {
        question: "Can you design both Android and iOS apps?",
        answer: "Yes, we use cross-platform design systems while also respecting platform-specific guidelines."
      },
      {
        question: "Will you provide design systems or style guides?",
        answer: "Yes, we can deliver a full design system for developers and future updates."
      }
    ],
  },
  {
    id: "05",
    title: "Digital marketing",
    heroDescription:
      "Promoting your business online through SEO, PPC, email marketing, and data-driven campaigns for better reach and ROI.",
    description: [
      "Our digital marketing strategies are built to increase your visibility, traffic, and conversions.",
      "We use data-driven techniques across multiple channels like search, email, and paid ads."
    ],
    process: [
      {
        title: "Audit & Goal Setting",
        description: "Reviewing current digital efforts and defining SMART goals."
      },
      {
        title: "Campaign Planning",
        description: "Creating targeted, multi-channel campaigns based on your objectives."
      },
      {
        title: "Execution",
        description: "Launching SEO, PPC, and email campaigns with continuous monitoring."
      },
      {
        title: "Optimization",
        description: "Improving performance based on analytics and ROI tracking."
      }
    ],
    features: [
      "Search engine optimization",
      "Google Ads management",
      "Email marketing",
      "Conversion rate optimization",
      "Analytics setup",
      "Keyword research",
      "Retargeting campaigns",
      "A/B testing",
      "Monthly performance reports",
      "ROI-focused approach"
    ],
    ctaTitle: "Boost Your Online Visibility",
    ctaDescription: "Let’s drive real traffic and results to your business today.",
    faqs: [
      {
        question: "Do you offer SEO audits?",
        answer: "Yes, we conduct full audits and provide actionable SEO recommendations."
      },
      {
        question: "How soon will I see results?",
        answer: "SEO takes 3–6 months typically; paid ads can bring results in days with the right targeting."
      },
      {
        question: "Can you manage my Google Ads account?",
        answer: "Yes, we provide full Google Ads setup, management, and optimization services."
      },
      {
        question: "Do you help with local SEO?",
        answer: "Absolutely! We optimize your business for Google Maps, local keywords, and citations."
      }
    ]
  },
  {
    id: "06",
    title: "Content writing",
    heroDescription:
      "Crafting compelling, SEO-friendly content that informs, engages, and drives traffic to your website or brand.",
    description: [
      "From blog posts to website copy, we write content that converts and ranks.",
      "Our writers specialize in technical, marketing, and storytelling content tailored to your audience."
    ],
    process: [
      {
        title: "Research",
        description: "Understanding the topic, keywords, and audience intent."
      },
      {
        title: "Outline & Draft",
        description: "Creating a clear structure and writing engaging content."
      },
      {
        title: "SEO Optimization",
        description: "Adding keywords, meta data, and readability enhancements."
      },
      {
        title: "Final Edits",
        description: "Proofreading, formatting, and preparing for publication."
      }
    ],
    features: [
      "SEO-friendly writing",
      "Blog posts & articles",
      "Website copy",
      "Product descriptions",
      "Email sequences",
      "Social media captions",
      "Proofreading",
      "Topic ideation",
      "Content calendars",
      "On-time delivery"
    ],
    ctaTitle: "Need Words That Work?",
    ctaDescription: "Let our words drive traffic, leads, and engagement for your brand.",
    faqs: [
      {
        question: "Do you write technical content?",
        answer: "Yes, our writers have experience in tech, SaaS, marketing, and more."
      },
      {
        question: "Can you match my brand’s tone?",
        answer: "Absolutely. We study your style guide or help create one to ensure consistency."
      },
      {
        question: "Do you write long-form content?",
        answer: "Yes! We provide eBooks, whitepapers, pillar posts, and in-depth guides."
      },
      {
        question: "Can you help with content strategy?",
        answer: "Yes, we can develop a full content plan including topic ideation and keyword research."
      }
    ]
  }
];
export default servicesData;