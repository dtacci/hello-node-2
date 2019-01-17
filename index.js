var LaunchDarkly = require('ldclient-node');

// TODO : Enter your LaunchDarkly SDK key here
ldclient = LaunchDarkly.init("sdk-02a4265a-73a4-42a1-9abf-84afb9b8d75e");

user = {
   "firstName":"Dan",
   "lastName":"Tacci",
   "key":"daniel@launchdarkly.com",
   "custom":{
      "groups":"beta_testers"
   }
};

ldclient.once('ready', function() {
  // TODO : Enter the key for your feature flag here
  ldclient.variation("new-header", user, false, function(err, showFeature) {
    if (showFeature) {
      // application code to show the feature
      console.log("Showing your feature to " + user.key );
    } else {
      // the code to run if the feature is off 
      console.log("Not showing your feature to " + user.key);
    }
    ldclient.flush(function() {
      ldclient.close();
    });
  });

  ldclient.variation("beta-ui", user, false, function(err, showFeature) {
    if (showFeature) {
      // application code to show the feature
      console.log("Showing your feature to " + user.key );
    } else {
      // the code to run if the feature is off 
      console.log("Not showing your feature to " + user.key);
    }
    ldclient.flush(function() {
      ldclient.close();
    });
  });


});
