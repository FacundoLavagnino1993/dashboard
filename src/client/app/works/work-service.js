//const request = require('request');

(function(){
    'use strict';
     angular
         .module('works')
         .service('workService', workService);


     function workService($http) {

         this.getWorks = function () {

             return $http.get('/workList')
                 .then(function (res){
                     return res;
                 }, function (err){
                     return err;
                 });

         }
     }
})();