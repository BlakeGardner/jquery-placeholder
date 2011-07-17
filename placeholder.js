/**
 * jQuery placeholder attribute plugin.
 * 
 * Adds support via jQuery for the placeholder attribute in text inputs
 * and text areas for browsers which do not support the feature.
 * 
 * Copyright (c) 2011 Blake Gardner, http://blakerg.wordpress.com/
 * Release under the MIT License. See License.txt
 * 
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
