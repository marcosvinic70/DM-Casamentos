	
var aux = true;

    $(function () { 
    $(".index").click(function () { 
        document.getElementById("menu_mobile").style = "display:none";
        aux = true;
	    $('html, body').animate({
	        scrollTop: $("#topo").offset().top
	    }, 1500);
   		});
	}); 
	$(function () { 
    $(".galeria").click(function () { 
        document.getElementById("menu_mobile").style = "display:none";
        aux = true;
	    $('html, body').animate({
	        scrollTop: $("#galeriadiv").offset().top
	    }, 1500);
   		});
	}); 
	$(function () { 
    $(".historia").click(function () { 
        document.getElementById("menu_mobile").style = "display:none";
        aux = true;
	    $('html, body').animate({
	        scrollTop: $("#historiadiv").offset().top
	    }, 1500);
   		});
	}); 
	$(function () { 
    $(".acomodacoes").click(function () { 
        document.getElementById("menu_mobile").style = "display:none";
        aux = true;
	    $('html, body').animate({
	        scrollTop: $("#acomodacoesdiv").offset().top
	    }, 1500);
   		});
	}); 
	$(function () { 
    $(".presentes").click(function () { 
        document.getElementById("menu_mobile").style = "display:none";
        aux = true;
	    $('html, body').animate({
	        scrollTop: $("#presentesdiv").offset().top
	    }, 1500);
   		});
	}); 
	$(function () { 
    $(".eventosmen").click(function () { 
        document.getElementById("menu_mobile").style = "display:none";
        aux = true;
	    $('html, body').animate({
	        scrollTop: $("#eventosdiv").offset().top
	    }, 1500);
   		});
	}); 
	$(function () { 
    $(".contato").click(function () {
        document.getElementById("menu_mobile").style = "display:none";
        aux = true; 
	    $('html, body').animate({
	        scrollTop: $("#contatodiv").offset().top
	    }, 1500);
   		});
	}); 


function setaImagem(){
    var settings = {
        primeiraImg: function(){
            elemento = document.querySelector("#slider a:first-child");
            elemento.classList.add("ativo");
            this.legenda(elemento);
        },

        slide: function(){
            elemento = document.querySelector(".ativo");

            if(elemento.nextElementSibling){
                elemento.nextElementSibling.classList.add("ativo");
                settings.legenda(elemento.nextElementSibling);
                elemento.classList.remove("ativo");
            }else{
                elemento.classList.remove("ativo");
                settings.primeiraImg();
            }

        },

        proximo: function(){
            clearInterval(intervalo);
            elemento = document.querySelector(".ativo");

            if(elemento.nextElementSibling){
                elemento.nextElementSibling.classList.add("ativo");
                settings.legenda(elemento.nextElementSibling);
                elemento.classList.remove("ativo");
            }else{
                elemento.classList.remove("ativo");
                settings.primeiraImg();
            }
            intervalo = setInterval(settings.slide,4000);
        },

        anterior: function(){
            clearInterval(intervalo);
            elemento = document.querySelector(".ativo");

            if(elemento.previousElementSibling){
                elemento.previousElementSibling.classList.add("ativo");
                settings.legenda(elemento.previousElementSibling);
                elemento.classList.remove("ativo");
            }else{
                elemento.classList.remove("ativo");                     
                elemento = document.querySelector("a:last-child");
                elemento.classList.add("ativo");
                this.legenda(elemento);
            }
            intervalo = setInterval(settings.slide,4000);
        },

        legenda: function(obj){
            var legenda = obj.querySelector("img").getAttribute("alt");
            document.querySelector("figcaption").innerHTML = legenda;
        }

    }

    //chama o slide
    settings.primeiraImg();

    //chama a legenda
    settings.legenda(elemento);

    //chama o slide à um determinado tempo
    var intervalo = setInterval(settings.slide,4000);
    document.querySelector(".next").addEventListener("click",settings.proximo,false);
    document.querySelector(".prev").addEventListener("click",settings.anterior,false);
}

window.addEventListener("load",setaImagem,false);

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 660) {
        $("#menu").addClass("teste");
        $(".extra").css("display", "inline");
    } else {
        $("#menu").removeClass("teste");
        $(".extra").css("display", "none");
    }
});


function abrir_menu (){

    if (aux == true) { 
        document.getElementById("menu_mobile").style = "display:block";
        aux = false;
    }
    else
    {
        document.getElementById("menu_mobile").style = "display:none";
        aux = true;
    }
    
}

function fechar_menu (){
    document.getElementById("menu_mobile").style = "display: none;";
    aux = true;
}