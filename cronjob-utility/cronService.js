var cron = require("node-cron");

const cronService = (pattern, operationFunc) => {
  cron.schedule(pattern, () => {
    console.log("running a task every two minutes");
    operationFunc()
  });
};

module.exports = { cronService }