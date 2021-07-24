const { withSentryConfig } = require("@sentry/nextjs");

const SentryWebpackPluginOptions = {
  // here
};

module.exports = withSentryConfig({
  reactStrictMode: true,
}, SentryWebpackPluginOptions)
