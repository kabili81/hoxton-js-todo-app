let state = {
    todos: [
        {
            text: 'Go Shopping',
            completed: false,
        },
        {
            text: 'Work out',
            completed: false,
        },
        {
            text: 'See the Doctor',
            completed: true,
        },
    ],
    showCompleted:false,
}

function toggleShowCompleted() {
    state.showCompleted = !state.showCompleted
    render()
}

function addTodo(text) {
    if (text.length === 0) return
    let todo = {
        text: text,
        completed: false,
    }
    state.todos.push(todo)
    render()
}

function renderApp() {
    let appEl = document.createElement('main')
    appEl.className = 'app'
    document.body.append(appEl)
}


function renderOptionsSection() {
  
    let optionsSection = document.createElement('section')
    optionsSection.classList.add('options')

    let optionsTitle = document.createElement('h2')
    optionsTitle.classList.add ('section__title')
    optionsTitle.innerText= 'Options'

    let showCompletedLabel = document.createElement('label')

    let showCompletedInput = document.createElement('input')
    showCompletedInput.type = 'checkbox'

    showCompletedLabel.append('Show completed', showCompletedInput)
    optionsSection.append(optionsTitle, showCompletedLabel)

    let appEl = document.querySelector('.app')
    appEl?.append(optionsSection)

}


function renderAddTodoSection() {

let addTodoSection = document.createElement('section')

let titleEl = document.createElement('h2')
addItemTitle.classList.add = ('section__title')
addItemTitle.innerText = 'ADD ITEM'



//      <h2 class="title">ADD ITEM</h2>
//      <form class="add-item">
//        <input
//          class="text-input"
//          type="text"
//          name="text"
//         required
//          minlength="3"
//        />
//        <button type="submit">Add</button>
//      </form>
//     </section>
}

function renderTodoSection() {
    


let todoSection = document.createElement('section')

let titleEL = document.createElement('h2')
titleEL.classname = 'section__title'
titleEL.innerText = 'Todo'

let todoListEl = document.createElement('ul')
todoListEl.className = 'todo-list'

let incompleTodos = state.todos.filter (todo => todo.completed === false)

for (let todo of incompleTodos) {
    let todoItemEl = document.createElement('li')
    todoItemEl.className = 'todo'

    let checkboxEl = document.createElement('input')
    checkboxEl.type = 'checkbox'
    checkboxEl.className = 'todo__checkbox'

    let todoTextEl = document.createElement('p')
    todoTextEl.className = 'todo__delete'
    todoTextEl.innerText = 'Delete'

    let deleteButtonEl = document.createElement('button')
    deleteButtonEl.className = 'todo__delete'
    deleteButtonEl.innerText = 'Delete'

    todoItemEl.append(checkboxEl, todoTextEl, deleteButtonEl)

    todoListEl.append(todoItemEl)
}

todoSection.append(titleEL, todoListEl)

let appEl = document.querySelector('.app')
appEl.append(todoSection)
}

function renderCompletedTodosSecition() {
//    <section>
//      <h2 class="title">COMPLETED</h2>
//      <ul class="completed-todo-list">
//        <li class="todo completed">
//          <input type="checkbox" checked />
//          <p>See the Doctor</p>
//          <button>Delete</button>
//        </li>
//      </ul>
//    </section>

}

function render() {
    document.body.textContent = ''

renderApp()
renderOptionsSection()
renderTodoSection()      


//  </main>
}

render()


