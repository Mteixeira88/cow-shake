cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-insomnia.Insomnia",
    "file": "plugins/cordova-plugin-insomnia/www/Insomnia.js",
    "pluginId": "cordova-plugin-insomnia",
    "clobbers": [
      "window.plugins.insomnia"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-insomnia": "4.3.0",
  "cordova-plugin-vibration": "3.1.0",
  "cordova-plugin-whitelist": "1.3.3"
};
// BOTTOM OF METADATA
});