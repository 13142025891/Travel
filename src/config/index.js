;
(function (win) {
  var doc = win.document;
  doc.addEventListener('touchmove', function (event) {
    event.preventDefault();
  }, {
    passive: false
  });

})(window);