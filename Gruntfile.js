module.exports = function(grunt) {
    require('jit-grunt')(grunt);
    grunt.loadNpmTasks('grunt-nodemon');

    grunt.initConfig({
        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    // destination file and source file
                    "public/css/style.css": "public/css/style.less"
                }
            }
        },
        concurrent: {
          dev: {
            tasks: ['nodemon', 'node-inspector', 'watch'],
            options: {
              logConcurrentOutput: true
            }
          }
        },
        nodemon: {
            dev: {
                script: 'server.js',
                options: {
                    nodeArgs: ['--debug'],
                    env: {
                        PORT: '1337'
                    },
                    // omit this property if you aren't serving HTML files and
                    // don't want to open a browser tab on start
                    // callback: function(nodemon) {
                    //     nodemon.on('log', function (event) {
                    //         console.log(event.colour);
                    //     });

                    //     // opens browser on initial server start
                    //     nodemon.on('config:update', function() {
                    //         // Delay before server listens on port
                    //         setTimeout(function() {
                    //             require('open')('http://localhost:1337');
                    //         }, 1000);
                    //     });

                    //     // refreshes browser when server reboots
                    //     nodemon.on('restart', function() {
                    //         // Delay before server listens on port
                    //         setTimeout(function() {
                    //             require('fs').writeFileSync('.rebooted', 'rebooted');
                    //         }, 1000);
                    //     });
                    // }
                }
            }
        },
        watch: {
            server: {
                files: ['.rebooted'],
                options: {
                    livereload: true
                }
            },
            styles: {
                // which files to watch
                files: ['public/css/**/*.less'],
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            }
        }
    });

    grunt.registerTask('default', ['less', 'nodemon', 'watch']);
};
