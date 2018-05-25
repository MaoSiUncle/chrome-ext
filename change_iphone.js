/**
 * Created by admin on 18/5/25.
 */
(function () {
  var defProp = function (prop, value) {
    Object.defineProperty(window.navigator, prop, {
      get: function () {
        return value;
      }
    });
  };
  function changeOs(os) {
    defProp('platform',os);
  }
  var rndos = 'iphone';
  changeOs(rndos);
})();
