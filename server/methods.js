Meteor.methods({

  getUser: function() {
    var url = "https://bitminter.com/api/users";
    var options = {
      headers: {
        "User-Agent": "app",
        "Authorization": "key=" + Meteor.settings.BITMINTER_APIKEY
      },
      timeout: 5000
    };
    var response = HTTP.call("GET", url, options);
    return response.data
  }

});
