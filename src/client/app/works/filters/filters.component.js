(()=>{
    'use strict';
    angular
        .module('filters')
        .component('filters',{
            bindings:{
              filters:'<'
            },
            templateUrl: 'works/filters/filters.html',
        });
})();