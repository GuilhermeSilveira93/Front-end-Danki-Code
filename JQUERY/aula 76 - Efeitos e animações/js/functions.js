$(window).on('load', function(){
   

   $('.box').fadeOut(2000, function(){//.box vai levar 2 segundos para sumir, depois que sumir, executara a função.
      $('.box2').fadeIn(3000)
   })

   /* W3 SCHOOOLS TEM MUITO MAIS FUNÇÕES DE ANIMAÇÕES*/

   $('.botao').click(function(){
      $('nav').slideToggle(1000)
   })
})