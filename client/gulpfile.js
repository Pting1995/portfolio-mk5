"use strict";

const { task, src, dest, parallel, series, watch } = require("gulp");

// sass dependency
var sass = require("gulp-sass")(require("node-sass"));

const autoprefixer = require("gulp-autoprefixer");
const combineMQ = require("gulp-group-css-media-queries");
const uglifycss = require("gulp-uglifycss");

const rename = require("gulp-rename");

const MyCSSDir = "src/scss/";

task("maincss", () => {
  return src(MyCSSDir + "*.scss")
    .pipe(
      sass({
      }).on("error", sass.logError)
    )
    .pipe(autoprefixer())
    .pipe(combineMQ())
    .pipe(uglifycss())
    .pipe(rename({ suffix: ".min" }))
    .pipe(dest("public/css"));
});

task("watchman", () => {
  watch(MyCSSDir + "**/*.scss", series("maincss"));
});

task("default", parallel("maincss", "watchman"));
