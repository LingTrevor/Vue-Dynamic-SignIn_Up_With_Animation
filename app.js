const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
  //Static folder
  app.use(express.static(__dirname + "/server/client/public"));

  //Handle SPA
  app.get(/.*/, (req, res) => {
    res.sendFile(__dirname + "/server/client/public/index.html");
  });
}

app.listen(port, () => {
  console.log(`Started on port: ${port}`);
});
