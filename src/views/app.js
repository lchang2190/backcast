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
    console.log(this.collection.models[0]);
    this.$el.html(this.template());
    new VideoListView({collection: this.collection}).render();
    new SearchView({collection: this.collection}).render();
    new VideoPlayerView({model: this.collection.models[0]}).render();
    //this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
