/*! Tiny Pub/Sub - v0.7.0 - 2014-12-17
* https://github.com/cowboy/jquery-tiny-pubsub
* Copyright (c) 2014 "Cowboy" Ben Alman; Licensed MIT */
(function($) {

  var o = $({});

  $.subscribe = function() {
    o.on.apply(o, arguments);
  };

  $.unsubscribe = function() {
    o.off.apply(o, arguments);
  };

  $.publish = function() {
    o.trigger.apply(o, arguments);
  };

}(Zepto));