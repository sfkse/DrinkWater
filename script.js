
let cups = document.querySelectorAll('.cup')
let remainedLiters = document.querySelector('#liters')
let remainedSection = document.querySelector('.remained')
let percentage = document.querySelector('.percentage')

cups.forEach((item, idx) => {


    item.addEventListener('click', () => {

        count(idx)

        // console.log(document.querySelectorAll('.cup')[idx])
        function count(idx) {

            cups.forEach((item, idx2) => {
                if (idx2 <= idx) {

                    item.classList.add('full')
                    percentage.textContent = (100 / 8) * idx + '%'
                    percentage.style.height = `${(100 / 8) * idx}%`
                    remainedLiters.textContent = 2 - (1 / 4) * idx + 'L'
                    remained.style.height = `${2 - (1 / 4) * idx}%`


                    console.log(percentage.textContent)
                } else {
                    item.classList.remove('full')
                }

            })


        }
    })
})