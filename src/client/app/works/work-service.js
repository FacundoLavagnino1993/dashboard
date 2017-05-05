(function(){
    'use strict';
     angular
         .module('works')
         .service('workService', workService);

     workService.$inject = ['$http'];

     function workService($http){

        this.getWorks = getWorks;

         function getWorks() {
             return $http.post('http://apidv.almundo.it:8080/api/tasques/tasks',
                 {
                    headers: {
                        'X-Apikey' : '5512c8d59932b3da984cc7de'
                    }

                 }).then(function (res){
                        return res.data;
                }, function (err){
                 console.log('error' + err.message());
             });
         }


     }
})();