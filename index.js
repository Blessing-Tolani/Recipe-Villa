
form.onsubmit = async (e) => {
    document.getElementById("animation").style.display = "flex";
    document.getElementById("grid-container").style.display = "none";
    let form = document.getElementById("form");
    let Value = document.getElementById("ingredient").value;
    console.log(Value);
        e.preventDefault();
   
    url = `https://api.edamam.com/search?&q=${Value}&app_id=8b4ef1da&app_key=f968c04c9ce311035a2bf8051900eaa1&from=0&to=100`;
    
    let response = await fetch(url);
    let result = await response.json();
    console.log(result);

    if(result.hits == ""||null){
        document.getElementById("animation").style.display = "none";
        document.getElementById("grid-container").style.display = "grid";
        alert("No Recipe Found!" );
        window.location.href = window.location.href;
    }
    
    else{
        document.getElementById("bee").style.display = "block";
        document.getElementById("grid-container").style.display = "grid";
        document.getElementById("animation").style.display = "none";
        document.getElementById("text2").style.display = "none";
        document.body.style.backgroundColor = "#560319";
        let hitslength = result.hits.length;
        for (let i = 0; i < hitslength; i++){
            let label = result.hits[i].recipe.label;
            let imageLink = result.hits[i].recipe.image;
            let link = result.hits[i].recipe.shareAs;
            let sum = "come" + `${i}`;
            let a = "cont" + `${i}`;
            let name = result.q + sum;
            let sum2 = a;

            let div = document.createElement('div');
            let div2 = document.createElement('div');
            let alink = document.createElement('a');
            let image = document.createElement('img');
            let text = document.createElement('p');
            image.src = imageLink;

            image.setAttribute("class", "picture")
            alink.setAttribute("href", link);
            alink.setAttribute("target", "_blank");
            alink.setAttribute("id", name);
         
            div.setAttribute("id", sum);
            div.setAttribute("class", "come")
           
            div2.setAttribute("id", sum2);
            text.innerHTML = label;

            document.getElementById('foodList').appendChild(alink);
            document.getElementById(name).appendChild(div);
            document.getElementById(sum).appendChild(image);
            document.getElementById(sum).appendChild(div2);
            document.getElementById(sum2).appendChild(text);
            
        }
       
    }
}

function returnHome(){
    window.location.href = window.location.href;
    document.getElementById("bee").style.display = "none";
}


