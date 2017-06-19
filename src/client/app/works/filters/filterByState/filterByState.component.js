(()=>{
    'use strict';
    angular
        .module('filters')
        .component('filterByState',{
            controller:filterByStateController,
            bindings: {
                works:'<',
                tasksFiltered:'<'
            },
            require:{
                WorksRootController : '^worksRoot',
                FiltersController : '^filters'
            },
            templateUrl: 'works/filters/filterByState/filterByState.html'
        });

        function filterByStateController(){

            let self = this;

            this.filterState = (status)=>{
                console.log(self.tasksFiltered.length);
                let tasks;
                if(status === ''){
                    tasks = self.works.body;
                }else{
                     tasks = self.works.body.filter(function (item) {
                        if (item.cart.status.toLowerCase().indexOf(status.toLowerCase()) != -1)
                            return item;
                    });
                }
                    self.FiltersController.sendTasks(tasks,'state');

            }
        }
})();