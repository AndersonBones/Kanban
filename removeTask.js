/* Remove uma task */
function RemoveTask(){

    let taskList = this.parentElement.parentElement.parentElement; /* card que armazena a task */ 
    let task = this.parentElement.parentElement; /* task escolhida */
    taskList.removeChild(task); /* aqui o container remove a task */
    localStorage.setItem('task_total', taskTotal); /* salva o numero total de tasks nesse card no localStorage */

    AmountTask(taskList); /* essa função contabiliza a quantidade de tasks em cada card */

}