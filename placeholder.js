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
        
        // detect if we are running IE9 or greater
        if($.browser.msie && parseInt($.browser.version, 10) >= 9) {
            detect_pass = true;
        } else {
            detect_pass = false;
        }
        
        var selector = 'input[type="text"][placeholder!=""], input[type="password"][placeholder!=""], textarea[placeholder!=""]';
        
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
                // convert a password input to a text input
                if(detect_pass && $(this).attr('type') == 'password') {
                    $(this).addClass('was_pw');
                    this.type = "text";
                }
            }


            $(this).bind({
                focus: function() {
                    if($(this).val() == $(this).attr('placeholder')) {
                        $(this).val("");
                        $(this).removeClass(options.defaultClass);
                    }
                    if(detect_pass && $(this).hasClass('was_pw')) {
                        this.type = "password";
                    }
                    if($(this).val() == "") {
                        $(this).select();
                    }
                },
                blur: function() {
                    if($(this).val() == "") {
                        $(this).addClass(options.defaultClass);
                        $(this).val($(this).attr('placeholder'));
                        if(detect_pass && $(this).hasClass('was_pw')) {
                            this.type = "text";
                        }
                    }
                }
            }); // bind
                

        }); // end each loop


    };
})(jQuery);
