let getData = async (url) =>  {

        let res  = await fetch(url) ;
        let data = await res.json() ;
        console.log(data) ;
         return data ;
}

// {product_name,product_type,product_sales_price,product_tile_link,tile_image_wrapper_src}

let append =(data,sugession) =>{

    data.map((elem) => {

        let box =document.createElement("div");
            box.setAttribute("class","suggestion_box")

        let img = document.createElement("img")
            img.setAttribute("class","suggestion_img")
            img.src= elem.tile_image_wrapper_src ;
            img.addEventListener("click",function(){
                 outLook()
            })
        let alltext = document.createElement("div")
            alltext.setAttribute("class","suggestion_alltext")
            
        let title = document.createElement("h4")
            title.innerText=elem.product_name ;
            title.setAttribute("class","suggestion_title")
        
        let description= document.createElement("p")
            description.innerText= elem.product_type ;
            description.setAttribute("class","suggestion_description")

        let price= document.createElement("p")
            price.innerText= elem.product_sales_price;
            price.setAttribute("class","suggestion_price")

        let offer= document.createElement("p")
            offer.innerText= elem.product_tile_link;
            offer.setAttribute("class","suggestion_offer")


        var btn = document.createElement("button")
            btn.innerText="🛒"
            btn.setAttribute("id","btn-cw")
            btn.addEventListener("click",function (){
                addTocart(elem)
            });
        
        var btn2 = document.createElement("button")
            btn2.setAttribute("class","QUICKLOOK","trans")
            btn2.innerText="QUICKLOOK"
            btn2.addEventListener("click",function (){
              QUICKLOOK(elem)
            });
         
          
          
        //     alltext.append(title,description,price,offer)
        //      box.append(img,btn2,alltext,btn)
        //  sugession.append(box);
        sugession.append(title,description,price,offer,img,btn2,btn);
    }) ;

}

export {getData,append}