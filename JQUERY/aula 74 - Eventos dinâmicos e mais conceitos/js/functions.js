$(window).on('load', function(){
   //vamos colocar um link dinamicamente
   

   //---------------------------//
   $('a').click(function(){
      

      alert('Olá Mundo');
   
   })
      $('body').on('click','a',function(){
         alert('olá imundiça')
      })
      setTimeout(function(){
         $('body').html('<a href="">MEU LINK</a>')
      },3000)
      

   
   return false;
}) 