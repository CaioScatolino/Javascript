(function($) {
    $.fn.changeColor = function(cor) {


        this.each(function() {
            $(this).css('color', cor).css('text-decoration', 'none')
            $(this).hover(function() {
                $(this).css('background-color', 'blue')
            }, function() {
                $(this).css('background-color', '')
            })
        })
        return this
    }
}(jQuery))