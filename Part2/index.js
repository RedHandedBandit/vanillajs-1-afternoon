const cardId = document.getElementById('card-id')
const cardStyle = document.getElementById('card-style')

console.log(cardId, cardStyle)

function setCard(){
    const card = document.getElementById(cardId.value)
    card.style.color = cardStyle.value
}