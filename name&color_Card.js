function AddColorCard(card, color){ /* define a cor do card */
    card.style.backgroundColor = color.value;
}


function AddNameCard(card, title){ /* adiciona um nome ao card */
    let cardTot = localStorage.getItem("card_total");

    if(title.value == ''){
        card.innerText = "Card #"+cardTot;
        title.value = '';
    }
    else{
        card.innerText = title.value;
        title.value = '';
    }

}