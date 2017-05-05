(function(){
    'use strict';
    angular
        .module('works')
        .component('workList',{
            bindings:{
              works : '<'
            },
            templateUrl: "works/work-list/work-list.html"
        });
})();