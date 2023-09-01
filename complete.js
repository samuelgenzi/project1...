first once button is clicked it takes what is in the text field 
* only if there is text in it
and adds










/*fetch (api)
   .then(res => res.json())
   .then(data => {
     const drinks = data.drinks;
     const drinkList = document.querySelector('#mar');
     drinks.forEach(drink => {
       drinkList.innerHTML +=  `
         <ul>
             <li>
              <div class='margret' >
               <h1>${drink.strDrink}</h1>
               <img src='${drink.strDrinkThumb}'>
               <button id='addRecepie(event, ${JSON.stringify(drink)})'>
                <li></li>
                </button>
               
              </div>
             </li>
         </ul>`;
     });
   });

   

  function addRecepie(e, drink){
    
    const options = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify({
        name: drink.strDrink,
        image: drink.strDrinkThumb,
      })
    }

    fetch ('http://localhost:3000/recepie', options)
    .then(res => res.json())
    .then(data => console.log(data))

  }/*