const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-task')

let minhaLista = []



function addTarefa() {
    minhaLista.push({
        tarefa: input.value,
        concluida: false
    })

    input.value = ""

    mostarTarefa()
}

function mostarTarefa() {

    let novaLi = ''

    minhaLista.forEach((item, posiçao )=> {

        novaLi = novaLi + `
        <li class="task ${item.concluida && "done"}">
            <i class="fa-solid fa-check" onclick="concluirTarefa(${posiçao})"></i>
            <p>${item.tarefa}</p>
            <i class="fa-solid fa-trash" onclick="deletarItem(${posiçao})"></i>
        </li>
        `
    })

    listaCompleta.innerHTML = novaLi

    localStorage.setItem('lista', JSON.stringify(minhaLista) )

}

function deletarItem(posiçao) {
    minhaLista.splice(posiçao, 1)

    mostarTarefa()
}

function concluirTarefa(posiçao) {
    minhaLista[posiçao].concluida = !minhaLista[posiçao].concluida

    mostarTarefa()
}

function recarregarTarefa () {
    const tarefasDoLocalStorage = localStorage.getItem('lista')

    if(tarefasDoLocalStorage) {
    minhaLista = JSON.parse(tarefasDoLocalStorage)
    }
    
    mostarTarefa()
}

recarregarTarefa()
button.addEventListener('click', addTarefa )
