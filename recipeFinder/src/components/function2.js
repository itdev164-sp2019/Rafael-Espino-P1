(function Myf2(){
   $('<button/>',{
       text: 'show all',
       class: 'active',
       click: function() {
           $(this)
           .addClass('active')
           .siblings()
           .removeClass('active');
           $imgs.show();
       }
   }).appendTo($buttons);

   $.each(tagged, function(tagName){
       $('<button/>',{
           text: tagName + '(' + tagged[tagName].length + ')',
           click: function(){
               $(this)
               .addClass ('active')
               .siblings()
               .removeClass('active');
               $imgs
               .hide()
               .filter(tagged[tagName])
               .show();
           }
       }).appendTo($buttons);
   });

}());