const express = require("express");
const app = express();
const path = require("path");

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3030;
}

// API endpoints
app.get("/api/ping", (req, res) => {
  const timeStamp = new Date();
  console.log(`at endpoint /api/ping `, timeStamp);

  return res.json({
    message: "pong " + new Date()
  });
});

app.get("/api/count", (req, res) => {
  const currentCount = 15; //TODO: get from DB

  return res.json({
    count: currentCount
  });
});

// Static assets, index.html specified directories will be served. (css, html, js)
const rootDirForBuild = "../client/build/";
app.use("/", express.static(path.join(__dirname, rootDirForBuild)));
console.log(
  `Serving directory: ${path.join(
    __dirname,
    rootDirForBuild
  )} on http://localhost:${port}`
);

app.listen(port, () =>
  console.log(`Server is listening for API requests on port ${port}`)
);
