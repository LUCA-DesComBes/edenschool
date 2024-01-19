
let response = await fetch("https://dummyjson.com/products/1") 
let responseAsJson = await response.json();
let products = responseAsJson;




console.log(responseAsJson);

    const app = document.getElementById('app');
    const article = document.createElement('article');
    const titles = document.createElement("h2");
    titles.textContent = products.title;
    article.appendChild(titles);

    const image = document.createElement("img");
    image.setAttribute("src", products.images[0])
    article.appendChild(image);
    
    image.addEventListener("click", () => {
        let detail  = document.getElementById("popup");
        if(!detail){
          detail = document.createElement("div");
          detail.setAttribute("id", "popup")
          let exitbutton = document.createElement("button");
          exitbutton.textContent = "X"
          exitbutton.addEventListener("click", () => {
              popup.style.display = "none"
          })
  
          let images = document.
          
          article.appendChild(detail)
          detail.appendChild(exitbutton)
        }
        detail.style.display = "flex"
    })

    const paragraphe = document.createElement("p");
    paragraphe.textContent = products.price + "€";
    article.appendChild(paragraphe);
    app.appendChild(article);
