#jQuery placeholder

A very simple jQuery plugin to enable HTML5 placeholder attribute support to older web browsers.

##Usage

Utilizing the [Modernizr][1] library you can detect support for the placeholder attribute and initialize the plugin.

``` js
    $(document).ready(function() {
        if(!Modernizr.input.placeholder) {
            $(document).Placeholder({ defaultClass: "dtext" });
        }
    });
```

##Initialization Options

**defaultClass**

This is the name of the class that will be applied to any element the plugin has control over. It will allow you to style the default placeholder text according to your needs. The demo just uses grey italic as this seems to be the behavior most browsers with placeholder support seem to do. Example:

``` css
            .dtext {
                font-weight: normal;
                font-style: italic;
                color: grey;
            }
```

  [1]: http://modernizr.com/