function cartController (cartService) {

   var ctrl = this;
      ctrl.cart = cartService.cart;
     
    
      ctrl.handelCheckOut  = () => {
           
           ctrl.totalPrice = cartService.totalPrice(ctrl.tax)
               console.log(ctrl.tax)
        //  var totalPrice = ctrl.totalPrice

        //    ctrl.cart.forEach(ele => {
        //        totalPrice = ele.name * ele.count
        //    });

        //     ctrl.totalPrice = totalPrice 

      }
     



}


angular.module("myApp").component("cart",{
    templateUrl:"cart.html",
    bindings:{
        cartItems: "=" 
    },
    controller: ['cartService',cartController]
})