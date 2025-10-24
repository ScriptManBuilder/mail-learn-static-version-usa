// Contact Information Constants
export const CONTACT_INFO = {
  email: process.env.REACT_APP_SUPPORT_EMAIL || 'support@illustar-course.com',
  phone: process.env.REACT_APP_SUPPORT_PHONE || '+14127901270',
  phoneFormatted: process.env.REACT_APP_SUPPORT_PHONE_FORMATTED || '+1 (412) 790-1270',
} as const;

// Company Information Constants
export const COMPANY_INFO = {
  name: process.env.REACT_APP_COMPANY_NAME || 'IllustarCourse',
  websiteUrl: process.env.REACT_APP_WEBSITE_URL || 'illustar-course.com',
} as const;

// API Configuration
export const API_CONFIG = {
  baseUrl: process.env.REACT_APP_API_BASE_URL || 'http://localhost:3004',
} as const;

// App Configuration
export const APP_CONFIG = {
  name: process.env.REACT_APP_APP_NAME || 'IllustarCourse',
  version: process.env.REACT_APP_VERSION || '1.0.0',
} as const;