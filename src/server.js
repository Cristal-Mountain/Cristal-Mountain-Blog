var express = require("express");
var path = require("path");

var port = 80;

express()
  .use(express.static(path.resolve(__dirname, "../dist")))
  .listen(port, (err) => {
    if (err) throw err;

    console.log("running server");
  });
