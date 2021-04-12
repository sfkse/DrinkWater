
let cups = document.querySelectorAll('.cup-small')
let remainedLiters = document.querySelector('#liters')
let remainedSection = document.querySelector('.remained')
let percentage = document.querySelector('.percentage')

updateBigCup()
cups.forEach((item, idx) => {


    item.addEventListener('click', () => highliht(idx))


})

function highliht(idx) {
    if (cups[idx].classList.contains('full') && !cups[idx].nextElementSibling.classList.contains('full')) {
        idx--
    }
    cups.forEach((clickedItem, index) => {



        if (index <= idx) {

            clickedItem.classList.add('full')
        }

        else {

            clickedItem.classList.remove('full')
        }

    })

    updateBigCup()
}

function updateBigCup() {

    const fullCups = document.querySelectorAll('.cup-small.full').length
    const totalCups = cups.length

    if (fullCups === 0) {
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0

    } else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * 330}px`
        percentage.innerText = `${fullCups / totalCups * 100}%`
    }

    if (fullCups === totalCups) {
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    } else {
        remained.style.visibility = 'visible'
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`
    }
}


