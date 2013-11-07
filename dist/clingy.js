(function() {
  (function(root, DataStore) {
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
        var _this = this;
        this.attribute = attribute != null ? attribute : 'bind';
        if (data == null) {
          data = {};
        }
        this.data = new DataStore(data);
        this.data.on('change', function(key, value) {
          var e, elems, _i, _len;
          elems = document.querySelectorAll("data-" + _this.attribute + "=" + key);
          for (_i = 0, _len = elems.length; _i < _len; _i++) {
            e = elems[_i];
            e.innerHTML = value;
          }
          return null;
        });
      }

      return Clingy;

    })();
  })(this, this.DataStore);

}).call(this);
