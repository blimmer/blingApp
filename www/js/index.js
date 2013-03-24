var app = {
  // Application Constructor
  initialize: function() {
      this.bindEvents();
  },
  // Bind Event Listeners
  //
  // Bind any events that are required on startup. Common events are:
  // 'load', 'deviceready', 'offline', and 'online'.
  bindEvents: function() {
      document.addEventListener('deviceready', this.onDeviceReady, false);
  },
  // deviceready Event Handler
  //
  // The scope of 'this' is the event. In order to call the 'receivedEvent'
  // function, we must explicity call 'app.receivedEvent(...);'
  onDeviceReady: function() {
      app.showButtons();
  },
  camera: {
    getPhoto: function(source) {
      navigator.camera.getPicture(app.camera.success, app.camera.fail,
                                  {
                                    quality: 50,
                                    destinationType: Camera.DestinationType.FILE_URI,
                                    sourceType: source
                                  }
                                );
    },
    success: function(imageURI) {
      var canvas = document.getElementsByTagName('canvas')[0];
      canvas.style.background = "url(" + imageURI + ") no-repeat";
    },
    fail: function(errorMessage) {
      alert('capture failed because ' + errorMessage);
    }
  }
};
