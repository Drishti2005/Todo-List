let btn=document.querySelector('button');
let ul=document.querySelector('ul');
let inp=document.querySelector('input');

btn.addEventListener('click',function(event){
    let item=document.createElement("li");
    item.innerText=inp.value;

    let del=document.createElement('button');
    del.innerText="delete";
    del.classList.add("delete");

    item.appendChild(del);
    ul.appendChild(item);
    inp.value="";

})

// yaha par jo hum new buttons add ho rahe the unhe click karne apr delete nahi ho raha tha so to overcome this we will use event delegation

// let delbtns=document.querySelectorAll('.delete');
// for(delbtn of delbtns){
//     delbtn.addEventListener("click",function(){
//         let par=this.parentElement;
//         par.remove();
//     })
// }

//event delegation--->Bubbling
ul.addEventListener('click',function(event){
   if(event.target.nodeName=="BUTTON"){
    let ListItem=event.target.parentElement;
    ListItem.remove();
   }
})