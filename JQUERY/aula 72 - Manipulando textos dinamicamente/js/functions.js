$(window).on('load', function(){ /*MÉTODO QUE FAZ O SCRIPT CARREGAR DEPOIS DA PAGINA*/
   /* PRIMEIRA PARTE DA AULA
   var meutexto = 'Testando 1 2 3'
   var el = $('.box')
   el.html(`<div class="teste"><h1>${meutexto}</h1></div>`)
  // CONCATENANDO LOGO ACIMA

   el.html(el.html() + `<h1 class="texto">${'texto via JS'}</h1>`)
   //CONCATENANDO os 2 textos
   -----------------------------------------------------------
   $('.box2').text('Olá Mundo maluco !')

  $('input[type=text]').val('olá mundo')
  */ //PRIMEIRA PARTE DA AULA

  $('input[type=button]').click(function(){
   var valor = $('input[type=text]').val()
   var valor2 = valor.split('@')
   console.log(valor2)

   console.log(valor.substr(0,4))//COMANDO PARA PEGAR OS PRIMEIROS 4 CARACTERES.
   //substr RECORTA A STRING

   if(valor2[1] == 'hotmail.com'){
      $('body').css('background-color','black')
   }
  })
})