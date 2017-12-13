var VideoListEntryView = Backbone.View.extend({
  
  initialize: function() {
    this.render();
  },

  //when entry is clicked
    //re-render videoPlayerView with new video
  events: {
    'click' : 'handleClick'
  },

  render: function() {
    
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  handleClick: function() {
    this.model.select();
  },

  template: templateURL('src/templates/videoListEntry.html')

});
