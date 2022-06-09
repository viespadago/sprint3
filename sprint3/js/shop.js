// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
   {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
    for(i=0; i<products.length; i++){
        if (products[i].id==id){
            cartList.push(products[i]);
        }
    }
    console.log(cartList);
}

// Exercise 2
function cleanCart() {
   /*cartList = [];
   printCart();
   console.log(cartList);*/
   cart = [];
   printCart();
   console.log(cart);
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    total=0;
    /*for(i=0; i<cartList.length; i++){
        total+=cartList[i].price;
    }*/
    for(i=0; i<cart.length; i++){
        total+=cart[i].price*cart[i].quantity;
    }
    console.log(total);
}

// Exercise 4
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    var found=0;
    cart = [];
    for(i=0; i<cartList.length; i++){
        for(j=0; j<cart.length; j++){
            if (cart[j].id==cartList[i].id){
                cart[j].quantity++;
                found=1;
            }
        }
        if (found==0){
            var productCart=cartList[i];
            productCart.quantity=1;
            cart.push(productCart);
        }
        found=0;
    }    
    console.log(cart);
}

// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    var subtotalWithDiscount=0;

     for(i=0; i<cart.length; i++){
        if (cart[i].id==1){
            if (cart[i].quantity>=3){
               subtotalWithDiscount= cart[i].quantity*cart[i].price*0.2;
            }
        }    
        if (cart[i].id==3){
            if (cart[i].quantity>=10){
               subtotalWithDiscount+= cart[i].quantity*cart[i].price*0.3;
            }
        }
    }
    console.log(subtotalWithDiscount);
    return subtotalWithDiscount;
}

// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    //generateCart();
    document.getElementById("cart_list").innerHTML ="";
    
    var subtotalWithDiscount=0;
    for(i=0; i<cart.length; i++){
        if (cart[i].id==1){
            if (cart[i].quantity>=3){
               subtotalWithDiscount= (cart[i].quantity*cart[i].price*0.8).toFixed(2)+" (-20%)";
            }
            else {subtotalWithDiscount= cart[i].quantity*cart[i].price;}
        }    
        else if (cart[i].id==3){
            if (cart[i].quantity>=10){
               subtotalWithDiscount= (cart[i].quantity*cart[i].price*0.7).toFixed(2)+" (-30%)";
            }
            else {subtotalWithDiscount= cart[i].quantity*cart[i].price;}
        }else {subtotalWithDiscount= cart[i].quantity*cart[i].price;}

        document.getElementById("cart_list").innerHTML += "<tr><th scope='row'>"+cart[i].name+"</th><td>$"+cart[i].price+"</th><td>"+cart[i].quantity+"</th><td>$"+subtotalWithDiscount+"</th>";
    }
    calculateTotal();
    total-=applyPromotionsCart();
    document.getElementById("total_price").innerHTML = total;
}


// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
    var found=0;
    for(i=0; i<products.length; i++){
        if (products[i].id==id){
            for(j=0; j<cart.length; j++){
                if (cart[j].id==products[i].id){
                    cart[j].quantity++;
                    found=1;
                }
            }
            if (found==0){
                var productCart=products[i];
                productCart.quantity=1;
                cart.push(products[i]);
            }
            found=0;
        }    
    }
    console.log(cart); 
}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array

    for(i=0; i<cart.length; i++){
        if (cart[i].id==id){
            if (cart[i].quantity==1){
                cart.splice(i, 1);
            }else{
                cart[i].quantity--;
            } 
        }    
    }
    console.log(cart); 
}

function open_modal(){
	console.log("Open Modal");
	printCart();
}