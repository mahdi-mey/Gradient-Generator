const colorInputOne = document.querySelector('#color-a')
const colorInputTwo = document.querySelector('#color-b')
const arrowButtons = document.querySelectorAll('.buttons button')
const resultArea = document.querySelector('#copy')
const codeContainer = document.querySelector('.code')

let currentDirection = 'to right'

codeContainer.addEventListener('click', () => {
    let oldText = resultArea.innerHTML
    navigator.clipboard.writeText(resultArea.innerHTML)
    resultArea.innerHTML = 'Coppied!'
    setTimeout(() => {
        resultArea.innerHTML = oldText
    }, 3000);
})

function generateCssCode(event){
    let cssCode = `background: linear-gradient(${currentDirection}, ${colorInputOne.value}, ${colorInputTwo.value});`

    resultArea.value = cssCode
    document.body.style.cssText += cssCode
}

colorInputOne.addEventListener('input', generateCssCode)
colorInputTwo.addEventListener('input', generateCssCode)