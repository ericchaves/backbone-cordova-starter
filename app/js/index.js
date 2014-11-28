
/* we dont encapsulate this in anonymous function because we will be exposing it to globals anyway. But this is an excepetion */
var app = {
  templates: {},
  initialize: function() {
    /* we need to call use .bind to redefine `this` context inside app.start otherwise it will be the `global` window  */
    document.addEventListener('deviceready', app.start.bind(this), false);
  },
  start: function(){
    this.show(app.views.main);
  },
  show: function(view){
    if (this.currentView){
      this.currentView.stopListening();
    };

    
    this.currentView = view.render();
  }

};  