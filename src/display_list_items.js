
const listHtml = (result)=>
    `
    <img src="${result.url}" alt="image">
            <button id="comment-${result.id}">Comments</button>
    `


const appendListItem = (result)=>{
    const listItem = document.createElement('li');
    listItem.innerHTML = listHtml(result)
    listItem.className = 'centered-column'
    console.log(listItem)
    const displayItems = document.querySelector('#display-items')
    displayItems.append(listItem)
}

const displayItems=async ()=>{
    
   let {results} =  await (await fetch('https://pokeapi.co/api/v2/pokemon?limit=6&offset=50')).json();
   let count = 1;
   for (const result of results) {
    const data = await (await fetch(result.url)).json()
    result.url = data.sprites.other.dream_world.front_default;
    result.id = count++
    console.log(result)
    appendListItem(result)
   }

}

displayItems()