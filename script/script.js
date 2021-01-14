function redesSociales(){alert ("redes Tecnicas Higiene Via Aerea")}

$(document).ready(function(){
    $('#parrafo').css("font-size", "30px");

    $('.parrafo2').css("background", "orange"). css ("white")

    //$('li').css("background", "blue");

    $('li').click(function(){
        $(this).addClass('resaltar');
    })

    $('li'). dblclick (function(){
        $(this).addClass('resaltar2');
    })
});

