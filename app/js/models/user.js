(function () {
  "use strict";
  
  var users = {
  	'jhon' : 'secret',
  	'jane' : 'super'
  }
  app.models = app.models || {};
  var Model = Backbone.Model.extend({
    defaults: {
	    isAuthenticated: false,
	    username: '',
	    attempts: 0
    },
  	login: function(usr, pwd){
  		// you probably want to do an ajax request here.
  		console.log('authenticating', usr, pwd);
  		this.set({username: usr, isAuthenticated: pwd === users[usr], attempts: this.attributes.attempts + 1});
  	}
  });

  app.models.user = new Model({
  	username: null,
  	isAuthenticated: false
  });
})();