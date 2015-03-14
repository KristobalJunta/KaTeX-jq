/*(function(){
    $(".math").each(function() {
        var texTxt = $(this).text();
        el = $(this).get(0);
        if(el.tagName == "DIV"){
                addDisp = "\\displaystyle";
        } else {
                addDisp = "";
        }
        try {
                katex.render(addDisp+texTxt, el);
        }
        catch(err) {
                $(this).html("<span class='err'>"+err);
        }
    });
})();*/

(function( $ ){
    $.fn.katex = function (options) {
        
        var settings = $.extend({
            displayMode: false,
            debug: false,
            errorMessage: "Ouch! Some nasty error occured here!"
        }, options );
        
        return this.each(function() {
            
            var texContent = $(this).text(),
                element = $(this).get(0);
            
            if(element.tagName == "DIV"){
                addDisp = "\\displaystyle";
            } else {
                addDisp = "";
            }
            try {
                
                katex.render(
                    addDisp+texContent,
                    element,
                    {
                        displayMode: settings.displayMode
                    }
                );
                
            }
            catch(err) {
                if(settings.debug)
                {
                    $(this).html("<span class='err'>"+err+"<\/span>");
                }
                else
                {
                    $(this).html("<span class='err'>"+settings.errorMessage+"<\/span>");
                }
            }
            
        });
    };
}( jQuery ));