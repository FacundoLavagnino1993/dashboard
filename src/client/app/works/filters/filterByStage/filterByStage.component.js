(()=>{
    'use strict';
    angular
        .module('filters')
        .component('filterByStage',{
            controller:filterByStageController,
            bindings: {
                works:'<',
                tasksFiltered:'<'
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
            let tasks;

            if(stage === ''){
                tasks = self.works.body;
            }else {

                tasks = self.works.body.filter(function (item) {
                    if (item.cart.stage.toLowerCase().indexOf(stage.toLowerCase()) != -1)
                        return item;
                });
            }

            self.FiltersController.sendTasks(tasks,'stage');
        }
    }
})();