module.exports = function(grunt) {

  grunt.initConfig({
    nodewebkit: {
      options: {
        version: '0.10.0',
        buildDir: './build', // Where the build version of my node-webkit app is saved
        credits: './public/Credits.html',
        platforms: ['osx', 'win'] // These are the platforms that we want to build
      },
      src: './www/**/*' // Your node-webkit app
    },
  });

  grunt.loadNpmTasks('grunt-node-webkit-builder');
  grunt.registerTask('default', ['nodewebkit']);

};
