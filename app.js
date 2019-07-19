const http = require("http");
const path = require("path");
const bodyParser = require("body-parser");

const express = require("express");

const app = express();

const error404Controller = require("./controllers/errorController");

//Templates
app.set("view engine", "pug");
app.set("views", "views");

const rootDir = require("./util/path");

//Routers
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, "public")));

app.use("/admin", adminRoutes.routes);
app.use(shopRoutes);

app.use(error404Controller.get404Pages);

app.listen(3000);
