$(window).on('load', function(){
   
   $('form').submit(function(){
      /* 1ª parte da aula
      var input = $('form input[type=text]')
      var container = $('.container')

      container.html(input.val())

      return false;//EVITA QUE A PAGINA ATUALIZE
      1ª parte da aula */

      
      var container = $('.container')
      var content = 'Nome:' + $('input[name=nome').val() + '<hr>E-mail :' + $('input[name=email').val() +
      '<hr>Telefone:' + $('input[name=telefone').val()
      container.html(content)

      return false;//EVITA QUE A PAGINA ATUALIZE
   })

   
}) 