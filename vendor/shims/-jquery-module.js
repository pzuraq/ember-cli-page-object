(function() {
  function vendorModule() {
    'use strict';

    return { 'default': window.ecpoJquery };
  }

  define('-jquery', [], vendorModule);
})();
