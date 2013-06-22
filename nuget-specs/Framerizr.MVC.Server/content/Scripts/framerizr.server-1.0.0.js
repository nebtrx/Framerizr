(function ($, window) {
    "use strict";

    if (typeof ($) !== "function") {
        // no jQuery!
        throw new Error("Framerizr: jQuery not found. Please ensure jQuery is referenced before the framerizr.js file.");
    }

    var framerizr = $.framerizr;

    if (!framerizr) {
        $.framerizr = framerizr = {};
    }

    framerizr.server = {
        socket: {},

        pushData: function () {
            framerizr.server.socket.postMessage($("iframe").contents().find('body').height() + 20);
        },

        start: function () {
            framerizr.server.socket = new easyXDM.Socket({
                onReady: function () {
                    framerizr.server.pushData();
                }
            });

            MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

            var observer = new MutationObserver(function (mutations, observer) {
                // fired when a mutation occurs

                setTimeout(function () {
                    framerizr.server.pushData();
                }, 500);
            });

            // define what element should be observed by the observer
            // and what types of mutations trigger the callback
            observer.observe(document.getElementsByTagName("iframe")[0].contentDocument.getElementsByTagName("body")[0], {
                subtree: true,
                attributes: true
            });
        },
    };
}(window.jQuery, window));