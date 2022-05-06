


// let url = "http://localhost:4000/Products";
// let sugession = document.getElementById ("sugession");
// import{getData,append}from "./fetchcart.js";




// getData(url).then((res) =>{
//     append(res,sugession);
// })





























// let getData = async () =>  {
//     try{

//         let res  = await fetch("http://localhost:4000/Products") ;
//         let data = await res.json() ;
//         console.log(data) ;

//     }catch(err){
//         console.log(err);
//     }
// }
// getData () ;

// let ProductsAppend =({product_name,product_type}) =>{
//     let suggestion = document.getElementById("sugession") ;

//     data.map((el) => {

//         let box =document.createElement("div");
//             box.setAttribute("class","suggestion_box")

//         let img = document.createElement("img")
//             img.setAttribute("class","suggestion_img")
//             img.src=ele.image;
//             img.addEventListener("click",function(){
//                  outLook()
//             })
//         let alltext = document.createElement("div")
//             alltext.setAttribute("class","suggestion_alltext")
            
//         let title = document.createElement("h4")
//             title.innerText= ele.product_name ;
//             title.setAttribute("class","suggestion_title")
        
//         let description= document.createElement("p")
//             description.innerText= ele.product_type ;
//             description.setAttribute("class","suggestion_description")

//         let price= document.createElement("p")
//             price.innerText= ele.price1 ;
//             price.setAttribute("class","suggestion_price")

//         let offer= document.createElement("p")
//             offer.innerText= ele.offer ;
//             offer.setAttribute("class","suggestion_offer")


//         var btn = document.createElement("button")
//             btn.innerText="🛒"
//             btn.setAttribute("id","btn-cw")
//             btn.addEventListener("click",function (){
//                 addTocart(ele)
//             });
        
//         var btn2 = document.createElement("button")
//             btn2.setAttribute("class","QUICKLOOK","trans")
//             btn2.innerText="QUICKLOOK"
//             btn2.addEventListener("click",function (){
//               QUICKLOOK(ele)
//             });
         
          
          
//             alltext.append(title,description,price,offer)
//          box.append(img,btn2,alltext,btn)
//         document.querySelector(".suggestion").append(box)
//     }) ;

// }

 
       
                    
    

