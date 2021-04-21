function add_to_cart_detailed() {
    //var x  = document.getElementById("productImage")[0].getAttribute("src");
    var productImgLink = getUrlVars()["name"];

    // var imagePosition = $(this).parent().index + 1;
    // var productImgLink = document.getElementsByClassName('card')[imagePosition];


    var itemCart = localStorage.itemCart;

    //Check if there is an array in localStorage
    var itemCart = itemCart ? itemCart.split(',') : [] ;
  
    itemCart.push(productImgLink);

    localStorage.setItem('itemCart', itemCart.toString());
}

function add_to_cart(name) {
    var itemCart = localStorage.itemCart;

    //Check if there is an array in localStorage
    var itemCart = itemCart ? itemCart.split(',') : [] ;
  
    itemCart.push(name);

    localStorage.setItem('itemCart', itemCart.toString());
}

function remove_from_local(name) {
	var itemCart = localStorage.itemCart;

    //Check if there is an array in localStorage
    var itemCart = itemCart ? itemCart.split(',') : [] ;
  
    itemCart = itemCart.filter(e => e !== name)
    //itemCart.splice(itemCart.indexOf('name'), 1);

    localStorage.setItem('itemCart', itemCart.toString());
	
}

function checkout() {
    var itemCart = localStorage.itemCart;

    var itemCart = [ ];

    localStorage.setItem('itemCart', itemCart.toString());
}

function calculate_total(data) {
    var itemCart = localStorage.itemCart;

    var itemCart = itemCart ? itemCart.split(',') : [] ;

    var total = 0;

    data.forEach(p => {
        itemCart.forEach(basketP => {
            if (basketP === p.img) {
                var x = p.price.split(" ");
                total = total + x[0];
            }
        });
    });

}
// function delete_from_cart(index) {

//     var itemCart = localStorage.itemCart;

//     //Check if there is an array in localStorage
//     var itemCart = itemCart ? itemCart.split(',') : [] ;
  
//     itemCart.forEach(product => {
//         if (product === ) //her skal indsættes reference til element i local storage
//     });
    

//     localStorage.setItem('itemCart', itemCart.toString());
// }

