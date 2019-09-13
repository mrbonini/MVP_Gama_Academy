const send = document.getElementById('send');
const cancel = document.getElementById('cancel');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const buttonsContainer = document.getElementById('buttonContainer');

send.addEventListener('click', function(){
    console.log(input1.value)
    if(input1.value == "PALAVRA-CHAVE" || input2.value == "PALAVRA-CHAVE") {
        alert("insira as palavras chaves para montar o dashboard")
        console.log(input1.value + " " + input2.value)
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

    const voltar = document.createElement('button');
        voltar.className = "jsbutton";
        voltar.innerHTML = "VOLTAR";
        voltar.id = "voltar"
    
    let analytics = document.createElement('a');
        analytics.href = "./linte-analytics-dashboard.html"

    let analyticsButton = document.createElement('button');
        analyticsButton.className = "linte";
        analyticsButton.innerHTML = "Linte Analytics Dashboard";

        buttonsContainer.appendChild(salvo);
        buttonsContainer.appendChild(voltar);
        buttonsContainer.appendChild(analytics);
        analytics.appendChild(analyticsButton);
    }

    
    voltar.addEventListener('click', function() {
    while (buttonsContainer.hasChildNodes()) {
        buttonsContainer.removeChild(buttonsContainer.firstChild);
    }
    let enviar = document.createElement('button');
        enviar.className = "envio";
        enviar.id = "send";
        enviar.innerHTML = "ENVIAR"

    let cancelar = document.createElement('button');
        cancelar.className = "cancelar";
        cancelar.id = "cancel";
        cancelar.innerHTML = "CANCELAR";

    let analytics = document.createElement('a');
        analytics.href = "./linte-analytics-dashboard.html"

    let analyticsButton = document.createElement('button');
        analyticsButton.className = "linte";
        analyticsButton.innerHTML = "Linte Analytics Dashboard";

        buttonsContainer.appendChild(enviar);
        buttonsContainer.appendChild(cancelar);
        buttonsContainer.appendChild(analytics);
        analytics.appendChild(analyticsButton);
    
})

});





