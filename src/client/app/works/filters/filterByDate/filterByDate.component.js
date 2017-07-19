(()=>{
    'use strict';
    angular
        .module('filters')
        .component('filterByDate',{
            controller:filterByDateController,
            bindings: {
                works:'<'
            },
            require:{
                FiltersController : '^filters'
            },
            templateUrl: 'works/filters/filterByDate/filterByDate.html'
        });

    function filterByDateController(){
        let self = this;
        let _from = null;
        let _to = moment()._d;

        this.filterByDate = ()=>{


            let date = {
                _from,
                _to
            };

            self.FiltersController.setValues('date',date);

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