/*
$(function(){
    alert('olá mundo')
})
--------------------------------------------------
$(document).ready(function(){
    alert('olá mundo !')
})*/
$(window).on('load', function(){ /*MÉTODO QUE FAZ O SCRIPT CARREGAR DEPOIS DA PAGINA*/

    $('.artigo1').click(function(){
        $('.artigo2').css('background-color','#d0d')
    })
})
/* -------------- manipulando css-------------------------*/