
$(window).on('load', function(){ /*MÉTODO QUE FAZ O SCRIPT CARREGAR DEPOIS DA PAGINA*/
   
   //$('.box').width('900'); FORMA INCORRETA 

   //SETANDO LARGURA 
   $('.box').css('width','900')

   // MOSTRANDO LARGURA
   console.log('Width: '+$('.box').width());

   console.log('InnerWidth: '+$('.box').innerWidth());
   
   console.log('outerWidth: '+$('.box').outerWidth(true));

   console.log('Height: '+$('.box').height());

   console.log('InnerHeight: '+$('.box').innerHeight());
   
   console.log('outerHeight: '+$('.box').outerHeight(true));

})