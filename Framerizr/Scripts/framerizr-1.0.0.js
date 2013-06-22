(function ($, window) {
    "use strict";

    if (typeof($) !== "function") {
        // no jQuery!
        throw new Error("Framerizr: jQuery not found. Please ensure jQuery is referenced before the framerizr.js file.");
    }

    function getOrigin(href) {
        var a = document.createElement("a");
        a.href = href;
        return a.origin;
    };


    var framerizr = {
        start: function() {
            $("[data-iframe-src]").each(function() {
                var $container = $(this);
                var iframeSrc = $container.data('iframe-src');

                // if data-iframe-src attr present
                if (iframeSrc != null || iframeSrc != "") {

                    var remote = "";
                    var framerizrUri = $container.data('framerizr-uri');
                    if (framerizrUri == null || framerizrUri == "") {
                        remote = getOrigin(iframeSrc) + "/Framerizr?uri=" + iframeSrc;
                    } else {
                        remote = framerizrUri + "?uri=" + iframeSrc;
                    }

                    new easyXDM.Socket({
                        remote: remote,
                        container: $container[0],
                        onMessage: function(message, origin) {
                            // resizing
                            $container.find('iframe').height(message + "px");
                            $container.height(message + "px");
                        }
                    });
                }
            });

        }
    };
    
    $.framerizr = framerizr;
}(window.jQuery, window));

(function ($) {
    $.framerizr.start();
}(window.jQuery));