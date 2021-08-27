/*
$(function(){
    alert('olá mundo')
})
--------------------------------------------------
$(document).ready(function(){
    alert('olá mundo !')
})*/
let timer;
$(window).on('load', function(){ /*MÉTODO QUE FAZ O SCRIPT CARREGAR DEPOIS DA PAGINA*/
    $(window).scroll(function(){
        console.log('Scroll Ativo')
    })
    $(window).resize(function(){
        console.log('Redimensionando')
        clearTimeout(timer);
        timer = setTimeout(() => {
            location.href = "http://127.0.0.1:5500/JQUERY/aula%2069%20-%20Mais%20sobre%20eventos/"
        }, 1000);//aqui está em Milisegundos
    })
})
/* -------------- manipulando css-------------------------*/