(function($) {
  $.fn.inputDefaults = function(options) {
    var opts;
    opts = $.extend({}, $.fn.inputDefaults.defaults, options);
    return this.each(function() {
      var $el, defaultValue;
      $el = $(this);
      defaultValue = $el.data("defaultValue") || opts.value;
      if ($el.val() === "") {
        $el.val(defaultValue);
      }
      return $el.focus(function() {
        if ($el.val() === defaultValue) {
          return $el.val("");
        }
      }).blur(function() {
        if ($el.val() === "") {
          return $el.val(defaultValue);
        }
      });
    });
  };
  return $.fn.inputDefaults.defaults = {
    value: "Please enter a value..."
  };
})(jQuery);