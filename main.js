var add_task = document.getElementsByClassName('add-task');
var add_card = document.getElementsByClassName('addCardBoard-btn')[0];
var cardTotal = 0;
var taskTotal = 0;


/* Captura os eventos "click" do botão "Add Task" */
for(var btn of add_task){
    btn.addEventListener('click', InputNameTask);
}

function InputNameTask(){ /* Adiciona um nome para a nova task */
    let NameTask_container = this.parentElement.children[0]; /* container do input name */
    NameTask_container.classList.add('confirm-taskName'); /* adiciona uma classe ao container */

    let confirm_name =  NameTask_container.children[0].children[1].children[1]; /* botão confirm do input name */
    let cancel_name =  NameTask_container.children[0].children[1].children[0]; /* botão cancel do input name */

    /* Captura eventos "click" dos botões do input name */
    confirm_name.addEventListener('click', ConfirmTaskName); 
    cancel_name.addEventListener('click', CancelTaskName);   
}


/* Confirma a criação do nome da task */
function ConfirmTaskName(){
    let NameTask_container = this.parentElement.parentElement.parentElement; /* container do input name */
    NameTask_container.classList.remove('confirm-taskName'); /* remove a classe do container, fechando a tela de input name */
    
    let taskTotal = this.parentElement.parentElement.parentElement.parentElement.children[3].children.length+1; /* quantia de tasks no card atual */
    localStorage.setItem('task_total', taskTotal);

    let task_list = this.parentElement.parentElement.parentElement.parentElement.children[3]; /* container que armazena as tasks */
    CreatTask(task_list); /* chama a função que cria uma nova task, passando o container que armazena as tasks como argumento */

}

/* Cancela a criação do nome da task */
function CancelTaskName(){
    let NameTask_container = this.parentElement.parentElement.parentElement; /* container do input name */
    NameTask_container.classList.remove('confirm-taskName'); /* remove a classe do container, fechando a tela de input name */
}


/* Cria uma nova Task */
function CreatTask(taskList){
    
    taskTotal+=1;

    let task_container = document.createElement('div'); /* task container */
    task_container.classList.add('task-container');

    let task_name = document.createElement('button'); /* É um botão que armazena o nome da task e renomeia a task ao ser clicado */
    task_name.classList.add('task-name');
    task_container.appendChild(task_name); /* task container armazena o botão "task_name" */
    
    let action_task = document.createElement('div'); /* container que armazena tres botões */
    action_task.classList.add('action-task');

    let moveToCard = document.createElement("button"); /* É um botão que move a task para outro card ao ser clicado */
    moveToCard.classList.add('moveTo-card');
    moveToCard.innerHTML = '<i class="material-icons">flip_to_front</i>'; /* define um icone ao botão */
    moveToCard.addEventListener('click', MoveTask_ToCard) /* dispara um evento click e chama a função MoveTask_ToCard */

    /* Move a taska uma posição a cima */
    let moveUp_task = document.createElement('button'); /* É um botão que move a task uma posição a cima */
    moveUp_task.innerHTML = '<i class="bi bi-caret-up-fill"></i>'; /* define um icone ao botão */
    moveUp_task.classList.add('moveUp-task');
    moveUp_task.addEventListener('click', MoveUpTask); /* dispara um evento click e chama a função MoveUpTask */

    /* Remove a task */
    let remove_task = document.createElement('button'); /* É um botão que remove a task */
    remove_task.innerHTML = '<i class="bi bi-x"></i>'; /* define um icone ao botão */
    remove_task.classList.add('remove-task');
    remove_task.addEventListener('click', RemoveTask); /* dispara um evento click e chama a função RemoveTask */
    
    /* action_task armazena os botões criados acima */
    action_task.appendChild(moveToCard);
    action_task.appendChild(moveUp_task);
    action_task.appendChild(remove_task);

    task_container.appendChild(action_task); /* task_container armazena action_task */

    /* Container Rename task */
    let RenameTaskContainer = document.createElement('div');
    RenameTaskContainer.classList.add('RenameTask-container')

    let inputRename = document.createElement('div'); /* input rename */
    inputRename.classList.add('input-rename');

    RenameTaskContainer.appendChild(inputRename); /* armazena input rename */

    let div1 = document.createElement('div1');
    div1.classList.add('div1');

    let label = document.createElement('label');
    label.innerText = 'Task Name';

    let input = document.createElement('input');
    input.type = 'text';
    input.autocomplete = 'off';
    input.classList.add('input-renameCard');

    div1.appendChild(label);
    div1.appendChild(input);

    let div2 = document.createElement('div2');
    div2.classList.add('div2');

    let cancelBtn = document.createElement('button');
    cancelBtn.classList.add('cancel-btn');
    cancelBtn.innerText = 'CANCEL';

    let confirmBtn = document.createElement('button');
    confirmBtn.classList.add('confirm-btn');
    confirmBtn.innerText = 'CONFIRM';

    div2.appendChild(cancelBtn);
    div2.appendChild(confirmBtn);

    inputRename.appendChild(div1);
    inputRename.appendChild(div2);

    task_container.appendChild(RenameTaskContainer); 
    taskList.appendChild(task_container);   

    let InputTaskName = taskList.parentElement.children[0].children[0].children[0].children[1]; /* input task name */
    
    AddNameTask(InputTaskName, task_name); /* chama a função que adiciona o nome da task */
    AmountTask(taskList); /* chama a função que contabiliza a quatidade de tasks no card */
    
    task_name.addEventListener("click",RenameTask); /* dispara o evento click e chama a função RenameTask */
}

/* Adiciona um nome a task */
function AddNameTask(Input_name, task){

    let task_tot = localStorage.getItem('task_total') /* recupera o numero total de tasks armazenado no localStorage */

    if(Input_name.value == ''){ /* se o usuário não escolher um nome para a task */
        task.innerText = 'task #'+parseInt(task_tot);
    }
    else{
        task.innerText = Input_name.value; /* define o nome da task */
        Input_name.value = '';
    }
    
}



function ConfirmRenameTask(){ /* Confirma a escolha do novo nome para a task e fecha a janela de escolha de novo nome */
    let RenameTaskContainer = this.parentElement.parentElement.parentElement
    RenameTaskContainer.classList.remove('confirm-taskRename');

    let task = this.parentElement.parentElement.parentElement.parentElement.children[0];
    AddRenameTask(task); /*  */
}


function CancelRenameTask(){ /* Cancela a escolha do novo nome para a task e fecha a janela de escolha de novo nome */
    let RenameTaskContainer = this.parentElement.parentElement.parentElement
    RenameTaskContainer.classList.remove('confirm-taskRename');

}


function RenameTask(){ /* Abre a janela de escolha de um novo nome para a task */ 

    let RenameTaskContainer = this.parentElement.children[2];
    RenameTaskContainer.classList.add('confirm-taskRename'); /* Abrea a janela de escolha de nome */

    let cancel_btn_renameTask = RenameTaskContainer.children[0].children[1].children[0];
    cancel_btn_renameTask.classList.add('cancel-rename');

    let confirm_btn_renameTask = cancel_btn_renameTask.parentElement.children[1];
    confirm_btn_renameTask.classList.add('confirm-rename');

    confirm_btn_renameTask.addEventListener('click', ConfirmRenameTask); /* botão que confirma a escolha do novo nome para a task */

    cancel_btn_renameTask.addEventListener('click', CancelRenameTask); /* botão que cancela a escolha do novo nome para a task */

}


/* Adiciona um novo nome par a task */
function AddRenameTask(task){
    let input_rename = task.parentElement.children[2].children[0].children[0].children[1];
    let task_tot = localStorage.getItem('task_total'); /* recupera o numero de total de tasks armazenado no localStorage */
    

    if(input_rename.value == ''){
        task.innerText = 'task #'+parseInt(task_tot);
        input_rename.value = '';
    }
    else{
        task.innerText = input_rename.value; /* define o novo nome da task */
        input_rename.value = '';
    }
    
}


/* Remove uma task */
function RemoveTask(){

    let taskList = this.parentElement.parentElement.parentElement; /* card que armazena a task */ 
    let task = this.parentElement.parentElement; /* task escolhida */
    taskList.removeChild(task); /* aqui o container remove a task */
    localStorage.setItem('task_total', taskTotal); /* salva o numero total de tasks nesse card no localStorage */

    AmountTask(taskList); /* essa função contabiliza a quantidade de tasks em cada card */

}

/* Quantidade de tasks */
function AmountTask(element){
    
    if(element.children.length >= 1){ /* se o card tiver mais de uma task, remove a mensagem que indica que o card está vazio */
        element.parentElement.children[2].classList.add('no-card-alert');
    }
    else{ /* se o card não tiver nenhuma task, mostra a mensagem que indica que o card está vazio */
        element.parentElement.children[2].classList.remove('no-card-alert');
    }
}


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


add_card.addEventListener('click', Card_Title_Color);

function CreatCard(MoveToCard){ /* Cria um novo card */

    let title_card = MoveToCard.children[0].children[0].children[0].children[1]; /* titulo do card */
    let color_card = MoveToCard.children[0].children[0].children[1].children[1]; /* cor do card */

    /* Cria um Card novo */
    cardTotal+=1;
    localStorage.setItem('card_total', cardTotal); /* salva a quantia de cards no container */

    let container = MoveToCard.nextElementSibling.nextElementSibling; /* container que armazena os cards */

    let card_container = document.createElement('div');
    card_container.classList.add("card-container");

    /* NameTask-container */
    let NameTask_container = document.createElement("div");
    NameTask_container.classList.add('NameTask-container');
    
    let input_name = document.createElement("div");
    input_name.classList.add('input-name');

    let div1 = document.createElement('div');
    div1.classList.add('div1');

    let label = document.createElement("label");
    label.innerText = 'Texto da Nota';
    
    let input = document.createElement('input');
    input.type = 'text'
    input.classList.add('input-nameCard');

    div1.appendChild(label);
    div1.appendChild(input);

    let div2 = document.createElement('div');
    div2.classList.add('div2');

    let cancel_btn = document.createElement('button');
    cancel_btn.classList.add('cancel-btn');
    cancel_btn.innerHTML = 'CANCEL';

    let confirm_btn = document.createElement('button');
    confirm_btn.classList.add('confirm-btn');
    confirm_btn.innerHTML = 'CONFIRM';

    div2.appendChild(cancel_btn);
    div2.appendChild(confirm_btn);

    input_name.appendChild(div1);
    input_name.appendChild(div2);

    NameTask_container.appendChild(input_name);

    card_container.appendChild(NameTask_container);

    let header_card = document.createElement('div');
    header_card.classList.add('header-card');

    let card_title = document.createElement('h3');
    card_title.classList.add('card-title');

    let remove_card_btn = document.createElement('button');
    remove_card_btn.classList.add('remove_card-btn');
    remove_card_btn.innerHTML = '<b class="bi bi-x-circle"></b>';

    remove_card_btn.addEventListener('click', RemoveCard); /* dispara um evento click e executa a função que remove o card */

    header_card.appendChild(card_title);
    header_card.appendChild(remove_card_btn);

    card_container.appendChild(header_card);

    let no_task = document.createElement('p');
    no_task.classList.add('no-task');
    no_task.innerText = 'No tasks added';

    card_container.appendChild(no_task);

    let task_list = document.createElement('div');
    task_list.classList.add('task-list');

    card_container.appendChild(task_list);

    let add_task_btn = document.createElement('button');
    add_task_btn.classList.add('add-task');
    add_task_btn.innerHTML = '<i class="material-icons">add</i> ADD TASK';

    add_task_btn.addEventListener('click', InputNameTask); /* executa a função que define o nome da task */
    
    card_container.appendChild(add_task_btn);

    AddColorCard(card_container, color_card);
    
    container.appendChild(card_container);
    
    AddNameCard(card_title, title_card); /* Define o nome card */
}




function ConfirmCreatCard(){ /* confirma a criação do card */
    let ColorTitle_container = this.parentElement.parentElement.parentElement;
    ColorTitle_container.classList.remove('active-color_title-card');

    CreatCard(ColorTitle_container);
}

function CancelCreatCard(){ /* cancela a cração do card */
    let ColorTitle_container = this.parentElement.parentElement.parentElement;
    ColorTitle_container.classList.remove('active-color_title-card');
}

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

function Card_Title_Color(){  /* abre a janela de escolha de nome e cor do card */
    let ColorTitle_container = this.parentElement.previousSibling.previousSibling;
    ColorTitle_container.classList.add('active-color_title-card'); /* abre a janela de escolha do nome e da cor do novo card */

    let confirm_btn = ColorTitle_container.children[0].children[1].children[1];
    let cancel_btn = ColorTitle_container.children[0].children[1].children[0];

    confirm_btn.addEventListener('click', ConfirmCreatCard);
    cancel_btn.addEventListener('click', CancelCreatCard);
}


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

document.body.onclick = function(){ /* a cada click no elemento body, ele salva o estado atual do Kanban no localStorage */
    let container = document.getElementsByClassName('container')[0];
    localStorage.setItem('cont', JSON.stringify(container.innerHTML));
}


onload = function(){ /* executa a função ao recarregar a página */
    RestoreKanban();
}

function RestoreKanban(){ /* Restaura o estado anterior do Kanban */
    let container = JSON.parse(this.localStorage.getItem('cont'));

    var cont = this.document.getElementsByClassName("container")[0];
    var move_task_to_card = this.document.getElementsByClassName('moveTo-card');
    var addtask = document.getElementsByClassName('add-task');

    var confirmName = document.getElementsByClassName('confirm-btn');
    var cancelName = document.getElementsByClassName("cancel-btn");

    var renameTask = document.getElementsByClassName('task-name');
    var confirm_rename = document.getElementsByClassName("confirm-rename");
    var cancel_rename = document.getElementsByClassName('cancel-rename');

    var removeCard = this.document.getElementsByClassName('remove_card-btn');
    var moveUp_task = document.getElementsByClassName('moveUp-task');
    var move_task = document.getElementsByClassName('buttonCard');
    var remove_task = document.getElementsByClassName('remove-task');

    /* captura eventos dos elementos restaurados do localStorage */
    if(container !=  null){ 
        cont.innerHTML = container;

        for(var btn of addtask){
            btn.addEventListener("click", InputNameTask);
        }

        for(var btn_remove of removeCard){
            btn_remove.addEventListener("click", RemoveCard);
        }

        for(var name of renameTask){
            name.addEventListener('click', RenameTask);
        }

        for(let btn of confirm_rename){
            btn.addEventListener("click", ConfirmRenameTask);
        }

        for(let btn of cancel_rename){
            btn.addEventListener('click', CancelRenameTask);
        }

        for(var move_btn of move_task_to_card){
            move_btn.addEventListener('click', MoveTask_ToCard);
        }

        for(var moveUp of moveUp_task){
            moveUp.addEventListener('click', MoveUpTask);
        }

        for(var remove_btn of remove_task){
            remove_btn.addEventListener("click", RemoveTask);
        }

        for(var confirm of confirmName){
            confirm.addEventListener("click", ConfirmTaskName);
        }

        for(var cancel of cancelName){
            cancel.addEventListener("click", CancelTaskName);
        }

        for(let mv_btn of move_task){
            mv_btn.addEventListener('click', ConfirmMoveTask_ToCard);
        }


    }
    
 
}   