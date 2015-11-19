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
            // begin with variables and mixins
            css: {
                src: ['less/variables/*.less', 'less/*.less'],
                dest: 'src/style.less'
            },
            // end with DOM-related scripts
            js: {
                src: ['jsx/mixins/*.jsx', 'jsx/*.jsx', 'jsx/js/*.js'],
                dest: 'src/components.jsx'
            },
        },
        babel: {
            options: {
                compact: false,
                sourceMap: true,
                presets: ['react']
            },
            dist: {
                src: 'src/components.jsx',
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
                    'public/css/style.css': 'src/style.less'
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
                files: ['jsx/**/*.jsx', 'jsx/**/*.js'],
                tasks: [
                    'concat',
                    'babel'
                ]
            },

            style: {
                files: ['less/**/*.less'],
                tasks: [
                    'concat',
                    'less'
                ],
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
