const app = require("./server/app-config");

const port = process.env.PORT || 4000;

app.listen(port);
console.log("Successfully connected to port " + port);

module.exports = app;