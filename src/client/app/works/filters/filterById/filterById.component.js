(()=> {
    'use strict';
    angular
        .module('filters')
        .component('filterById', {
            controller: filterByIdController,
            bindings: {
                works:'<',
                tasksFiltered:'<'
            },
            require:{
                WorksRootController : '^worksRoot',
                FiltersController : '^filters'
            },
            templateUrl: 'works/filters/filterById/filterById.html'
        });

        function filterByIdController(){
            let self = this;

            this.filtrarId = (id)=>{

                let tasks= self.works.body.filter(function (item) {
                    if (item.cart.cart_id.toLowerCase().indexOf(id.toLowerCase()) != -1)
                        return item;
                });

                self.FiltersController.sendTasks(tasks,'id');


            };


        }

})();