const { urlencoded } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes");
const app = express();
const URI =
  "mongodb+srv://mooder:123456123456@cluster0.bwg6l.mongodb.net/blogs-app?retryWrites=true&w=majority";
mongoose
  .connect(URI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then((res) => app.listen(3000, () => console.log("listening to port 3000")));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => res.redirect("/blogs"));
app.get("/about", (req, res) => res.render("about"));
app.use(blogRoutes);
