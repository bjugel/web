module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    bowercopy: {
      options: {
      },
      scripts: {
        options: {
          destPrefix: 'target/vendor/js'
        },
        files: {
          'jquery.js': 'jquery/dist/jquery.min.js',
          'angular.js': 'angular/angular.min.js',
          'angular-route.js': 'angular-route/angular-route.min.js',
          'bootstrap.js': 'bootstrap/dist/js/bootstrap.min.js'
        }
      },
      css: {
        options: {
          destPrefix: 'target/vendor/css'
        },
        files: {
          'bootstrap.css': 'bootstrap/dist/css/bootstrap.min.css'
        }
      },
      fonts: {
        options: {
          destPrefix: 'target/vendor/fonts'
        },
        files: {
          'glyphicons-halflings-regular.woff': 'bootstrap/dist/fonts/glyphicons-halflings-regular.woff'
        }
      },
      main: {
        options: {
          srcPrefix: '.',
          destPrefix: 'target'
        },
        files: {
          'index.html': 'index.html',
          'img': 'img',
          'cache.manifest': 'cache.manifest'
        }
      }
    },
    uglify: {
      my_target: {
        files: {
          'target/js/spqr.js': ['js/app.js', 'js/controllers.js']
        }
      }
    },
    cssmin: {
      combine: {
        files: {
          'target/css/spqr.css': ['css/main.css']
        }
      }
    },
    clean: ['target', 'bower_components', 'npm-debug.log']
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-bowercopy');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default tasks to run when grunt is started without arguments
  grunt.registerTask('default', ['clean', 'uglify','cssmin','bowercopy']);
};
