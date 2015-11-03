module.exports = function(grunt) {
    require('jit-grunt')(grunt);

    grunt.initConfig({
        concurrent: {
            dev: [
                'less',
                'nodemon',
                'watch'
            ],
            options: {
                logConcurrentOutput: true
            }
        },
        concat: {
            dist: {
                src: ['jsx/**/*.jsx', 'js/**/*.js'],
                dest: 'public/jsx/components.jsx'
            },
        },
        babel: {
            options: {
                sourceMap: true,
                presets: ['react']
            },
            dist: {
                src: 'public/jsx/components.jsx',
                dest: 'public/js/components.js'
            }
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
            script: {
                files: ['jsx/**/*.jsx'],
                tasks: [
                    'concat',
                    'babel'
                ]
            },

            style: {
                files: ['less/**/*.less'],
                tasks: 'less',
                options: {
                    nospawn: true
                }
            }
        }
    });

    grunt.registerTask('default', [
        'concat',
        'babel',
        'less',
        'concurrent'
    ]);
};
