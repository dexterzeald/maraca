module.exports = function(grunt) {
 
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shopify');
 
  grunt.initConfig({
    shopify: {
      options: {
        //You can find these in your Shopify Admin under Apps then look at the bottom for Create a private API Key
        api_key: "572c9646bc837b08346d1895904994b9",
        password: "24feaa5b8a13a3ac5511882b1340788f",
        url: "maraca-3.myshopify.com",
        base: 'maraca-theme/'
      }
    },
    watch: {
      shopify: {
        files: ['maraca-theme/**'],
        tasks: ["shopify"]
      }
    }
 
  });
 
  grunt.registerTask('default', ['shopify']);
 
};