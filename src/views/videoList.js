var VideoListView = Backbone.View.extend({

  el: '.list',

  initialize: function() {
    //this.collection = new VideoListEntry();
    this.render();    
  },

  render: function() {
    
    //this.$el.children().detach();
    this.$el.html(this.template());
    $('.video-list').empty();
    //console.log('col', this.collection.models);
    this.collection.models.forEach(function(video) {
      return new VideoListEntryView({model: video});
      //this.$el.append(videoView.render());
    });

    //this.$el.html
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
