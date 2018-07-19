"use strict";

(function () {
    //función anonima autoinvocada

    var alanPoe = function alanPoe(number) {
        var crow = " ";
        for (var i = 0; i < number; i++) {
            crow += "nunca más ";
        }
        return crow;
    };

    if (typeof window == 'undefined') {
        module.exports = alanPoe;
        // console.log("consola");
    } else {
        window.alanPoe = alanPoe;
        // console.log("navegador");
    };
})();