
// http://davidwalsh.name/html5-placeholder
// http://api.jquery.com/bind/

/**
 * Adds HTML5 placeholder attribute support to browsers
 * that do not support this feature.
 */

(function( $ ) {
    $.fn.Placeholder = function(options) {
        
        // bind the form to clear form fields
        if($(this).is('form')) {
            $(this).bind('submit', function() {
                $('input[type="text"][dtext]', this).each(function() {
                    if($(this).val() == $(this).attr('dtext')) {
                        $(this).val("");
                    }
                });
            });
        }


        // loop over all inputs
        $('input[type="text"][dtext][value=""][dtext!=""]', this).each(function() {
            
            // set the placeholder values
            $(this).val($(this).attr('dtext'));
            $(this).addClass(options.defaultClass);
            
            
            $(this).bind({
                focus: function() {
                    if($(this).val() == $(this).attr('dtext')) {
                        $(this).val("");
                        $(this).removeClass(options.defaultClass);
                    }
                },
                blur: function() {
                    if($(this).val() == "") {
                        $(this).addClass(options.defaultClass);
                        $(this).val($(this).attr('dtext'));
                    }
                }
            }); // bind
            
            
        }); // end each loop


    };
})(jQuery);
