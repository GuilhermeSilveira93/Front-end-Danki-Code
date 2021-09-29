$(window).on('load', function(){
   $('.box1').addClass('minhaclasse')

   $('minhatag').attr('meuattr', 'outro valor');
   alert($('minhatag').attr('meuattr'));
})