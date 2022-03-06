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