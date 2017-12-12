var VideoListView = Backbone.View.extend({

  el: '.list',

  initialize: function() {
    //this.collection = new VideoListEntry();
    this.render();    
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
