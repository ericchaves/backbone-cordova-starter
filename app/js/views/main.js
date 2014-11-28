(function () {
  "use strict";
  
  app.views = app.views || {};
  var View = Backbone.View.extend({
    el: '#app',
    render: function() {
      this.$el.html(_.template($('#x-main').html()));
      return this;
    },
    events: {
      "click #start":  "onStart",
    },
    onStart: function(){
      app.show(app.views.login);
    }
  });
  app.views.main = new View();
})();