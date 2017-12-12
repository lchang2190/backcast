var VideoListEntryView = Backbone.View.extend({
  el: '.video-list',
  
  initialize: function() {
    this.render();
    //when entry is clicked
      //re-render videoPlayerView with new video
    this.on('click', function(e) {
      console.log(e);
    });
  },

  render: function() {
    
    this.$el.append(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
