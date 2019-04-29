var Vue = require('vue');
var marked = require('marked');

var mdve = new Vue({
  el: '#mdve',
  data: {
    input: '# edit here!'
  },
  filters: {
    marked: marked
  }
});