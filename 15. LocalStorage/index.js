const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
let items = JSON.parse(localStorage.getItem('items')) || []
const removeButton = document.querySelector('#remove')
const checkButton = document.querySelector('#check')
const uncheckButton = document.querySelector('#ncheck')


const addItem = function(e) {
    e.preventDefault()
    const text = (this.querySelector('[name=item]')).value
    const item = {
        text,
        done: false
    }

    items.push(item)
    populateList(items, itemsList)
    localStorage.setItem('items', JSON.stringify(items))
    this.reset()
}

const populateList = function(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, i) => {
        return `
            <li>
                <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : '' } />
                <label for="item${i}">${plate.text}</label>
            </li>
        ` 
    }).join('')
}

const toggleDone = function(e) {
    if(!e.target.matches('input')) return
    const el = e.target
    const index = el.dataset.index
    items[index].done = !items[index].done
    localStorage.setItem('items', JSON.stringify(items))
    populateList(items, itemsList)
}

const removeAllItems = () => {
    items = []
    localStorage.setItem('items', JSON.stringify(items))
    populateList(items, itemsList)  
}

const checkAllItems = () => {
    items.forEach(item => {
        item.done = true
    });
    localStorage.setItem('items', JSON.stringify(items))
    populateList(items, itemsList)
}

const uncheckAllItems = () => {
    items.forEach(item => {
        item.done = false
    });
    localStorage.setItem('items', JSON.stringify(items))
    populateList(items, itemsList)
}

addItems.addEventListener('submit', addItem)
itemsList.addEventListener('click', toggleDone)
remove.addEventListener('click', removeAllItems)
check.addEventListener('click', checkAllItems)
uncheck.addEventListener('click', uncheckAllItems)

populateList(items, itemsList)