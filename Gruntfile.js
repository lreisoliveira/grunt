
module.exports = function(grunt) {
  grunt.initConfig({
     uglify: {
        'build/home.js': 'src/home.js',
        'build/main.js': 'src/main.js'  
     }
  });
 
  // carrega plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
};
