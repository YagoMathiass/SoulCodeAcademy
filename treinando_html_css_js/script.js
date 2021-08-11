// Crie um programa que tenha um botão em html que ao ser clicado acesse uma função que peça para o usuário digitar um numero N que seja maior que 0 e menor que 10 que corresponderá a quantidade de números do Array, que serão temperaturas. Em seguida, leia também um número M que seja maior que 0 e menor que 10 que corresponderá a quantidade de nomes que serão inseridos em um outro Array. Em seguida, utilizando o prompt de comando, receba a quantidade N de temperaturas e armazene no Array. Utilize o prompt para receber quantidade M de nomes e armazene no outro vetor.

function valores(x) {
    var qtd_array = [];
    var qtd_nomes = [];
    var temperaturas = [];
    var nomes = [];
    var verifica_temp20 = []
    

// -------------------------1) Peça para o usuário determinar a quantidade de Vetores entre 1 e 9.-------------------------

    qtd_array = parseInt(prompt("Digite a quantidade de itens no Array (1 à 9)"));

    while(qtd_array <1 || qtd_array>9 ||isNaN(qtd_array)){
        alert("Número Inválido")
        qtd_array = parseInt(prompt("Digite a quantidade de itens no Array (1 à 9)"));
    }

 // -------------------------1) Peça para o usuário determinar a quantidade de nomes entre 1 e 9.-------------------------

    qtd_nomes = parseInt(prompt("Digite a quantidade de nomes (1 à 9)"));

    while(qtd_nomes <1 || qtd_nomes>9 ||isNaN(qtd_nomes)){
        alert("Número Inválido")
        qtd_nomes = parseInt(prompt("Digite a quantidade de nomes (1 à 9)"));
    }

// -------------------------2) Peça para o usuário digitar as temperaturas que serão introduzidas no Vetor -------------------------
    
    for(i=0; i<qtd_array; i++){
        temperaturas[i] = parseInt(prompt("Digite as temperaturas"));
     }


// -------------------------3) Peça para o usuário digitar os nomes que serão introduzidos no outro Vetor -------------------------

     for(i=0; i<qtd_nomes; i++){
        nomes.push(prompt("Digite as os nomes"))
     }


// ------------------------- • Verifique se no vetor de nomes existe o nome “Eliana” -------------------------

     var verifica_nome = nomes.find(elemento => elemento ==="Eliana" || elemento ==="eliana" || elemento ==="ELIANA");

     if(verifica_nome){
         document.write('O nome "Eliana" existe <br>');
     } else{
        document.write('O nome "Eliana" não existe <br>');
     }

// ------------------------- • Exiba na tela as temperaturas maiores que 20. -------------------------

var verifica_temp20 = temperaturas.filter(elemento => elemento >= 20);

    document.write("As temperaturas inseridas acima de 20 são :"+ verifica_temp20+ "<br>")

// ------------------------- • • Exiba a posição do nome “Carlos” caso exista. Caso não exista, informe ao usuário. -------------------------


     var verifica_nome2 = nomes.findIndex(elemento => elemento =="Carlos" || elemento =="carlos" || elemento =="CARLOS");
     
     if(verifica_nome2 >=0 ){
         document.write("O nome Carlos está na posição: "+ verifica_nome2+ "<br>");
     } else{
        document.write('O nome "Carlos" não existe <br>')
     }

// ------------------------- • Exiba o cubo dos números do Array de números. -------------------------


     var elemento_ao_cubo = []

     elemento_ao_cubo = temperaturas.map(elemento => elemento * elemento * elemento);
     
     document.write("A temperatura digitada foi: "+temperaturas+ "<br>");
     
     document.write("O resultado da temperatura ao cubo será: "+ elemento_ao_cubo+ "<br>");
        
}