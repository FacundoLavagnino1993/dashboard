(function(){
    'use strict';
    angular
        .module('works')
        .component('workList',{
            controller: listController,
            bindings:{
              works : '<',
              itemReserve : '&',
              filters : '<'
            },
            templateUrl: "works/work-list/work-list.html"
        });

    function listController() {


        this.itemIsEmpty = function (item){
            if(!(item)){
                item = "-";
                return item;
            }
            return item;
        };

    }

})();