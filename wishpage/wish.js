let wishData= JSON.parse(localStorage.getItem("wish")) || [];  

//  <-----------------------------------------wishData-------------------------------------->

  wishData.map(function (elem, index) {

let box = document.createElement("tr");
box.setAttribute("id","tr_box")
//    ------------1-----------
    var items1 = document.createElement("div")
        items1.setAttribute("id","conitem")

var img = document.createElement("img");
 

img.setAttribute("class","suggestion_img")
img.src = elem.image;
img.style.marginRight="10%"

var items2 = document.createElement("div")
        items2.setAttribute("id","item2")


let name = document.createElement("p");
    name.setAttribute("id","itemname")
name.textContent = elem.titel;
let des = document.createElement("p");
    des.setAttribute("id","itemname")
des.textContent =  + elem.description;

let price_div =document.createComment("div")

// pricr/offerprice// p-in stock 
var price = document.createElement("td");
price.innerText = elem.price1;
price.setAttribute("id","net") ;

let offer = document.createElement("p");
    offer.setAttribute("id","offer")
offer.textContent = elem.offer;

let btncart = document.createElement("button")
        btncart.setAttribute("class","cartwish")
          btncart.innerText="❤️"+"Add to My Love-It list"
          btncart.addEventListener("click",function (){
                addTocart(elem)
            });



     let available = document.createElement("p");

      

    let rbtn = document.createElement("button");
        rbtn.innerText = "X";
        rbtn.setAttribute("id","Remove-1")

        rbtn.addEventListener("click", function () {
          removeItem(elem, index);
        });

   
//    appending--------------here------------------>

qtydiv.append(btnmins,displaycount,btnplus)
qty.append(qtydiv,available)
items2.append(name,des,offer,promo,btncart)
items1.append(img,items2)
devsec.append(grosstotal,rbtn)
box.append(items1,price,qty,devsec );
document.querySelector("#Wishbody").append(box);


});

//   Remove function & data added for next page-------------------------------------------------------------->

  function removeItem(elem, index) {

    count-- ;
    console.log(elem, index);
    cartData.splice(index, 1);
    console.log(cartData);
    localStorage.setItem("cart", JSON.stringify(cartData));
    window.location.reload();
    
  }

  // wishlis add--------------------------------------------------------------------------------------------->

  function addToWishlist(ele){
            
            // alert("Product added Sucessfully Into The Cart 💛")
           
            console.log(ele)
            wishData.push(ele)
            btncart.innerText="Added to Love-It list"
            window.location.reload();
               
            

        }