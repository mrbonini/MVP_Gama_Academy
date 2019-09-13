const send = document.getElementById('send');
const cancel = document.getElementById('cancel');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const buttonsContainer = document.getElementById('buttonContainer');

send.addEventListener('click', function(){
    
    if(input1.value == "PALAVRA-CHAVE" || input2.value == "PALAVRA-CHAVE") {
        alert("insira as palavras chaves para montar o dashboard")
        
    }
    else{
    
    alert("ENVIADO PARA O SISTEMA")
    input1.value = "PALAVRA-CHAVE"
    input2.value = "PALAVRA-CHAVE"

    while (buttonsContainer.hasChildNodes()) {
        buttonsContainer.removeChild(buttonsContainer.firstChild);
    }

    let salvo = document.createElement('button');
        salvo.className = "jsbutton";
        salvo.innerHTML = "SALVO";

    let voltar = document.createElement('button');
        voltar.className = "jsbutton";
        voltar.innerHTML = "VOLTAR";
        voltar.id = "voltar"

    let retornar = document.createElement('a');
        retornar.href = "./linte-analytics.html"
    
    let analytics = document.createElement('a');
        analytics.href = "./linte-analytics-dashboard.html"

    let analyticsButton = document.createElement('button');
        analyticsButton.className = "linte";
        analyticsButton.innerHTML = "Linte Analytics Dashboard";

        buttonsContainer.appendChild(retornar);
        retornar.appendChild(salvo);
        buttonsContainer.appendChild(retornar)
        retornar.appendChild(voltar);
        buttonsContainer.appendChild(analytics);
        analytics.appendChild(analyticsButton);
    }
    
});
    


cancel.addEventListener('click', function() {
    input1.value = "PALAVRA-CHAVE"
    input2.value = "PALAVRA-CHAVE"
})




