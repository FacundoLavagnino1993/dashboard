(()=> {
    'use strict';
    angular
        .module('filters')
        .component('filterById', {
            controller: filterByIdController,
            bindings: {
                works:'<'
            },
            require:{
                WorksRootController : '^worksRoot',
                FiltersController : '^filters'
            },
            templateUrl: 'works/filters/filterById/filterById.html'
        });

        function filterByIdController(){
            let self = this;
            let tasks = [];
            this.filtrarId = (id)=>{

                self.FiltersController.sendTasks('id',id);

            };


        }

})();