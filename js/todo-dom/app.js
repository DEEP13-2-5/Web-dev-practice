let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let input=document.querySelector("input");

btn.addEventListener("click",function()
{
let item=document.createElement("li");
item.innerText=input.value;


let delBtn=document.createElement("button");
delBtn.innerText="delete";
delBtn.classList.add("delete");

item.appendChild(delBtn);

ul.appendChild(item);
input.value="";
});

let delBtns=document.querySelectorAll(".delete");
for(delBtn of delBtns){
    delBtn.addEventListener("click",function(){
        let par=this.parentElement;
        console.log(par);
        par.remove();
    });
}
