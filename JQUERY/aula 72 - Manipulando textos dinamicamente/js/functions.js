$(window).on('load', function(){ /*MÉTODO QUE FAZ O SCRIPT CARREGAR DEPOIS DA PAGINA*/
   var meutexto = 'Testando 1 2 3'
   var el = $('.box')
   el.html(`<div class="teste"><h1>${meutexto}</h1></div>`)
   /*CONCATENANDO LOGO ACIMA*/

   el.html(el.html() + `<h1 class="texto">${'texto via JS'}</h1>`)
   /*CONCATENANDO os 2 textos*/
   /*-----------------------------------------------------------*/
   $('.box2').text('Olá Mundo maluco !')

  
})