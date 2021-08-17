
// 1) Selecionar todas as tags h2 e colocar um background verde nos elementos selecionados.
    $(document).ready(function () {
    $("h2").css({backgroundColor: "green"})
    });

//2) Selecionar o pai da classe buttons e colocar um background vermelho no elemento selecionado.
    $(document).ready(function () {
    $(".buttons").parent().css({backgroundColor: "red"})
    });

//3) Selecionar os elementos filhos da classe module e colocar como background a cor azul.
    $(document).ready(function () {
    $(".module").children().css({backgroundColor: "blue"})
    });

//4) Selecionar o item da lista de índice 2 da classe module utilizando a função eq() e colocar como background a cor verde.
    $(document).ready(function () {
    $(".module").find("li").eq(2).css({backgroundColor: "green"})
    });

//5) Selecionar o primeiro elemento da lista myList e colocar como background a cor Amarelo.
    $(document).ready(function () {
    $("#myList li").first().css({backgroundColor: "yellow"})
    });

//6) Selecionar o último elemento da lista slideshow e colocar como background a cor preta.
    $(document).ready(function () {
    $("#slideshow li").last().css({backgroundColor: "black"})
    });

//7) Verifique se o primeiro elemento filho de Search é um form. Se for, exiba um alert na tela com a mensagem “O elemento form é filho de Search. Caso não seja, exiba um alert na tela com a mensagem “O elemento form não é filho de Search.
//  $(document).ready(function () {

// if ($("#search").children().first().is("form")) {
// alert("O elemento form é o primeiro filho de Search");
// } else { 
//     alert("O elemento form NÃO é o primeiro filho de Search"); }
// });

//8) Selecionar todas as listas não ordenadas, exceto a de id slideshow e colocar como background a cor azul.
    $(document).ready(function () {
    $("ul:not(#slideshow)").css({backgroundColor: "blue"})
    });


//9) Selecionar todos os itens de lista que possuam um parágrafo nele e colocar como background a cor rosa.
    $(document).ready(function () {
    $("li").has("p").css({backgroundColor: "pink"})
    });

//10) Alterar o conteúdo da tag que possui a classe myListItem para “Este é um novo item de lista”
    $(document).ready(function () {
    $("#myListItem").append("<li>Este é um novo item da lista</li>");
    });

//11) Selecionar o próximo elemento após o elemento de classe selected e colocar um background cinza nele.
    $(document).ready(function () {
    $(".selected").next().css({backgroundColor: "gray"});
    });

//12) Selecionar o elemento anterior ao elemento de classe input_text e colocar um background cinza nele.
    $(document).ready(function () {
    $(".input_text").prev().css({backgroundColor: "gray"});
    });

//13) Selecionar todos os irmãos do elemento que possui o id listItem_2 e colocar um background verde nele.
    $(document).ready(function () {
    $("#listItem_2").siblings().css({backgroundColor: "green"});
    });

//14) Selecionar todos os elementos que possuam um atributo src e colocar um background amarelo nele.
    $(document).ready(function () {
    $("[src]").css({backgroundColor: "yellow"});
    });

//15) Selecionar dentro do elemento de id header e dentro do id nav, o elemento que contenha a classe selected. (Utilizando um seletor que contenha esse caminho).
    $(document).ready(function () {
    $("#header, #nav").find(".selected");
    });

//16) Selecionar todos os elementos que possui o atributo type=”text”.
    $(document).ready(function () {
    $('[type="text"]')
    });

//17) Selecionar todos os elementos que possuam o atributo value.
    $(document).ready(function () {
    $("[value]")
    });

//18) Selecionar todos os elementos que possuam o atributo type diferente de submit e colocar um background vermelho nele.
    $(document).ready(function () {
    $("input[type!='submit']").css({backgroundColor: "red"});
    });

//19) Selecionar todos os elementos que possuam o atributo href que inicia com a palavra blog e colocar um background verde nele.
    $(document).ready(function () {
    $("a[href^='blog']").css({backgroundColor: "green"});
    });


//20 Selecionar todos os elementos que possuam o atributo value que terminam com a letra a e colocar um background vermelho nele.
    $(document).ready(function () {
    $("[value$='a']").css({backgroundColor: "red"});
    });

 //21 Selecionar todos os elementos que possuam o atributo href que contenham a palavra html e colocar um background cinza nele.
    $(document).ready(function () {
    $("[href*='html']").css({backgroundColor: "grey"});
    });