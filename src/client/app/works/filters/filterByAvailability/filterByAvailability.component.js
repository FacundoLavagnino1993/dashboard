(()=>{
    'use strict';
    angular
        .module('filters')
        .component('filterByAvailability',{
            controller:filterByAvailabilityController,
            bindings: {
                works:'<'
            },
            require:{
                FiltersController : '^filters'
            },
            templateUrl: 'works/filters/filterByAvailability/filterByAvailability.html'
        });

    function filterByAvailabilityController(){

        let self = this;

        this.filterAvailability = (availability)=>{

            self.FiltersController.setValues('availability',availability);

        }
    }
})();