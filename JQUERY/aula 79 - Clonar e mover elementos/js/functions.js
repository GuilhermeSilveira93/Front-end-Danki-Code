$(window).on('load', function(){
   /*
   var el = $('#source .texto').clone();//aqui nós clonamos o elemnto
   $('#container').html(el.html())//introduzimos no ID CONTAINER
   el.appendTo('#container')//colcoamos diretamente
   */
   var el = $('#source .texto').clone();//aqui nós clonamos o elemnto
   $('#source .texto').appendTo('#container')//MOVEMOS O ELEMENTO, sem clone
})