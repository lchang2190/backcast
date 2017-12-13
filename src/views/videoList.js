var VideoListView = Backbone.View.extend({

  el: '.list',

  initialize: function() {
    this.render();    
  },

  render: function() {
    
    this.$el.children().detach();
    this.$el.html(this.template());
    $('.video-list').empty();
    //console.log('col', this.collection.models);

    // this.collection.forEach(function(video) {
      
    //   this.$el.append(new VideoListEntryView({model: video}));
    //   //this.$el.append(videoView.render());
    // });

    this.collection.forEach(function(video) {
      var video = new VideoListEntryView({model: video});
      this.$el.append(video.$el);
    }, this);
    
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
