var VideoListEntryView = Backbone.View.extend({
  el: '.video-list',
  
  initialize: function() {
    this.render();
  },

  //when entry is clicked
    //re-render videoPlayerView with new video
  events: {
    'click' : 'handleClick'
  },

  render: function() {
    
    this.$el.append(this.template(this.model.attributes));
    return this;
  },

  handleClick: function() {
    console.log(this.model);
  },

  template: templateURL('src/templates/videoListEntry.html')

});
