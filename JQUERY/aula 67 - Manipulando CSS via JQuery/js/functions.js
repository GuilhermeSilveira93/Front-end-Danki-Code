/*
$(function(){
    alert('olá mundo')
})
--------------------------------------------------
$(document).ready(function(){
    alert('olá mundo !')
})*/
$(window).on('load', function(){ /*MÉTODO QUE FAZ O SCRIPT CARREGAR DEPOIS DA PAGINA*/
    alert("Olá Mundo");
    $('.artigo1').css('background-color','#ccc')
    $('.artigo1 p').css('color','#cf0e0e')
})
/* -------------- manipulando css-------------------------*/