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
                     return res.data;
                 }, function (err){
                     return err;
                 });
         };

        /* this.releaseTasksService = function(data){
             return $http.put('/release',data)
                 .then(function (res){
                     return res.data;
                 }, function (err){
                    return err;
             })
         };*/

     }
})();