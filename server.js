const app = require("./app");
const connectDatabase = require("./database");

// Connecting to database
connectDatabase();

const server = app.listen(5000, () => {
  console.log("Server is working");
});
