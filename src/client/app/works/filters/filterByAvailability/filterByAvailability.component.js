(()=>{
    'use strict';
    angular
        .module('filters')
        .component('filterByAvailability',{
            controller:filterByAvailabilityController,
            bindings: {
                filters: '<',
                works:'<',
                tasksFiltered:'<'
            },
            require:{
                WorksRootController : '^worksRoot'
            },
            templateUrl: 'works/filters/filterByAvailability/filterByAvailability.html'
        });

    function filterByAvailabilityController(){

    }
})();