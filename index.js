let more = document.querySelector(".more");
let minus=document.querySelector(".minus");
let times=document.querySelector(".times");
let items = document.querySelectorAll(".item");
let equal = document.querySelector(".equal");

let first_item = document.querySelector(".first-item");
var varable ;
let result;

//this methode help us to click in the specific element
items.forEach(element => {
    //console.log('item is :',element.textContent)
    element?.addEventListener("click",()=>{
        varable = element.textContent;
        first_item.innerText += varable+"",
        console.log(`the ${varable} is clicked`)
        
        console.log("the first item infos :",first_item.textContent)
    })
    
    
});


equal?.addEventListener("click",()=>{
    var infos = first_item.textContent;
    console.log('infos is :',infos)
    
    try {
        result = infos.slice(1)
        console.log('result is :',result.slice(0,-1))
        var exp = eval(result.slice(0,-1))
        console.log('exp:',exp)
        first_item.innerText = '0'+exp;

        
    } catch (error) {
        console.log("erreur dans l'exprission",error)
    }

   
    /*for (let index = 0; index < infos.length; index++) {
        console.log('index element is :',infos[index])
        
    }*/
   
})

/*
console.log('the resultat is ',eval(first_item))
//more 
more?.addEventListener("click",()=>{
    console.log('the more is clicked');
})


minus?.addEventListener("click",()=>{
    console.log('the minus is clicked');
})


times?.addEventListener("click",()=>{
    console.log('the times is clicked');
})


divide?.addEventListener("click",()=>{
    console.log('the divide is clicked');
})
*/


