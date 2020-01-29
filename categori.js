    function categoriController   ()  {
 
    var ctrl = this;
     
    ctrl.categoris = [
        "10","20","30","40","50"
    ]
    
    ctrl.categorisItems = [
        "Tweenty","Therty","fourty","fifty" ]
        
        console.log(ctrl.categoris )

    ctrl.handelCategori = (cat) => {

        var index =  ctrl.categoris.indexOf(cat)

        ctrl.categoriChoce = ctrl.categoris[index]


         ctrl.startCount = ctrl.categoriChoce - 10
    
         ctrl.items = []


         for (var i = ctrl.startCount; i  <= ctrl.categoriChoce;i++){

            ctrl.items.push(i)
          } 



    }


}


angular.module("myApp").component("categori",{
    templateUrl: "categori.html",
 bindings: {
    cartItems: "="
 },
 controller: [categoriController]

})