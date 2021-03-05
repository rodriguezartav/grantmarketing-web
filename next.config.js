const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        API_URL: "http://localhost:4000",
        APP_URL: "http://localhost:3000",
        WEB_URL: "http://localhost:3001",
        PADDLE: "S1285",
        PADDLE_PLAN: 9151,
      },
    };
  }

  return {
    env: {
      API_URL: "https://api.jungledynamics.com",
      APP_URL: "https://app.jungledynamics.com",
      WEB_URL: "https://jungledynamics.com",
      PADDLE: "40637",
      PADDLE_PLAN: 647597,
    },
  };
};
