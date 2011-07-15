
// http://davidwalsh.name/html5-placeholder
// http://api.jquery.com/bind/

/**
 * Adds HTML5 placeholder attribute support to browsers
 * that do not support this feature.
 */

(function( $ ) {
    $.fn.Placeholder = function(options) {

        // loop over all inputs
        $('input[type="text"]').each(function() {
            
            if($(this).attr('dtext')) {
                // set the value if placeholder attr exists
                $(this).val($(this).attr('dtext'));
                // add placeholder class
                $(this).addClass(options.defaultClass);
            }
            
            $(this).bind({
                focus: function() {
                    if($(this).val() == $(this).attr('dtext')) {
                        $(this).val("");
                        $(this).removeClass(options.defaultClass);
                    }
                },
                blur: function() {
                    if($(this).val() == "") {
                        $(this).removeClass(options.defaultClass);
                        $(this).addClass(options.defaultClass);
                        $(this).val($(this).attr('dtext'));
                    }
                }
            });
            
        });

    };
})(jQuery);
