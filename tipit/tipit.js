(function($) {

     $.fn.tipit = function(options) {
     
          var set = $.extend( {
          
               'speed'        : 200,
               'mode'         : 'bottom'
          
          }, options);

          return this.each(function() {
          
               var tipit_cont = '.tipit_container_' + set.mode;

               $(this).hover(
                    function ()
                    {
                         var out = '<div class="tipit_container_' + set.mode + '"><div class="tipit_point_' + set.mode + '"><div class="tipit_content">' + $(this).attr('data-tip') + '</div></div></div>';
                         
                         $(this).append(out);
                    
                         var w_t = $(tipit_cont).outerWidth();
                         var w_e = $(this).width();
                         var m_l = (w_e / 2) - (w_t / 2);
                    
                         $(tipit_cont).css('margin-left', m_l + 'px');
                         $(this).removeAttr('title');
                         $(tipit_cont).fadeIn(set.speed);              
                    },
                    function ()
                    {   
                         $(tipit_cont).remove();    
                    }     
               );
                              
          });
     };
     
})(jQuery);
