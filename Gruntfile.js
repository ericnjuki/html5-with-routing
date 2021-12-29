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
    watch: {
      html: {
        files: ['components/*.html'],
        tasks: ['htmlConvert', 'browserSync']
      }
    },
  })

  grunt.loadNpmTasks('grunt-html-convert');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');

  grunt.registerTask('default', ['browserSync', 'watch']);
};