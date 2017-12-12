var VideoPlayerView = Backbone.View.extend({
  el: '.player',

  initialize: function() {
    this.render();
  },
  render: function() {
    console.log(this.model.attributes.id);
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
