(()=>{
    'use strict';
    angular
        .module('filters')
        .component('filterByState',{
            controller:filterByStateController,
            bindings: {
                works:'<'
            },
            require:{
                FiltersController : '^filters'
            },
            templateUrl: 'works/filters/filterByState/filterByState.html'
        });

        function filterByStateController(){

            let self = this;

            this.filterState = (status)=> {

                self.FiltersController.setValues('state',status);

            }

        }
})();