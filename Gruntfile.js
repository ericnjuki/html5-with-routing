module.exports = function(grunt) {
  grunt.initConfig({
    htmlConvert: {
      options: {
        fileHeaderString: `// this is an auto-generated file, don't make any changes you want to persist here.
        `,
      },
      template: {
        src: ['components/*.html'],
        dest: 'assets/scripts/components.js'
      },
    },

    browserSync: {
      bsFiles: {
          src : ['*.html', 'components/*.html', '*.css', 'script.js', 'assets/scripts/*.js', 'assets/imgaes/*'],
      },
      options: {
        watchTask: true,
        server: {
            baseDir: "./"
        }
      }
    },
    clean: {
      production: ['dist']
    },
    copy: {
      production: {
        files: [{
          src: ['**/*', '!*.gitignore', '!TODO', '!Gruntfile.js', '!package.json', '!package-lock.json', 'README.md', '!node_modules/**', '!components/**', '!dist/**', '!.*', '!.*/**',],
          dest: 'dist/',
        }]
      }
    },
    watch: {
      html: {
        files: ['components/*.html'],
        tasks: ['htmlConvert', 'browserSync']
      }
    },
  })

  grunt.loadNpmTasks('grunt-html-convert');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-browser-sync');

  grunt.registerTask('default', ['htmlConvert', 'browserSync', 'watch']);
  grunt.registerTask('production', ['htmlConvert', 'clean', 'copy']);
};