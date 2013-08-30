(function() {
  (function(root) {
    var Clingy, jQueryAvail;
    jQueryAvail = (function() {
      if (root.jQuery) {
        return true;
      } else {
        return false;
      }
    })();
    return Clingy = (function() {
      function Clingy(attribute, data) {
        this.attribute = attribute != null ? attribute : 'bind';
        if (data == null) {
          data = {};
        }
        this.data = new DataStore(data);
        this.data.on('change', function(key, value) {
          var e, elems, _i, _len, _results;
          elems = document.querySelectorAll("data-bind=" + key);
          _results = [];
          for (_i = 0, _len = elems.length; _i < _len; _i++) {
            e = elems[_i];
            _results.push(e.innerHTML = value);
          }
          return _results;
        });
      }

      return Clingy;

    })();
  })(this);

}).call(this);
