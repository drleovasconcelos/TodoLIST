// resumo interessante
// const input = document.querySelector('.input')
// const container = document.querySelector('.container')
// const addButton = document.querySelector('.add')

// function addTarefa() {
//     alert('Deu certo')
// }

// addButton.addEventListener('click', addTarefa)
// // para executar eventos após apertar o botão (todos os eventos) - quando o evento for o click ele chama a função addTarefa


const input = document.querySelector('.input')
const container = document.querySelector('.container')
const addButton = document.querySelector('.add')

function addTarefa() {
    const itemBox = document.createElement('div')
    itemBox.classList.add('item')
    // tá cirando a div (imagina criando a divi dentro do html e adicionando a classe item - <div class="item"> </div>)

    const inputTask = document.createElement('input')
    inputTask.type = 'text'
    inputTask.disabled = true
    // só vai poder ver o texto e não poderá editar
    inputTask.value = input.value
    // o input será o valor que ele digitou lá em cima e em seguida adicionamos as caracteristicas do CSS
    inputTask.classList.add('item-input')

    const editBtn = document.createElement('button')
    editBtn.classList.add('edit')
    editBtn.innerText = 'EDITAR'
    // CRIEI O BOTÃO, E ADICIONEI AS CARACT DO CSS
    editBtn.addEventListener('click', () => editTarefa(inputTask, input.value))
    // ao clicar em editar no botão editar, ele recebe os inputs da tarefa



    const removeBtn = document.createElement('button')
    removeBtn.classList.add('remove')
    removeBtn.innerText = 'REMOVER'
    // CRIEI O BOTÃO, E ADICIONEI AS CARACT DO CSS
    removeBtn.addEventListener('click', () => removeTarefa (itemBox, input.value))
    // ao clicar em remover no botão editar, ele deleta



    // primeiro div dentro do container
    container.append(itemBox)
    itemBox.append(inputTask)
    itemBox.append(editBtn)
    itemBox.append(removeBtn)

    input.value = " "
    // limpa a caixa de texto
    input.focus()
    // clicou no botão o foco volta para o input
}

function editTarefa(input, tarefa) {
    input.disabled = !input.disabled
}

function removeTarefa(itemBox, tarefa) {
    // container.remove(itemBox) - remove tudo - cuidado
    // itemBox.parentNode.removeChild(itemBox)
    container.removeChild(itemBox)
}

addButton.addEventListener('click', addTarefa)
// para executar eventos após apertar o botão (todos os eventos) - quando o evento for o click ele chama a função addTarefa

// chamar função com enter
input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        addTarefa()
    }
})
