const Vue = require('vue');
const marked = require('marked');

new Vue({
  el: '#main',
  data: {
    input: '# edit here!'
  },
  computed: {
    convertMarkdown: function () {
      return marked(this.input, {sanitize: true});
    }
  }
});