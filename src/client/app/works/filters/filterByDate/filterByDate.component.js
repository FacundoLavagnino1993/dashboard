(()=>{
    'use strict';
    angular
        .module('filters')
        .component('filterByDate',{
            controller:filterByDateController,
            bindings: {
                works:'<',
                tasksFiltered:'<'
            },
            require:{
                WorksRootController : '^worksRoot',
                FiltersController : '^filters'
            },
            templateUrl: 'works/filters/filterByDate/filterByDate.html'
        });

    function filterByDateController(){
        let self = this;
        let _from = null;
        let _to = null;

        this.filterByDate = ()=>{

            let tasks;

            if(_from === null || _to === null){

                tasks = self.works.body;
            }else{

                tasks = self.works.body.filter(function (item) {
                    if (moment(item.cart.creation_date) >= moment(_from) && moment(item.cart.creation_date) <= moment(_to))
                        return item;
                });

            }
            self.FiltersController.sendTasks(tasks,'date');

        };

        this.dateFrom = (from)=> {
            _from = from;
            self.filterByDate();
        };

        this.dateTo = (to)=>{
            _to = to;
            self.filterByDate();
        };
    }
})();