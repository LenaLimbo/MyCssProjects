let backdrop = document.querySelector('.backdrop')
//console.log(backdrop)
//backdrop.style.display='block'
let modal = document.querySelector('.modal')
let selectPlanBtn = document.querySelectorAll('.plan button')
let modalCloseBtn = document.querySelector('.modal__action--negative')

console.log(selectPlanBtn)

for (let i = 0; i < selectPlanBtn.length; i++) {
    selectPlanBtn[i].addEventListener('click', () => {
        modal.style.display = 'block'
        backdrop.style.display = 'block'
    })
}

backdrop.addEventListener('click', closeModal)
modalCloseBtn.addEventListener('click', closeModal)

function closeModal() {
    backdrop.style.display = 'none'
    modal.style.display = 'none'
}