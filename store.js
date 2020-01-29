function storeController (scope,http) {
 var ctrl = this


   ctrl.cartItems = []

 
}


angular.module('myApp').component('store', {
  templateUrl: 'store.html',
  bindings: {
     name: '='
    },
   controller:['$scope',"$http",storeController]
  });