import Success from './success';

(function() {
    'use strict';

    /**
     * Constructor
     */
    var Bulletin = function() {
        var bulletin = {
            success: Success
        };

        return bulletin;
    };

    export { Bulletin };
})();
