var AppView = Backbone.View.extend({

  el: '#app',

  // collection: new Videos(exampleVideoData),

  initialize: function() {
    //this.videos = new Videos(exampleVideoData);    
    //this.el.$('.list');
    
    // var entryView = new VideoListEntryView({ model: video});
     //var listView = new VideoListView();

    
    
  },


  render: function() {
    this.$el.html(this.template());
    
    new SearchView({collection: this.collection}).render();
    new VideoPlayerView({model: this.collection.models[0]}).render();
    new VideoListView({collection: this.collection}).render();
  
    return this;
  },

  template: templateURL('src/templates/app.html')

});
