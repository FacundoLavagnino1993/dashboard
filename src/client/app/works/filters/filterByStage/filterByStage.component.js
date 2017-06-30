(()=>{
    'use strict';
    angular
        .module('filters')
        .component('filterByStage',{
            controller:filterByStageController,
            bindings: {
                works:'<'
            },
            require:{
                WorksRootController : '^worksRoot',
                FiltersController : '^filters'
            },
            templateUrl: 'works/filters/filterByStage/filterByStage.html'
        });

    function filterByStageController(){

        let self = this;

        this.filterStage = (stage)=>{
            self.FiltersController.sendTasks('stage',stage);
        }
    }
})();