module.exports = [
  'strapi::errors',
  {
      name: "strapi::security",
      config: {
        contentSecurityPolicy: {
          useDefaults: true,
          directives: {
            "connect-src": ["'self'", "https:"],
            "img-src": ["'self'", "data:", "blob:", process.env.STRAPI_CONTENT_SECURITY_POLICY_URL],
            "media-src": ["'self'", "data:", "blob:"],
            upgradeInsecureRequests: null,
          },
        },
      },
    },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
