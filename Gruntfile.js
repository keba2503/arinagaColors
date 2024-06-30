module.exports = function(grunt) {
  // Cargar automáticamente todas las tareas de Grunt declaradas en package.json
  require('load-grunt-tasks')(grunt);

  // Configuración de las tareas de Grunt
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Configuración de ESLint
    eslint: {
      options: {
        overrideConfigFile: 'eslint.config.js'  // Usar overrideConfigFile para flat config
      },
      target: ['src/**/*.js', 'src/**/*.jsx', 'src/**/*.ts', 'src/**/*.tsx']
    },

    // Configuración de Prettier
    prettier: {
      options: {
        configFile: 'prettier.config.js',
      },
      files: {
        src: ['src/**/*.js', 'src/**/*.jsx', 'src/**/*.ts', 'src/**/*.tsx']
      }
    },

    // Configuración de clean
    clean: {
      build: ['dist']
    }
  });

  // Carga de tareas
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-prettier');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Definición de tareas
  grunt.registerTask('format', ['prettier', 'eslint']);
  grunt.registerTask('default', ['clean', 'format']);
};
