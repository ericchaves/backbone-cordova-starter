
// https://raw.githubusercontent.com/Paldom/cordova-stub/master/cordova-stub.js

/*global cordova, alert, confirm, prompt */

(function () {
    "use strict";

    if (!window.cordova) {

        window.cordova = {plugins: {}};
        window.plugins = window.plugins || {};

        // deviceready        

        var m_document_addEventListener = document.addEventListener,
            m_window_open = window.open;

        document.addEventListener = function (evt, handler, capture) {
            var e = evt.toLowerCase();
            if (e === 'deviceready') {
                handler();
            } else {
                m_document_addEventListener.call(document, evt, handler, capture);
            }
        };

        window.setTimeout(function () {
            var e = document.createEvent('Events');
            e.initEvent("deviceready");
            document.dispatchEvent(e);
        }, 50);

        // DEVICE

        window.device = {
            name: "",
            model: "",
            phonegap: "",
            cordova: "",
            platform: "",
            uuid: "b54adc00-67f9-11d9-9669-0800200c9a66",
            version: 0
        };

        // NETWORK INFO

        navigator.network = {
            connection: {
                type: "WIFI"
            }
        };

        // NOTIFICATIONS

        navigator.notification = {

            alert: function (message, callback, title, buttonName) {
                alert("[" + title + "] " + message);
            },

            confirm: function (message, callback, title, buttonName) {
                var buttonIndex = confirm("[" + title + "] " + message) ? 1 : 2;
                callback(buttonIndex);
            },

            prompt: function (message, promptCallback, title, buttonLabels, defaultText) {
                promptCallback({
                    input1: prompt(),
                    buttonIndex: 1
                });
            },

            beep: function (times) {
                alert("[BEEP] times:" + times);
            }
        };


        // SPLASH SCREEN

        navigator.splashscreen = {

            show: function () {

            },

            hide: function () {

            }
        };

        // SPINNER DIALOG

        window.plugins.spinnerDialog = {
            show: function (title, message) {
                //alert("[SPINNER SHOW] [" + title + "] " + message);
            },
            hide: function () {
                //alert("[SPINNER HIDE]");
            }
        };

        // PUSH NOTIFICATION

        window.plugins.pushNotification = {
            register: function (success, error, config) {
                error("Not supported!");
            }
        };

        // PIN DIALOG

        window.plugins.pinDialog = {
            prompt: function (message, promptCallback, title, buttonLabels, defaultText) {
                promptCallback({
                    input1: prompt(),
                    buttonIndex: 1
                });
            }
        };

        // GA PLUGIN

        window.plugins.gaPlugin = {

            init: function (success, fail, init, mingap) {
                fail("Not supported!");
            },

            trackEvent: function (success, fail, category, eventAction, eventLabel, eventValue) {
                fail("Not supported!");
            },

            trackPage: function (success, fail, pageURL) {
                fail("Not supported!");
            },

            setVariable: function (success, fail, index, value) {
                fail("Not supported!");
            },

            exit: function (success, fail) {
                fail("Not supported!");
            }

        };


        // BARCODE SCANNER

        cordova.plugins.barcodeScanner = {

            scan: function (success, fail) {
                fail("Not supported!");
            },

            encode: function (type, data, success, fail) {
                fail("Not supported!");
            }
        };
        
        // UUID - UNIQUE DEVICE ID PLUGIN
        
        window.plugins.uniqueDeviceID = {
            
            get: function (success, fail) {
                success(window.device.uuid);
            }
            
        };
        
        // IN APP BROWSER PLUGIN
        
        window.open = function (URL, name, specs, replace) {
            m_window_open(URL, name, specs, replace);
            return {
                addEventListener: function () {},
                removeEventListener: function () {},
                show: function () {},
                close: function () {},
                executeScript: function () {},
                insertCss: function () {}
            };
        };
        

    }

}());