const addNewListener = ()=>{
    const hearts = document.querySelectorAll('.heart');
   
    hearts.forEach(heart=>{
        heart.addEventListener('click',()=>{
            heart.classList.add('no-display')
            const id = heart.id.match(/\d+/)[0]
            if(heart.classList.contains('clicked')){
                const heartOff = document.querySelector(`#off-${id}`)
                heartOff.classList.remove('no-display')
                
            }else {
                const heartOn = document.querySelector(`#on-${id}`)

                heartOn.classList.remove('no-display')
                
            }
        })
    })

}

export default addNewListener;
