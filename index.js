const express = require("express");

const app = express();
const port = 4444;
const path = require("path");

//app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", express.static("public"));
app.use("/", express.static(path.join(__dirname, "public" + "index.html")));
app.use("/about", express.static("public"));
app.use(
  "/about",
  express.static(path.join(__dirname, "public" + "about.html"))
);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
