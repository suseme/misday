module.exports = function(grunt) {
  grunt.initConfig({
    sass : {
          dist : {
            options : { style : 'compressed' },
            files : {
              'assets/css/scrath.css' : '_assets/scss/scrath.scss',
              'assets/css/style.css' : '_assets/scss/style.scss',
              'assets/css/syntax.css' : '_assets/scss/syntax.scss'
            }
          }
        }, // sass
    watch : {
      dist : {
        files : [
          '_assets/scss/**/*'
        ],
 
        tasks : ['sass']
      }
    } // watch
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
 
 
  // Tarefas que serão executadas
  grunt.registerTask('default', ['sass']);
 
  // Tarefa para Watch
  grunt.registerTask('w', ['watch']);
};