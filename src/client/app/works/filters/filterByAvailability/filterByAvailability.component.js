(()=>{
    'use strict';
    angular
        .module('filters')
        .component('filterByAvailability',{
            controller:filterByAvailabilityController,
            bindings: {
                works:'<',
                tasksFiltered:'<'
            },
            require:{
                WorksRootController : '^worksRoot',
                FiltersController : '^filters'
            },
            templateUrl: 'works/filters/filterByAvailability/filterByAvailability.html'
        });

    function filterByAvailabilityController(){

        let self = this;

        this.filterAvailability = (availability)=>{

            let tasks;

            if(availability === ''){
                tasks = self.works.body;
            }else{
                tasks = self.works.body.filter(function (item) {
                    if (item.state.type.toLowerCase().indexOf(availability.toLowerCase()) != -1)
                        return item;
                });
            }

            self.FiltersController.sendTasks(tasks,'availability');

        }
    }
})();