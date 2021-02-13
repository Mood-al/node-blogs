const express = require("express");
const Blog = require("../modals/blogs");
const route = express.Router();
route.get("/blogs", (req, res) => {
  Blog.find().then((resault) => res.render("blogs", { blogs: resault || [] }));
});
route.post("/blogs", (req, res) => {
  const blog = new Blog(req.body);
  blog.save().then((resault) => res.redirect("/"));
});
route.get("/blogs/create", (req, res) => {
  res.render("create");
});
route.get("/blogs/:id", (req, res) => {
  Blog.findById(req.params.id).then((resault) => {
    res.render("single-blog", { blog: resault });
  });
});
route.delete("/blogs/:id", (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id).then((resault) => {
    res.json({ redirect: "/blogs" });
  });
});

module.exports = route;
