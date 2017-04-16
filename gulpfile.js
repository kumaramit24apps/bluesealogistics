'use strict';

var gulp = require('gulp');

gulp.task("hello", function(){
	console.log("Hello!");
})

// Defaul task dependancies using the gulp
// Gulp  deafult task name: - hello
gulp.task("default", ["hello"], function(){
	console.log("default task finished ");
})
// gulp task creation. 
