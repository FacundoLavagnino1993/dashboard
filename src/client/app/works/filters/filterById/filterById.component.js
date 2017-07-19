(()=> {
    'use strict';
    angular
        .module('filters')
        .component('filterById', {
            controller: filterByIdController,
            bindings: {
                works:'<'
            },
            require:{
                FiltersController : '^filters'
            },
            templateUrl: 'works/filters/filterById/filterById.html'
        });

        function filterByIdController(){
            let self = this;
            this.filtrarId = (id)=>{

                self.FiltersController.setValues('id',id);

            };


        }

})();