

function renderOptionsSection() {
   // <section>
    //      <h2 class="title">OPTIONS</h2>
    //      <label>
    //        Show completed
    //        <input type="checkbox" checked />
    //      </label>
    //    </section>
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

function renderApp() {
    let appEl = document.createElement('main')
    appEl.className = 'app'
    document.body.append(appEl)
}

function renderAddTodoSection() {
    //    <section>
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
    
//     <section>
//       <h2 class="title">TODO</h2>
//       <ul class="todo-list">
//       <li class="todo">
//         <input type="checkbox" />
//         <p>Go shopping</p>
//         <button>Delete</button>
//       </li>
//       <li class="todo">
//         <input type="checkbox" />
//        <p>Work out</p>
//        <button>Delete</button>
//      </li>
//    </ul>
//    </section>
}

function ren

function render() {
    document.body.textContent = ''

    renderApp()
    renderOptionsSection()
   

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
//  </main>
}

render()


