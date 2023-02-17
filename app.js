

const coins2 = document.querySelector('.paisCoins');
butao.addEventListener('click',  coins);


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
    const butao = document.querySelector('#butao');

    if(inputValue == '') {
        alert("Campo vazio, digite algo!");
       }

    if (SelectValue === "💵 Dolar americano"  || SelectValue === "💶 Euro" || SelectValue === "💶 BRL -> USD") {
        const valorTotal = inputValue / moedaDoll;
    
        coins2.style.opacity = '100'
        moneyTrue.insertAdjacentHTML("beforeend", valorTotal.toFixed(2)); 
       
        const valorTotalEUR = inputValue / moedaEUR;
        moneyTrueEUR.insertAdjacentHTML("beforeend", valorTotalEUR.toFixed(2));
        coins2.style.display = 'flex';

        const valorTotalBRL = inputValue * moedaDoll;
        moneyTrueBR.insertAdjacentHTML("beforeend", valorTotalBRL.toFixed(2));

    }else {
        alert('algo errado')
    }
    
    butao.removeEventListener('click', coins)

}






