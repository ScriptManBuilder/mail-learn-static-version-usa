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
      "/videos/Mailchimp Email Marketing Mastery 2025 Coursenvy Skillshare (12).mp4",
      "/videos/Mailchimp Email Marketing Mastery 2025 Coursenvy Skillshare (13).mp4",
      "/videos/Mailchimp Email Marketing Mastery 2025 Coursenvy Skillshare (14).mp4"
    ];
  }
  
  // Course 11: 4 videos (using the highest quality videos)
  if (productId === 11) {
    return [
      "/videos/Mailchimp Email Marketing Mastery 2025 Coursenvy Skillshare (13).mp4",
      "/videos/Mailchimp Email Marketing Mastery 2025 Coursenvy Skillshare (14).mp4",
      "/videos/Mailchimp Email Marketing Mastery 2025 Coursenvy Skillshare (15).mp4",
      "/videos/Mailchimp Email Marketing Mastery 2025 Coursenvy Skillshare (16).mp4"
    ];
  }
  
  return undefined;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Intro to Email Marketing Fundamentals",
    price: 6.99,
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
      "Duration": "2 minutes 23 seconds",
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
    price: 9.99,
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
      "Duration": "5 minutes 53 seconds",
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
    price: 19.99,
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
      "Duration": "2 minutes 37 seconds",
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
    price: 29.99,
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
      "Duration": "30 minutes 31 seconds",
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
    price: 39.99,
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
      "Duration": "34 minutes 43 seconds + bonus content",
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
    price: 49.99,
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
      "Duration": "1 minute 11 seconds + extended content",
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
    price: 59.99,
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
      "Duration": "11 minutes 8 seconds + extended training",
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
    price: 69.99,
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
      "Duration": "4 minutes 33 seconds + extended training",
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
    price: 79.99,
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
      "Duration": "11 minutes 5 seconds + extended training",
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
    price: 89.99,
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
      "Duration": "9 minutes 27 seconds + extended training",
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
    price: 99.99,
    image: getProductImage(11),
    images: getProductImages(11),
    video: getProductVideo(11),
    videos: getProductVideos(11),
    description: "Master all aspects of email marketing with complete training covering every technique from basics to professional workflows.",
    detailedDescription: "Achieve email marketing mastery with complete comprehensive training. This premium course includes 4 comprehensive video modules covering all email marketing principles, advanced techniques, professional workflows, and industry-standard practices used by marketing agencies worldwide.",
    category: "Complete Mastery",
    features: [
      "4 comprehensive video modules",
      "Complete email marketing mastery",
      "All marketing principles covered",
      "Professional agency workflows",
      "Industry-standard techniques",
      "Advanced campaign optimization"
    ],
    specifications: {
      "Duration": "8 minutes 42 seconds + comprehensive training",
      "Videos": "4 comprehensive modules",
      "Level": "Expert",
      "Coverage": "All email marketing principles, professional workflows",
      "Skills": "Complete email marketing mastery",
      "Access": "18 months",
      "Bonus": "Complete email marketing toolkit & templates"
    },
    inStock: true
  }
];
