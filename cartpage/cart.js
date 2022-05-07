





// // <--------------------------------------------------- NAVRBAR  IMPORT STRAT HERE -------------------------------------------->

import {container} from "../components/navbar.js";

let box = document.querySelector("#srinivas-container");
box.innerHTML = container();


// // <--------------------------------------------------- NAVBAR IMPORT END HERE ------------------------------------------------>




// // <--------------------------------------------------- DATA FETCHING  STRAT HERE --------------------------------------------->




// // <--------------------------------------------------- DATA FETCHING  END HERE --------------------------------------------->




// // <--------------------------------------------------- APPENDING START HERE --------------------------------------------------->





// // <--------------------------------------------------- APPENDING END HERE ----------------------------------------------------->




// // <--------------------------------------------------- COUPON START HERE --------------------------------------------------->



// // <--------------------------------------------------- COUPON END HERE ----------------------------------------------------->





// <---------------------------------------------------coupon-------------------------------------------->

 
function discount(){
    event.preventDefault
   let coupon = document.querySelector("#discount").value ;

   if((coupon == "Masai30" )||(coupon == "masai30" )){

       
       


       var discop = Number(Math.round((total*30)/100))
       console.log(discop,"discount coupon")
     let ORDER_TO=  Math.ceil(ORDER_TOTAL - discop)

    var less =   document.querySelector("#Discount").innerText="-$"+ discop;
    var totaldis = document.querySelector("#MERCHANDISE_SUBTOTAL").innerText = "$"+  total;
    var ESTIMATEDdis = document.querySelector("#ESTIMATED").innerText ="$"+  ESTIMATED;
    var SALES_TAXdis = document.querySelector("#SALES_TAX").innerText ="$"+  SALES_TAX;
    var totaORDER_TOTALdis = document.querySelector("#ORDER_TOTAL").innerText ="$"+ ORDER_TO;
 
   

    swal({
        title: "Hurray!",
        text: " You Got 30% Discount on "+"\n"+"\n"+"     Merchandise   Subtotal",
        icon: "success",

      });

   }
 
       else{
           document.querySelector("#discount").value= null 
       sweetAlert("Invalid Coupon code", "Coupon code: Masai30"+"\n"+"   Coupon code: masai30", "error");
           SweetAlert.fire(
           'The Internet?',
           'That thing is still around?',
           'question',
           
           )
       
   }
   

}












function gotoPayment(){
   window.location.href="payment.html"
}
function Updatebag(){
   window.location.reload()
}



let products= [
   {
       id:1 ,
       image: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw9a65b2a6/hires/025144398.jpg?sh=400&q=75&yocs=o_s_",
       price1:"$112.00",
       price2:112.00 ,
       titel:"LIMITED EDITION",
       description: "Spring Gift Bundle",
       offer:"$40 Gift with $40 Purchase" ,

   },
   {
       id: 2,
       image: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwc0529211/hires/026439076.jpg?sh=471&yocs=o_s_",
       price1:"$16.50",
       price2:16.50 ,
       titel:"LAVENDER MINT TEA",
       description: "Moisturizing Body Lotion",
       offer:"Mix & Match: Buy 3, Get 3 Free or Buy 2, Get 1 Free",
   },
   {
       id:3 ,
       image: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw5518c3d6/hires/026353210.jpg?sh=471&yocs=o_s_",
       price1:"$15.50",
       price2:15.50 ,
       titel:"EUCALYPTUS SPEARMINT",
       description: "Moisturizing Body Lotion",
       offer:"Mix & Match: Buy 3, Get 3 Free or Buy 2, Get 1 Free",
   },
   {
       id: 4,
       image: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw5f145177/hires/026353220.jpg?sh=400&q=75&yocs=o_s_",
       price1:"$16.50",
       price2:16.50 ,
       titel:"Eucalyptus Spearmint",
       description: "Moisturizing Body Wash",
       offer:"Mix & Match: Buy 3, Get 3 Free or Buy 2, Get 1 Free",
   }

]
var cartData = JSON.parse(localStorage.getItem("cart"))||[];
var wishData= JSON.parse(localStorage.getItem("wish")) || [];  
var display= JSON.parse(localStorage.getItem("display")) || []; 


products.map(function(ele){
         let box =document.createElement("div");
         box.setAttribute("class","suggestion_box")

         let img = document.createElement("img")
         img.setAttribute("class","suggestion_img")
             img.src=ele.image;
             img.addEventListener("click",function(){
                  outLook()
             })
           let alltext = document.createElement("div")
               alltext.setAttribute("class","suggestion_alltext")
             
         let title = document.createElement("h4")
             title.innerText= ele.titel ;
             title.setAttribute("class","suggestion_title")
         
             let description= document.createElement("p")
             description.innerText= ele.description ;
             description.setAttribute("class","suggestion_description")

             let price= document.createElement("p")
             price.innerText= ele.price1 ;
             price.setAttribute("class","suggestion_price")

             let offer= document.createElement("p")
             offer.innerText= ele.offer ;
             offer.setAttribute("class","suggestion_offer")


         var btn = document.createElement("button")
             btn.innerText="🛒"
             btn.setAttribute("id","btn-cw")
             btn.addEventListener("click",function (){
                 addTocart(ele)
             });
         
         var btn2 = document.createElement("button")
         btn2.setAttribute("class","QUICKLOOK","trans")
           btn2.innerText="QUICKLOOK"
           btn2.addEventListener("click",function (){
               QUICKLOOK(ele)
             });
          
           
           
             alltext.append(title,description,price,offer)
          box.append(img,btn2,alltext,btn)
         document.querySelector(".suggestion").append(box)
     })

     products.map(function(ele){
         let box =document.createElement("div");
         box.setAttribute("class","suggestion_box")

         let img = document.createElement("img")
         img.setAttribute("class","suggestion_img")
             img.src=ele.image;
             img.addEventListener("click",function(){
                  outLook()
             })
           let alltext = document.createElement("div")
               alltext.setAttribute("class","suggestion_alltext")
             
         let title = document.createElement("h4")
             title.innerText= ele.titel ;
             title.setAttribute("class","suggestion_title")
         
             let description= document.createElement("p")
             description.innerText= ele.description ;
             description.setAttribute("class","suggestion_description")

             let price= document.createElement("p")
             price.innerText= ele.price1 ;
             price.setAttribute("class","suggestion_price")

             let offer= document.createElement("p")
             offer.innerText= ele.offer ;
             offer.setAttribute("class","suggestion_offer")


         var btn = document.createElement("button")
             btn.innerText="🛒"
             btn.setAttribute("id","btn-cw")
             btn.addEventListener("click",function (){
                 addTocart(ele)
             });
         
         var btn2 = document.createElement("button")
         btn2.setAttribute("class","QUICKLOOK","trans")
           btn2.innerText="QUICKLOOK"
           btn2.addEventListener("click",function (){
               QUICKLOOK(ele)
             });
          
           
           
             alltext.append(title,description,price,offer)
          box.append(img,btn2,alltext,btn)
         document.querySelector(".suggestion2").append(box)
     })




   

     function addTocart(ele){
         var products= JSON.parse(localStorage.getItem("cart")) || []; //cart
         console.log(ele)
         products.push(ele)
         localStorage.setItem("cart",JSON.stringify(products))
         window.location.reload()

     }



   //  <---------------------------------------------- mapinsidecart-------------------------------------->


   cartData.map(function (elem, index) {

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
   des.textContent = elem.description;
   let offer = document.createElement("p");
       offer.setAttribute("id","offer")
   offer.textContent = elem.offer;
   let promo = document.createElement("p");
       promo.setAttribute("id","promo")
   promo.textContent = "Promotional details";

   
   let btnwish = document.createElement("button")
           btnwish.setAttribute("class","cartwish")
             btnwish.innerText="❤️"+"Add to My Love-It list"
             btnwish.addEventListener("click",function (){
                   addToWishlist(elem)
               });

   // -------------td2--------------------


   var price = document.createElement("td");
   price.innerText = elem.price1;
   price.setAttribute("id","net") ;

   // -------------td3--------------------
   let qty = document.createElement("td");
   let qtydiv = document.createElement("div");
   qtydiv.setAttribute("id","qtydiv")

   
   

       // minus- start here------->


       var btnmins  = document.createElement("button")
           btnmins.setAttribute("id","minscount")
           btnmins.innerText= "−"
           btnmins.addEventListener("click",function(){
            displaycount.innerText= count--
       
     });
           

       var displaycount = document.createElement("div")
           displaycount.setAttribute("class","displayMe")
           displaycount.innerText =  1 ;
       
           

           var btnplus  =document.createElement("button")
           btnplus.setAttribute("id","pluscount")
           btnplus.innerText= "+"
           btnplus.addEventListener("click",function(){
            displaycount.innerText=count++;

        });
        


           // minus endshere-------------------------->

        let available = document.createElement("p");
        available.setAttribute("id","promo")
        available.textContent = "Available";
         

// -----------------------totalprice-------------------------------
           

   let grosstotal = document.createElement("td");

   let devsec= document.createElement("dic");
       devsec.setAttribute("id","devsec")
       grosstotal.setAttribute("id","gross") ;

       grosstotal.innerText= "$"+ elem.price2;

       console.log(grosstotal,displaycount.innerText) 



       let rbtn = document.createElement("button");
           rbtn.innerText = "X";
           rbtn.setAttribute("id","Remove-1")

           rbtn.addEventListener("click", function () {
             removeItem(elem, index);
           });

      
   //    appending--------------here------------------>

   qtydiv.append(btnmins,displaycount,btnplus)
   qty.append(qtydiv,available)
   items2.append(name,des,offer,promo,btnwish)
   items1.append(img,items2)
  devsec.append(grosstotal,rbtn)
   box.append(items1,price,qty,devsec );
   document.querySelector("#Cartbody").append(box);

   
 });


// <-----------------------------------------wishData-------------------------------------->

 

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
           
    var wishData= JSON.parse(localStorage.getItem("wish")) || []; //cart
    console.log(ele)
    wishData.push(ele)
    localStorage.setItem("wish",JSON.stringify(wishData))
    window.location.reload()
          
              
           

       }



function QUICKLOOK(ele){
        
    var products= JSON.parse(localStorage.getItem("display")) || []; //display
     console.log(ele)
     products.push(ele)
     localStorage.setItem("display",JSON.stringify(products))
     window.location.href="display.html"

}

function Updatebag(){
    window.location.reload();
}

       var count = 0;

       function countplus(_elem){
        
           count++ ;
           console.log(count,"c+");
       }
       function countless (_elem){
       
           count-- ;
           console.log(count,"c-");
       }





       //   Calculation---------------------------------------------------------------------------------->

 var total = cartData.reduce(function (sum, elem, index, arr) {
   return sum + Number(elem.price2);
 }, 0);


 var length = cartData.length; 
 console.log(length);
 let ESTIMATED = Number((length*2.50))
 console.log(ESTIMATED)
 let SALES_Total= Number((total)+(ESTIMATED))
 let SALES_TAX = Number(Math.round((SALES_Total*10)/100))
 console.log(SALES_TAX,"st")

 let ORDER_TOTAL = Number(total)+ Number(ESTIMATED)+ Number(SALES_TAX)
 console.log(ORDER_TOTAL,"or")
 let ORDER_= Number(total)+ Number(ESTIMATED)+ Number(SALES_TAX)
 console.log(ORDER_TOTAL,"or")
 
 




//  Display Calculation---------------------------------------------------------------------------------->
 var cartcoutup= document.querySelector("#Bagcount").innerText = `${length}`
 var totaldis = document.querySelector("#MERCHANDISE_SUBTOTAL").innerText = ` $${total}`;
 var ESTIMATEDdis = document.querySelector("#ESTIMATED").innerText = ` $${ESTIMATED}`;
 var SALES_TAXdis = document.querySelector("#SALES_TAX").innerText = ` $${SALES_TAX}`;
 var totaORDER_TOTALdis = document.querySelector("#ORDER_TOTAL").innerText = ` $${ORDER_}`;









// <-----------------------------------------paypal-------------------->



 
