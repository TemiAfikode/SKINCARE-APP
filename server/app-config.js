"use strict";

const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const path = require("path");

// Make sure you place body-parser before your CRUD handlers!
// Body-parser is a middleware. They help to tidy up the request object before we use them
app.use(bodyParser.urlencoded({ extended: true }));
const jsonParser = express.json();
app.use(jsonParser);

app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "../public")));

// Homepage
app.get("/", async(req, res) => {
    res.render("index", { title: "Cats App" });
});

// About Us page
app.get("/about-us", async(req, res) => {
    res.render("about-us", { title: "Skincare App" });
});

// Products Page
app.get("/products", async(req, res) => {
    res.render("products", { title: "Skincare App" });
});

// Error Fallback Page
app.get("/*", async(req, res) => {
    res.render("error", { title: "Skincare App" });
});

module.exports = app;