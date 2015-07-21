(function() {
  'use strict';

  angular
    .module('binBash')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
