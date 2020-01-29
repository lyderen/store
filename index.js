// angular.module('myApp', )
//   .controller('MainCtrl', function MainCtrl($scope ) {
    
//     // console.log(cartService)
//   });

  angular.module('myApp', ['ngMaterial', 'ngMessages'])
                 .controller('MainCtrl',['$scope','cartService', function MainCtrl($scope,cartService) {
    this.hero = {
      name: 'Spawn'
    };
    $scope.cartService = cartService
  
  }]).factory('cartService', function() {
     var cart = []  
     var taxs = [1.17,1.15,1.19,1.13]
     var totalPrice = 0;     
     
     function calc (item)  {

      return cart.filter( num => num.name == item ).length
         
    }

    return {
        cart,

        clacItems: (item) => {
                    
                var count = calc(item)
                
                if(!count){

                    cart.push({name:item,count: 1})
                } else{
                      
                    cart.filter(ele => {
                        if(ele.name == item){
                            ele.count++
                        }
                    })

                }                

             return cart
        },
        totalPrice: (t) => {
             totalPrice = 0;

            cart.forEach(ele => {
                totalPrice += ele.name * ele.count
            });
             
               tax = taxs[t]
               
             return parseInt(totalPrice * tax);
        }

                   

        
    }
      
  });