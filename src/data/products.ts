// Course types and interfaces
export interface CourseSpecifications {
  [key: string]: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  images: string[];
  video?: string; // Optional video preview
  videos?: string[]; // Multiple course videos for premium courses
  description: string;
  detailedDescription: string;
  category: string;
  features: string[];
  specifications: CourseSpecifications;
  inStock: boolean;
}

// Helper function to get course image with fallback
export const getProductImage = (productId: number, imageIndex: number = 1): string => {
  // Используем mail изображения для всех курсов
  return `/images/mail_${Math.min(productId, 8)}.jpg`;
};

// Helper function to get all available images for a course
export const getProductImages = (productId: number): string[] => {
  // Для всех курсов используем mail изображения
  return [getProductImage(productId)];
};

// Helper function to get course video preview
export const getProductVideo = (productId: number): string | undefined => {
  if (productId === 1) {
    return "/videos/Mailchimp Email Marketing Mastery 2025 Coursenvy Skillshare (1).mp4";
  }
  if (productId === 2) {
    return "/videos/Mailchimp Email Marketing Mastery 2025 Coursenvy Skillshare (2).mp4";
  }
  if (productId === 3) {
    return "/videos/Mailchimp Email Marketing Mastery 2025 Coursenvy Skillshare (3).mp4";
  }
  if (productId === 4) {
    return "/videos/Mailchimp Email Marketing Mastery 2025 Coursenvy Skillshare (4).mp4";
  }
  if (productId === 5) {
    return "/videos/Mailchimp Email Marketing Mastery 2025 Coursenvy Skillshare (5).mp4";
  }
  if (productId === 6) {
    return "/videos/Mailchimp Email Marketing Mastery 2025 Coursenvy Skillshare (6).mp4";
  }
  if (productId === 7) {
    return "/videos/Mailchimp Email Marketing Mastery 2025 Coursenvy Skillshare (7).mp4";
  }
  if (productId === 8) {
    return "/videos/Mailchimp Email Marketing Mastery 2025 Coursenvy Skillshare (8).mp4";
  }
  if (productId === 9) {
    return "/videos/Mailchimp Email Marketing Mastery 2025 Coursenvy Skillshare (9).mp4";
  }
  if (productId === 10) {
    return "/videos/Mailchimp Email Marketing Mastery 2025 Coursenvy Skillshare (10).mp4";
  }
  if (productId === 11) {
    return "/videos/Mailchimp Email Marketing Mastery 2025 Coursenvy Skillshare (11).mp4";
  }
  if (productId === 12) {
    return "/videos/Mailchimp Email Marketing Mastery 2025 Coursenvy Skillshare (12).mp4";
  }
  if (productId === 13) {
    return "/videos/Mailchimp Email Marketing Mastery 2025 Coursenvy Skillshare (13).mp4";
  }
  if (productId === 14) {
    return "/videos/Mailchimp Email Marketing Mastery 2025 Coursenvy Skillshare (14).mp4";
  }
  if (productId === 15) {
    return "/videos/Mailchimp Email Marketing Mastery 2025 Coursenvy Skillshare (15).mp4";
  }
  if (productId === 16) {
    return "/videos/Mailchimp Email Marketing Mastery 2025 Coursenvy Skillshare (16).mp4";
  }
  if (productId === 17) {
    return "/videos/Mailchimp Email Marketing Mastery 2025 Coursenvy Skillshare (1).mp4";
  }
  return undefined;
};

// Helper function to get course videos (for premium courses with multiple videos)
export const getProductVideos = (productId: number): string[] | undefined => {
  // Courses 5-7: 2 videos each
  if (productId === 5) {
    return [
      "/videos/Mailchimp Email Marketing Mastery 2025 Coursenvy Skillshare (5).mp4",
      "/videos/Mailchimp Email Marketing Mastery 2025 Coursenvy Skillshare (6).mp4"
    ];
  }
  if (productId === 6) {
    return [
      "/videos/Mailchimp Email Marketing Mastery 2025 Coursenvy Skillshare (6).mp4",
      "/videos/Mailchimp Email Marketing Mastery 2025 Coursenvy Skillshare (7).mp4"
    ];
  }
  if (productId === 7) {
    return [
      "/videos/Mailchimp Email Marketing Mastery 2025 Coursenvy Skillshare (7).mp4",
      "/videos/Mailchimp Email Marketing Mastery 2025 Coursenvy Skillshare (8).mp4"
    ];
  }
  
  // Courses 8-10: 3 videos each
  if (productId === 8) {
    return [
      "/videos/Mailchimp Email Marketing Mastery 2025 Coursenvy Skillshare (8).mp4",
      "/videos/Mailchimp Email Marketing Mastery 2025 Coursenvy Skillshare (9).mp4",
      "/videos/Mailchimp Email Marketing Mastery 2025 Coursenvy Skillshare (10).mp4"
    ];
  }
  if (productId === 9) {
    return [
      "/videos/Mailchimp Email Marketing Mastery 2025 Coursenvy Skillshare (9).mp4",
      "/videos/Mailchimp Email Marketing Mastery 2025 Coursenvy Skillshare (10).mp4",
      "/videos/Mailchimp Email Marketing Mastery 2025 Coursenvy Skillshare (11).mp4"
    ];
  }
  if (productId === 10) {
    return [
      "/videos/Mailchimp Email Marketing Mastery 2025 Coursenvy Skillshare (10).mp4",
      "/videos/Mailchimp Email Marketing Mastery 2025 Coursenvy Skillshare (11).mp4",
      "/videos/Mailchimp Email Marketing Mastery 2025 Coursenvy Skillshare (12).mp4"
    ];
  }
  if (productId === 11) {
    return [
      "/videos/Mailchimp Email Marketing Mastery 2025 Coursenvy Skillshare (11).mp4",
      "/videos/Mailchimp Email Marketing Mastery 2025 Coursenvy Skillshare (12).mp4",
      "/videos/Mailchimp Email Marketing Mastery 2025 Coursenvy Skillshare (13).mp4"
    ];
  }
  if (productId === 12) {
    return [
      "/videos/Mailchimp Email Marketing Mastery 2025 Coursenvy Skillshare (12).mp4",
      "/videos/Mailchimp Email Marketing Mastery 2025 Coursenvy Skillshare (13).mp4",
      "/videos/Mailchimp Email Marketing Mastery 2025 Coursenvy Skillshare (14).mp4"
    ];
  }
  if (productId === 13) {
    return [
      "/videos/Mailchimp Email Marketing Mastery 2025 Coursenvy Skillshare (13).mp4",
      "/videos/Mailchimp Email Marketing Mastery 2025 Coursenvy Skillshare (14).mp4",
      "/videos/Mailchimp Email Marketing Mastery 2025 Coursenvy Skillshare (15).mp4"
    ];
  }
  
  // Courses 14-15: 4 videos each (109-119 price range)
  if (productId === 14) {
    return [
      "/videos/Mailchimp Email Marketing Mastery 2025 Coursenvy Skillshare (12).mp4",
      "/videos/Mailchimp Email Marketing Mastery 2025 Coursenvy Skillshare (13).mp4",
      "/videos/Mailchimp Email Marketing Mastery 2025 Coursenvy Skillshare (14).mp4",
      "/videos/Mailchimp Email Marketing Mastery 2025 Coursenvy Skillshare (15).mp4"
    ];
  }
  if (productId === 15) {
    return [
      "/videos/Mailchimp Email Marketing Mastery 2025 Coursenvy Skillshare (13).mp4",
      "/videos/Mailchimp Email Marketing Mastery 2025 Coursenvy Skillshare (14).mp4",
      "/videos/Mailchimp Email Marketing Mastery 2025 Coursenvy Skillshare (15).mp4",
      "/videos/Mailchimp Email Marketing Mastery 2025 Coursenvy Skillshare (16).mp4"
    ];
  }
  
  // Courses 16-17: 5 videos each (129-139 price range)
  if (productId === 16) {
    return [
      "/videos/Mailchimp Email Marketing Mastery 2025 Coursenvy Skillshare (12).mp4",
      "/videos/Mailchimp Email Marketing Mastery 2025 Coursenvy Skillshare (13).mp4",
      "/videos/Mailchimp Email Marketing Mastery 2025 Coursenvy Skillshare (14).mp4",
      "/videos/Mailchimp Email Marketing Mastery 2025 Coursenvy Skillshare (15).mp4",
      "/videos/Mailchimp Email Marketing Mastery 2025 Coursenvy Skillshare (16).mp4"
    ];
  }
  if (productId === 17) {
    return [
      "/videos/Mailchimp Email Marketing Mastery 2025 Coursenvy Skillshare (13).mp4",
      "/videos/Mailchimp Email Marketing Mastery 2025 Coursenvy Skillshare (14).mp4",
      "/videos/Mailchimp Email Marketing Mastery 2025 Coursenvy Skillshare (15).mp4",
      "/videos/Mailchimp Email Marketing Mastery 2025 Coursenvy Skillshare (16).mp4",
      "/videos/Mailchimp Email Marketing Mastery 2025 Coursenvy Skillshare (1).mp4"
    ];
  }
  
  return undefined;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Intro to Email Marketing Fundamentals",
    price: 1.00,
    image: getProductImage(1),
    images: getProductImages(1),
    video: getProductVideo(1),
    description: "Introduction to email marketing with basic concepts and getting started guidance.",
    detailedDescription: "Master the fundamentals of email marketing. Learn what email marketing is, understand the basic concepts, and get started with your email marketing journey. Perfect foundation for aspiring digital marketers.",
    category: "Email Marketing Basics",
    features: [
      "Email marketing introduction",
      "Basic concepts overview",
      "Getting started guidance",
      "Marketing fundamentals",
      "Foundation techniques"
    ],
    specifications: {
      "Duration": "3 minutes 15 seconds",
      "Level": "Complete Beginner",
      "Language": "English",
      "Platform": "Email Marketing",
      "Access": "6 months",
      "Certificate": "Basic completion badge"
    },
    inStock: true
  },
  {
    id: 2,
    name: "Email Marketing Basics & Strategy",
    price: 1.95,
    image: getProductImage(2),
    images: getProductImages(2),
    video: getProductVideo(2),
    description: "Master email marketing basics, strategy fundamentals, and essential concepts for effective campaigns.",
    detailedDescription: "Deep dive into email marketing basics with comprehensive training on strategy, fundamentals, and essential concepts. Learn to create effective email marketing campaigns and understand core marketing principles.",
    category: "Email Marketing Basics",
    features: [
      "Email marketing strategy",
      "Campaign fundamentals",
      "Marketing concepts",
      "Best practices overview",
      "Strategy development"
    ],
    specifications: {
      "Duration": "4 minutes 30 seconds",
      "Level": "Beginner",
      "Platform": "Email Marketing",
      "Topics": "Strategy, fundamentals, concepts",
      "Access": "8 months",
      "Support": "Community forum access"
    },
    inStock: true
  },
  {
    id: 3,
    name: "MailChimp Setup & Plan Selection",
    price: 6.99,
    image: getProductImage(3),
    images: getProductImages(3),
    video: getProductVideo(3),
    description: "Learn how to sign up for MailChimp and choose the right plan for your email marketing needs.",
    detailedDescription: "Master MailChimp setup with comprehensive training on account creation, plan selection, and platform navigation. Learn professional techniques for choosing the right MailChimp plan and setting up your email marketing foundation.",
    category: "Platform Setup",
    features: [
      "MailChimp account creation",
      "Plan comparison and selection",
      "Platform navigation",
      "Setup best practices",
      "Account optimization"
    ],
    specifications: {
      "Duration": "5 minutes 45 seconds",
      "Level": "Beginner",
      "Platform": "MailChimp",
      "Topics": "Account setup, plan selection",
      "Access": "10 months",
      "Bonus": "Plan comparison guide"
    },
    inStock: true
  },
  {
    id: 4,
    name: "MailChimp Audiences Management",
    price: 9.99,
    image: getProductImage(4),
    images: getProductImages(4),
    video: getProductVideo(4),
    description: "Master MailChimp audience management - the foundation of all email marketing success and targeting.",
    detailedDescription: "Learn the essential audience management techniques in MailChimp. Master list building, audience segmentation, and the fundamental principles of email list management through comprehensive training used by professional email marketers worldwide.",
    category: "Audience Management",
    features: [
      "Audience creation and management",
      "List building principles",
      "Audience segmentation",
      "Contact management",
      "Professional audience workflows"
    ],
    specifications: {
      "Duration": "6 minutes 20 seconds",
      "Level": "Intermediate",
      "Platform": "MailChimp Audiences",
      "Techniques": "List building, segmentation, management",
      "Access": "8 months",
      "Bonus": "Audience management reference"
    },
    inStock: true
  },
  {
    id: 5,
    name: "MailChimp Campaigns Mastery",
    price: 19.99,
    image: getProductImage(5),
    images: getProductImages(5),
    video: getProductVideo(5),
    videos: getProductVideos(5),
    description: "Master MailChimp campaign creation for effective email marketing and professional campaign management.",
    detailedDescription: "Master the powerful campaign creation in MailChimp with comprehensive training. This course includes 2 detailed video modules covering campaign setup, email design, and professional email marketing techniques used by industry marketers.",
    category: "Campaign Creation",
    features: [
      "2 comprehensive video modules",
      "Campaign creation mastery",
      "Email design and layout",
      "Professional campaign techniques",
      "Industry-standard workflows",
      "Campaign optimization"
    ],
    specifications: {
      "Duration": "5 minutes 10 seconds per video",
      "Videos": "2 comprehensive modules",
      "Level": "Advanced",
      "Tools": "Campaign builder, email design",
      "Projects": "Campaign creation exercises",
      "Access": "10 months",
      "Bonus": "Campaign design reference guide"
    },
    inStock: true
  },
  {
    id: 6,
    name: "MailChimp Team & Admin Management",
    price: 29.99,
    image: getProductImage(6),
    images: getProductImages(6),
    video: getProductVideo(6),
    videos: getProductVideos(6),
    description: "Learn how to add admins and marketers to your MailChimp account for team collaboration.",
    detailedDescription: "Master team management in MailChimp with comprehensive training. This course includes 2 detailed video modules covering admin permissions, team collaboration, and professional account management for growing email marketing teams.",
    category: "Team Management",
    features: [
      "2 detailed video modules",
      "Admin permissions mastery",
      "Team collaboration setup",
      "User role management",
      "Professional team workflows",
      "Account security practices"
    ],
    specifications: {
      "Duration": "6 minutes 30 seconds per video",
      "Videos": "2 detailed modules",
      "Level": "Intermediate",
      "Focus": "Team management, permissions, collaboration",
      "Applications": "Multi-user accounts, team workflows",
      "Access": "12 months",
      "Support": "Team management guide"
    },
    inStock: true
  },
  {
    id: 7,
    name: "How to Grow an Email List",
    price: 39.99,
    image: getProductImage(7),
    images: getProductImages(7),
    video: getProductVideo(7),
    videos: getProductVideos(7),
    description: "Master email list growth strategies and techniques for building a engaged subscriber base.",
    detailedDescription: "Master advanced list building with comprehensive email growth training. This course includes 2 comprehensive video modules covering list growth strategies, lead magnets, and subscriber acquisition techniques for professional email marketing success.",
    category: "List Building",
    features: [
      "2 comprehensive video modules",
      "List growth strategy mastery",
      "Lead magnet creation",
      "Subscriber acquisition techniques",
      "Conversion optimization",
      "Professional growth workflows"
    ],
    specifications: {
      "Duration": "7 minutes 45 seconds per video",
      "Videos": "2 comprehensive modules",
      "Level": "Intermediate",
      "Focus": "List growth, lead magnets, acquisition",
      "Applications": "Subscriber growth, engagement building",
      "Access": "12 months",
      "Bonus": "List building toolkit"
    },
    inStock: true
  },
  {
    id: 8,
    name: "Best Email Subject Lines Mastery",
    price: 49.99,
    image: getProductImage(8),
    images: getProductImages(8),
    video: getProductVideo(8),
    videos: getProductVideos(8),
    description: "Master email subject line creation with comprehensive training on high-converting subject line techniques.",
    detailedDescription: "Master email subject line creation with comprehensive training. This course includes 3 detailed video modules covering subject line psychology, A/B testing, and conversion optimization techniques for professional email marketing success.",
    category: "Email Optimization",
    features: [
      "3 detailed video modules",
      "Subject line psychology",
      "A/B testing strategies",
      "Conversion optimization",
      "Open rate improvement",
      "Professional writing techniques"
    ],
    specifications: {
      "Duration": "9 minutes 20 seconds per video",
      "Videos": "3 detailed modules",
      "Level": "Advanced",
      "Focus": "Subject lines, psychology, optimization",
      "Techniques": "A/B testing, conversion optimization",
      "Access": "12 months",
      "Bonus": "Subject line template library"
    },
    inStock: true
  },
  {
    id: 9,
    name: "Email Content Creation & Strategy",
    price: 59.99,
    image: getProductImage(9),
    images: getProductImages(9),
    video: getProductVideo(9),
    videos: getProductVideos(9),
    description: "Master email content creation with comprehensive training on copywriting, design, and engagement strategies.",
    detailedDescription: "Master email content creation with comprehensive copywriting and design training. This premium course includes 3 comprehensive video modules covering email copywriting, visual design, and engagement optimization techniques.",
    category: "Content Creation",
    features: [
      "3 comprehensive video modules",
      "Email copywriting mastery",
      "Visual design principles",
      "Engagement optimization",
      "Content strategy development",
      "Professional writing techniques"
    ],
    specifications: {
      "Duration": "10 minutes 15 seconds per video",
      "Videos": "3 comprehensive modules",
      "Level": "Advanced",
      "Focus": "Content creation, copywriting, design",
      "Skills": "Writing, design, engagement optimization",
      "Access": "15 months",
      "Bonus": "Content creation toolkit"
    },
    inStock: true
  },
  {
    id: 10,
    name: "Email Automation & Sequences",
    price: 69.99,
    image: getProductImage(10),
    images: getProductImages(10),
    video: getProductVideo(10),
    videos: getProductVideos(10),
    description: "Master email automation with drip campaigns, welcome sequences, and advanced workflow creation.",
    detailedDescription: "Master email automation with comprehensive training on drip campaigns and sequences. This premium course includes 3 detailed video modules covering automated workflows, welcome sequences, and advanced email automation strategies.",
    category: "Email Automation",
    features: [
      "3 detailed video modules",
      "Drip campaign mastery",
      "Welcome sequence creation",
      "Automated workflow setup",
      "Sequence optimization",
      "Professional automation strategies"
    ],
    specifications: {
      "Duration": "11 minutes 40 seconds per video",
      "Videos": "3 detailed modules",
      "Level": "Advanced",
      "Focus": "Automation, sequences, workflows",
      "Skills": "Drip campaigns, welcome sequences",
      "Access": "15 months",
      "Bonus": "Automation workflow templates"
    },
    inStock: true
  },
  {
    id: 11,
    name: "Complete Email Marketing Mastery",
    price: 79.99,
    image: getProductImage(11),
    images: getProductImages(11),
    video: getProductVideo(11),
    videos: getProductVideos(11),
    description: "Master all aspects of email marketing with complete training covering every technique from basics to professional workflows.",
    detailedDescription: "Achieve email marketing mastery with complete comprehensive training. This premium course includes 3 comprehensive video modules covering all email marketing principles, advanced techniques, professional workflows, and industry-standard practices used by marketing agencies worldwide.",
    category: "Complete Mastery",
    features: [
      "3 comprehensive video modules",
      "Complete email marketing mastery",
      "All marketing principles covered",
      "Professional agency workflows",
      "Industry-standard techniques",
      "Advanced campaign optimization"
    ],
    specifications: {
      "Duration": "12 minutes 10 seconds per video",
      "Videos": "3 comprehensive modules",
      "Level": "Expert",
      "Coverage": "All email marketing principles, professional workflows",
      "Skills": "Complete email marketing mastery",
      "Access": "18 months",
      "Bonus": "Complete email marketing toolkit & templates"
    },
    inStock: true
  },
  {
    id: 12,
    name: "Advanced Email Analytics & Reporting",
    price: 89.99,
    image: getProductImage(12),
    images: getProductImages(12),
    video: getProductVideo(12),
    videos: getProductVideos(12),
    description: "Master email analytics, reporting, and data-driven decision making for optimized email campaigns.",
    detailedDescription: "Master advanced email analytics with comprehensive training on data analysis, reporting, and performance optimization. This premium course includes 3 detailed video modules covering analytics tools, KPI tracking, and data-driven email marketing strategies.",
    category: "Analytics & Optimization",
    features: [
      "3 detailed video modules",
      "Analytics tools mastery",
      "KPI tracking and monitoring",
      "Data-driven optimization",
      "Performance reporting",
      "ROI measurement techniques"
    ],
    specifications: {
      "Duration": "15 minutes 25 seconds per video",
      "Videos": "3 detailed modules",
      "Level": "Advanced",
      "Focus": "Analytics, reporting, optimization",
      "Skills": "Data analysis, performance tracking",
      "Access": "18 months",
      "Bonus": "Analytics dashboard templates"
    },
    inStock: true
  },
  {
    id: 13,
    name: "Email Marketing A/B Testing Mastery",
    price: 99.99,
    image: getProductImage(13),
    images: getProductImages(13),
    video: getProductVideo(13),
    videos: getProductVideos(13),
    description: "Master A/B testing techniques for email campaigns to maximize engagement and conversion rates.",
    detailedDescription: "Master A/B testing with comprehensive training on split testing methodologies. This premium course includes 3 comprehensive video modules covering test design, statistical analysis, and optimization strategies for maximum email performance.",
    category: "Testing & Optimization",
    features: [
      "3 comprehensive video modules",
      "A/B testing methodology",
      "Split testing strategies",
      "Statistical analysis",
      "Conversion optimization",
      "Testing best practices"
    ],
    specifications: {
      "Duration": "18 minutes 50 seconds per video",
      "Videos": "3 comprehensive modules",
      "Level": "Advanced",
      "Focus": "A/B testing, optimization, analysis",
      "Skills": "Testing design, data analysis",
      "Access": "18 months",
      "Bonus": "A/B testing framework & templates"
    },
    inStock: true
  },
  {
    id: 14,
    name: "Email Marketing Segmentation Pro",
    price: 109.99,
    image: getProductImage(14),
    images: getProductImages(14),
    video: getProductVideo(14),
    videos: getProductVideos(14),
    description: "Master advanced audience segmentation techniques for highly targeted and personalized email campaigns.",
    detailedDescription: "Master professional audience segmentation with comprehensive training on advanced targeting strategies. This premium course includes 4 comprehensive video modules covering behavioral segmentation, psychographic analysis, and personalization techniques for maximum campaign effectiveness.",
    category: "Advanced Segmentation",
    features: [
      "4 comprehensive video modules",
      "Advanced segmentation strategies",
      "Behavioral targeting mastery",
      "Psychographic analysis",
      "Personalization techniques",
      "Dynamic content strategies"
    ],
    specifications: {
      "Duration": "16 minutes 30 seconds per video",
      "Videos": "4 comprehensive modules",
      "Level": "Expert",
      "Focus": "Segmentation, targeting, personalization",
      "Skills": "Advanced audience analysis",
      "Access": "24 months",
      "Bonus": "Segmentation strategy framework"
    },
    inStock: true
  },
  {
    id: 15,
    name: "Email Deliverability & Inbox Optimization",
    price: 119.99,
    image: getProductImage(15),
    images: getProductImages(15),
    video: getProductVideo(15),
    videos: getProductVideos(15),
    description: "Master email deliverability techniques to ensure your emails reach the inbox and avoid spam filters.",
    detailedDescription: "Master email deliverability with comprehensive training on inbox placement optimization. This premium course includes 4 detailed video modules covering sender reputation, authentication protocols, and technical optimization for maximum deliverability.",
    category: "Deliverability Mastery",
    features: [
      "4 detailed video modules",
      "Deliverability optimization",
      "Sender reputation management",
      "Authentication protocols (SPF, DKIM, DMARC)",
      "Spam filter avoidance",
      "Technical email optimization"
    ],
    specifications: {
      "Duration": "22 minutes 15 seconds per video",
      "Videos": "4 detailed modules",
      "Level": "Expert",
      "Focus": "Deliverability, authentication, optimization",
      "Skills": "Technical email management",
      "Access": "24 months",
      "Bonus": "Deliverability optimization checklist"
    },
    inStock: true
  },
  {
    id: 16,
    name: "Enterprise Email Marketing Systems",
    price: 129.99,
    image: getProductImage(16),
    images: getProductImages(16),
    video: getProductVideo(16),
    videos: getProductVideos(16),
    description: "Master enterprise-level email marketing systems, workflows, and strategies for large-scale campaigns.",
    detailedDescription: "Master enterprise email marketing with comprehensive training on large-scale systems and workflows. This premium course includes 5 comprehensive video modules covering enterprise automation, multi-channel integration, and advanced team collaboration for corporate-level email marketing success.",
    category: "Enterprise Solutions",
    features: [
      "5 comprehensive video modules",
      "Enterprise automation systems",
      "Multi-channel integration",
      "Advanced team workflows",
      "Corporate-level strategies",
      "Scalable campaign management"
    ],
    specifications: {
      "Duration": "28 minutes 40 seconds per video",
      "Videos": "5 comprehensive modules",
      "Level": "Expert/Enterprise",
      "Focus": "Enterprise systems, automation, integration",
      "Skills": "Large-scale email marketing",
      "Access": "Lifetime access",
      "Bonus": "Enterprise framework & templates"
    },
    inStock: true
  },
  {
    id: 17,
    name: "Complete Email Marketing Agency Blueprint",
    price: 139.99,
    image: getProductImage(17),
    images: getProductImages(17),
    video: getProductVideo(17),
    videos: getProductVideos(17),
    description: "Master the complete agency-level email marketing blueprint with advanced strategies for running a professional email marketing business.",
    detailedDescription: "Master agency-level email marketing with the ultimate comprehensive training. This premium course includes 5 comprehensive video modules covering client management, agency workflows, advanced automation, revenue optimization, and complete business strategies for running a successful email marketing agency.",
    category: "Agency Mastery",
    features: [
      "5 comprehensive video modules",
      "Complete agency blueprint",
      "Client management systems",
      "Advanced automation workflows",
      "Revenue optimization strategies",
      "Business development mastery"
    ],
    specifications: {
      "Duration": "32 minutes 20 seconds per video",
      "Videos": "5 comprehensive modules",
      "Level": "Agency/Professional",
      "Focus": "Agency business, client management, revenue",
      "Skills": "Complete agency operations",
      "Access": "Lifetime access",
      "Bonus": "Complete agency toolkit, templates & systems"
    },
    inStock: true
  }
];
