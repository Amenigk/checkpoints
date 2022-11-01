
var minus=document.getElementsByClassName("minus");
var plus=document.getElementsByClassName("plus");
var like=document.getElementsByClassName("like")

var unitPrice= document.getElementsByClassName("unitPrice")
var price= document.getElementsByClassName("price")
console.log( unitPrice)

function counter(event){
      
       var  bt= event.target
       console.log(bt)
       var div=bt.parentElement
       console.log(div)
       p=div.querySelector('p')
       
       if( bt.innerHTML==="+") {
       p.innerHTML++ ;
       var td=div.parentElement;
        var tr=td.parentElement;
        
       price.innerHTML = Number(p.innerHTML) * Number(unitPrice.innerHTML);
       console.log( unitPrice)
       console.log(price)
      }
    
    if( bt.innerHTML==="-" && Number(p.innerHTML)>0) 
    {p.innerHTML--}
 
 

}


function red_color(event){
  var  bt= event.target
  console.log(bt)
  var div=bt.parentElement
  console.log(div)
  i=div.querySelector('i');
  i.style.color="red"
}
  
  
for(i=0;i<plus.length;i++){
    plus[i].addEventListener('click',counter); 
    minus[i].addEventListener('click',counter);
    like[i].addEventListener('click',red_color);
    

}

  