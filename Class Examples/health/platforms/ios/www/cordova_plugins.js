cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-health.HealthKit",
      "file": "plugins/cordova-plugin-health/www/ios/HealthKit.js",
      "pluginId": "cordova-plugin-health",
      "clobbers": [
        "window.plugins.healthkit"
      ]
    },
    {
      "id": "cordova-plugin-health.health",
      "file": "plugins/cordova-plugin-health/www/ios/health.js",
      "pluginId": "cordova-plugin-health",
      "clobbers": [
        "navigator.health"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-health": "1.1.3",
    "cordova-plugin-whitelist": "1.3.4"
  };
});