$(window).on('load', function(){
   $('.box').eq(1).append('<h3>Meu elemento adicionado dinamicamente</h3>')
   //CASO EU TENHA VARIAS DIVS, USO O EQ PARA SELECIONAR EM QUAL QUERO POR
   //IGUAL AO OF-CHIELD
   var content = 'conteudo dinamico'
   $('.box div').append(content)

   $('input[type=button]').click(function(){
   var resposta = $('input[type=text').val()

   $('#questionario').append('A cor do céu é: ' + resposta)
   })

   var texto = $('<p>Aqui temos um texto Dinamico</p>').appendTo($('.box').eq(1))

   texto.css('color','red')
   texto.css('box-shadow','red')

   /* DAQUI PARA CIMA, SEMPRE ADICIONAMOS O ELEMENTO AO FINAL DA DIV BOX */

   /* DAQUI PARA CIMA, SEMPRE ADICIONAMOS O ELEMENTO AO FINAL DA DIV BOX */
   $('.box').eq(0).prepend('<h1>Aqui é meu Prepend</h1>')

   var prependi = $('<h2>Aqui é meu Prependi</h2>').prependTo('.box').eq(1)
   prependi.css('color','blue')

   var aff = '<h1>dividindo as divs</h1>'
   $('.box').after(aff)
   $('.box').before(aff + '<h2>Antes</h2') 
   $('.box').eq(1).remove()
}) 