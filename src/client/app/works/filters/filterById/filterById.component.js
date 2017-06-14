(()=> {
    'use strict';
    angular
        .module('filters')
        .component('filterById', {
            controller: filterByIdController,
            bindings: {
                filters: '<',
                works:'<',
                tasksFiltered:'<'
            },
            require:{
                WorksRootController : '^worksRoot'
            },
            templateUrl: 'works/filters/filterById/filterById.html'
        });

        function filterByIdController(){
            let self = this;

            this.filtrarId = (id)=>{
                   self.tasksFiltered = [];
                   self.tasksFiltered = self.works.body.filter(function (item) {
                        if (item.cart.cart_id.toLowerCase().indexOf(id.toLowerCase()) != -1)
                            return item;

                    });

                    self.WorksRootController.renderTasks(self.tasksFiltered);
                    self.works.offset.size = Math.ceil(self.tasksFiltered.length/self.works.limit);



            };


        }

})();