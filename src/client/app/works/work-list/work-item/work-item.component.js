(function(){
    'use strict';
    angular
        .module('works')
        .component('workItem',{
            bindigns:{
                item : '<'
            },
            templateUrl: "works/work-list/work-item/work-item.html"
        });
})();