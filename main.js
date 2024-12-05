let form = document.querySelector("form");
let select = document.querySelector("select");
let input = document.querySelector("input");
let ul = document.querySelector("ul");





const feedback = (e) => {
    e.preventDefault(); 

    let li = document.createElement('li'); 
    let h1 = document.createElement("h1"); 
    let p = document.createElement("p");
    let dltbtn = document.createElement('button'); 
      
    li.innerText = "Rating :"+ select.value;
    p.innerText  = "Review : " + input.value;
    dltbtn.innerText = "delete";

    li.appendChild (h1);
    li.appendChild (p);
    li.appendChild (dltbtn);
   li.className =" list-group-item"
   dltbtn.className = "btn btn-sm btn-danger float-end"
   ul.appendChild (li)
    // console.log(li);
    
     if(select.value <= 1){
        li.style.backgroundColor = "red"
     } else if(select.value <= 2){
        li.style.backgroundColor = "yellow"

     }else if(select.value <= 3){
          li.style.backgroundColor = "green"
     }else if(select.value <= 4){
          li.style.backgroundColor = "grey"
     }else if(select.value <= 5){
          li.style.backgroundColor = "blue"
     }


     form.reset()
}


form.addEventListener("submit", feedback);


const removefeedback = (e)=> {
 if(e.target.className.includes("btn-danger float-end")
)
if(window.confirm("Are you sure")){
    ul.removeChild (e.target.parentElement)
}    
};


ul.addEventListener("click",removefeedback)

