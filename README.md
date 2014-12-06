Cordova App Template
====================

This is a starter template project for cordova apps, tailored for people starting with HTML5/JS development. It has a basic building process using gulp with an improved version of cordova's hello world app. There's a lot of room for improvment that we intentionally left out to avoid making it too hard to understand neither too opiniated.

# Setting up

- Install cordova globally if you haven't done it yet: ``npm install -g cordova-cli``.
- Install bower globally if you haven't done it yet: ``npm install -g bower``.
- Install the mobile SDKs (XCode, Android SDK, etc).
- clone this repository
- Install required node tools: ``npm install``
- Install bower components: ``bower install``
- Update your cordova config.xml to reflect your project id, reverse name, common name and other info.
- Add your target platforms: ``cordova platform add ios android ...``
- Add your cordova plugins: ``cordova plugin add plugin_name ...``

# Running tasks

- To develop locally run ``gulp serve``. This will open a browser serving the content of ``app/`` directory with a live-reload setted. Any changes you made in your code will be automatically reloaded.

- To prepare a build for debugging in the device (without minifications and so) use ``gulp build``.

- To prepare a build for production use ``gulp build --production``.

# Building cordova app

Once you build your project you have to perform the cordova build, which was not included as gulp tasks on purpose. Just run the usual ``cordova build`` command.

# Development guidelines

- Manage your external libraries with bower. e.g.: ``bower install jquery --save``
- Always build from app to www and from there to cordova. Never update your app directly in the platform builds.
- Do not commit your external libraries and binaries like app/vendors,node_modules,platforms/*. Always perform the setup (one-time only, usually) then build.
- When working with Backbone keep your views stateless. Remember that state belongs to models. Views listen to model changes.
- With Backbone prefer ``listenTo``over ``on``.
- Always create your code inside an anonymous function and add a ``use strict`` directive *inside* it, not globally. eg.:
- Organize your classes and objects in namespaces under the main app. Do not pollute the global namespace.
```
(function () {
  "use strict";
  app.views = app.views || {};
  app.views.MainView = Backbone.View.extend({...});
})();
```

