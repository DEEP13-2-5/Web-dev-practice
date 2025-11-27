let par1 =document.createElement('p');
par1.innerText="hey, I'm Red!";
document.querySelector('body').append(par1);
par1.classList.add('red');

let h3 =document.createElement('h3');
h3.innerText="hey, I'm blue h3";
document.querySelector('body').append(h3);
h3.classList.add('blue');

let div=document.createElement('div');
let h1 =document.createElement('h1');
let par2 =document.createElement('p2');
h1.innerText="hey, I'm in a div";
par2.innerText="me too...";

div.append(h1);
div.append(par2);
div.classList.add("box");
document.querySelector('body').append(div);

