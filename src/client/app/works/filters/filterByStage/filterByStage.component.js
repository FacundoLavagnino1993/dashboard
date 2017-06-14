(()=>{
    'use strict';
    angular
        .module('filters')
        .component('filterByStage',{
            controller:filterByStageController,
            bindings: {
                filters: '<',
                works:'<',
                tasksFiltered:'<'
            },
            require:{
                WorksRootController : '^worksRoot'
            },
            templateUrl: 'works/filters/filterByStage/filterByStage.html'
        });

    function filterByStageController(){

    }
})();