define([
  'jquery',
  'underscore',
  'backbone',
  'models/MessageModel'
], function($, _, Backbone, MessageModel){
  var MessagesCollection = Backbone.Collection.extend({
    model: MessageModel,
      url: 'http://localhost:8888/messages'
      //url: 'http://backbonetutorials.jit.su/messages'
  });

  return MessagesCollection;
});
