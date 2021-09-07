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
}) 