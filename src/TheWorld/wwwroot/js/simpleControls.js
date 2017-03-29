// simpleControls.js
(function () {
    "use strict";
    angular.module("simpleControls", []).directive("waitCursor", waitCursor);

    function waitCursor() {
        return {
            scope: {
                displaywhen: "=displaywhen"
            },
            restrict: "E",
            templateUrl: "/views/waitCursor.html"
        };
    }

})();