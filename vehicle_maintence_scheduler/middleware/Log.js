const axios = require('axios')

async function Log(stack, level, package, message) {
    await axios.post("http://4.224.186.213/evaluation-service/logs", {
        stack,
        level,
        package: package,
        message
    });
}

module.exports = Log;



// import Log from "./logger.js";

// await Log(
//     "backend",
//     "info",
//     "auth",
//     "User logged in"
// );