(()=>{
    'use strict';
    angular
        .module('filters')
        .component('filterByDate',{
            controller:filterByDateController,
            bindings: {
                filters: '<',
                works:'<',
                tasksFiltered:'<'
            },
            require:{
                WorksRootController : '^worksRoot'
            },
            templateUrl: 'works/filters/filterByDate/filterByDate.html'
        });

    function filterByDateController(){

    }
})();