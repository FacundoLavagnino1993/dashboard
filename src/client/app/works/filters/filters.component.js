(()=>{
    'use strict';
    angular
        .module('filters')
        .component('filters',{
            controller: filterController,
            bindings:{
              filters:'<'
            },
            templateUrl: 'works/filters/filters.html',
        });

        function filterController() {

        }
})();