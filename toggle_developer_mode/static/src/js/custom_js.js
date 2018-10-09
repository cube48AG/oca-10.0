odoo.define('toggle_debug_mode.custom_js', function (require) {
    "use strict";

    var UserMenu = require('web.UserMenu');

    UserMenu.include({
        on_menu_debug: function () {
            window.location = $.param.querystring(window.location.href, 'debug');
        },
        on_menu_quitdebug: function () {
            window.location.search = "?";
        },
    });
});
