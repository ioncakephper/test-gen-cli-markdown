module.exports = function(grunt) {

  grunt.initConfig({
    'generate-cli-markdown': {
      target: {
        options: {
          // Task-specific options go here.
        },
        // Files to generate documentation from.
        files: {
          'README.md': ['index.js'] // Example: Generate README.md from index.js
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-generate-cli-markdown');
  grunt.loadNpmTasks('grunt-insert-file-tag');

  grunt.registerTask('default', ['generate-cli-markdown', 'insert_file_tag']);

};
