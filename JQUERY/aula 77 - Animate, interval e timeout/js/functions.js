$(window).on('load', function(){
   var timer;
   var timeout = function(){
      $('.box2').animate({
         'width':'40%',
         'height':'500px'
      })
   }

   $('body').click(function(){
      alert('Animação interrompida')
      clearTimeout(timer);
   })

   $('.box').animate({
      'width':'40%',
      'height':'500px',
   },2000,function(){
      timer = setTimeout(timeout,3000)/*chamei a função lá de cima, e coloquei em quantos seguindo quero que ela a chame*/

      var texto = '<p>Terminei a Animação</p>'
      var textoadd = $(texto).appendTo('.box')
      textoadd.css('margin-top',120)
   })

})