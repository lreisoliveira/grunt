
module.exports = function(grunt) {

 'use strict';

  var config = {
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
       'build/home.js': 'src/home.js',
       'build/main.js': 'src/main.js'
    }

  };

  grunt.initConfig(config);
  grunt.loadNpmTasks('grunt-contrib-uglify');
};
