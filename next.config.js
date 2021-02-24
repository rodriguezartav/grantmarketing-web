const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        API_URL: "http://localhost:4000",
        APP_URL: "http://localhost:3000",
        WEB_URL: "http://localhost:3001",
      },
    };
  }

  return {
    env: {
      API_URL: "https://api.jungledynamics.com",
      APP_URL: "https://app.jungledynamics.com",
      WEB_URL: "https://jungledynamics.com",
    },
  };
};
