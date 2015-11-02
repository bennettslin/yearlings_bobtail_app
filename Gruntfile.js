module.exports = function(grunt) {
    require('jit-grunt')(grunt);

    grunt.initConfig({
        concurrent: {
            dev: [
                'jshint',
                'less',
                'nodemon',
                'watch'
            ],
            options: {
                logConcurrentOutput: true
            }
        },
        jshint: {
          files: ['Gruntfile.js', 'controllers/**/*.js', 'public/js/**/*.js'],
        },
        less: {
            dev: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    'public/css/style.css': 'less/style.less'
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
                    }
                }
            }
        },
        watch: {
            styles: {
                files: ['less/**/*.less'],
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            }
        }
    });

    grunt.registerTask('default', [
        'concurrent'
    ]);
};
