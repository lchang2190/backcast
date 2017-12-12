var VideoListEntryView = Backbone.View.extend({
  el: '.video-list',
  
  initialize: function() {
    this.render();
  },

  render: function() {
    //this.$el.empty();
    
    this.$el.append(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
