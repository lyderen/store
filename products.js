function  productsController  (cartService)  {

    var ctrl = this;
   
     
    ctrl.handelItem = (item) => {
  
       cartService.clacItems(item)
   
    }






}


angular.module("myApp").component("products" , {
    templateUrl:"products.html",
    bindings: {
        listItems: "=",
        cartItems: "="

 },
 controller: ['cartService',productsController]

})