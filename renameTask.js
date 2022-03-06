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