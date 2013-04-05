
define([
  'jquery',
  'underscore',
  'backbone',
  'views/MainView', 
  'views/cabin/CabinView'
], function ($, _, Backbone, MainView, CabinView) {
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      '*actions': 'defaultAction' // All urls will trigger this route
    }
  });

  var initialize = function(options){
		
    var vent = _.extend({}, Backbone.Events);
    var router = new AppRouter(options);

		router.on('route:defaultAction', function (actions) {

        var mainView = new MainView();
        mainView.render();

        var cabinView = new CabinView();
        cabinView.render();
        
		});

    Backbone.history.start();
    
  };
  return {
    initialize: initialize
  };
});
