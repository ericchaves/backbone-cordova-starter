(function () {
  "use strict";
  
  app.views = app.views || {};
  var View = Backbone.View.extend({
    el: '#app',
    initialize: function(){
      this.listenTo(app.models.user, 'change', this.render);
    },
    render: function() {
      var data = app.models.user.toJSON()
      	, tpl = data.isAuthenticated ? '#x-home' : '#x-login'
      	, compiled = _.template($(tpl).html());

      this.$el.html(compiled(data));
      return this;
    },
    events: {
    	"click #btnLogin": "onLogin"
    },
    onLogin: function(){
    	app.models.user.login($('#username').val(),$('#password').val());
    }
  });

  app.views.login = new View();
})();