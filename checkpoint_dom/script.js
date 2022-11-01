
var minus=document.getElementsByClassName("minus");
var plus=document.getElementsByClassName("plus");
var like=document.getElementsByClassName("like");
var price= document.getElementsByClassName("price")
var total=document.querySelector('#total')
var del=document.getElementsByClassName("delete")
var table=document.querySelector('table')
// var unitPrice= document.getElementsByClassName("unitPrice")


function counter(event){
      
       var  bt= event.target
       console.log(bt)
       var div=bt.parentElement
       console.log(div)
       p=div.querySelector('p')
       var qty=Number(p.innerHTML) ;
        if( bt.innerHTML==="+") {
         qty++ ;
         p.innerHTML = qty ;
         console.log(qty)
             }
    
    if( bt.innerHTML==="-" && Number(p.innerHTML)>0) 
    {p.innerHTML--}
 
    var td=div.parentElement;
    var tr=td.parentElement;
    var unitp=tr.querySelector(".unitPrice")
    console.log(unitp);

    var uprice= Number(unitp.innerHTML);
        console.log(uprice);
   var px= tr.querySelector(".price")
  console.log(px)
   px.innerHTML = qty* uprice;
    console.log(px.innerHTML)

  totall();

}
function remove(event){
  var  rbt= event.target
  console.log(rbt)
  var trbt=rbt.parentElement.parentElement.parentElement.parentElement
  var px= trbt.querySelector(".price")
  console.log(px)
  trbt.remove()
  px.innerHTML=0
  console.log(px.innerHTML)
  totall()
  
}



  function totall(){

    var tot= Number(total.innerHTML);
     console.log(price)
     var tot=0
     for (i=0; i<price.length;i++){
                 tot+=Number(price[i].innerHTML)}
                 total.innerHTML=Number(tot); 
 console.log(total)
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
    del[i].addEventListener('click',remove);

}

  