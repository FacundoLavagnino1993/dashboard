(()=>{
    angular
        .module('filters')
        .component('filterById',{
            bindings:{
                filters : '<',
            },
            templateUrl:'works/filters/filterById/filterById.html'
        })
        .filter('filterById',()=>{
            return (works,_id)=>{
                if(works){
                    return works.filter(function(item){
                        return item.cart.cart_id.toLowerCase().indexOf(_id.toLowerCase()) != -1;
                    })
                }
            }
    });


})();