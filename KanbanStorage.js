
/* a cada click no elemento body, ele salva o estado atual do Kanban no localStorage */
document.body.onclick = function SaveKanban(){ 
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