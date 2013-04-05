define([
  'underscore',
  'backbone'
], function(_, Backbone) {
  var MessageModel = Backbone.Model.extend({
      url: 'http://localhost:8888/messages'
      //url: 'http://backbonetutorials.nodejitsu.com/messages'
  });
  return MessageModel;
});
