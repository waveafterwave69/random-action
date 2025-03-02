const inputEl = document.querySelector('.main-input')
const addBtn = document.querySelector('.main-btn')
const actionsRowEl = document.querySelector('.actions-list')
const randomBtn = document.querySelector('.random-btn')
const randomPlaceEl = document.querySelector('.random-el')

// Создать новый элемент

function createEl(text) {
    const newEl = document.createElement('li')
    newEl.classList.add('content-card')
    newEl.innerHTML = `
                        <li class="actions-list__item">
                            <p class="item-text">${text}</p>
                            <button class="item-btn"><img src="./img/close.png" alt="" class="delete"></button>
                        </li>`
    return newEl
}

function handleEvent(e) {
    if (e.type === 'click' || (e.type === 'keydown' && e.key === 'Enter')) {
        const text = inputEl.value
        inputEl.value = ''

        if (text) {
            const newEl = createEl(text)
            actionsRowEl.append(newEl)
        }

        // Удалить элемент
        const deleteBtnEls = document.querySelectorAll('.item-btn')
        deleteBtnEls.forEach((deleteBtn) => {
            deleteBtn.addEventListener('click', function (event) {
                const elementToRemove = deleteBtn.closest('.content-card')
                elementToRemove.remove()
            })
        })
        inputEl.value = ''
    }
}

addBtn.addEventListener('click', handleEvent)
inputEl.addEventListener('keydown', handleEvent)

// Найти случайный элемент
function findRandomEl() {
    let elementsArr = []

    randomPlaceEl.textContent = ''
    randomPlaceEl.classList.add('hidden')

    const elems = document.querySelectorAll('.item-text')

    elems.forEach((el) => {
        elementsArr.push(el.textContent)
    })

    if (elementsArr.length > 0) {
        const randomIndex = Math.floor(Math.random() * elementsArr.length)
        const randomItem = elementsArr[randomIndex]
        randomPlaceEl.textContent = randomItem
        randomPlaceEl.classList.remove('hidden')
    }
}

randomBtn.addEventListener('click', function () {
    findRandomEl()
})
