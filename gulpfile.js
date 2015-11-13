var gulp = require("gulp");
var browserify = require("browserify");
var stringify = require("stringify");
var babelify = require("babelify");
var source = require("vinyl-source-stream");

gulp.task("build", function() {
	return browserify({ entries: "./src/app.js" })
		.transform(stringify([".html"]))
		.transform("babelify", { presets: ["es2015"] })
		.bundle()
		.pipe(source("bundle.js"))
		.pipe(gulp.dest("./src"));
});

gulp.task("watch", ["watch"], function() {
	gulp.watch("*.js", ["build"]);
});

gulp.task("default", ["watch"]);