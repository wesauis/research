"use strict";

const { PORT } = require("./env.js");
const { createServer } = require("./server.js");

createServer().listen(PORT).then((info) => {
  console.log(`✨ Server running at ${info.url}`);
});
