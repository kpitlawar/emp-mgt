const exp = require("express");
const app = exp();
const port = 3001; // Choose any available port
const api = require("./routes/api.js");
var bodyParser = require("body-parser");
// ... Other middleware and route setup ...

app.use(bodyParser.json());

app.use("/emp", api);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
