export const siteConfig = {
  name: "Olivier Phaneuf",
  title: "Senior Delivery Leader",
  tagline: "Delivering £40m+ portfolios with AI-powered tools",
  description: "Senior Delivery Leader showcasing AI-powered delivery management tools and £40m+ portfolio experience.",

  urls: {
    site: "https://ocphaneuf.github.io",
    linkedin: "https://www.linkedin.com/in/olivier-phaneuf-cmgr-mcmi-2b085a82/",
    github: "https://github.com/ocphaneuf",
    email: "ocphaneuf@gmail.com",
  },

  formspree: {
    formId: "mgovvraq",
  },

  analytics: {
    ga4Id: "G-09TTSCQJTB",
  },

  metrics: [
    { value: "£40m+", label: "Portfolio at Ocado" },
    { value: "£7m", label: "Portfolio at Network Rail" },
    { value: "CMgr", label: "Chartered Manager" },
  ],

  navigation: [
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
};

export type SiteConfig = typeof siteConfig;
