const images = [
    {'id':'1', 'url':'./img/1.png'},
    {'id':'2', 'url':'./img/2.png'},
    {'id':'3', 'url':'./img/3.png'},
    {'id':'4', 'url':'./img/4.png'}
]       
const container = document.querySelector('.container-items')
    for (const image of images){
        container.innerHTML += `
            <div class="item">
                <img src="${image.url}" alt="">
            </div>
        `
    }

let items = document.querySelectorAll('.item')
document.querySelector('#next').addEventListener('click', ()=> {
    container.appendChild(items[0])
    items = document.querySelectorAll('.item')
})
document.querySelector('#previous').addEventListener('click', ()=> {
    const lastItem = items[items.length - 1]
    container.insertBefore(lastItem, items[0])
    items = document.querySelectorAll('.item')
})