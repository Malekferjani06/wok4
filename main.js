var jaime=document.querySelectorAll('.fa')
var plusbtn=document.querySelectorAll('.plus-btn')
var quantity=document.querySelectorAll('.Quant')
var minusbtn=document.querySelectorAll('.minus-btn')
var deletec=document.querySelectorAll('.delete')
for(let i=0;i<jaime.length;i++){
    jaime[i].addEventListener('click',function(){
       if(jaime[i].style.color==='rgb(226, 192, 209)'){
        jaime[i].style.color='red'
       }else{
        jaime[i].style.color='rgb(226, 192, 209'
       }

    })
}

for(let i=0;i<plusbtn.length;i++){
    plusbtn[i].addEventListener('click',function(){
        quantity[i].value=Number(quantity[i].value)+1
        totalprice()
    })
}
 
for(let i=0;i<minusbtn.length;i++){
    minusbtn[i].addEventListener('click',function(){
        if(Number(quantity[i].value)>1){
            quantity[i].value=Number(quantity[i].value)-1
            totalprice()
        } 
    })
}


for(let i=0;i<deletec.length;i++){
    deletec[i].addEventListener('click',function(){
        deletec[i].parentNode.remove()
        totalprice()
    })
}

function totalprice(){
    var price=document.querySelectorAll('.price')
    var sum=0
    for(let i=0;i<price.length;i++){
    sum=quantity[i].value*price[i].innerHTML+sum
}
document.getElementById('finalPrice').value=sum
}
