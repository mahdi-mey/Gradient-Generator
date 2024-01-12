const colorInputOne = document.querySelector('#color-a')
const colorInputTwo = document.querySelector('#color-b')
const arrowButtons = document.querySelectorAll('.buttons button')
const resultArea = document.querySelector('#copy')
const codeContainer = document.querySelector('.code')

let currentDirection = 'to right'

// this fnuction coppies gradient code
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

    resultArea.innerText = cssCode
    document.body.style.cssText += cssCode
}

function setDirection(datasetValue, targetElem){
    for(let items of arrowButtons){
        items.classList.remove('active')
    }

    targetElem.classList.add('active')

    currentDirection = datasetValue
    console.log(currentDirection);
}

arrowButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        console.log(e.target);
        let datasetValue = e.target.dataset.direction
        setDirection(datasetValue, e.target)
        generateCssCode()
    })
})

colorInputOne.addEventListener('input', generateCssCode)
colorInputTwo.addEventListener('input', generateCssCode)

generateCssCode()