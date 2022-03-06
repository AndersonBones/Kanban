var add_task = document.getElementsByClassName('add-task');
var taskTotal = 0;

/* Captura os eventos "click" do botão "Add Task" */
for(var btn of add_task){
    btn.addEventListener('click', InputNameTask);
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


/* Quantidade de tasks */
function AmountTask(element){
    
    if(element.children.length >= 1){ /* se o card tiver mais de uma task, remove a mensagem que indica que o card está vazio */
        element.parentElement.children[2].classList.add('no-card-alert');
    }
    else{ /* se o card não tiver nenhuma task, mostra a mensagem que indica que o card está vazio */
        element.parentElement.children[2].classList.remove('no-card-alert');
    }
}