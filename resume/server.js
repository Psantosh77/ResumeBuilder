const express = require("express");
const router = require("./routes/educationRoutes");
const internshiprouter = require("./routes/internshipRouter");
const prorouter = require("./routes/projectRouter");
const trouter = require("./routes/tranningRoutes");
const app = express();
const port = process.env.PORT || 5000;
require("./db/connection");

app.use(express.json());

app.use(router);
app.use(trouter);
app.use(prorouter);
app.use(internshiprouter);

app.listen(port, () => {
  console.log(`server is running at ${port}`);
});
