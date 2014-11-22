module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    bowercopy: {
      options: {
      },
      vendor: {
        options: {
          destPrefix: 'target/vendor'
        },
        files: {
          'jquery/jquery.js': 'jquery/dist/jquery.min.js',
          'angular/angular.js': 'angular/angular.min.js',
          'angular-route/angular-route.js': 'angular-route/angular-route.min.js',
          'bootstrap/js/bootstrap.js': 'bootstrap/dist/js/bootstrap.min.js',
          'bootstrap/css/bootstrap.css': 'bootstrap/dist/css/bootstrap.min.css',
          'bootstrap/fonts/glyphicons-halflings-regular.woff':
          'bootstrap/dist/fonts/glyphicons-halflings-regular.woff'
        }
      },
      main: {
        options: {
          srcPrefix: '.',
          destPrefix: 'target'
        },
        files: {
          'index.html': 'index.html',
          'pages': 'pages',
          'img': 'img'
        }
      }
    },
    replace: {
      cacheManifest: {
        src: ['cache.manifest'],
        dest: 'target/',
        replacements: [{
          from: /@CACHE_MANIFEST_BUILD_TIMESTAMP@/g,
          to: '<%= grunt.template.today("isoDateTime") %>'
        }]
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
  grunt.loadNpmTasks('grunt-text-replace');

  // Default tasks to run when grunt is started without arguments
  grunt.registerTask('default', ['clean', 'uglify','cssmin','bowercopy', 'replace']);
};
