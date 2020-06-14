(function($) {
    $('document').ready(function(){
        var collapsible_blocks = document.getElementsByClassName("collapsible");
        var i;
        for (i = 0; i < collapsible_blocks.length; i++) {
        collapsible_blocks[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content_block = this.nextElementSibling;
            
            if (window.getComputedStyle(content_block).display == "block") {
                content_block.style.display = "none";
            } else {
                content_block.style.display = "block";
            }

        });
        }
    });
})(jQuery);
