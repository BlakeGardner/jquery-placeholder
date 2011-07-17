/**
 * Adds HTML5 placeholder attribute support to browsers
 * that do not support this feature.
 */

(function( $ ) {
    $.fn.Placeholder = function(options) {
        
        var selector = 'input[type="text"][placeholder!=""], textarea[placeholder!=""]';
        
        // bind the form to clear form fields
        $("form", this).bind('submit', function() {
            $(selector, this).each(function() {
                if($(this).val() == $(this).attr('placeholder')) {
                    $(this).val("");
                }
            });
        });


        // loop over all inputs
        $(selector, this).each(function() {
            
            if($(this).val() == "" || $(this).val() == $(this).attr('placeholder')) {
                // set the placeholder values
                $(this).val($(this).attr('placeholder'));
                $(this).addClass(options.defaultClass);
            }


            $(this).bind({
                focus: function() {
                    if($(this).val() == $(this).attr('placeholder')) {
                        $(this).val("");
                        $(this).removeClass(options.defaultClass);
                    }
                },
                blur: function() {
                    if($(this).val() == "") {
                        $(this).addClass(options.defaultClass);
                        $(this).val($(this).attr('placeholder'));
                    }
                }
            }); // bind
                

        }); // end each loop


    };
})(jQuery);
