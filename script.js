let clique = document.querySelector("#clique");
clique.addEventListener("mouseover",mudaVerde);
clique.addEventListener("mouseout",voltaaonormal);


function mudaVerde(){
clique.style.background="green"
}

function voltaaonormal(){
clique.style.background=""
}
//Não esqueça que o comando é imprescindível, mesmo que não seja para realizar nada!

function curtir (){
    let agradecimento = "Obrigado pela presença,saiba que você me ajudou bastante ao vir aqui.";
    
document.getElementById("agradecimento").textContent = agradecimento
}