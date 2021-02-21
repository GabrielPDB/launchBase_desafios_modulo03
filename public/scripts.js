const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener('click', function () {
        const cardId = card.getAttribute('id')
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('iframe').src = `https://blog.rocketseat.com.br/${cardId}/`
    })
}

document.querySelector('.close-modal').addEventListener('click', function () {
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector('iframe').src = ''
})

const modal = document.querySelector('.modal')

document.querySelector('.maximize-modal').addEventListener('click', function () {
    if (!modal.classList.contains('maximize')) {
        modal.classList.add('maximize')
        modal.querySelector('.maximize-modal .material-icons').innerHTML = "fullscreen_exit"
    } else {
        modal.classList.remove('maximize')
        modal.querySelector('.maximize-modal .material-icons').innerHTML = "fullscreen"
    }

})
