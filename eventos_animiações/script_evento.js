$(document).ready(function () {

    //- Ao clicar no primeiro botão, as 5 divs devem aparecer com cores diferentes, largura e altura diferentes e com um efeito que você aprendeu em Jquery (Á sua escolha)
    $("#botao1").click(function () {
        $("div").fadeToggle();
        $("#div1").height("190px").width("300px").css({ backgroundColor: "cyan" });
        $("#div2").height("170px").width("400px").css({ backgroundColor: "yellow" });
        $("#div3").height("150px").width("500px").css({ backgroundColor: "red" });
        $("#div4").height("130px").width("600px").css({ backgroundColor: "green" });
        $("#div5").height("110px").width("700px").css({ backgroundColor: "tomato" });

    });

    // - Ao clicar no segundo botão, todas as divs deverão ficar com a cor azul, largura de 300px e altura de 150px.
    $("#botao2").click(function () {
        $("div").height("150px").width("300px").css({ backgroundColor: "blue" });
    });


    //- Ao dar um duplo clique no terceiro botão, você deverá esconder duas divs à sua escolha, também utilizando um efeito do Jquery.
    $("#botao3").dblclick(function () {
        $("#div2").fadeOut();
    });
    
    //- Coloque um foco nos campos do formulário com uma cor agradável ao usuário, e ao tirar o foco do campo de formulário remova esse efeito.
    $("#nome").focus(function(){
        $("#nome").css({backgroundColor: "#91CDF2"});

    });

    $("#endereco").focus(function(){
        $("#endereco").css({backgroundColor: "#91CDF2"});

    });
    
    $("#email").focus(function(){
        $("#email").css({backgroundColor: "#91CDF2"});

    });
    
    $("#telefone").focus(function(){
        $("#telefone").css({backgroundColor: "#91CDF2"});

    });
    
    $("#cpf").focus(function(){
        $("#cpf").css({backgroundColor: "#91CDF2"});

    });
    
    $("input").blur(function(){
        $("input").css({backgroundColor: "inherit"});

    });

    })
    //- Pegue o valor do nome e do email do usuário e apresente na tela em uma tag de span os dados que foram digitados pelo usuário.

    $("#enviar").click(function(){
    var nome = $("#nome").val();
    var email = $("#email").val();

        $("span").text("E-mail: "+ email+ ". Nome: "+ nome);

    })
    
//aplique todos os efeitos que você aprendeu durante a aula: Hide(), show(), toggle(), fadeIn(), fadeOut(), fadeTo(), fadeToggle(), slideUp(), slideDown(), slideToggle().

        $("#botao_efeitos").on({
            click: function(){
            $("#div_efeitos").hide()
        },
        dblclick: function(){
            $("#div_efeitos").show()
        }
        })
        
        $("#fades").on({
            click: function(){
            $("#div_efeitos").fadeIn(400)
        },
            dblclick: function(){
            $("#div_efeitos").fadeOut(400)
            
        },
            mousedown: function(){
            $("#div_efeitos").fadeTo(400);
        },
            mouseup: function(){
            $("#div_efeitos").fadetoggle(400);
        }
        });

        $("#slides").on({
            click: function(){
                $("#div_efeitos").slideDown(400)
            },
            click: function(){
                $("#div_efeitos").slideUp(400)
                
            },
            mouseout: function(){
                $("#div_efeitos").slideToggle(400);
            }
        })

console.log("yay")