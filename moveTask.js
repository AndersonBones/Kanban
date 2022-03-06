/* Move a task uma posição acima no seu card */
function MoveUpTask(){
    
    let task = this.parentElement.parentElement; /* task a ser movida */
    let taskList = task.parentElement; /* container que armazena a task */
    let taskInnerHTMLlist = [];
    
    for(t of taskList.children){
        taskInnerHTMLlist.push(t.innerHTML);
    }

    let Indexbacktask = taskInnerHTMLlist.indexOf(task.innerHTML)-1; /* recebe a posição da task no container subtraída por 1 */
                                                                     /* ou seja, recebe a posição antecessora a posição da task */
    if(Indexbacktask < 0){
        Indexbacktask = 0;
    }

    taskList.insertBefore(task, taskList.children[Indexbacktask]); /* insere a task na posição antecessora a ela */
}



/* Move a task para outro card */

function MoveTask_ToCard(){
    let ThisCard = this.parentElement.parentElement.parentElement; /* card que armazena a task */
    let task = this.parentElement.parentElement; /* task a ser movida */
   

    /* aqui salvamos a posição do card que armazena a task a ser movida, e tambem salvamos a posição da task a ser movida */
    for(var i=0; i<ThisCard.parentElement.parentElement.children.length; i++){
        if( task.parentElement.parentElement == ThisCard.parentElement.parentElement.children[i]){
            
            localStorage.setItem('card_pos', i); /* posição do card no container */
            
            for(var c=0; c<ThisCard.parentElement.parentElement.children[i].children[3].children.length; c++){
                if(task == ThisCard.parentElement.parentElement.children[i].children[3].children[c]){
                    
                    localStorage.setItem('task_pos', c); /* posição da task no card */
                }   
            }
        }
    }
    

    
    let MoveTask_toCard_container = this.parentElement.parentElement.parentElement.parentElement.parentElement.children[0];
    var container = MoveTask_toCard_container.parentElement;
    let cardList_container = MoveTask_toCard_container.children[0].children[1];

    MoveTask_toCard_container.classList.add('confirm-TaskToCard'); /* Abre a janela de escolha do card que armazenará a task */


    for(var i=1; i<container.children.length; i++){ /* cria os botões de escolha que representam os cards  */

        let buttonCard = document.createElement('button');
        buttonCard.style.backgroundColor = window.getComputedStyle(container.children[i]).backgroundColor;
        buttonCard.innerText = container.children[i].children[1].innerText;
        buttonCard.classList.add('buttonCard');

        cardList_container.appendChild(buttonCard); /* container que armazena os botões */
        buttonCard.addEventListener('click', ConfirmMoveTask_ToCard);
        
    }

}


function ConfirmMoveTask_ToCard(){  /* Confirma o movimento da task para outro card */

    let MoveTask_toCard_container = this.parentElement.parentElement.parentElement; /* janela de esolha de card */

    let cardList = MoveTask_toCard_container.children[0].children[1];
    let pos = 0;
    let pos_card = localStorage.getItem('card_pos');
    let pos_task = localStorage.getItem("task_pos");

    let new_task = cardList.parentElement.parentElement.parentElement.children[parseInt(pos_card)].children[3].children[parseInt(pos_task)];
    let this_card = cardList.parentElement.parentElement.parentElement.children[parseInt(pos_card)].children[3];

    for(var i=0; i<this.parentElement.children.length; i++){
        
        if(this == this.parentElement.children[i]){
            pos = i;
            let card = cardList.parentElement.parentElement.parentElement.children[pos+1].children[3]; /* card que receberá a task */
            card.appendChild(new_task); /* armazena a task */
            AmountTask(card);
        }
    }

    AmountTask(this_card); /* card que transferiu a task */

    while (cardList.firstChild) { /* remove os botões da janela de escolha de card */
        cardList.removeChild(cardList.lastChild);
      }

    MoveTask_toCard_container.classList.remove('confirm-TaskToCard'); /* fecha a janela de escolha de card */
    
}