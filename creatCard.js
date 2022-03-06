var add_card = document.getElementsByClassName('addCardBoard-btn')[0];
var cardTotal = 0;


add_card.addEventListener('click', Card_Title_Color);


function Card_Title_Color(){  /* abre a janela de escolha de nome e cor do card */
    let ColorTitle_container = this.parentElement.previousSibling.previousSibling;
    ColorTitle_container.classList.add('active-color_title-card'); /* abre a janela de escolha do nome e da cor do novo card */

    let confirm_btn = ColorTitle_container.children[0].children[1].children[1];
    let cancel_btn = ColorTitle_container.children[0].children[1].children[0];

    confirm_btn.addEventListener('click', ConfirmCreatCard);
    cancel_btn.addEventListener('click', CancelCreatCard);
}

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