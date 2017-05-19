(function(){
    'use strict';
    angular
        .module('works')
        .component('workItem',{
            bindings:{
                item : '<'
            },
            templateUrl: "works/work-list/work-item/work-item.html"
        });


})();