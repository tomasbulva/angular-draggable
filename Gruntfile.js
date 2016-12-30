'use strict';

module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    var appConfig = {
        dist: 'dist'
    };

    grunt.initConfig({
        uglify: {
            options: {
                sourceMap: true
            },
            build: {
                files: [{
                    expand: false,
                    src: ['js/main.js'],
                    dest: 'dist/angular-draggable.min.js',
                    ext: '*.js'
                }]
            }
        }
    });

    grunt.registerTask('default', function (target) {
      grunt.task.run([
        'uglify'
      ]);
    });
};
