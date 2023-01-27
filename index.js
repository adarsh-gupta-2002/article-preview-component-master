
const shareButton = document.querySelector("#share__image")

const shareBox = document.querySelector("#share__box")

shareButton.addEventListener('click' , () =>{
    shareBox.classList.toggle('hidden')
}) 