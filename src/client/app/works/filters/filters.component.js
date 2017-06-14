(()=>{
    'use strict';
    angular
        .module('filters')
        .component('filters',{
            bindings:{
              filters:'<',
              works:'<',
              tasksFiltered:'<'
            },
            require:{
                WorksRootController : '^worksRoot'
            },
            templateUrl: 'works/filters/filters.html',
        });
})();