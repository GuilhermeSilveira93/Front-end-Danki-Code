
$(window).on('load', function(){ /*MÉTODO QUE FAZ O SCRIPT CARREGAR DEPOIS DA PAGINA*/
    var elemento = $('.box');

    elemento.css('background','green')
    function teste(){
        elemento.css('color','red')
    }
    teste()
})