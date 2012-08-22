# Jquery Input Defaults
=======================

This plugin allows users to set a default value on an element, which is then cleared out when the client clicks into the field. The default value is
restored to the element if no input is found.

Usage
-----

````Javascript
  // Set default value to data attribute
  //
  // This step is not required. If you do not set this
  // the default value of the library, or option passed in
  // will be used as the default value.
  //
  $("input").data("defaultValue", "Please enter your name...")''

  // Configure plugin to run all input fields
  $("input").inputDefaults();

  // Configure plugin and override default value
  $("input").inputDefaults({ value: "Please enter something else..." });
````

Copyright
---
Copyright (c) 2012 Brandon Hilkert.
See [LICENSE][] for details.

[license]: https://github.com/brandonhilkert/jquery-input-defaults/blob/master/LICENSE