console.log('Client side javascript page loaded!')
/*
fetch('http://puzlle.mead.io/puzzle').then((response) =>{
    response.json().then((data)=>{
        console.log(data)
    })
})*/

//real weather app



const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message_1')
const messageTwo = document.querySelector('#message_2')

//messageOne.textContent = 'Hai default'


weatherForm.addEventListener('submit', (e) =>{
    e.preventDefault()
    const location = search.value

    messageOne.textContent='Loading...'
    messageTwo.textContent= ''



    fetch('http://localhost:3000/weather?address='+location).then((response)=>{
            response.json().then((data) => {
                if(data.error){
                    messageOne.textContent = data.error
                    
                }
                else{
                    messageOne.textContent = data.location
                    messageTwo.textContent = data.forecast
                }
            })
    })
})