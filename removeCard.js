function RemoveCard(){ /* Remove o card */
    cardTotal-=1;

    if(cardTotal < 0){
        cardTotal = 0;
    }

    localStorage.setItem('card_total', cardTotal);

    let card = this.parentElement.parentElement; /* card */
    let container = card.parentElement; /* container que armazena o card */
    
    container.removeChild(card); /* remove o card */
}