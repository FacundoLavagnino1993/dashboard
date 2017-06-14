(()=>{
    'use strict';
    angular
        .module('filters')
        .component('filterByState',{
            controller:filterByStateController,
            bindings: {
                filters: '<',
                works:'<',
                tasksFiltered:'<'
            },
            require:{
                WorksRootController : '^worksRoot'
            },
            templateUrl: 'works/filters/filterByState/filterByState.html'
        });

        function filterByStateController(){

        }
})();