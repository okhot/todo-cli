import Conf from 'conf';

const config = new Conf({projectName: 'todo-cli'});
import chalk from 'chalk';

function list () {
    const todoList = config.get('todo-list')
    if (todoList && todoList.lenght){
        //user has a todolist
        console.log(
            chalk.blue.bold("Task in green are done, task in Yellow are not yet done")
        )
    } else {
        //user does not have a todoList
        console.log(
            chalk.red.bold("No task ave been created")
        )
    }

    todoList.forEach((task, index) => {
      if(task.done) {
        console.log(
            chalk.greenBright(`${index} ${task.text}`)
        )
      }  else {
        console.log(
            chalk.yellowBright(`${index} ${task.text}`)
        )
      }
    })
}

export default list