$(window).on('load', function(){

   $.ajax({
      'url':'conteudo.html', //onde estou mandando a requisição
      //'method':'post ou get' serve para BackEnd
      //data:{'nome':'guilherme','didade':'27'}
   }).done(function(data){
      $('#container').append(data)
   });
})