// advice-id
// advice
// dice-img

const adviceId = document.getElementById('advice-id');
const Advice_tip = document.querySelector('.advice')
const diceBtn = document.querySelector('.dice-img')

diceBtn.addEventListener('click', getAdvice)

function getAdvice() {

    fetch("https://api.adviceslip.com/advice")
        .then(response => {
            return  response.json();
        })
        .then((data) => {
            // console.log('data' , data)
            let Id_advice  = data.slip.id;
            adviceId.innerHTML = '# ' + Id_advice
            let Advice = data.slip.advice
            Advice_tip.innerHTML = '" ' + Advice + ' "'
        })
        .catch()
}

getAdvice()