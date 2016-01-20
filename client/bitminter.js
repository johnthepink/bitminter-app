let user = new ReactiveVar(null);

Template.bitminter.onCreated(function() {
  Meteor.call("getUser", function(error, result) {
    user.set(result);
  });
});

Template.bitminter.helpers({

  loading: function() {
    return !user.get()
  },

  btc: function() {
    if (user.get()) return user.get().balances.BTC
  },

  hash: function() {
    if (user.get()) return String(user.get().hash_rate).slice(0,3)
  }

});

Template.bitminter.events({

  "click": function() {
    user.set(null);
    Meteor.call("getUser", function(error, result) {
      user.set(result);
    });
  }

});
