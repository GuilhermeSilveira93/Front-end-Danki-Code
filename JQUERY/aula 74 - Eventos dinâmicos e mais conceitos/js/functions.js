$(window).on('load', function(){
   //vamos colocar um link dinamicamente
   

   //---------------------------//
   /* 1ª parte da aula
   $('a').click(function(){
      

      alert('Olá Mundo');
   
   })
      $('body').on('click','a',function(){
         alert('olá imundiça')
      })
      setTimeout(function(){
         $('body').html('<a href="">MEU LINK</a>')
      },3000)
      

   1ª parte da aula */

   /* 2ª PARTE
      var func = function(){
         $(this).css('background','green')
      }
      $('input').keyup(func);
   2ª PARTE */
   
   var func = function(){
      $(this).css('background','green')
   }
   $('input').keyup(func);

   return false;
}) 