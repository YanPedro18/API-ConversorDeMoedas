

let coins2 = document.querySelector('.paisCoins');



async function coins(e) {

    e.preventDefault();
    const urlApi = 'https://economia.awesomeapi.com.br/last/';
    const coin = 'USD-BRL,EUR-BRL'
    const response = await fetch(urlApi + coin);
    const json = await response.json();
    const dolarReal = json.USDBRL;
    const euroReal = json.EURBRL;
    
    const moedaDoll = parseFloat(dolarReal.high).toFixed(2)
    const moedaEUR = parseFloat(euroReal.high).toFixed(2)
       
    const inputValue = document.getElementById('input').value;
    const SelectValue = document.querySelector("#selecao").value;
    const moneyTrue = document.querySelector("#valuereais");
    const moneyTrueBR = document.querySelector('#valueMoneyBr');
    const moneyTrueEUR = document.querySelector('#valueMoney');
    let butao = document.querySelector('#butao');

    if(inputValue == '') {
        alert("Campo vazio, digite algo!");

        function limpeza(e) {
            e.preventDefault();
            if (inputValue.value === "") {
                SelectValue = "";
                moneyTrue = "0";
                moneyTrueBR = "0";
                moneyTrueEUR = "0";
                coins2.style.display = "";
                coins2.style.opacity = ""; 
            }
        }
        
       }else {

        if (SelectValue === "💵 Dolar americano"  || SelectValue === "💶 Euro" || SelectValue === "💶 BRL -> USD") {
            //quando adicionar um valor a um id ou class, precisamos reseta-la para um novo valor vir
            moneyTrue.innerHTML = '';
            const valorTotal = inputValue / moedaDoll;

            moneyTrue.insertAdjacentHTML("beforeend", `U$ ${valorTotal.toFixed(2)}`); 
           
            moneyTrueEUR.innerHTML = '';
            const valorTotalEUR = inputValue / moedaEUR;
            
            moneyTrueEUR.insertAdjacentHTML("beforeend", `€ ${valorTotalEUR.toFixed(2)}`);
           
          
            coins2.style.opacity = '100';
            coins2.style.display = 'flex';
            
            moneyTrueBR.innerHTML = '';
            const valorTotalBRL = inputValue * moedaDoll;
        
            moneyTrueBR.insertAdjacentHTML("beforeend", `R$ ${valorTotalBRL.toFixed(2)}`);
           
        }
        
        // butao.removeEventListener('click', coins)

    }


}

// let input = document.getElementById('input');
// input.addEventListener('input', function() {
//     // resetar o valor das variáveis que guardam o valor de saída
//     document.querySelector("#valuereais").innerHTML = "";
//     document.querySelector("#valueMoneyBr").innerHTML = "";
//     document.querySelector("#valueMoney").innerHTML = "";

//     // chamar a função coins() novamente com o novo valor inserido pelo usuário
//     coins();
// });

butao.addEventListener('click',  coins);




var speed = {
    distance: '-50px',
    duration: 1400,
    delay: 400
    };
    
    var speedmin = {
    distance: '-10px',
    duration: 1400,
    delay: 400
    };
    window.sr = ScrollReveal({ reset: true });
    
    sr.reveal('.container-flex', speed ,{delay: 200, origin:'top',});
    
   
    sr.reveal('',speedmin,{
    duration: 1000,
    });
   