const colorInputOne = document.querySelector('#color-a')
const colorInputTwo = document.querySelector('#color-b')
const arrowButtons = document.querySelectorAll('.buttons button')
const resultArea = document.querySelector('#copy')
const codeContainer = document.querySelector('.code')

codeContainer.addEventListener('click', () => {
    let oldText = resultArea.innerHTML
    navigator.clipboard.writeText(resultArea.innerHTML)
    resultArea.innerHTML = 'Coppied!'
    setTimeout(() => {
        resultArea.innerHTML = oldText
    }, 3000);
})