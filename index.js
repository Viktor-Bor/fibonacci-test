const input = document.getElementById('fib-input')
const buttonCounter = document.getElementById('button-counter')
const fibonacciList = document.getElementById('fibonacci-list')

buttonCounter.addEventListener('click', () => fibonacci(input.value))

function fibonacci(num) {
    //initial state
    const result = [0, 1]

    for(let i = 2; i <= num; i++) {
            // console.log(i)
        const prevNum1 = result[i - 1];
        const prevNum2 = result[i - 2];
        result.push(prevNum1 + prevNum2)

        //reset input
        input.value = ''


        var j = 0;
        var idInterval = setInterval(() => {                
            if(j >= result.length) {                  
                clearInterval(idInterval);                  
            }else {
                const resultJ = result[j++];
                displayList(resultJ)
            }
        }, 3000)};

        
function displayList(result){
    const createListElement = document.createElement('li');
    createListElement.setAttribute('class', 'fibonacci-item');
    createListElement.innerHTML = result
    fibonacciList.appendChild(createListElement)
    }   
}
