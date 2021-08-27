/*
$(function(){
    alert('olá mundo')
})
--------------------------------------------------
$(document).ready(function(){
    alert('olá mundo !')
})*/
$(window).on('load', function(){ /*MÉTODO QUE FAZ O SCRIPT CARREGAR DEPOIS DA PAGINA*/
function validarCliqueHover(){
    $('.artigo1').click(function(){
        $('.artigo2').css('background-color','#d0d')
    });

    $('.artigo1').hover(function(){
        $('.artigo2').css('background-color','#D7ACDB');
    },function(){
        $('.artigo2').css('background-color','#cc3')
    })

    $('textarea').focus(function(){
        alert('Estou dentro do TextArea');
    })
}
    /*
    $('textarea').blur(function(){
        alert('estou fora')
    })*/
    function validarFormulario(){
        $('select').change(function(){
            alert('select alterado !')
        })
    }

    validarFormulario();
    validarCliqueHover();
})
/* -------------- manipulando css-------------------------*/